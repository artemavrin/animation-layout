"use client";

import { useLayoutNavigation } from "@/hooks/use-layout-navigation";
import { IPlanet } from "@/types/planet";
import { motion } from "framer-motion";

import Image from "next/image";

const PlanetList = ({ planets }: { planets: IPlanet[] }) => {
  const { push } = useLayoutNavigation();

  return (
    <div className="mx-auto max-w-3xl grid gap-3 grid-cols-1 md:grid-cols-2 p-4">
      {planets.map((planet) => (
        <motion.div layoutId={`planet-${planet.name}`} key={planet.name}>
          <motion.div
            layoutId={`planet-image-${planet.name}`}
            transition={{ type: "spring" }}
            className="p-4 relative aspect-video overflow-hidden group cursor-pointer items-center justify-center flex"
            onClick={() => push(planet.name)}
          >
          <Image
            src={planet.image}
            alt={planet.name}
            width={400}
            height={100}
            className="group-hover:scale-110 transition-all duration-300"
          />
          
          <motion.div className="absolute bottom-0 inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
            <motion.h2
              layoutId={`planet-title-${planet.name}`}
              className="opacity-0 group-hover:opacity-100 text-xl font-bold absolute bottom-3 group-hover:text-4xl transition-all duration-300 delay-100"
            >
              {planet.name}
            </motion.h2>
          </motion.div>
        </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default PlanetList;
