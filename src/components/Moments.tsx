"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRightArrow from "./TopRightArrow";
import { GrGallery } from "react-icons/gr";
import { FollowerPointerCard } from "./ui/following-pointer";
import Image from "next/image";

const Moments = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentLetterValue, setCurrentLetterValue] = useState<number>(0);
  const [showTitle, setShowTitle] = useState(true);

  const momentsTextImages = [
    { id: 0, letter: "M", Image: "/moments/img1.jpeg" },
    { id: 1, letter: "o", Image: "/moments/img2.jpeg" },
    { id: 2, letter: "m", Image: "/moments/img3.jpeg" },
    { id: 3, letter: "e", Image: "/moments/img4.jpeg" },
    { id: 4, letter: "n", Image: "/moments/img5.jpeg" },
    { id: 5, letter: "t", Image: "/moments/img6.jpeg" },
    { id: 6, letter: "s", Image: "/moments/img7.jpeg" },
  ];

  const avatar =
    momentsTextImages.find((img) => img.id === currentLetterValue)?.Image ||
    momentsTextImages[0].Image;

  return (
    <FollowerPointerCard
      title={
        showTitle ? (
          <div className="flex space-x-2 items-center transition-opacity duration-500 ease-in-out opacity-100">
            <p>Click to discover</p>
          </div>
        ) : (
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-white transition-transform duration-500 ease-in-out transform scale-100">
            <Image
              src={avatar}
              alt="thumbnail"
              loading="eager"
              className="object-cover w-full h-full"
              width={70}
              height={70}
            />
          </div>
        )
      }
      pointerBgColor={2}
    >
      <WobbleCard
        customFlexClasses="relative 2xs:cursor-default xl:cursor-none"
        containerClassName="min-h-[150px] h-full bg-[#581f18]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTitle(true);
        }}
        onClick={() => setIsHovered(true)}
      >
        <div className="flex justify-start items-start flex-row lg:flex-col absolute bottom-[1.1rem] left-6">
          {momentsTextImages.map((value) => (
            <div
              className="w-full block"
              key={value.id}
              onMouseEnter={() => {
                setCurrentLetterValue(value.id);
                setShowTitle(false);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setShowTitle(true);
              }}
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] transition-transform duration-300 ease-in-out xl:hover:scale-125"
                aria-label={`Letter ${value.letter}`}
              >
                {value.letter}
              </h1>
            </div>
          ))}
        </div>
        <GrGallery
          className="absolute bottom-6 right-6"
          size={30}
          color="#FFFFFF"
        />
        <TopRightArrow isHovered={isHovered} />
      </WobbleCard>
    </FollowerPointerCard>
  );
};

export default Moments;
