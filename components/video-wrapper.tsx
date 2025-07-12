"use client";

import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { Volume1Icon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { useState, useRef, useEffect, ReactNode } from "react";
import { FaPlay as PlayIcon, FaPause as PauseIcon } from "react-icons/fa";

// Helper function to format time (e.g., 01:30)
const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) {
    return "00:00";
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

interface ControlButtonProps {
  onClick: () => void;
  icon: ReactNode;
  className?: string;
  ariaLabel: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  onClick,
  icon,
  className = "",
  ariaLabel,
}) => (
  <button
    onClick={onClick}
    className={`focus:outline-none flex items-center justify-center transition-all duration-200 text-white/70 hover:text-white size-8 hover:bg-white/30 rounded-lg ${className}`}
    aria-label={ariaLabel}
  >
    {icon}
  </button>
);

export const VideoWrapper = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 0 to 1
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true); // Initially show controls

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  // Toggle Play/Pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(console.error); // Added catch for potential errors
      } else {
        videoRef.current.pause();
      }
      // State updates are handled by event listeners
    }
  };

  // Handle Volume Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      // State updates handled by listeners
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (videoRef.current) {
      const currentlyMuted = videoRef.current.muted;
      videoRef.current.muted = !currentlyMuted;
      // If unmuting and volume was 0, set volume to a default (e.g., 0.5)
      if (currentlyMuted && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5; // This will trigger the volumechange listener
      }
    }
  };

  // Handle Progress Bar Change (Seeking)
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime); // Update immediately for better responsiveness
    }
  };

  // Toggle Fullscreen
  const toggleFullScreen = () => {
    const elem = containerRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen().catch(console.error); // Added catch
    }
  };

  // Update Time and Duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolume = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("durationchange", updateDuration); // Also listen for duration change
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("volumechange", handleVolume);
    video.addEventListener("ended", handlePause); // Set to paused when video ends

    if (video.readyState >= 1) {
      updateDuration();
    }
    if (!video.paused) {
      handlePlay();
    }
    handleVolume();

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("durationchange", updateDuration);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("volumechange", handleVolume);
      video.removeEventListener("ended", handlePause);
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, []); // Run only once on mount

  // Handle Fullscreen Change Event
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  // Show/Hide controls timeout
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
    if (isPlaying) {
      // Only set timeout if playing
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const handleMouseLeave = () => {
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
    if (isPlaying) {
      // Only hide if playing
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 500);
    }
  };

  const handleFocus = () => {
    setShowControls(true);
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
  };

  const handleBlur = () => {
    // Don't hide immediately on blur, let mouse leave handle it unless paused
    if (isPlaying && controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 500);
    }
  };

  // Volume Icon Logic
  const VolumeIcon =
    isMuted || volume === 0
      ? VolumeXIcon
      : volume < 0.5
      ? Volume1Icon
      : Volume2Icon;

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg group bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain block rounded-lg"
        onClick={togglePlay}
        onDoubleClick={toggleFullScreen}
        playsInline // Important for mobile
      />

      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease-in-out p-3 sm:p-4 ${
          showControls || !isPlaying
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          aria-label="Video progress slider"
          className="w-full h-1.5 mb-2 cursor-pointer appearance-none bg-white/30 rounded-full accent-indigo-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
        />

        <div className="flex justify-between items-center gap-2 sm:gap-4 text-white">
          <div className="flex items-center gap-1 sm:gap-3">
            <ControlButton
              onClick={togglePlay}
              icon={
                isPlaying ? <PauseIcon size={18} /> : <PlayIcon size={18} />
              }
              ariaLabel={isPlaying ? "Pause video" : "Play video"}
            />

            <div className="flex items-center gap-1 sm:gap-2 group/volume">
              <ControlButton
                onClick={toggleMute}
                icon={<VolumeIcon size={20} />}
                ariaLabel={isMuted ? "Unmute video" : "Mute video"}
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume slider"
                className="w-0 h-1 cursor-pointer appearance-none bg-white/30 rounded-full accent-indigo-500 opacity-0 transition-all duration-200 group-hover/volume:w-12 sm:group-hover/volume:w-16 group-hover/volume:opacity-100 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
              />
            </div>

            <span className="text-xs font-mono select-none ml-1 sm:ml-0">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <ControlButton
              onClick={toggleFullScreen}
              icon={
                isFullScreen ? (
                  <ExitFullScreenIcon width={20} height={20} />
                ) : (
                  <EnterFullScreenIcon width={20} height={20} />
                )
              }
              ariaLabel={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
