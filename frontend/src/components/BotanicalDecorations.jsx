import React from "react";

// Soft Pink Flower / Peony Stem SVG (Left Side Accent)
export function PinkFlowerStem({ className = "" }) {
  return (
    <svg
      className={`botanical-svg pink-flower-stem ${className}`}
      viewBox="0 0 160 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pinkPetal1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbcfe8" />
          <stop offset="60%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>
        <linearGradient id="pinkPetalSoft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde8f4" />
          <stop offset="70%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="roseBud" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fecdd3" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dcfce7" />
          <stop offset="50%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
        <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bbf7d0" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="stemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="50%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>

      <path
        d="M 60 380 Q 40 280 75 180 Q 95 110 70 20"
        stroke="url(#stemGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 65 240 Q 30 220 20 180"
        stroke="url(#stemGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 72 200 Q 110 170 125 130"
        stroke="url(#stemGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 62 300 C 35 300 25 270 15 265 C 25 285 45 315 62 300 Z"
        fill="url(#leafGrad1)"
        opacity="0.9"
      />
      <path
        d="M 63 300 C 90 290 105 275 115 265 C 100 290 80 305 63 300 Z"
        fill="url(#leafGrad2)"
        opacity="0.85"
      />
      <path
        d="M 70 220 C 100 215 115 195 130 185 C 110 210 90 225 70 220 Z"
        fill="url(#leafGrad1)"
        opacity="0.9"
      />
      <path
        d="M 60 170 C 35 155 25 135 15 125 C 30 150 48 172 60 170 Z"
        fill="url(#leafGrad2)"
        opacity="0.85"
      />

      <g transform="translate(68, 45)">
        <path
          d="M -30 -10 C -45 -40 -10 -55 0 -45 C 10 -55 45 -40 30 -10 C 40 20 10 35 0 25 C -10 35 -40 20 -30 -10 Z"
          fill="url(#pinkPetalSoft)"
          opacity="0.8"
        />
        <path
          d="M -25 -18 C -38 -38 -5 -48 2 -38 C 15 -48 38 -32 24 -8 C 32 15 5 28 -4 20 C -15 26 -32 10 -25 -18 Z"
          fill="url(#pinkPetal1)"
          opacity="0.9"
        />
        <path
          d="M -16 -22 C -28 -30 -5 -38 0 -30 C 8 -38 26 -25 15 -5 C 20 10 2 18 -4 14 C -12 18 -22 5 -16 -22 Z"
          fill="url(#pinkPetalSoft)"
        />
        <path
          d="M -10 -15 C -20 -20 0 -28 3 -20 C 12 -25 18 -12 10 0 C 12 10 0 12 -3 8 C -10 10 -15 0 -10 -15 Z"
          fill="url(#pinkPetal1)"
        />
        <ellipse cx="-1" cy="-8" rx="6" ry="7" fill="#f472b6" opacity="0.9" />
        <ellipse cx="0" cy="-6" rx="4" ry="4" fill="#fde8f4" />
      </g>

      <g transform="translate(20, 175)">
        <path
          d="M -8 8 C -18 -8 -8 -22 0 -25 C 8 -22 18 -8 8 8 C 4 14 -4 14 -8 8 Z"
          fill="url(#roseBud)"
        />
        <path
          d="M -10 12 Q -12 0 -2 -18"
          stroke="url(#leafGrad2)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 10 12 Q 12 0 2 -18"
          stroke="url(#leafGrad2)"
          strokeWidth="2"
          fill="none"
        />
        <path d="M -4 14 L 0 5 L 4 14 Z" fill="url(#leafGrad2)" />
      </g>

      <g transform="translate(126, 125)">
        <path
          d="M -18 -5 C -25 -25 0 -30 5 -20 C 15 -30 25 -15 18 -2 C 22 12 2 18 -3 12 C -10 15 -20 8 -18 -5 Z"
          fill="url(#pinkPetalSoft)"
        />
        <path
          d="M -10 -8 C -15 -18 0 -22 3 -15 C 10 -22 18 -10 12 0 C 14 8 0 12 -2 8 C -8 10 -12 2 -10 -8 Z"
          fill="url(#pinkPetal1)"
        />
        <circle cx="0" cy="-4" r="3" fill="#fce7f3" />
      </g>
    </svg>
  );
}

