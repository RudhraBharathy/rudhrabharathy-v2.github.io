"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen bg-neutral-900 flex flex-col items-center relative w-full">
      <div className="max-h-full">
        <StarsBackground />
        <ShootingStars />
      </div>
    </div>
  );
}
