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
      "Developed a weather app using Open Weather Map API, offering real-time and 5-day forecasts with detailed metrics like temperature, humidity, wind speed, and conditions for precise, user-friendly updates.",
    techStack: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    imageLink: "/projects/weather-forcastify.png",
    githubLink: "https://github.com/RudhraBharathy/weather-forecastify",
    externalLink: "https://weather-forecastify-app.netlify.app/",
  },
  {
    id: 2,
    name: "ATM Card Validator",
    description:
      "Created a card validator using the Luhn algorithm to validate 16-digit card numbers, display validation steps, and identify card types like Visa, MasterCard, and Rupay for enhanced clarity and accuracy.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    imageLink: "/projects/ATMCardValidator.png",
    githubLink: "https://github.com/RudhraBharathy/ATM-Card-Validator-with-UI",
    externalLink: "https://atmcardvalidator.netlify.app/",
  },
  {
    id: 3,
    name: "ToDo",
    description:
      "Built a reusable-component-based todo app with an intuitive interface to efficiently manage tasks. Features CRUD operations with smooth functionality to improve task organization, enhancing the overall user experience.",
    techStack: ["React", "JavaScript", "Node", "MongoDB", "CRUD"],
    imageLink: "/projects/ToDo.png",
    githubLink: "https://github.com/RudhraBharathy/ToDo",
    externalLink: "",
  },
  {
    id: 4,
    name: "Login & Register Form",
    description:
      "Developed a responsive login and registration form enabling users to sign up, log in, and manage accounts seamlessly. The interface ensures smooth interaction with secure backend integration for reliability.",
    techStack: ["React", "JavaScript", "Node", "MySQL"],
    imageLink: "/projects/login-register.png",
    githubLink: "https://github.com/RudhraBharathy/Login-and-Register-Form",
    externalLink: "",
  },
  {
    id: 5,
    name: "Collaborative Task Management",
    description:
      "Developing a task management app with real-time updates and CRUD functionality. Aiming for productivity enhancement through clean UI, seamless backend integration, and collaboration features. Uses state management for efficiency.",
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
    <div className="relative 2xs:h-full lg:h-[15rem] 2xs:w-full lg:h-65 lg:w-[33rem] 2xl:h-72 2xl:w-[37rem] text-white cursor-default">
      <motion.div
        key={activeCard.id}
        className="backdrop-filter backdrop-blur-lg bg-opacity-10 2xs:h-full lg:h-[15rem] 2xs:w-full lg:h-65 lg:w-[33rem] 2xl:h-72 2xl:w-[37rem] rounded-3xl p-3 lg:p-4 2xl:p-5 shadow-2xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.3] dark:shadow-white/[0.1] flex"
      >
        <motion.div
          className="flex justify-between flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className="w-full flex justify-between items-center flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex justify-between items-start flex-col w-full gap-2">
              <p className="2xs:text-lg xl:text-2xl font-bold">
                {activeCard.name}
              </p>
              <p className="2xs:text-xs sm:text-sm lg:text-xs 2xl:text-sm">
                {activeCard.description}
              </p>
            </div>
            <div className="2xs:h-[12rem] 3xs:h-[13rem] xxs:h-[14rem] sm:h-full sm:w-full 2md:max-w-80 lg:max-w-full">
              <Image
                className="rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-200 w-full max-w-20rem"
                loading="eager"
                width={200}
                height={200}
                src={activeCard.imageLink}
                alt={`Screenshot of ${activeCard.name}`}
              />
            </div>
          </div>

          <div className="flex justify-between items-center flex-col sm:flex-row">
            <div className="flex justify-center items-center flex-row gap-2 2xs:pb-4 sm:pb-0">
              {activeCard.techStack.map((value, index) => (
                <h1
                  className="2xs:text-[.7rem] sm:text-sm lg:text-[.7rem] lg:leading-3 2xl:text-sm 2xs:p-1 sm:px-2 sm:py-1 border transition-colors rounded-md hover:bg-slate-50/20 leading-none"
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
