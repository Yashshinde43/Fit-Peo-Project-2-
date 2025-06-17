import React, { useState } from 'react';

const NewsletterToolkitSection = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - Title (4 columns) - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-2xl font-normal text-white tracking-tight">
                The Design Declares Newsletter and Toolkit
              </h2>
            </div>
          </div>
          
          {/* Right side - Main content (7 columns starting from column 6) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8">
            {/* Toolkit Image Section */}
            <div className="relative">
              {/* Background texture image */}
              <div className="relative bg-gray-800 rounded-none overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                  alt="Textured background"
                  className="w-full h-80 md:h-96 lg:h-[28rem] object-cover"
                />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-10">
                  {/* Top section */}
                  <div className="flex justify-between items-start">
                    <div className="bg-black bg-opacity-70 px-4 py-2 rounded-sm">
                      <span className="text-white text-sm font-normal">
                        Download the Design Declares Toolkit
                      </span>
                    </div>
                    <div className="text-white font-bold text-base tracking-wider">
                      DESIGN DECLARES
                    </div>
                  </div>
                  
                  {/* Center - Large TOOLKIT text */}
                  <div className="flex-1 flex items-center justify-start pl-0 md:pl-8">
                    <h3 className="text-white font-black text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] leading-none tracking-tighter">
                      TOOLKIT
                    </h3>
                  </div>
                  
                  {/* Bottom - Document preview */}
                  <div className="flex justify-end">
                    <div className="bg-white rounded-sm shadow-2xl p-4 w-64 md:w-72">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-bold rounded-sm">
                            D!
                          </div>
                          <div className="text-black font-bold text-sm">Design Declares Toolkit</div>
                        </div>
                        <div className="text-black text-xs leading-tight">
                          Welcome to the Design Declares Toolkit. This is a space to share knowledge, exchange ideas and find resources to help you on your journey to climate-positive design.
                        </div>
                        <div className="space-y-2">
                          <div className="text-black font-semibold text-xs">Resources to take action</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <div className="text-black text-xs">A comprehensive guide on how to Declare Emergency and what you can expect</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <div className="text-black text-xs">Tools and resources</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <div className="text-black text-xs">Community Resources</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description text */}
            <div className="space-y-6 pt-8">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
              </p>
              
              <p className="text-white text-base md:text-lg leading-relaxed font-light">
                Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
              </p>
            </div>

            {/* Newsletter signup form */}
            <div className="space-y-6 mt-16">
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-white text-base font-normal mb-3">
                  Email:*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-2 border-gray-600 rounded-none px-4 py-4 text-white text-lg placeholder-gray-500 focus:border-gray-400 focus:outline-none transition-colors"
                  placeholder=""
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-4 py-4">
                <div className="relative flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <label 
                    htmlFor="newsletter-consent" 
                    className="cursor-pointer flex items-center justify-center w-5 h-5 border-2 border-gray-400 bg-transparent hover:border-gray-300 transition-colors"
                  >
                    {isChecked && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </label>
                </div>
                <label htmlFor="newsletter-consent" className="text-gray-300 text-base leading-relaxed cursor-pointer">
                  I would like to be added to the Design Declares newsletter and receive further updates.
                </label>
              </div>

              {/* Privacy policy link */}
              <div className="pt-2">
                <a href="#" className="text-gray-400 text-sm underline hover:text-gray-300 transition-colors">
                  View our Privacy Policy
                </a>
              </div>

              {/* Subscribe button */}
              <div className="pt-8">
                <button className="bg-gray-200 hover:bg-red-500 text-black px-12 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterToolkitSection;