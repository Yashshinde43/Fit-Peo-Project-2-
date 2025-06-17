import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function DonationSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - "This is Breakdown" (4 columns) - Sticky */}
           <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-xl md:text-3xl lg:text-2xl font-normal text-white">
                This is Breakdown
              </h2>
            </div>
          </div>
          
          {/* Gap - 1 column */}
          <div className="hidden lg:block lg:col-span-1"></div>
          
          {/* Right side - Main content (7 columns) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Main text */}
            <div className="space-y-6">
              <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight font-light">
                The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
              </p>
            </div>

            {/* Accordion sections with proper borders */}
            <div className="mt-16 border-t border-gray-600">
              {/* The Role of Design */}
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleSection('design')}
                  className="w-full py-6 px-6 flex justify-between items-center text-left transition-colors"
                >
                  <span className="text-xl md:text-2xl font-light text-gray-300">
                    The Role of Design
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-300 transition-transform ${
                      openSection === 'design' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSection === 'design' && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-h1 leading-relaxed">
                          Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Time for Change */}
              <div className="border-b border-gray-600">
                <button
                  onClick={() => toggleSection('change')}
                  className="w-full py-6 px-6 flex justify-between items-center text-left transition-colo"
                >
                  <span className="text-xl md:text-2xl font-light text-gray-300">
                    Time for Change
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-300 transition-transform ${
                      openSection === 'change' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSection === 'change' && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          The time for incremental change has passed. We need radical transformation in how we approach design and its impact on the world. Every project is an opportunity to make a difference.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          We must reimagine our processes, question our assumptions, and prioritize sustainability and social justice in every decision we make. The future depends on the choices we make today.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Act with Urgency */}
              <div className="">
                <button
                  onClick={() => toggleSection('urgency')}
                  className="w-full py-6 px-6 flex justify-between items-center text-left transition-colors"
                >
                  <span className="text-xl md:text-2xl font-light text-gray-300">
                    Act with Urgency
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-300 transition-transform ${
                      openSection === 'urgency' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSection === 'urgency' && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          Every day matters. We must act now with the urgency that this crisis demands, transforming our practices and priorities. The window for action is rapidly closing.
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          We cannot wait for perfect solutions or ideal conditions. We must start where we are, with what we have, and build momentum for the systemic change that our planet desperately needs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video button */}
            <div className="mt-12">
              <button className="bg-gray-200 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-colors">
                View our D! Intro Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSection;