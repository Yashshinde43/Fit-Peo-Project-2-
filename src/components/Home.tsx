import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const dVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -60, scale: 1.2, transition: { duration: 0.6 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const paraVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 1 + i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-4 relative min-h-[200px]">
            {showContent && (
              <motion.div
                className="lg:sticky lg:top-8 space-y-0"
                variants={headingVariants}
                initial="hidden"
                animate="show"
              >
                <h2 className="text-3xl font-normal text-white">Donate to D!</h2>
              </motion.div>
            )}
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="col-span-12 lg:col-span-7 space-y-8">
            {showContent && (
              <>
                <motion.div
                  className="space-y-6"
                  variants={paraVariants}
                  initial="hidden"
                  animate="show"
                >
                  <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                    Design Declares is a CIC and would not exist without our dedicated team of
                    co-steers, volunteers, and our passionate community working towards change in the
                    creative industry. Your support can go a long way, and helps us too continue the
                    valuable work needed in tackling the climate crises. If you believe in the work we
                    do, please consider a small donation to help us on our journey for a more equitable
                    and just planet.
                  </p>
                </motion.div>

                <div className="flex flex-wrap gap-4 mt-12">
                  {[10, 20, 50].map((amount, i) => (
                    <motion.button
                      key={amount}
                      custom={i}
                      variants={buttonVariants}
                      initial="hidden"
                      animate="show"
                      className="bg-gray-200 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-colors"
                    >
                      Donate £{amount}
                    </motion.button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
