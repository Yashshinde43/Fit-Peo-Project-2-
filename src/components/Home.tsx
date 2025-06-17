import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - "Donate to D!" (4 columns) - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-3xl  font-normal text-white ">
                Donate to D!
              </h2>
            </div>
          </div>
          
          {/* Gap - 1 column */}
          <div className="hidden lg:block lg:col-span-1"></div>
          
          {/* Right side - Main content (7 columns) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Main text */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
              </p>
            </div>

            {/* Donation buttons */}
            <div className="flex flex-wrap gap-4 mt-12">
              <button className="bg-gray-200 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Donate £10
              </button>
              <button className="bg-gray-200 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Donate £20
              </button>
              <button className="bg-gray-200 hover:bg-white text-black px-8 py-4 rounded-full text-lg font-medium transition-colors">
                Donate £50
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 