// Lavender Floral Stem SVG (Bottom Left & Right Accent)
export function LavenderStem({ className = "", flip = false }) {
  return (
    <svg
      className={`botanical-svg lavender-stem ${className} ${flip ? "flip-x" : ""}`}
      viewBox="0 0 150 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lavenderDeep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="60%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="lavenderLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e9d5ff" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="lavenderSoft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="100%" stopColor="#ddd6fe" />
        </linearGradient>

        <linearGradient id="lavLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="60%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
      </defs>

      <path
        d="M 60 320 Q 75 220 50 130 Q 38 70 55 10"
        stroke="url(#lavLeafGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 65 240 Q 100 180 105 100"
        stroke="url(#lavLeafGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M 62 280 C 25 270 15 250 10 240 C 25 260 45 275 62 280 Z"
        fill="url(#lavLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M 64 270 C 100 260 115 240 125 230 C 105 250 85 265 64 270 Z"
        fill="url(#lavLeafGrad)"
        opacity="0.85"
      />
      <path
        d="M 58 220 C 20 205 12 185 8 175 C 22 195 42 212 58 220 Z"
        fill="url(#lavLeafGrad)"
        opacity="0.9"
      />
      <path
        d="M 56 160 C 25 145 18 125 14 115 C 28 135 44 152 56 160 Z"
        fill="url(#lavLeafGrad)"
        opacity="0.85"
      />

      {[
        { cx: 55, cy: 15, rx: 6, ry: 10, fill: "url(#lavenderLight)", r: -15 },
        { cx: 50, cy: 22, rx: 7, ry: 11, fill: "url(#lavenderDeep)", r: 20 },
        { cx: 60, cy: 26, rx: 7, ry: 11, fill: "url(#lavenderSoft)", r: -25 },

        { cx: 46, cy: 38, rx: 8, ry: 13, fill: "url(#lavenderDeep)", r: 35 },
        { cx: 62, cy: 42, rx: 8, ry: 12, fill: "url(#lavenderLight)", r: -30 },
        { cx: 53, cy: 48, rx: 9, ry: 13, fill: "url(#lavenderSoft)", r: 10 },

        { cx: 44, cy: 62, rx: 9, ry: 14, fill: "url(#lavenderLight)", r: 40 },
        { cx: 64, cy: 66, rx: 9, ry: 14, fill: "url(#lavenderDeep)", r: -35 },
        { cx: 52, cy: 74, rx: 10, ry: 15, fill: "url(#lavenderLight)", r: 15 },

        { cx: 42, cy: 90, rx: 9, ry: 14, fill: "url(#lavenderDeep)", r: 45 },
        { cx: 65, cy: 94, rx: 10, ry: 14, fill: "url(#lavenderSoft)", r: -40 },
        { cx: 51, cy: 102, rx: 10, ry: 15, fill: "url(#lavenderLight)", r: 0 },

        { cx: 40, cy: 120, rx: 9, ry: 14, fill: "url(#lavenderLight)", r: 40 },
        { cx: 64, cy: 124, rx: 9, ry: 14, fill: "url(#lavenderDeep)", r: -35 },
        { cx: 52, cy: 132, rx: 9, ry: 14, fill: "url(#lavenderSoft)", r: 20 },
      ].map((bud, idx) => (
        <g key={`main-bud-${idx}`} transform={`rotate(${bud.r}, ${bud.cx}, ${bud.cy})`}>
          <ellipse
            cx={bud.cx}
            cy={bud.cy}
            rx={bud.rx}
            ry={bud.ry}
            fill={bud.fill}
          />
        </g>
      ))}

      {[
        { cx: 105, cy: 100, rx: 6, ry: 9, fill: "url(#lavenderLight)", r: 15 },
        { cx: 100, cy: 108, rx: 7, ry: 10, fill: "url(#lavenderDeep)", r: -20 },
        { cx: 110, cy: 114, rx: 7, ry: 10, fill: "url(#lavenderSoft)", r: 25 },

        { cx: 96, cy: 128, rx: 8, ry: 12, fill: "url(#lavenderDeep)", r: -30 },
        { cx: 112, cy: 134, rx: 8, ry: 12, fill: "url(#lavenderLight)", r: 35 },
        { cx: 102, cy: 142, rx: 8, ry: 12, fill: "url(#lavenderSoft)", r: -10 },

        { cx: 94, cy: 158, rx: 8, ry: 12, fill: "url(#lavenderLight)", r: -35 },
        { cx: 112, cy: 164, rx: 8, ry: 12, fill: "url(#lavenderDeep)", r: 40 },
      ].map((bud, idx) => (
        <g key={`sec-bud-${idx}`} transform={`rotate(${bud.r}, ${bud.cx}, ${bud.cy})`}>
          <ellipse
            cx={bud.cx}
            cy={bud.cy}
            rx={bud.rx}
            ry={bud.ry}
            fill={bud.fill}
          />
        </g>
      ))}
    </svg>
  );
}

