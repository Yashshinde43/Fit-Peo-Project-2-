import React from 'react';

const DesignDeclaresHero = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - Large Typography (5 columns) */}
          <div className="col-span-12 lg:col-span-5 space-y-0">
            <div className="text-white font-black leading-none tracking-tight"
                style={{ fontFamily:  'var(--font-druk), var(--font-inter), Helvetica, sans-serif' }}
              >
              <div className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
                DESIGN
              </div>
              <div className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] -mt-2 md:-mt-4 lg:-mt-6">
                DECLARES
              </div>
              <div className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] -mt-2 md:-mt-4 lg:-mt-6 text-red-500">
                UK
              </div>
            </div>
          </div>
          
          {/* Gap - 2 columns */}
          <div className="hidden lg:block lg:col-span-2"></div>
          
          {/* Right side - Description text (5 columns) */}
          <div className="col-span-12 lg:col-span-5 flex items-start justify-start pt-8">
            <div className="max-w-lg">
              <p className="text-white text-lg md:text-xl lg:text-xl leading-relaxed font-light">
                Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDeclaresHero;