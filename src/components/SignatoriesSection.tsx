import React from 'react';

const SignatoriesSection = () => {
  const signatories = [
    ["21-87", "216 Signs", "31% Wool", "40", "A-Side", "Aalia Ahamed", "Abbie Williams", "abc", "ACRE – A Creative", "Endeavour Ltd", "Active Matter", "AOX", "Adele Kelly", "AdesignStone", "Advocate Design Agency", "Aetha Design", "Aferon Design Ltd", "Alan Pitchforth", "Alex Kimber Design", "Alexander Miller"],
    
    ["Biomimicry Innovation Lab", "Bliss", "Blunt Crayon", "Bold Studio", "Boyle & Perks", "Brand Narrative at", "Pentagram", "Bravand", "Breedon", "Bright Signals Design at", "Bright Signals Ltd", "Broadley Creative Ltd", "Bronwen Rees", "Buff Motion", "Butterfly", "BuyDesign", "Carter Studio", "Célibataire", "Charli Blighton", "Charli Peake"],
    
    ["Design by Mondial", "Design Council", "Design For Good Club", "Design for Joy", "Design Nature CIC", "Design Science", "Design Truth", "DesignWright", "DH Design Studios Ltd", "Dids Macdonald", "Dionne Griffith", "Diploma in Professional", "Studies at London College", "of Communication", "DISOMT", "Dominik Bihl", "Dr Emma Prowell", "Dr Karl Jeffries", "Drew Kendrick", "Drifftime® Media"],
    
    
    ["Francis Rowland", "Frankie Thelwell", "FranklinTill", "Future Island-Island at", "Ulster University-led", "consortium", "Future Selves", "Futurice Ltd", "Fynn", "G R Moore Limited", "G3 Orcative", "Gareth Neal Ltd", "Gareth Wild", "Garic Agency", "Genevieve Bennett Ltd", "Genuinely Conscious", "George Charnley", "George Rowland", "GET LOST", "Gianfranco Pagoto"],
    
    
    ["Isabella", "Jackie Malcolm", "Jake Owen", "James Kindred", "James Tooze", "Jamie Pinkham", "jan lewis creative", "Jane Penny", "Jason Bruges Studio", "Jason Mesut", "Jemima Duncalf", "Jess Baxter", "Jess Francis", "JK Creative Company", "Jo Mansfield", "Joanna boethert", "John Gilbert", "Joseph Folkes", "Josh Elgood", "Joshua Tunstill"],
    
   
    ["Mainlyphotography Studio", "Mani I", "Mantra", "Mar Mar Co. Studio", "March Studio Ltd", "Maria Elina", "Marion Ratie", "Mark Hicks", "Marta De Prisco", "MARTA ROSSATO", "INTERIORS", "Martin Hopkins", "Martin Price", "Martin Wright", "Mat Denney", "Materialise Interiors", "Materials Council", "Materialsinformation Ltd", "Matt Hollands", "Matteo Menaspace"],
    
 
    ["Ohana Studio Ltd", "Ok deploy", "Ole Makkesen Designlab", "Olive Kenningtom", "Oliver Lloyd", "Olivia Harris", "OneKind Creative", "Optimist Works", "Oracle Design", "Orangery", "ORCA", "Osch", "Other Today", "OURI Labs", "OXygen", "Papaya-Studio", "Papillon Bleu", "Paul Bailey", "Paul Gibson Design", "Pearson Lloyd"],
    
   
    ["Sheffield Hallam University", "Simone Cucchi", "Snook", "Social Change", "Sophie Mockridge", "Sophie Reynolds", "Sophie Thomas", "Spark & Bell", "Special Projects", "Spotless", "Struli Gidugu", "ssssf", "Standfirst", "Stefan Bassing", "StillNimble", "Storo", "Straight Forward Design", "Stuart Gough", "Studio Breuil", "Studio Casey Joy"],
    

    ["The Manufacturing", "Technology Centre", "Theo Dormer", "ThinkDo", "Thinkpublic", "Thom Baker Consultancy", "Thomas Baraldi Cassar", "Thomas Wylam", "thomas matthews", "Thoughtcraft", "Tijana Tasich", "Tim Frenneaux & Co", "Tina Bernstein", "TLC", "Tokyo Calm", "Tokyo Calm", "Tom Greenwood", "Tomas Gecim", "Tommy Papaioannou", "Tria Design"]
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
      
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-6xl text-gray-300 leading-none mb-4">
            #514
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <p className="text-lg md:text-xl lg:text-2xl text-white font-light">
              Signatories and counting in
            </p>
            <span className="bg-red-500 text-black px-3 py-1 rounded-xl text-sm font-medium mt-2 sm:mt-0 inline-block w-fit">
              D! UK
            </span>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-1">
          {signatories.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-1">
              {column.map((signatory, index) => (
                <div 
                  key={index} 
                  className="text-xs md:text-sm leading-tight text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {signatory}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatoriesSection;