import React from "react";

interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Badge({ className = "", style, children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
