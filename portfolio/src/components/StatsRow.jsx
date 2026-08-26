import React from "react";

const stats = [
  { value: "16", label: "Years young" },
  { value: "2+", label: "Years coding" },
  { value: "2", label: "Projects shipped" },
  { value: "100%", label: "Caffeine-fueled" },
];

export function StatsRow() {
  return (
    <div className="stats-grid">
      {stats.map((s) => (
        <div key={s.label} className="stats-box">
          <div className="stats-val">{s.value}</div>
          <div className="stats-lbl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
