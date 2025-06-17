import React from 'react';

const LatestSection = () => {
  const articles = [
    {
      tags: ["Events", "D! UK"],
      date: "24.04.2025, 03 PM:30",
      title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      subtitle: "Recap: SD4P Collective working session – 28th March 2025",
      link: "Read story"
    },
    {
      tags: ["Events", "D! UK"],
      date: "06.12.2024, 02 PM:30",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      subtitle: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "Read story"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - "Latest" title (4 columns) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-3xl font-normal text-white">
                Latest
              </h2>
            </div>
          </div>
          
          {/* Right side - Articles (7 columns) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-16">
            {articles.map((article, index) => (
              <div key={index} className="space-y-6">
                {/* Tags and Date Row */}
                <div className="flex flex-wrap items-center gap-3">
                  {article.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-gray-400 text-sm font-medium">
                    {article.date}
                  </span>
                </div>
                
                {/* Title and Content Grid */}
                <div className="grid grid-cols-12 gap-6 lg:gap-8">
                  {/* Title (8 columns) */}
                  <div className="col-span-12 lg:col-span-8">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight">
                      {article.title}
                    </h3>
                  </div>
                  
                  {/* Subtitle and Link (4 columns) */}
                  <div className="col-span-12 lg:col-span-4 space-y-4">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                      {article.subtitle}
                    </p>
                    
                    <div>
                      <a 
                        href="#" 
                        className="text-gray-400 text-base underline hover:text-white transition-colors"
                      >
                        {article.link}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* See all the latest button */}
            <div className="pt-12">
              <button className="bg-gray-200 hover:bg-white text-black px-12 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
                See all the latest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestSection;