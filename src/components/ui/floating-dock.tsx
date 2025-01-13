import { cn } from "@/lib/utils";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuListTodo } from "react-icons/lu";
import { MdLocalAtm } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { GoWorkflow } from "react-icons/go";

const items = [
  {
    itemId: 1,
    icon: <TiWeatherPartlySunny className="h-full w-full text-[#522052]" />,
  },
  {
    itemId: 2,
    icon: <LuListTodo className="h-full w-full text-[#522052]" />,
  },
  {
    itemId: 3,
    icon: <MdLocalAtm className="h-full w-full text-[#522052]" />,
  },
  {
    itemId: 4,
    icon: <IoIosLogIn className="h-full w-full text-[#522052]" />,
  },
  {
    itemId: 5,
    icon: <GoWorkflow className="h-full w-full text-[#522052]" />,
  },
];

export const FloatingDock = ({
  desktopClassName,
  onHoverItem,
}: {
  desktopClassName?: string;
  mobileClassName?: string;
  onHoverItem: (itemId: number | null) => void;
}) => {
  return (
    <>
      <FloatingDockDesktop
        className={desktopClassName}
        onHoverItem={onHoverItem}
      />
    </>
  );
};

const FloatingDockDesktop = ({
  className,
  onHoverItem,
}: {
  className?: string;
  onHoverItem: (itemId: number | null) => void;
}) => {
  const mouseX = useMotionValue(Infinity);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth > 1280);
    checkIsDesktop();

    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-14 gap-4 items-end backdrop-filter backdrop-blur-lg rounded-full bg-[#522052] dark:bg-neutral-900 px-3 pb-2 border",
        className,
        "2xs:h-12 2xs:gap-3 2xs:px-2 2xs:pb-2 lg:h-14 lg:gap-4 lg:px-3 lg:pb-2"
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
      onMouseLeave={() => onHoverItem(itemId)}
      className="aspect-square rounded-full bg-gray-200 flex items-center justify-center relative cursor-pointer"
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
    width: useTransform(distance, [-100, 0, 100], [30, 50, 30]),
    height: useTransform(distance, [-100, 0, 100], [30, 50, 30]),
    iconWidth: useTransform(distance, [-100, 0, 100], [15, 20, 15]),
    iconHeight: useTransform(distance, [-100, 0, 100], [15, 20, 15]),
  };

  return isDesktop ? desktop : mobile;
}
