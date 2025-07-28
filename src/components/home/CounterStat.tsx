"use client";

import { useEffect, useState } from "react";
import { Code, HeartPulse, Briefcase, Globe2 } from "lucide-react"; // You can customize icons here

interface CounterStatProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

export function CounterStat({
  value,
  label,
  icon,
  duration = 2000,
}: CounterStatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = 10;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center bg-background border border-muted p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center group">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-4xl font-bold text-primary mb-1">{count}+</h4>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
