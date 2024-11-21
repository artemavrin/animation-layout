"use client";

import { IPlanet } from "@/types/planet";

import KeyValue from "./key-value";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLayoutNavigation } from "@/hooks/use-layout-navigation";
import { useState, useEffect } from "react";

const Planet = ({ planet }: { planet: IPlanet }) => {
  const { shouldClose, close } = useLayoutNavigation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="w-full flex flex-col items-center"
      layoutId={`planet-${planet.name}`}
    >
      <motion.div
        transition={{ type: "spring", bounce: 0.1, duration: 5, mass: 0.9 }}
        className="relative aspect-video items-end justify-center flex w-full"
        layoutId={`planet-image-${planet.name}`}
      >
        <Image
          src={planet.image}
          alt={planet.name}
          width={600}
          height={600}
          className="scale-[2.5]"
          onClick={() => close()}
          style={{
            transform: `scale(2.5) translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
      </motion.div>
      <div className="flex flex-col relative z-10 w-full">
        <div className="w-full h-20 bg-gradient-to-b from-transparent to-background" />
        <div className="flex w-full justify-between bg-background items-center pb-4">
              <h1 className="text-6xl font-bold" >{planet.name}</h1>
              {
                shouldClose && (
                  <button className="rounded bg-white/10 px-2 py-1 font-semibold text-white shadow-sm hover:bg-white/20" onClick={close}>
                    Close
                  </button>
                )
              }
            </div>
        <div className="bg-background flex flex-col md:flex-row justify-between px-3">
          
          <div className="w-full md:w-2/3">
            
            <p className="text-foreground z-10">
              {planet.description}
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-2 items-center md:items-end mt-16">
            <div className="grid grid-cols-2 gap-2">
              <KeyValue
                title="Diameter"
                value={planet.physicalCharacteristics.diameter}
              />
              <KeyValue
                title="Gravity"
                value={planet.physicalCharacteristics.gravity}
              />
              <KeyValue
                title="Temperature"
                value={planet.physicalCharacteristics.averageTemperature}
              />
              <KeyValue
                title="Orbital Period"
                value={planet.physicalCharacteristics.orbitalPeriod}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Planet;
