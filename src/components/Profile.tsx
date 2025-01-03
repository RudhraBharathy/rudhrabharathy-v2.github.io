"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { MdMailOutline, MdLocationPin } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const socialMediaIconsColor = "#FFFFFF";
const socialMediaIconsSize = 25;

const socialMediaIcons = [
  {
    icon: (
      <FaLinkedinIn color={socialMediaIconsColor} size={socialMediaIconsSize} />
    ),
    link: "https://linkedin.com/in/rudhrabharathy",
  },
  {
    icon: (
      <FaGithub color={socialMediaIconsColor} size={socialMediaIconsSize} />
    ),
    link: "https://github.com/RudhraBharathy",
  },
  {
    icon: (
      <FaXTwitter color={socialMediaIconsColor} size={socialMediaIconsSize} />
    ),
    link: "https://twitter.com/RudhraBharathy",
  },
  {
    icon: (
      <MdMailOutline
        color={socialMediaIconsColor}
        size={socialMediaIconsSize}
      />
    ),
    link: "mailto:bharathyganeshan@gmail.com",
  },
  {
    icon: (
      <FaInstagram color={socialMediaIconsColor} size={socialMediaIconsSize} />
    ),
    link: "https://instagram.com/ig_rudhrabharathy",
  },
  {
    icon: (
      <IoDocumentText
        color={socialMediaIconsColor}
        size={socialMediaIconsSize}
      />
    ),
    link: "/Rudhra_Bharathy_Resume.pdf",
  },
];

const Profile = () => {
  const words = ["Web Developer", "Freelancer", "Problem Solver"];

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="h-full bg-[#0E3452] min-h-[500px] lg:min-h-[400px]"
    >
      <div className="flex justify-between items-center">
        <Image
          className="rounded-2xl"
          sizes="(max-width: 768px) 10rem, (max-width: 1200px) 50vw, 5rem"
          alt="My Image"
          src={"/images/img2.webp"}
          width={350}
          height={300}
        />
        <div className="w-7/12 pl-16">
          <div className="flex justify-evenly items-start flex-col gap-4">
            <p className="text-5xl text-white font-dancing">Hi !! I&#39;m</p>
            <h1 className="text-5xl text-white font-dancing font-bold">
              Rudhra Bharathy
            </h1>
            <div className="text-5xl text-white font-dancing">
              A <FlipWords words={words} />
            </div>
            <div className="flex justify-evenly items-end flex-row gap-2">
              <MdLocationPin color="#FFFFFF" size={30} />
              <p className="inline-block text-xl text-white font-nunito">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
          <div className="z-10 inline-flex mt-8 justify-start items-center flex-row gap-3">
            {socialMediaIcons.map((item, index) => (
              <a target="_blank" key={index} href={item.link}>
                <div
                  className="inline-flex w-14 h-14 hover:animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
                  <div>{item.icon}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </WobbleCard>
  );
};

export default Profile;
