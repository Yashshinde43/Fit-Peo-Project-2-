import React from 'react';

const ActsOfEmergency = () => {
  const acts = [
    {
      number: "1",
      title: "Sound the Alarm",
      description: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice."
    },
    {
      number: "2", 
      title: "Start the Journey",
      description: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start."
    },
    {
      number: "3",
      title: "Bring Clients with Us", 
      description: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress."
    },
    {
      number: "4",
      title: "Measure What We Make",
      description: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    },
    {
      number: "5",
      title: "Redefine 'Good'",
      description: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    },
    {
      number: "6", 
      title: "Educate, Accelerate",
      description: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
    },
    {
      number: "7",
      title: "Design for Justice",
      description: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
    },
    {
      number: "8",
      title: "Amplify Voices for Change", 
      description: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Title */}
          <div className="lg:sticky lg:top-8 space-y-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight">
              8 Acts of Emergency
            </h2>
          </div>
          
          {/* Right side - Description text and Acts table */}
          <div className="space-y-8">
            {/* Description text positioned above the acts */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              What does it take to Declare? It's accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
            </p>
            
            {/* Acts table with borders */}
            <div className="border border-black">
              {acts.map((act, index) => (
                <div key={index} className="bg-gray-200 border-b border-black last:border-b-0">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl md:text-5xl font-bold text-black flex-shrink-0 pr-4 border-r border-black">
                        {act.number}
                      </div>
                      <div className="flex-1 pl-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
                          {act.title}
                        </h3>
                        <p className="text-black text-base md:text-lg leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActsOfEmergency;