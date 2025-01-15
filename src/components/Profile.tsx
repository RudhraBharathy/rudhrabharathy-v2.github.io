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
import Link from "next/link";

const socialMediaIcons = [
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com/in/rudhrabharathy",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/RudhraBharathy",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com/RudhraBharathy",
  },
  {
    icon: <MdMailOutline />,
    link: "mailto:bharathyganeshan@gmail.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://instagram.com/ig_rudhrabharathy",
  },
  {
    icon: <IoDocumentText />,
    link: "/Rudhra_Bharathy_Resume.pdf",
  },
];

const Profile = () => {
  const words = ["Web Developer", "Freelancer", "Problem Solver"];

  return (
    <WobbleCard
      customFlexClasses="flex justify-center items-center"
      containerClassName="h-full bg-[#0E3452] lg:min-h-[300px] 2xl:min-h-[400px]"
    >
      <div className="w-full flex justify-evenly items-center flex-col gap-4 sm:flex-row">
        <Image
          className="rounded-2xl sm:w-[250px] md:w-[300px] 2xmd:w-[250px] lg:w-[270px] xl:w-[300px] 2xl:w-[350px]"
          alt="My Image"
          src={"/images/img2.webp"}
          width={350}
          height={300}
        />
        <div className="2xs:w-full xxs:w-[350px] 2xl:w-7/12">
          <div className="flex flex-col gap-6 md:gap-8 2xmd:gap-4 lg:gap-5 xl:gap-6 items-start">
            <div className="text-white text-3xl md:text-4xl 2xmd:text-3xl lg:text-4xl 2xl:text-5xl">
              <p className="pt-2 font-dancing">Hi !! I'm</p>
              <h1 className="pt-2 font-bold font-dancing">Rudhra Bharathy</h1>
              <div className="pt-2 font-dancing">
                A <FlipWords words={words} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationPin className="text-xl sm:text-2xl md:text-3xl 2xmd:text-2xl lg:text-3xl text-white" />
              <p className="text-base sm:text-lg md:text-xl 2xmd:text-lg lg:text-xl text-white font-nunito">
                Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
          <div className="z-10 inline-flex 2xs:mt-4 mt-8 justify-start items-center flex-wrap gap-2 2xmd:gap-1 lg:gap-2 outline-none">
            {socialMediaIcons.map((item, index) => (
              <Link target="_blank" key={index} href={item.link}>
                <div
                  className="2xs:w-10 2xs:h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 inline-flex w-14 h-14  hover:animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-all duration-300"
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
                  <div className="text-white 2xs:text-base md:text-2xl 2xl:text-3xl">
                    {item.icon}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </WobbleCard>
  );
};

export default Profile;
