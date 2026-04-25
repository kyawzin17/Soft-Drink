import React, { useMemo } from 'react';
import "../App.css"

// --- Interfaces ---
interface CircleProps {
  r: number;
  color: string;
  value: number;
}

interface BarGroupProps {
  count?: number;
}

// --- ၁။ Circle တစ်ခုချင်းစီအတွက် Component ---
const AnimatedCircle: React.FC<CircleProps> = ({ r, color, value }) => {
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;

  const anim = useMemo(() => ({
    delay: `${Math.random() * 2}s`,
    duration: `${Math.random() + 3}s` // နည်းနည်းနှေးမှ လှမှာမို့ 3s ပေါင်းထားတယ်
  }), []);

  return (
    <g>
      <circle cx="60" cy="60" r={r} fill="none" strokeWidth="2" stroke="#333" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        strokeWidth="4"
        stroke={color}
        strokeLinecap="round"
        className="circle-ani"
        style={{
          "--circumference": circumference,
          "--offset": offset,
          "--delay": anim.delay,
          "--duration": anim.duration,
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        } as React.CSSProperties}
      />
    </g>
  );
};

// --- ၂။ Bars Animation အစုအဝေးအတွက် Component ---
const BarAnimation: React.FC<BarGroupProps> = ({ count = 6 }) => {
  return (
    <div className="flex items-center gap-1 h-6">
      {[...Array(count)].map((_, i) => {
        const delay = `${Math.random() * 1.5}s`;
        const duration = `${Math.random() + 1}s`;
        return (
          <span
            key={i}
            className="bar-span-ani"
            style={{ "--delay": delay, "--duration": duration } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

// --- ၃။ Main Component ---
const CircleAni: React.FC = () => {

  return (
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-around items-center p-6 border border-white/10 rounded-xl backdrop-blur-md bg-bg/70">
        
        {/* Sweet Section */}
        <div className="flex items-center gap-4">
          <div className="text-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <AnimatedCircle r={50} color="#FFD60A" value={70} />
              <AnimatedCircle r={40} color="#00E5FF" value={60} />
              <AnimatedCircle r={30} color="#FF8C42" value={80} />
            </svg>
            <p className="text-white text-sm mt-2">Sweet</p>
          </div>
          <BarAnimation />
        </div>

        {/* Refresh Section */}
        <div className="flex items-center gap-4">
          <div className="text-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <AnimatedCircle r={50} color="#FF8C42" value={80} />
              <AnimatedCircle r={40} color="#00E5FF" value={50} />
              <AnimatedCircle r={30} color="#FFD60A" value={70} />
            </svg>
            <p className="text-white text-sm mt-2">Refresh</p>
          </div>
          <BarAnimation />
        </div>

        {/* Energy Section */}
        <div className="flex items-center gap-4">
          <div className="text-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <AnimatedCircle r={50} color="#A7F432" value={60} />
              <AnimatedCircle r={40} color="#00E5FF" value={60} />
              <AnimatedCircle r={30} color="#FFD60A" value={40} />
            </svg>
            <p className="text-white text-sm mt-2">Energy</p>
          </div>
          <BarAnimation />
        </div>

      </div>
  );
};

export default CircleAni;