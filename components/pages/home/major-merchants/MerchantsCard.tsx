"use client";
import { motion } from "framer-motion";
import { useRef, useState, MouseEvent, ComponentType } from "react";

type MerchantsCardProps = {
  classname?: string;
  component: ComponentType;
};

type Rotations = {
  x: number;
  y: number;
  z: number;
};

type Glare = {
  x: number;
  y: number;
  opacity: number;
};

const MerchantsCard = ({
  classname,
  component: Component,
}: MerchantsCardProps) => {
  const [rotations, setRotations] = useState<Rotations>({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState<boolean>(false);
  const isAnimatingReference = useRef<boolean>(isAnimating);
  const [glare, setGlare] = useState<Glare>({ x: 0, y: 0, opacity: 0 });

  const animate = (event: MouseEvent<HTMLDivElement>) => {
    setAnimating(true);

    const rect = event.currentTarget.getBoundingClientRect();

    const absolute = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    const percent = {
      x: round((100 / rect.width) * absolute.x),
      y: round((100 / rect.height) * absolute.y),
    };

    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    setRotations({
      x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
      y: round(center.y / 16),
      z: round(distance(percent.x, percent.y, 50, 50) / 20),
    });

    setGlare({
      x: percent.x,
      y: percent.y,
      opacity: 0.25,
    });
  };

  const stopAnimating = () => {
    setAnimating(false);

    setTimeout(() => {
      if (isAnimatingReference.current) return;

      setRotations({ x: 0, y: 0, z: 2 });
      setGlare({ x: 50, y: 50, opacity: 0 });
    }, 100);
  };

  return (
    <motion.div
      onMouseMove={animate}
      onMouseLeave={stopAnimating}
      animate={{
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 200,
      }}
      className={`${classname} bg-[#FCFCFC]/70 dark:bg-[#141415] border border-[#E4E4E7] dark:border-[#262626] rounded-2xl p-[5px] xs:p-[10px] s:p-[20px] sm:p-[40px] lg:p-[50px] grid place-content-center relative shadow-lg`}
    >
      <motion.div
        style={{
          zIndex: 2,
          mixBlendMode: "overlay",
          position: "absolute",
          transform: "translateZ(1px)",
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          background: `radial-gradient(
              farthest-corner circle at ${glare.x}% ${glare.y}%,
              rgba(255, 255, 255, 0.7) 10%,
              rgba(255, 255, 255, 0.5) 24%,
              rgba(0, 0, 0, 0.8) 82%
            )`,
          opacity: glare.opacity,
        }}
      />
      {/*<img src={imgSrc} alt={alt} />*/}
      <Component />
    </motion.div>
  );
};

export default MerchantsCard;

export function round(num: number, fix: number = 2): number {
  return parseFloat(num.toFixed(fix));
}

export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
