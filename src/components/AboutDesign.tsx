import React from 'react';

const AboutDesign = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* D! Logo positioned at top-left */}
      <div className="px-6 py-6">
        <div className="text-white font-black text-6xl leading-none tracking-tight">
          D!
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* 12 Column Grid: 4 cols left + 1 col gap + 7 cols right */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Section - 4 columns - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h1 className="text-white text-2xl leading-tight">
                About Design Declares
              </h1>
            </div>
          </div>
          
          {/* Right Section - 7 columns (starting from column 6 to leave 1 column gap) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8 lg:space-y-12">
            {/* Main headline */}
            <div className="space-y-6">
              <h2 className="text-white text-6xl leading-tight tracking-tight">
                Climate breakdown has begun. And business as usual is not an option.
              </h2>
            </div>

            {/* Subheading */}
            <div className="space-y-6 pt-8 lg:pt-12">
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
                That's why we started Design Declares.
              </h3>
            </div>

            {/* Description paragraph */}
            <div className="space-y-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                Inspired by a global declaration movement sounding the alarm in industries everywhere, we're an industry-recognised initiative representing the fears, hopes and commitment to action of a growing group of designers, design studios, agencies and institutions.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-gray-200 hover:bg-white text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
                See Global Declarations
              </button>
            </div>

            {/* Additional Content Section */}
            <div className="pt-16 space-y-12 lg:space-y-16">
              {/* Two Column Text Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                    Together, we sit at the very beginning of the creative process. The tools we use and the choices we make can influence society's behaviour, change economics and challenge everything that's come before.
                  </p>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                    Because design, whether it's a product, a piece of packaging or an exhibition space, has impact. It's up to us whether that impact is harmful or healing.
                  </p>
                  <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-medium pt-4">
                    We're glad you're here. Let's get to work.
                  </p>
                </div>
              </div>

              {/* Declare Emergency Now Button */}
              <div className="pt-8">
                <button className="bg-gray-200 hover:bg-white text-black px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
                  Declare Emergency Now
                </button>
              </div>

              {/* Information Grid Section */}
              <div className="pt-16 lg:pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          Design Declares is free.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          'Design' to us means industrial, digital, graphic, communication and service design.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          Design Declares offers support to all its signatories through shared best practice, resources and insights, all found in the Toolkit.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          Our signatories use the clarity of the 8 Acts of Emergency as a way to start meaningful conversations and actions in collaboration with colleagues, collaborators and clients.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <ul className="space-y-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          We welcome declarations from companies with an office and/or employing at least one full-time designer, and from practising freelance designers who are registered as self-employed in the UK. All signatories will be named and published on this site.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-white rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                          As a collective voice, we will liaise with other industry organisations and networks, constructively engaging with government, clients and design media.
                        </p>
                      </li>
                    </ul>
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

export default AboutDesign;