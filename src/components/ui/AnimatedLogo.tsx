"use client";

import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[30%] h-[30%] bg-gradient-to-br from-accent to-primary rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"></div>

      <div className="absolute w-[75%] h-[75%] border border-accent/60 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"></div>

      <div className="absolute w-[60%] h-[60%] border border-accent/60 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse"></div>

      <div className="absolute w-[10%] h-[10%] bg-accent rounded-full top-[0] left-1/2 -translate-x-1/2">
        {/* Satellite on first orbit */}
      </div>

      <div className="absolute w-[10%] h-[10%] bg-accent rounded-full bottom-[0] left-1/2 -translate-x-1/2">
        {/* Satellite on second orbit */}
      </div>

      <div className="absolute w-full h-full rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial-pulse opacity-0 animate-pulse"></div>
    </div>
  );
};

export default AnimatedLogo;