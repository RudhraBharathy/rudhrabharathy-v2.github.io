"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Project1Image1 from "../../../public/projects/img1.avif";
import Project1Image2 from "../../../public/projects/img2.avif";
import Project1Image3 from "../../../public/projects/img3.avif";
import Project1Image4 from "../../../public/projects/img4.avif";
import Project1Image5 from "../../../public/projects/img5.avif";

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
      "id: 1, A personal portfolio showcasing skills, projects, and blog posts Built for seamless navigation and responsive design.",
    techStack: ["React", "Vite", "TypeScript", "CSS Modules"],
    imageLink: Project1Image1,
    githubLink: "https://github.com/username/portfolio",
    externalLink: "https://yourportfolio.com",
  },
  {
    id: 2,
    name: "ToDo",
    description:
      "id: 2, A task management tool with features for categorization scheduling, and collaboration. Supports real-time updates.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imageLink: Project1Image2,
    githubLink: "https://github.com/usernamet/taskmanagerapp",
    externalLink: "https://taskmanagerapp.com",
  },
  {
    id: 3,
    name: "ATM Card Validator",
    description:
      "id: 3, A modern e-commerce website with user authentication, payment gateway integration, and an admin dashboard.",
    techStack: ["Vue.js", "Firebase", "TailwindCSS"],
    imageLink: Project1Image3,
    githubLink: "https://github.com/username/ecommerce-platform",
    externalLink: "https://ecommerceplatform.com",
  },
  {
    id: 4,
    name: "Login & Register Forms",
    description:
      "id: 4, A secure, scalable chat app with real-time messaging, file sharing, and group chats using WebSocket.",
    techStack: ["Node.js", "Socket.IO", "Redis"],
    imageLink: Project1Image4,
    githubLink: "https://github.com/username/chat-application",
    externalLink: "https://chatapp.com",
  },
  {
    id: 5,
    name: "Collaborative Task Management",
    description:
      "id: 5, A content management system for blogging with custom themes, rich text editor, and SEO tools.",
    techStack: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    imageLink: Project1Image5,
    githubLink: "https://github.com/username/blog-cms",
    externalLink: "https://blogcms.com",
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
    <div className="relative h-60 w-60 md:h-64 md:w-[37rem] text-white">
      <motion.div
        key={activeCard.id}
        className="backdrop-filter backdrop-blur-lg bg-opacity-10 h-60 w-60 md:h-64 md:w-[37rem] rounded-3xl p-5 shadow-2xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.3] dark:shadow-white/[0.1] flex justify-between flex-col"
      >
        <div className="flex justify-between items-start flex-row gap-3">
          <div className="flex justify-between items-start flex-col gap-4">
            <p className="text-3xl bold">{activeCard.name}</p>
            <p className="text-base">{activeCard.description}</p>
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
              <Link href={activeCard.githubLink}>
                <div className="flex justify-start items-center flex-row gap-2">
                  <FiGithub size={15} />
                  <h1 className="text-sm">Github</h1>
                </div>
              </Link>
            )}
            <Link href={activeCard.externalLink}>
              <div className="flex justify-start items-center flex-row gap-2">
                <FiExternalLink size={15} />
                <h1 className="text-sm">Website</h1>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
