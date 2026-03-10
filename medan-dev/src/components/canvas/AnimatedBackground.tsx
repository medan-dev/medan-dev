'use client';

import { motion } from 'framer-motion';

// --- Reusable animation variants ---
const floatSlow = (dx: number, dy: number, dur: number) => ({
  animate: {
    x: [0, dx, -dx * 0.6, dx * 0.3, 0],
    y: [0, dy, -dy * 0.4, dy * 0.7, 0],
  },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' as const },
});

const pulseSlow = (dur: number) => ({
  animate: { scale: [1, 1.04, 0.97, 1.02, 1] },
  transition: { duration: dur, repeat: Infinity, ease: 'easeInOut' as const },
});

// --- Dot Grid Pattern Component ---
function DotGrid({ cx, cy, cols, rows, gap, dotR, delay }: {
  cx: number; cy: number; cols: number; rows: number; gap: number; dotR: number; delay: number;
}) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={cx + c * gap}
          cy={cy + r * gap}
          r={dotR}
          fill="rgba(255,255,255,0.35)"
        />
      );
    }
  }
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {dots}
    </motion.g>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0a0a2e 0%, #080825 40%, #0d0b3a 100%)' }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ======= BLOB TOP-LEFT ======= */}
        <motion.path
          d="M-80,100 C50,-50 250,20 320,150 C390,280 300,420 180,450 C60,480 -100,400 -150,280 C-200,160 -120,100 -80,100 Z"
          fill="url(#blobGradient1)"
          {...floatSlow(20, 15, 18)}
          {...pulseSlow(22)}
        />

        {/* ======= BLOB BOTTOM-RIGHT ======= */}
        <motion.path
          d="M1100,620 C1200,550 1380,580 1450,680 C1520,780 1480,920 1350,950 C1220,980 1080,900 1050,800 C1020,700 1000,690 1100,620 Z"
          fill="url(#blobGradient2)"
          {...floatSlow(-25, -18, 20)}
          {...pulseSlow(24)}
        />

        {/* ======= SMALL ACCENT BLOB CENTER-RIGHT ======= */}
        <motion.path
          d="M1050,200 C1100,160 1180,190 1190,250 C1200,310 1140,340 1090,320 C1040,300 1000,240 1050,200 Z"
          fill="url(#blobGradient3)"
          {...floatSlow(12, -10, 15)}
          {...pulseSlow(18)}
        />

        {/* ======= WAVY LINE 1 (top area) ======= */}
        <motion.path
          d="M-50,200 C200,100 400,350 650,250 C900,150 1100,300 1500,180"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />

        {/* ======= WAVY LINE 2 (bottom area) ======= */}
        <motion.path
          d="M-50,700 C200,600 500,800 750,680 C1000,560 1200,750 1500,650"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 0.5, ease: 'easeInOut' }}
        />

        {/* ======= DIAGONAL LINE ======= */}
        <motion.line
          x1="1050" y1="280" x2="1300" y2="500"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* ======= LARGE CIRCLE (bottom-left) ======= */}
        <motion.circle
          cx="200" cy="720"
          r="150"
          fill="none"
          stroke="#ff6a00"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
        />

        {/* ======= SMALL CIRCLE (top-right) ======= */}
        <motion.circle
          cx="1250" cy="120"
          r="30"
          fill="none"
          stroke="#ff6a00"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.2 }}
        />

        {/* ======= SMALL FILLED CIRCLE ======= */}
        <motion.circle
          cx="1300" cy="580"
          r="8"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ======= X MARK 1 ======= */}
        <motion.g
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '320px 170px' }}
        >
          <line x1="312" y1="162" x2="328" y2="178" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="328" y1="162" x2="312" y2="178" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        </motion.g>

        {/* ======= X MARK 2 ======= */}
        <motion.g
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '1180px 340px' }}
        >
          <line x1="1172" y1="332" x2="1188" y2="348" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <line x1="1188" y1="332" x2="1172" y2="348" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        </motion.g>

        {/* ======= DOT GRIDS ======= */}
        <DotGrid cx={60} cy={400} cols={8} rows={8} gap={12} dotR={2} delay={0} />
        <DotGrid cx={580} cy={650} cols={10} rows={6} gap={14} dotR={2} delay={1} />
        <DotGrid cx={1100} cy={60} cols={6} rows={6} gap={10} dotR={1.5} delay={0.5} />

        {/* ======= DOTTED DIAGONAL (top-left) ======= */}
        <motion.line
          x1="30" y1="50" x2="280" y2="300"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, delay: 0.3 }}
        />

        {/* ======= GRADIENT DEFINITIONS ======= */}
        <defs>
          <linearGradient id="blobGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6a00" />
            <stop offset="50%" stopColor="#ff4500" />
            <stop offset="100%" stopColor="#8b2c1f" />
          </linearGradient>
          <linearGradient id="blobGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4500" />
            <stop offset="60%" stopColor="#ff6a00" />
            <stop offset="100%" stopColor="#cc3300" />
          </linearGradient>
          <linearGradient id="blobGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b2c1f" />
            <stop offset="100%" stopColor="#ff6a00" />
          </linearGradient>
        </defs>
      </svg>

      {/* ======= SOFT AMBIENT GLOWS (CSS) ======= */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #ff6a00 0%, transparent 70%)' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #ff4500 0%, transparent 70%)' }}
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
