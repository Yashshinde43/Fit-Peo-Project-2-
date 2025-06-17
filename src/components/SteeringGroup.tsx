import React from 'react';

const SteeringGroup = () => {
  const steeringMembers = [
    {
      name: "Abb-d Taiyo",
      company: "Driftime®",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Alexie Sommer",
      company: "URGE Collective",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Aurelie Lionet",
      company: "Design for Life",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Jo Barnard",
      company: "Morrama",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        {/* 12 Column Grid: 4 cols left + 1 col gap + 7 cols right */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Section - 4 columns - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                Steering Group
              </h2>
            </div>
          </div>
          
          {/* Right Section - 7 columns (starting from column 6 to leave 1 column gap) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8 lg:space-y-12">
            
            {/* Steering Group Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {steeringMembers.map((member, index) => (
                <div key={index} className="group cursor-pointer">
                  {/* Member Photo */}
                  <div className="relative overflow-hidden bg-gray-800 aspect-square mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="space-y-1">
                    <h3 className="text-white text-base md:text-lg font-medium leading-tight group-hover:text-gray-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base font-light">
                      {member.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 lg:h-24">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 100" 
          preserveAspectRatio="none"
          fill="none"
        >
          <path 
            d="M0,100 L0,20 Q600,80 1200,20 L1200,100 Z" 
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  );
};

export default SteeringGroup;