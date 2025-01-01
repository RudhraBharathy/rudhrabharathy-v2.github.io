"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Project1Image1 from "../../../public/projects/weather-forcastify.png";
import Project1Image2 from "../../../public/projects/ATMCardValidator.png";
import Project1Image3 from "../../../public/projects/ToDo.png";
import Project1Image4 from "../../../public/projects/login-register.png";
import Project1Image5 from "../../../public/projects/InProgress.png";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  imageLink: StaticImageData;
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
    imageLink: Project1Image1,
    githubLink: "https://github.com/RudhraBharathy/weather-forecastify",
    externalLink: "https://weather-forecastify-app.netlify.app/",
  },
  {
    id: 2,
    name: "ATM Card Validator",
    description:
      "id: 3, A modern e-commerce website with user authentication, payment gateway integration, and an admin dashboard.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageLink: Project1Image2,
    githubLink: "https://github.com/RudhraBharathy/ATM-Card-Validator-with-UI",
    externalLink: "https://atmcardvalidator.netlify.app/",
  },
  {
    id: 3,
    name: "ToDo",
    description:
      "Created reusable components for a todo app, featuring an intuitive interface and efficient operations to manage tasks, enhancing functionality and improving the overall user experience.",
    techStack: ["React", "JavaScript", "Node", "MongoDB", "CRUD"],
    imageLink: Project1Image3,
    githubLink: "https://github.com/RudhraBharathy/ToDo",
    externalLink: "",
  },
  {
    id: 4,
    name: "Login & Register Form",
    description:
      "id: 4, A secure, scalable chat app with real-time messaging, file sharing, and group chats using WebSocket.",
    techStack: ["React", "JavaScript", "Node", "MySQL"],
    imageLink: Project1Image4,
    githubLink: "https://github.com/RudhraBharathy/Login-and-Register-Form",
    externalLink: "",
  },
  {
    id: 5,
    name: "Collaborative Task Management",
    description:
      "A task management app with user authentication, real-time updates, and CRUD functionality. Built to enhance productivity through a clean UI and robust backend integration.",
    techStack: ["React", "Supabase", "Tailwind CSS", "Zustand"],
    imageLink: Project1Image5,
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
    return <div>No projects available.</div>;
  }

  return (
    <div className="relative h-60 w-60 md:h-64 md:w-[37rem] text-white cursor-default">
      <motion.div
        key={activeCard.id}
        className="backdrop-filter backdrop-blur-lg bg-opacity-10 h-60 w-60 md:h-64 md:w-[37rem] rounded-3xl p-5 shadow-2xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.3] dark:shadow-white/[0.1] flex justify-between flex-col"
      >
        <div className="flex justify-between items-start flex-row gap-3">
          <div className="flex justify-between items-start flex-col gap-2">
            <p className="text-2xl font-bold">{activeCard.name}</p>
            <p className="text-sm">{activeCard.description}</p>
          </div>
          <Image
            className="rounded-xl"
            width={200}
            height={200}
            src={activeCard.imageLink.src}
            alt={activeCard.name}
          />
        </div>

        <div className="flex justify-between items-center flex-row">
          <div className="flex justify-center items-center flex-row gap-2">
            {activeCard.techStack.map((value, index) => (
              <h1
                className="text-sm px-2 py-1 border bottom-1 transition-colors rounded-md hover:bg-slate-50/20"
                key={index}
              >
                {value}
              </h1>
            ))}
          </div>
          <div className="flex justify-center items-center flex-row gap-4">
            {activeCard.githubLink && (
              <Link target="_black" href={activeCard.githubLink}>
                <div className="flex justify-start items-center flex-row gap-2">
                  <FiGithub size={15} />
                  <h1 className="text-sm">Github</h1>
                </div>
              </Link>
            )}
            {activeCard.externalLink && (
              <Link target="_black" href={activeCard.externalLink}>
                <div className="flex justify-start items-center flex-row gap-2">
                  <FiExternalLink size={15} />
                  <h1 className="text-sm">Website</h1>
                </div>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
