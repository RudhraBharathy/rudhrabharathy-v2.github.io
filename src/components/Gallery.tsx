"use client";

import React, { useState } from "react";
import { WobbleCard } from "./ui/wobble-card";
import TopRightArrow from "./TopRightArrow";
import { GrGallery } from "react-icons/gr";
import { FollowerPointerCard } from "./ui/following-pointer";
import Img1 from "../../public/Moments/img1.jpeg";
import Img2 from "../../public/Moments/img2.jpeg";
import Img3 from "../../public/Moments/img3.jpeg";
import Img4 from "../../public/Moments/img4.jpeg";
import Img5 from "../../public/Moments/img5.jpeg";
import Img6 from "../../public/Moments/img6.jpeg";
import Img7 from "../../public/Moments/img7.jpeg";
import Image from "next/image";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentLetterValue, setCurrentLetterValue] = useState<number>(0);
  const [showTitle, setShowTitle] = useState(true);

  const momentsTextImages = [
    { id: 0, letter: "M", Image: Img1 },
    { id: 1, letter: "o", Image: Img2 },
    { id: 2, letter: "m", Image: Img3 },
    { id: 3, letter: "e", Image: Img4 },
    { id: 4, letter: "n", Image: Img5 },
    { id: 5, letter: "t", Image: Img6 },
    { id: 6, letter: "s", Image: Img7 },
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
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-white transition-transform duration-500 ease-in-out transform scale-100">
            <Image
              src={avatar}
              alt="thumbnail"
              className="object-cover w-full h-full"
            />
          </div>
        )
      }
    >
      <WobbleCard
        customFlexClasses="relative"
        containerClassName="h-full bg-[#581f18]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTitle(true);
        }}
      >
        <div className="flex justify-start items-start flex-col absolute bottom-[1.1rem] left-6">
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
                className="text-5xl text-[#FFFFFF] transition-transform duration-300 ease-in-out hover:scale-125"
                aria-label={`Letter ${value.letter}`}
              >
                {value.letter}
              </h1>
            </div>
          ))}
        </div>
        <GrGallery
          className="absolute bottom-6 right-6 transition-transform duration-300 ease-in-out hover:scale-110"
          size={30}
          color="#FFFFFF"
        />
        <TopRightArrow isHovered={isHovered} size={50} />
      </WobbleCard>
    </FollowerPointerCard>
  );
};

export default Gallery;
