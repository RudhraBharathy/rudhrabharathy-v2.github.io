import { cn } from "@/lib/utils";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  onHoverItem,
}: {
  items: {
    itemId: number;
    icon: React.ReactNode;
  }[];
  desktopClassName?: string;
  mobileClassName?: string;
  onHoverItem: (itemId: number | null) => void;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        onHoverItem={onHoverItem}
      />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  onHoverItem,
}: {
  items: {
    itemId: number;
    icon: React.ReactNode;
  }[];
  className?: string;
  onHoverItem: (itemId: number | null) => void;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-14 gap-4 items-end backdrop-filter backdrop-blur-lg rounded-full bg-[#522052] dark:bg-neutral-900 px-3 pb-2",
        className,
        "2xs:h-12 2xs:gap-3 2xs:px-2 2xs:pb-1 lg:h-14 lg:gap-4 lg:px-3 lg:pb-2"
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.itemId}
          {...item}
          onHoverItem={onHoverItem}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  itemId,
  icon,
  onHoverItem,
}: {
  mouseX: MotionValue;
  itemId: number;
  icon: React.ReactNode;
  onHoverItem: (itemId: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-100, 0, 100], [40, 60, 40]);
  const heightTransform = useTransform(distance, [-100, 0, 100], [40, 60, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-100, 0, 100],
    [20, 35, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-100, 0, 100],
    [20, 35, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => onHoverItem(itemId)}
      onMouseLeave={() => onHoverItem(itemId)}
      className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative cursor-pointer"
    >
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
