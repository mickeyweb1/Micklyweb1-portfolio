import React from "react";
import "../index.css"

export function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="mq-container">
      <div aria-hidden className="mq-fade-left" />
      <div aria-hidden className="mq-fade-right" />
      <div className="mq-track">
        {loop.map((item, i) => (
          <span key={i} className="mq-item">
            {item}
            <span className="mq-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
