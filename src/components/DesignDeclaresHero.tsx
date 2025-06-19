import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dExclaimVariants = {
  initial: { opacity: 0, y: 40, scale: 1 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -60, scale: 1.2, transition: { duration: 0.6 } },
};

const headingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const paraVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 2 } },
};

const DesignDeclaresHero = () => {
  const [showMainHeading, setShowMainHeading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainHeading(true);
    }, 1000); // D! disappears after 1s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5 relative min-h-[300px]">
            <AnimatePresence>
              {!showMainHeading && (
                <motion.div
                  key="d-exclaim"
                  className="absolute top-0 left-0 font-black leading-none tracking-tight text-white"
                  style={{
                    fontFamily: 'var(--font-druk), var(--font-inter), Helvetica, sans-serif',
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={dExclaimVariants}
                >
                  <div className="text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
                    D!
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {showMainHeading && (
              <motion.div
                className="text-white font-black leading-none tracking-tight pt-24 relative z-0"
                style={{
                  fontFamily: 'var(--font-druk), var(--font-inter), Helvetica, sans-serif',
                }}
                variants={headingContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div
                  className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
                  variants={headingItem}
                >
                  DESIGN
                </motion.div>
                <motion.div
                  className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] -mt-2 md:-mt-4 lg:-mt-6"
                  variants={headingItem}
                >
                  DECLARES
                </motion.div>
                <motion.div
                  className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] -mt-2 md:-mt-4 lg:-mt-6 text-red-500"
                  variants={headingItem}
                >
                  UK
                </motion.div>
              </motion.div>
            )}
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <motion.div
            className="col-span-12 lg:col-span-5 flex items-start justify-start pt-8"
            variants={paraVariants}
            initial="hidden"
            animate="show"
          >
            <div className="max-w-lg">
              <p className="text-white text-lg md:text-xl lg:text-xl leading-relaxed font-light">
                Design Declares is a growing group of designers, design studios, agencies and
                institutions here to declare a climate and ecological emergency. As part of the global
                declaration movement, we commit to harnessing the tools of our industry to reimagine,
                rebuild and heal our world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DesignDeclaresHero;
