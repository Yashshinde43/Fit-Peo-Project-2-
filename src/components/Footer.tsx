import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="bg-red-500 text-black">
      <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Logo */}
          <div className="lg:col-span-1">
            <div className="text-black font-black text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight">
              <div>DESIGN</div>
              <div>DECLARES</div>
            </div>
          </div>

          {/* Middle Column - Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-4">
              <div>
                <a 
                  href="#" 
                  className="text-black text-lg md:text-xl font-medium hover:underline transition-all duration-200"
                >
                  Contact
                </a>
              </div>
              <div>
                <a 
                  href="#" 
                  className="text-black text-lg md:text-xl font-medium hover:underline transition-all duration-200"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a 
                  href="#" 
                  className="text-black text-lg md:text-xl font-medium hover:underline transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a 
                  href="#" 
                  className="text-black text-lg md:text-xl font-medium hover:underline transition-all duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </nav>
          </div>

          {/* Right Column - Newsletter Signup */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h3 className="text-black text-xl md:text-2xl font-bold">
                Sign up to the D! Newsletter
              </h3>
              
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email:*"
                  className="w-full bg-transparent border-2 border-black px-4 py-3 text-black text-lg placeholder-black focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Checkbox and Subscribe Button Row */}
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className="flex items-start gap-3 flex-1">
                  <div className="relative flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      id="footer-newsletter-consent"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="sr-only"
                    />
                    <label 
                      htmlFor="footer-newsletter-consent" 
                      className="cursor-pointer flex items-center justify-center w-5 h-5 border-2 border-black bg-transparent hover:bg-black hover:bg-opacity-10 transition-colors"
                    >
                      {isChecked && (
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </label>
                  </div>
                  <label htmlFor="footer-newsletter-consent" className="text-black text-base leading-tight cursor-pointer">
                    I would like to be added to the Design Declares! newsletter and receive further updates.
                  </label>
                </div>

                {/* Subscribe Button */}
                <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 flex-shrink-0">
                  Subscribe
                </button>
              </div>

              {/* Privacy Policy Link */}
              <div>
                <a href="#" className="text-black text-sm underline hover:no-underline transition-all duration-200">
                  View our Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t-2 border-black space-y-4">
          <p className="text-black text-sm md:text-base leading-relaxed">
            This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand.{' '}
            <a href="#" className="underline hover:no-underline transition-all duration-200">
              Learn more about our carbon footprint
            </a>
            .
          </p>
          
          <p className="text-black text-sm">
            Empowered by{' '}
            <a href="#" className="underline hover:no-underline transition-all duration-200">
              Driftime©
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;