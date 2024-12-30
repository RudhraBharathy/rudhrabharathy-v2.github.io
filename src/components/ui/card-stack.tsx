"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Card = {
  id: number;
  name: string;
  designation: string;
  githubLink: string;
  externalLink: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  activeItemId,
}: {
  items: Card[];
  activeItemId: number | null;
}) => {
  const rearrangedCards = activeItemId
    ? [
        ...items.filter((card) => card.id === activeItemId),
        ...items.filter((card) => card.id !== activeItemId),
      ]
    : items;

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-[35rem]">
      {rearrangedCards.map((card, index) => {
        const isActive = card.id === activeItemId;
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-[35rem] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            animate={{
              zIndex: isActive ? items.length + 1 : items.length - index,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="flex justify-between items-center flex-row">
              <div>
                <p className="text-neutral-500 font-medium dark:text-white">
                  {card.name}
                </p>
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  {card.designation}
                </p>
              </div>
              <div className="flex justify-center items-center flex-row gap-2">
                <Link href={card.githubLink}>
                  <FiGithub size={20} />
                </Link>
                <Link href={card.externalLink}>
                  <FiExternalLink size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
