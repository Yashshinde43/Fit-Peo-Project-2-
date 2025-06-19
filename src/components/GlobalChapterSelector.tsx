import React from 'react';
import { X } from 'lucide-react';

interface GlobalChapterSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlobalChapterSelector: React.FC<GlobalChapterSelectorProps> = ({ isOpen, onClose }) => {
  const chapters = ['UNITED KINGDOM', 'IRELAND', 'BRASIL', 'AUSTRALIA'];

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
    <div
      className="fixed inset-0 z-50 bg-black text-white flex flex-col"
      onClick={handleBackdropClick}
    >
      <div className="flex justify-between items-center p-4 sm:p-6">
        <div className="text-white font-black text-3xl sm:text-5xl tracking-tight">
          D!
        </div>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex-1 px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-10 overflow-y-auto">
        <div className="md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            Select Global Chapter:
          </h2>
        </div>

        <div className="md:w-1/2">
          <div className="space-y-4 sm:space-y-5">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="cursor-pointer px-2 py-1 hover:bg-red-500"
                onClick={() => {
                  console.log(`Selected: ${chapter}`);
                  onClose();
                }}
              >
                <h3
                  className="
                    font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                    text-white leading-none tracking-tight
                  "
                  style={{
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontWeight: '900',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {chapter}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalChapterSelector;
