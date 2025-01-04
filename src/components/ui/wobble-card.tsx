"use client";

import React, { MouseEventHandler, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  customFlexClasses,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  customFlexClasses?: string;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isWobbleEnabled, setIsWobbleEnabled] = useState(true);

  useEffect(() => {
    const updateWobbleState = () => {
      setIsWobbleEnabled(window.innerWidth > 1280);
    };

    window.addEventListener("resize", updateWobbleState);
    updateWobbleState();

    return () => window.removeEventListener("resize", updateWobbleState);
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isWobbleEnabled) return;
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.round((clientX - (rect.left + rect.width / 2)) / 40);
    const y = Math.round((clientY - (rect.top + rect.height / 2)) / 40);
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isWobbleEnabled) return;
        if (!hasEntered) setHasEntered(true);
        handleMouseMove(event);
      }}
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isWobbleEnabled) return;
        setIsHovering(true);
        if (onMouseEnter) onMouseEnter(event);
      }}
      onMouseLeave={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
        setHasEntered(false);
        if (onMouseLeave) onMouseLeave(event);
      }}
      style={{
        transform: isHovering && isWobbleEnabled
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : "translate3d(0px, 0px, 0)",
        willChange: "transform",
        transition: `${hasEntered ? "none" : "transform 0.07s ease-out"}`,
      }}
      className={cn(
        "mx-auto h-full w-full rounded-2xl overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,38%),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <Noise />
        <motion.div
          style={{
            transform: isHovering && isWobbleEnabled
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0)`
              : "translate3d(0px, 0px, 0)",
            willChange: "transform",
            transition: `${hasEntered ? "none" : "transform 0.07s ease-out"}`,
          }}
          className={cn("h-full p-4", className, customFlexClasses)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="z-0 absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url('/images/noise.webp')",
        backgroundSize: "30%",
        pointerEvents: "none",
      }}
    ></div>
  );
};
