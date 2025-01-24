import Image from "next/image";
import React from "react";
import ArrowUpRight from "/public/svg/arrowUpRight.svg";

interface TopRightArrowProps {
  isHovered: boolean;
}

const TopRightArrow: React.FC<TopRightArrowProps> = ({ isHovered }) => {
  return (
    <div
      className="absolute"
      style={{
        top: isHovered ? "1rem" : "1.5rem",
        right: isHovered ? "1rem" : "1.5rem",
        transition: "top 0.2s ease, right 0.2s ease",
      }}
    >
      <Image
        loading="eager"
        width={35}
        height={35}
        src={ArrowUpRight}
        alt={"ArrowUpRight"}
      />
    </div>
  );
};

export default TopRightArrow;