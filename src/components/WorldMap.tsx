"use client";

import { motion } from "framer-motion";

// Simplified world map SVG highlighting Canada and UAE offices plus our
// United States trade market.
// The viewBox is a standard equirectangular projection (-180 to 180 lng, -90 to 90 lat).
// Coordinates: Canada ~(-96, 60) → x≈588, y≈150; UAE ~(54, 24) → x≈1300, y≈370

const DOT_SIZE = 10;

type Location = {
  id: string;
  label: string;
  sublabel: string;
  cx: number;
  cy: number;
  kind: "office" | "market";
};

const locations: Location[] = [
  {
    id: "canada",
    label: "Canada Office",
    sublabel: "Ontario",
    // Approximate SVG position for Canada
    cx: 310,
    cy: 185,
    kind: "office",
  },
  {
    id: "usa",
    label: "United States",
    sublabel: "Trade Market",
    // Approximate SVG position for the continental US
    cx: 288,
    cy: 290,
    kind: "market",
  },
  {
    id: "uae",
    label: "UAE Office",
    sublabel: "United Arab Emirates",
    // Approximate SVG position for UAE
    cx: 1155,
    cy: 310,
    kind: "office",
  },
];

const OFFICE_COLOR = "#1E3A8A";
const MARKET_COLOR = "#198754";

export default function WorldMap() {
  return (
    <section className="bg-gray-soft py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">Global Operations</p>
          <h2 className="heading-xl mt-5 text-3xl text-forest md:text-4xl">
            Three markets. One integrated network.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
            Since 2001, our offices in Canada and the UAE — together with the
            suppliers and buyers we work with across the United States — have given
            partners access to a reliable, international recycling and
            commodity-trading network.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gray-line bg-white shadow-card">
          <svg
            viewBox="0 0 1440 720"
            className="h-auto w-full"
            aria-label="World map showing OneNas offices in Canada and the UAE and its trade market in the United States"
          >
            {/* Ocean background */}
            <rect width="1440" height="720" fill="#EBF5FF" />

            {/* Simplified continent shapes */}
            {/* North America */}
            <path
              d="M 120 80 L 420 70 L 480 110 L 490 180 L 440 240 L 460 300 L 400 370 L 340 400 L 280 380 L 200 340 L 150 280 L 110 200 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />
            {/* Greenland */}
            <path d="M 480 50 L 560 40 L 580 90 L 540 120 L 490 100 Z" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="1" />

            {/* South America */}
            <path
              d="M 300 420 L 380 410 L 420 460 L 430 560 L 390 640 L 340 660 L 300 620 L 270 540 L 260 460 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />

            {/* Europe */}
            <path
              d="M 660 80 L 780 70 L 820 110 L 800 160 L 740 180 L 680 170 L 640 130 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />

            {/* Africa */}
            <path
              d="M 680 200 L 800 190 L 860 260 L 870 380 L 840 500 L 780 570 L 720 560 L 660 490 L 640 380 L 650 260 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />

            {/* Middle East */}
            <path
              d="M 860 210 L 960 200 L 1000 250 L 980 310 L 920 330 L 860 300 L 840 260 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />

            {/* Asia */}
            <path
              d="M 960 70 L 1300 60 L 1360 120 L 1380 200 L 1320 280 L 1200 310 L 1100 300 L 1000 250 L 960 180 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />

            {/* India */}
            <path d="M 1060 280 L 1120 270 L 1140 350 L 1100 410 L 1050 380 L 1040 320 Z" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="1" />

            {/* Southeast Asia */}
            <path d="M 1240 280 L 1340 270 L 1360 330 L 1300 360 L 1240 340 Z" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="1" />

            {/* Australia */}
            <path
              d="M 1200 430 L 1360 420 L 1400 500 L 1360 580 L 1240 590 L 1180 530 L 1190 470 Z"
              fill="#D1FAE5"
              stroke="#A7F3D0"
              strokeWidth="1"
            />

            {/* Trade routes: Canada → UAE and United States → UAE */}
            <motion.path
              d="M 310 185 Q 730 130 1155 310"
              fill="none"
              stroke={OFFICE_COLOR}
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
              d="M 288 290 Q 720 420 1155 310"
              fill="none"
              stroke={MARKET_COLOR}
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.9 }}
            />

            {/* Location dots */}
            {locations.map((loc, i) => (
              <g key={loc.id}>
                {/* Pulse ring */}
                <motion.circle
                  cx={loc.cx}
                  cy={loc.cy}
                  r={DOT_SIZE + 6}
                  fill="none"
                  stroke={loc.kind === "office" ? OFFICE_COLOR : MARKET_COLOR}
                  strokeWidth="1.5"
                  initial={{ opacity: 0.6, scale: 1 }}
                  animate={{ opacity: 0, scale: 2.2 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.4 }}
                />
                {/* Dot */}
                <circle
                  cx={loc.cx}
                  cy={loc.cy}
                  r={DOT_SIZE}
                  fill={loc.kind === "office" ? OFFICE_COLOR : MARKET_COLOR}
                  stroke="white"
                  strokeWidth="2.5"
                />
                {/* Inner dot */}
                <circle cx={loc.cx} cy={loc.cy} r={4} fill="white" />

                {/* Label */}
                <text
                  x={loc.cx}
                  y={loc.cy - 18}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={loc.kind === "office" ? OFFICE_COLOR : MARKET_COLOR}
                  className="font-sans"
                >
                  {loc.label}
                </text>
                <text
                  x={loc.cx}
                  y={loc.cy - 6}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#4B5563"
                >
                  {loc.sublabel}
                </text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 border-t border-gray-line px-8 py-5">
            {locations.map((loc) => (
              <div key={loc.id} className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${
                    loc.kind === "office" ? "bg-royal" : "bg-emerald"
                  }`}
                />
                <span className="text-sm font-medium text-charcoal">{loc.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="h-px w-8 border-t-2 border-dashed border-royal opacity-60" />
              <span className="text-sm text-charcoal/60">Trade Route</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
