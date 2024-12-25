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
import CSS from "../../public/svgs/css.svg";
import Github from "../../public/svgs/github.svg";
import JavaScript from "../../public/svgs/javascript.svg";
import NextJS from "../../public/svgs/nextjs.svg";
import Tailwind from "../../public/svgs/tailwind.svg";
import Docker from "../../public/svgs/docker.svg";
import Git from "../../public/svgs/git.svg";
import MUI from "../../public/svgs/mui.svg";
import Schdcn from "../../public/svgs/schdcn.svg";
import ReactSVG from "../../public/svgs/react.svg";
import TypeScript from "../../public/svgs/typescript.svg";
import Figma from "../../public/svgs/figma.svg";
import HTML from "../../public/svgs/html.svg";
import MySQL from "../../public/svgs/mysql.svg";
import Supabase from "../../public/svgs/supabase.svg";
import Ubuntu from "../../public/svgs/ubuntu.svg";

export default function PortfolioCards() {
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

  const icons = [
    { src: HTML, alt: "HTML Logo", color: "#F34F29" },
    { src: CSS, alt: "CSS Logo", color: "#1572B6" },
    { src: JavaScript, alt: "JavaScript Logo", color: "#F7DF1E" },
    { src: TypeScript, alt: "TypeScript Logo", color: "#3178C6" },
    { src: ReactSVG, alt: "React Logo", color: "#61DAFB" },
    { src: NextJS, alt: "NextJS Logo", color: "#000000" },
    { src: Tailwind, alt: "Tailwind Logo", color: "#183644" },
    { src: Supabase, alt: "Supabase Logo", color: "#3ECF8E" },
    { src: MySQL, alt: "MySQL Logo", color: "#11aced" },
    { src: Git, alt: "Git Logo", color: "#F34F29" },
    { src: Github, alt: "Github Logo", color: "#FFFFFF" },
    { src: MUI, alt: "MUI Logo", color: "#007FFF" },
    { src: Schdcn, alt: "Schdcn Logo", color: "#FFFFFF" },
    { src: Docker, alt: "Docker Logo", color: "#2496ED" },
    { src: Figma, alt: "Figma Logo", color: "#A259FF" },
    { src: Ubuntu, alt: "Ubuntu Logo", color: "#E44D26" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 max-w-[95rem] mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#0E3452] min-h-[500px] lg:min-h-[400px]">
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
                      e.currentTarget.classList.remove(
                        "animate-shimmer-reverse"
                      );
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

      <WobbleCard containerClassName="col-span-1 min-h-[400px] bg-[#0b525b]"></WobbleCard>

      <div className="col-span-1 min-h-[100px] flex flex-col gap-7">
        <WobbleCard containerClassName="min-h-[195px] bg-[#7c162e]">
          <div className="flex flex-wrap justify-start items-start">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="p-2 inline-block rounded-lg m-1"
                style={{ backgroundColor: `${icon.color}33` }}
              >
                <Image alt={icon.alt} src={icon.src} className="w-8 h-8" />
              </div>
            ))}
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="min-h-[195px] bg-[#3f2d76]"></WobbleCard>
      </div>

      <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#4d194d] min-h-[500px] lg:min-h-[400px]"></WobbleCard>
    </div>
  );
}
