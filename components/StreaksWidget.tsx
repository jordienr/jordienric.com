"use client";
import React from "react";

type Props = {};

const StreaksWidget = (props: Props) => {
  const streaks = [
    [1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 1],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0],
  ];

  return (
    <div className="flex gap-3 rounded-2xl p-3 bg-gradient-to-br from-blue-400 to-blue-300">
      <div className="grid gap-1 border p-2 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100">
        <h2 className="text-black text-xs font-medium mb-1.5 mx-1">
          🏃 January 2024
        </h2>
        {streaks.map((streak, strIndex) => (
          <div className="flex gap-1" key={`str-${streak}`}>
            {streak.map((day, dayIndex) => (
              <div
                className={`w-3 h-3 rounded-sm border border-orange-400 ${
                  day ? "bg-orange-500/90" : "bg-orange-500/30"
                }`}
                key={`day-${day}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreaksWidget;
