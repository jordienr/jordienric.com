"use client";
import React, { useState, useCallback, useEffect } from "react";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}

export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = "",
  style,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, handleClose]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ cursor: "zoom-in", ...style }}
        onClick={handleOpen}
        className="cursor-zoom-in"
        {...rest}
      />
      {isOpen && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
              borderRadius: 8,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          />
        </div>
      )}
    </>
  );
};
