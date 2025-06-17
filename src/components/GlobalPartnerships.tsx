import React from 'react';

const GlobalPartnerships = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        {/* 12 Column Grid: 4 cols left + 1 col gap + 7 cols right */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Section - 4 columns - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                Global Partnerships
              </h2>
            </div>
          </div>
          
          {/* Right Section - 7 columns (starting from column 6 to leave 1 column gap) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8 lg:space-y-12">
            
            {/* Main invitation text */}
            <div className="space-y-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*
              </p>
            </div>

            {/* Two column content section */}
            <div className="pt-8 lg:pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Left Column */}
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    The acts of emergency above are the first (big) steps. As we all commit to this work, we must also commit to doing it in a way that is genuinely inclusive and equitable.
                  </p>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    It doesn't matter where on the journey you are. What matters is that you're here, and you're ready to do the work. Because there is no design on a dead planet.
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    *We are actively seeking partnerships to expand Design Declares around the world. If that sounds like something you're interested in, please get in touch.
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                      Join our list of global partners...
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2 text-white text-base md:text-lg font-light">
                        <a href="#" className="underline hover:no-underline transition-all duration-200">UK</a>
                        <span>,</span>
                        <a href="#" className="underline hover:no-underline transition-all duration-200">Ireland</a>
                        <span>,</span>
                        <a href="#" className="underline hover:no-underline transition-all duration-200">Brazil</a>
                        <span>,</span>
                        <a href="#" className="underline hover:no-underline transition-all duration-200">Australia</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get in Touch Button */}
            <div className="pt-12 lg:pt-16">
              <button className="bg-gray-200 hover:bg-white text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The Designers Behind Design Declares UK Section */}
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Section - 4 columns - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                The Designers Behind Design Declares UK
              </h2>
            </div>
          </div>
          
          {/* Right Section - 7 columns (starting from column 6 to leave 1 column gap) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8 lg:space-y-12">
            
            {/* Description text */}
            <div className="space-y-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                Inspired by the global emergency declaration movement demanding accountability and action across industries, Design Declares is the initiative of a multidisciplinary group of design professionals and agencies who all believe in the power of design to change things.
              </p>
            </div>

            {/* Logo Grid Section */}
            <div className="pt-8 lg:pt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
                
                {/* First Row */}
                <div className="flex items-center justify-start">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                    <span className="text-white text-lg md:text-xl font-light">design for life</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-start">
                  <span className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight">
                    Driftime<sup className="text-sm">©</sup>
                  </span>
                </div>

                {/* Second Row */}
                <div className="flex items-center justify-start">
                  <span className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
                    morrama
                  </span>
                </div>
                
                <div className="flex items-center justify-start">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
                    studiowood<sup className="text-sm">™</sup>
                  </span>
                </div>

                {/* Third Row */}
                <div className="flex items-center justify-start">
                  <div className="bg-white px-4 py-2 rounded-sm">
                    <div className="space-y-1">
                      <div className="text-black text-sm font-medium">thomas.matthews</div>
                      <div className="text-black text-xs">communication design</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-start">
                  <div className="bg-white px-6 py-3 rounded-sm">
                    <span className="text-black text-2xl md:text-3xl font-black tracking-tight">
                      URGE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPartnerships;