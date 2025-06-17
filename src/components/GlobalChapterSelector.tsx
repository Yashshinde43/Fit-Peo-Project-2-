import React from 'react';
import { X } from 'lucide-react';

interface GlobalChapterSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalChapterSelector: React.FC<GlobalChapterSelectorProps> = ({ isOpen, onClose }) => {
  const chapters = [
    { name: 'UNITED KINGDOM', color: 'text-white' },
    { name: 'IRELAND', color: 'text-white' },
    { name: 'BRASIL', color: 'text-white' },
    { name: 'AUSTRALIA', color: 'text-white' }
  ];

  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Full Screen Modal */}
      <div 
        className="fixed inset-0 bg-black z-50 overflow-hidden"
        onClick={handleBackdropClick}
      >
        {/* Header Section - Full Width */}
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-12">
          {/* D! Logo - Top Left */}
          <div className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
            D!
          </div>
          
          {/* Close Button - Top Right */}
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
          </button>
        </div>

        {/* Main Content Container with 12-column grid */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-200px)]">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-16 h-full items-center">
            
            {/* Left Section - 3 columns for text */}
            <div className="col-span-12 md:col-span-3 flex items-center mb-8 md:mb-0">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight">
                Select Global Chapter:
              </h2>
            </div>
            
            {/* Right Section - 7 columns for chapters (starting from column 6 to leave 2 columns gap) */}
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                {chapters.map((chapter, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer overflow-hidden hover:bg-red-500 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-sm transition-all duration-300"
                    onClick={() => {
                      console.log(`Selected: ${chapter.name}`);
                      onClose();
                    }}
                  >
                    <h3 
                      className={`
                        ${chapter.color} 
                        group-hover:text-white
                        font-black 
                        text-3xl
                        sm:text-4xl
                        md:text-5xl 
                        lg:text-6xl 
                        xl:text-7xl
                        2xl:text-8xl
                        leading-none 
                        tracking-tighter
                        transition-all 
                        duration-300 
                        ease-out
                        transform
                        group-hover:scale-105
                        group-hover:translate-x-2
                        origin-left
                        select-none
                        break-words
                      `}
                      style={{
                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                        fontWeight: '900',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {chapter.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalChapterSelector;