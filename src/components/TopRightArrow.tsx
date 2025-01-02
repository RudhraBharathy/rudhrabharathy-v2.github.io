import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface TopRightArrowProps {
  isHovered: boolean;
  size: number;
}

const TopRightArrow: React.FC<TopRightArrowProps> = ({ isHovered, size }) => {
  return (
    <div
      className="absolute"
      style={{
        top: isHovered ? "0.5rem" : "1rem",
        right: isHovered ? "0.5rem" : "1rem",
        transition: "top 0.2s ease, right 0.2s ease",
      }}
    >
      <GoArrowUpRight color="#FFFFFF" size={size} />
    </div>
  );
};

export default TopRightArrow;