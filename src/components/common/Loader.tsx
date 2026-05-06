import React from "react";

interface LoaderProps {
  height?: string | number;
  className?: string;
}

export default function Loader({ height, className = "" }: LoaderProps) {
  const style: React.CSSProperties = height ? { height } : {};

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} style={style}>
      <div className="w-10 h-10 border-4 border-t-yellow-400 border-gray-200 rounded-full animate-spin mb-3" />
      <span className="text-sm font-label text-on-surface-variant">Loading...</span>
    </div>
  );
}