// Delicate Leaf Branch SVG (Corner Decor)
export function LeafSprig({ className = "" }) {
  return (
    <svg
      className={`botanical-svg leaf-sprig ${className}`}
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 50 160 Q 30 100 50 10"
        stroke="#86efac"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M 48 130 Q 15 115 10 100 Q 30 110 48 130 Z" fill="#bbf7d0" opacity="0.85" />
      <path d="M 50 115 Q 85 100 90 85 Q 70 95 50 115 Z" fill="#86efac" opacity="0.9" />
      <path d="M 45 85 Q 15 70 12 55 Q 30 65 45 85 Z" fill="#a7f3d0" opacity="0.9" />
      <path d="M 47 70 Q 80 55 85 40 Q 65 50 47 70 Z" fill="#6ee7b7" opacity="0.85" />
      <path d="M 48 40 Q 25 25 22 12 Q 35 20 48 40 Z" fill="#bbf7d0" opacity="0.9" />
      <path d="M 50 20 Q 65 10 68 0 Q 55 5 50 20 Z" fill="#86efac" opacity="0.95" />
    </svg>
  );
}

// Small Blossom Flower Cluster SVG (Background Fill)
export function SmallFlowerCluster({ className = "" }) {
  return (
    <svg
      className={`botanical-svg small-flower-cluster ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(50, 45)">
        {/* Flower Petals */}
        <circle cx="0" cy="-18" r="12" fill="#fbcfe8" opacity="0.9" />
        <circle cx="17" cy="-6" r="12" fill="#f472b6" opacity="0.85" />
        <circle cx="11" cy="15" r="12" fill="#fbcfe8" opacity="0.9" />
        <circle cx="-11" cy="15" r="12" fill="#f472b6" opacity="0.85" />
        <circle cx="-17" cy="-6" r="12" fill="#fbcfe8" opacity="0.9" />
        {/* Center */}
        <circle cx="0" cy="0" r="8" fill="#fef08a" />
      </g>
      {/* Leaves */}
      <path d="M 20 70 Q 5 80 0 95 Q 20 90 35 75 Z" fill="#86efac" />
      <path d="M 80 70 Q 95 80 100 95 Q 80 90 65 75 Z" fill="#4ade80" />
    </svg>
  );
}

// Mini Lavender Sprig SVG (Background Fill)
export function MiniLavender({ className = "" }) {
  return (
    <svg
      className={`botanical-svg mini-lavender ${className}`}
      viewBox="0 0 70 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 35 140 L 35 20" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="35" cy="20" rx="6" ry="9" fill="#c084fc" />
      <ellipse cx="27" cy="32" rx="7" ry="10" fill="#a855f7" />
      <ellipse cx="43" cy="34" rx="7" ry="10" fill="#e9d5ff" />
      <ellipse cx="25" cy="50" rx="8" ry="11" fill="#9333ea" />
      <ellipse cx="45" cy="52" rx="8" ry="11" fill="#c084fc" />
      <ellipse cx="28" cy="68" rx="8" ry="11" fill="#a855f7" />
      <ellipse cx="42" cy="70" rx="8" ry="11" fill="#e9d5ff" />
      <path d="M 35 100 Q 15 95 10 90 Q 25 100 35 105 Z" fill="#86efac" />
      <path d="M 35 110 Q 55 105 60 100 Q 45 110 35 115 Z" fill="#4ade80" />
    </svg>
  );
}
