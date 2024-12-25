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
} from "react-icons/fa6";
import { MdMailOutline, MdLocationPin } from "react-icons/md";

const Profile = () => {
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
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="col-span-1 lg:col-span-2 h-full bg-[#0E3452] min-h-[500px] lg:min-h-[400px]"
    >
      <div className="flex justify-between items-center">
        <Image
          className="rounded-2xl"
          sizes="(max-width: 768px) 10rem, (max-width: 1200px) 50vw, 5rem"
          alt="My Image"
          src={MyImage.src}
          width={350}
          height={300}
        />
        <div className="w-7/12 pl-16">
          <div className="flex justify-evenly items-start flex-col gap-4">
            <p className="text-5xl text-white font-dancing">Hi !!, I'm</p>
            <h1 className="text-5xl text-white font-dancing font-bold">
              Rudhra Bharathy
            </h1>
            <div className="text-5xl text-white font-dancing">
              A <FlipWords words={words} />
            </div>
            <div className="flex justify-evenly items-start flex-row gap-2">
              <MdLocationPin color="#ffffff" size={30} />
              <p className="inline-block text-2xl text-white font-nunito">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
          <div className="z-10 inline-flex mt-8 justify-start items-center flex-row gap-5">
            {socialMediaIcons.map((item, index) => (
              <div
                key={index}
                className="inline-flex w-16 h-16 hover:animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                onMouseEnter={(e) =>
                  e.currentTarget.classList.add("animate-shimmer")
                }
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("animate-shimmer");
                  e.currentTarget.classList.add("animate-shimmer-reverse");
                }}
                onAnimationEnd={(e) => {
                  if (e.animationName === "shimmer-reverse") {
                    e.currentTarget.classList.remove("animate-shimmer-reverse");
                  }
                }}
              >
                <a href={item.link}>{item.icon}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WobbleCard>
  );
};

export default Profile;
