"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";


import { NAVIGATION_DURATION } from "@/constants/animation";
import { useLayoutNavigation } from "@/hooks/use-layout-navigation";
import Planet from "@/components/planet";
import { IPlanet } from "@/types/planet";

const duration = NAVIGATION_DURATION / 1000;

const Modal = ({ planet }: { planet: IPlanet }) => {
  const { isOpen, open, setIsOpen } = useLayoutNavigation();

  useEffect(() => {
    open();

    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="w-full h-full z-50 fixed top-0 overflow-y-auto bg-background">
          
          <motion.div
            className="mx-auto bg-background p-6 top-10 max-w-5xl"
            transition={{ duration }}
          >
            <Planet planet={planet} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
