"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import MyImage from "../../public/img2.webp";
import { FlipWords } from "./ui/flip-words";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export function PortfolioCards() {
  const words = ["Web Developer", "Freelancer", "Problem Solver"];
  const socialMediaIcons = [
    {
      icon: <FaLinkedinIn color="#ffffff" size={30} />,
      link: "https://linkedin.com/in/rudhrabharathy",
    },
    {
      icon: <FaGithub color="#ffffff" size={30} />,
      link: "https://github.com/RudhraBharathy",
    },
    {
      icon: <FaXTwitter color="#ffffff" size={30} />,
      link: "https://twitter.com/RudhraBharathy",
    },
    {
      icon: <MdMailOutline color="#ffffff" size={30} />,
      link: "mailto:bharathyganeshan@gmail.com",
    },
    {
      icon: <FaInstagram color="#ffffff" size={30} />,
      link: "https://www.instagram.com/ig_rudhrabharathy",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-7xl mx-auto w-full"
      style={{ maxWidth: "90rem" }}
    >
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#0E3452] min-h-[500px] lg:min-h-[400px]">
        <div className="flex justify-between items-center gap-5">
          <Image
            className="rounded-2xl"
            sizes="(max-width: 768px) 10rem, (max-width: 1200px) 50vw, 5rem"
            alt="My Image"
            src={MyImage.src}
            width={350}
            height={300}
          />
          <div className="w-7/12 z-10000">
            <div className="flex justify-evenly items-start flex-col gap-4">
              <p className="text-5xl text-white">Hi!, I'm</p>
              <h1 className="text-5xl text-white">Rudhra Bharathy</h1>
              <div className="text-5xl text-white">
                A <FlipWords words={words} />
              </div>
              <div className="flex justify-evenly items-start flex-row gap-2">
                <FaLocationDot color="#ffffff" size={30} />
                <p className="inline-block text-2xl text-white">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </div>
            <div className="z-10 inline-flex mt-8 justify-start items-center flex-row gap-5">
              {socialMediaIcons.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex w-16 h-16  hover:animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  onMouseEnter={(e) =>
                    e.currentTarget.classList.add("animate-shimmer")
                  }
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove("animate-shimmer");
                    e.currentTarget.classList.add("animate-shimmer-reverse");
                  }}
                  onAnimationEnd={(e) => {
                    if (e.animationName === "shimmer-reverse") {
                      e.currentTarget.classList.remove(
                        "animate-shimmer-reverse"
                      );
                    }
                  }}
                >
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-[#0b525b]"></WobbleCard>

      <div className="col-span-1 min-h-[100px] flex flex-col gap-7">
        <WobbleCard containerClassName="min-h-[195px] bg-[#7c162e]"></WobbleCard>
        <WobbleCard containerClassName="min-h-[195px] bg-[#3f2d76]"></WobbleCard>
      </div>

      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#4d194d] min-h-[500px] lg:min-h-[400px]"></WobbleCard>
    </div>
  );
}
