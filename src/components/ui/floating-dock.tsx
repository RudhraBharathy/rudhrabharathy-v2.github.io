import { cn } from "@/lib/utils";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth > 785);
    checkIsDesktop();

    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-14 gap-4 items-end backdrop-filter backdrop-blur-lg rounded-full bg-[#522052] dark:bg-neutral-900 px-3 pb-2",
        className,
        "2xs:h-9 2xs:gap-3 2xs:px-2 2xs:pb-1 lg:h-14 lg:gap-4 lg:px-3 lg:pb-2"
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.itemId}
          {...item}
          onHoverItem={onHoverItem}
          isDesktop={isDesktop}
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
  isDesktop,
}: {
  mouseX: MotionValue;
  itemId: number;
  icon: React.ReactNode;
  onHoverItem: (itemId: number | null) => void;
  isDesktop: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;
    return val - bounds.x - bounds.width / 2;
  });

  const { width, height, iconWidth, iconHeight } = calculateTransforms(
    distance,
    isDesktop
  );

  const springConfig = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  };

  const widthSpring = useSpring(width, springConfig);
  const heightSpring = useSpring(height, springConfig);
  const iconWidthSpring = useSpring(iconWidth, springConfig);
  const iconHeightSpring = useSpring(iconHeight, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{ width: widthSpring, height: heightSpring }}
      onMouseEnter={() => onHoverItem(itemId)}
      onMouseLeave={() => onHoverItem(null)}
      className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative cursor-pointer"
    >
      <motion.div
        style={{ width: iconWidthSpring, height: iconHeightSpring }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}

function calculateTransforms(distance: MotionValue, isDesktop: boolean) {
  const desktop = {
    width: useTransform(distance, [-100, 0, 100], [40, 60, 40]),
    height: useTransform(distance, [-100, 0, 100], [40, 60, 40]),
    iconWidth: useTransform(distance, [-100, 0, 100], [20, 35, 20]),
    iconHeight: useTransform(distance, [-100, 0, 100], [20, 35, 20]),
  };

  const mobile = {
    width: useTransform(distance, [-100, 0, 100], [25, 40, 25]),
    height: useTransform(distance, [-100, 0, 100], [25, 40, 25]),
    iconWidth: useTransform(distance, [-100, 0, 100], [15, 20, 15]),
    iconHeight: useTransform(distance, [-100, 0, 100], [15, 20, 15]),
  };

  return isDesktop ? desktop : mobile;
}
