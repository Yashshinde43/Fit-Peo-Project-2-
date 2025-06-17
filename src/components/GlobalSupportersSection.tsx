import React from 'react';

const GlobalSupportersSection = () => {
  const supporters = [
   
    ["Argentina", "Celina Hilbert", "", "Australia", "Alena Smith Interior Design", "Andrew Sloan", "Andrew Vaughan", "Andy Marks", "Arielle Breit", "Art Disrupt", "Aubrey Smidt", "AUTHENTIC DESIGN ALLIANCE (ADA)", "Ben Rennie", "BETTER FUTURE", "Bohdan Dorniak & Co Pty Ltd - PROSPECT, SA", "Brand & Communications at Edge Impact", "Breathe Architecture", "BVD Strategic", "Cameron Tonkinwise"],
      
    ["", "RMIT University", "Snag TV", "Seek & Design", "Snug House", "Society for Responsible Design Inc.", "Snook", "Stephanie Mulder", "Steve Baty", "STUDIO PERISCOPE", "Studio Regina", "studiospillane", "Tanisha Maria Naik", "The Design Thinkers", "UNEND", "United Studio", "vert design", "Wendy Fountain", "X+O", "Ys", "Zero Co pty Ltd", "", "Austria"],
   
    ["Fluyd", "Francisco Albuquerque", "GABRIEL ESTEVES DE OLIVEIRA LEITAO", "George Rutherford", "GIOVANA LORENA FAZION", "Green Mandarin", "Green Mandarin", "Greg Lopes", "IMK Arquitetura e Engenharia", "Jaakko Tammela", "Jenifer Rodrigues", "Juan Solis Gundin", "JULIA RESENDE", "Júlia Timponi", "JULIANA SIDSAMER", "Julianny aldel ratea", "Junior Magalhaes", "KAREN TIE KAWAKAMI", "Karla Scherer", "Larissa Nunes"],
    
    ["VIRGINIA CORNELSEN", "Visorama", "Wagner Lúcio", "weme", "", "Bulgaria", "Velina Dimitrova", "", "Canada", "Ardeshir Amini", "Centris Ltd", "Eliane Bowden", "Fletcher Scott Studio Inc.", "Meghan Hellstern", "PITCH PR", "PITCH PR", "Project 42", "Ryan Mayer", "SUPERFORT Creative Agency", "", "China", "Campaign Design", "Creative Atelier"],
    
    ["Enfain", "", "Guatemala", "Fabrizio Constanza", "", "India", "A BLUNT STORY", "Abba Hasa Foundation", "Dinu Prasanna", "DxE Inc", "LOCAL", "Minto Joy", "Sai Challa", "Shona Sinha", "Shreya Salian", "", "Indonesia", "Andini Putri Pramudya", "Wardani", "Nice To Meet You Studio", "Skemascal", "", "Ireland", "Timothy Cause"],
    
    ["Emberlight", "Emi Daly", "Emma Nolan", "EPIC Interpretive Design", "Fly Bird Design", "FUSE Graphic Design Ltd", "Global Creative at", "Johnson Controls", "Good As Gold", "Grace", "Graphic Design [+] at", "HUIT", "Graphic Design Communication at LSAD", "at UL", "Griffith College Design", "Image Now", "Image Now", "Imagine Lab", "Iman", "Ingrid Smyth", "Institute of Designers"],
    
    ["Sasha Sykes Studio", "Self employed - Nichola Wolfe.com", "Seema Chile", "Shane Casey", "Sharon Maxwell", "Snarl Type Foundry", "SLMD", "So Studio", "Sorcha Fitzgerald", "Stefan Paz", "Studio Kosmos", "Studio Saol", "studiomir", "superfork", "Susan Carberry", "Sweet Graphic Design", "The Factory", "The FACTORY", "The Public House", "THINKHOUSE", "Together We Create", "Totem Studio"],

    ["Andrew Roberts", "Clara Bardsley Design", "Dani Bond", "", "Nicaragua", "Bernardo van de Schepopp", "", "Nigeria", "Nuel Wogundu", "Ridwan Awujoola", "", "Norway", "Petchy", "Respons", "", "Pakistan", "Ali Murtaza", "Syed Faizan Raza", "", "Philippines", "Darwin Antipolo", "Jesi Sumeg-ang", "Mathijs Sterrenburg", "TAYO Change Agency"],
    
    ["PATRICIA SALCEDO", "The Hatch Studio", "", "Sweden", "Antrop", "Simone De Vivo", "", "Switzerland", "Blitz & Donner", "Cerca Research & Design Lab", "Reform GmbH", "Sarah Santacroce", "she-explores.tech", "Swiss Design Association", "Valerie Notter de 42", "", "Thailand", "Thaporn", "Tharawongthawat", "", "Turkey", "Bilal Akpinar", "Ceren Peren"]
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-6xl text-gray-300 leading-none mb-4">
            #661
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white font-light">
            Global Supporters
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-1 pb-20">
          {supporters.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-1">
              {column.map((supporter, index) => (
                <div 
                  key={index} 
                  className={`text-xs md:text-sm leading-tight transition-colors duration-200 cursor-pointer ${
                    supporter === '' 
                      ? 'h-4' 
                      : supporter.match(/^[A-Z][a-z]+$/) && supporter.length < 15
                        ? 'text-white font-medium hover:text-gray-300' 
                        : 'text-white'
                  }`}
                >
                  {supporter}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalSupportersSection;