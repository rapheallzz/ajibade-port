"use client";

import { useEffect, useState } from "react";

export default function Loader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const steps = [10, 25, 42, 58, 71, 85, 93, 100];
    let i = 0;
    const tick = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(tick);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    }, 140);
    return () => clearInterval(tick);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9000] bg-ink flex flex-col justify-between p-8 transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="font-mono text-xs text-fog tracking-widest uppercase">
        Loading
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none text-bone">
          {String(progress).padStart(2, "0")}
          <span className="text-accent">%</span>
        </div>
        <div className="h-px bg-steel w-full relative overflow-hidden">
          <div
            className="loader-bar absolute left-0 top-0 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="font-mono text-xs text-fog tracking-widest uppercase">
        Your Name — Portfolio
      </div>
    </div>
  );
}
