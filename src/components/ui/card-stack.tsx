"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  imageLink: string;
  githubLink: string;
  externalLink: string;
};

const Projects_Data: Project[] = [
  {
    id: 1,
    name: "Weather Forcastify",
    description:
      "Developed a weather app using OpenWeatherMap API, offering real-time and 5-day forecasts with comprehensive metrics, including temperature, humidity, wind speed, and overall conditions for precise and user-friendly updates.",
    techStack: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    imageLink: "/projects/weather-forcastify.png",
    githubLink: "https://github.com/RudhraBharathy/weather-forecastify",
    externalLink: "https://weather-forecastify-app.netlify.app/",
  },
  {
    id: 2,
    name: "ATM Card Validator",
    description:
      "This application validates 16-digit card numbers using the Luhn algorithm, displays validation steps, and identifies card types (Visa, MasterCard, Rupay).",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    imageLink: "/projects/ATMCardValidator.png",
    githubLink: "https://github.com/RudhraBharathy/ATM-Card-Validator-with-UI",
    externalLink: "https://atmcardvalidator.netlify.app/",
  },
  {
    id: 3,
    name: "ToDo",
    description:
      "Created reusable components for a todo app, featuring an intuitive interface and efficient operations to manage tasks, enhancing functionality and improving the overall user experience.",
    techStack: ["React", "JavaScript", "Node", "MongoDB", "CRUD"],
    imageLink: "/projects/ToDo.png",
    githubLink: "https://github.com/RudhraBharathy/ToDo",
    externalLink: "",
  },
  {
    id: 4,
    name: "Login & Register Form",
    description:
      "A intuitive login and registration form that allows users to easily sign up, sign in, and manage their accounts with a smooth and responsive interface.",
    techStack: ["React", "JavaScript", "Node", "MySQL"],
    imageLink: "/projects/login-register.png",
    githubLink: "https://github.com/RudhraBharathy/Login-and-Register-Form",
    externalLink: "",
  },
  {
    id: 5,
    name: "Collaborative Task Management",
    description:
      "A task management app currently under development, featuring real-time updates, and complete CRUD functionality. Designed to enhance productivity with a clean UI and backend integration.",
    techStack: ["React", "Supabase", "Tailwind CSS", "Zustand"],
    imageLink: "/projects/InProgress.png",
    githubLink:
      "https://github.com/RudhraBharathy/Collaborative-Task-Management-App",
    externalLink: "",
  },
];

export const CardStack = ({
  activeItemId,
}: {
  activeItemId: number | null;
}) => {
  const activeCard = activeItemId
    ? Projects_Data.find((card) => card.id === activeItemId)
    : Projects_Data[0] || null;

  if (!activeCard) {
    return (
      <div className="text-center p-10">
        <p className="text-lg font-semibold">
          No projects available right now.
        </p>
        <p className="text-sm mt-2">Please check back later for updates!</p>
      </div>
    );
  }

  return (
    <div className="relative 2xs:h-full 2xs:w-full lg:h-60 lg:w-60 md:h-64 md:w-[37rem] text-white cursor-default">
      <motion.div
        key={activeCard.id}
        className="backdrop-filter backdrop-blur-lg bg-opacity-10 2xs:h-full 2xs:w-full lg:h-60 lg:w-60 md:h-64 md:w-[37rem] rounded-3xl p-3 lg:p-5 shadow-2xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.3] dark:shadow-white/[0.1] flex"
      >
        <motion.div
          className="flex justify-between flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className="w-full flex justify-between items-center flex-col lg:flex-row lg:items-start gap-3 2xs:pb-4 lg:pb-0">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="2xs:text-lg text-2xl font-bold">
                {activeCard.name}
              </p>
              <p className="2xs:text-xs text-sm">{activeCard.description}</p>
            </div>
            <div className="2xs:h-[12rem] lg:h-auto">
              <Image
                className="rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-200 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                loading="eager"
                width={200}
                height={200}
                src={activeCard.imageLink}
                alt={`Screenshot of ${activeCard.name}`}
              />
            </div>
          </div>

          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="flex justify-center items-center flex-row gap-2 2xs:pb-4 lg:pb-0">
              {activeCard.techStack.map((value, index) => (
                <h1
                  className="2xs:text-[.7rem] 2xs:p-1 lg:text-sm lg:px-2 lg:py-1 border transition-colors rounded-md hover:bg-slate-50/20 leading-none"
                  key={index}
                >
                  {value}
                </h1>
              ))}
            </div>
            <div className="flex justify-center items-center flex-row gap-4">
              {activeCard.githubLink && (
                <Link
                  target="_blank"
                  href={activeCard.githubLink}
                  aria-label={`${activeCard.name} Github`}
                >
                  <div className="flex justify-start items-center flex-row gap-2">
                    <FiGithub size={15} />
                    <h1 className="text-sm">Github</h1>
                  </div>
                </Link>
              )}
              {activeCard.externalLink && (
                <Link
                  target="_blank"
                  href={activeCard.externalLink}
                  aria-label={`${activeCard.name} Website`}
                >
                  <div className="flex justify-start items-center flex-row gap-2">
                    <FiExternalLink size={15} />
                    <h1 className="text-sm">Website</h1>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
