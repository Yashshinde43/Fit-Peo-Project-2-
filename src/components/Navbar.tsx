import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Info, FileText, Mail, Globe, X, Plus } from 'lucide-react';
import GlobalChapterSelector from './GlobalChapterSelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGlobalChapterOpen, setIsGlobalChapterOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openGlobalChapter = () => {
    setIsGlobalChapterOpen(true);
    setIsMenuOpen(false);
  };

  const closeGlobalChapter = () => {
    setIsGlobalChapterOpen(false);
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/');
      if (sectionId) {
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { icon: Home, label: 'Home', action: () => handleNavigation('/') },
    { icon: Info, label: 'About', action: () => handleNavigation('/about') },
    { icon: FileText, label: 'Latest', action: () => handleNavigation('/latest') },
    { icon: Mail, label: 'Contact', action: () => handleNavigation('/contact')},
    { icon: Globe, label: 'Choose Global Chapter', action: openGlobalChapter },
  ];

  return (
    <>
      {/* Blur Overlay - only visible when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Fixed Bottom Right Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Menu Container */}
        <div className="bg-gray-200 shadow-lg border border-black overflow-hidden min-w-[280px]">
          
          {/* Menu Button - Always at the top */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-between w-full px-6 py-4 text-black font-medium text-lg hover:bg-red-500 hover:text-white transition-colors border-b border-black"
          >
            <span>Menu</span>
             {isMenuOpen ? (
      <X className="w-5 h-5" />   
            ) : (
              <Plus className="w-6 h-6" />
            )}
          </button>

          {/* Expanded Menu Panel - slides down from below the menu button */}
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            {/* Navigation Items */}
            <div>
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full flex items-center gap-4 px-6 py-4 text-black text-base font-medium hover:bg-red-500 hover:text-white transition-colors border-b border-black text-left last:border-b-0"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Declare Now Button in expanded menu */}
            <div className="border-t border-black">
              <button
                onClick={() => {
                  scrollToSection('declare-emergency');
                  setIsMenuOpen(false);
                }}
                className="w-full px-6 py-4 text-black font-medium text-base hover:bg-red-500 hover:text-white transition-colors"
              >
                Declare Now
              </button>
            </div>
          </div>

          {/* Declare Now Button - only visible when menu is closed */}
          {!isMenuOpen && (
            <button
              onClick={() => scrollToSection('declare-emergency')}
              className="w-full px-6 py-4 text-black font-medium text-lg hover:bg-red-500 hover:text-white transition-colors border-t border-black"
            >
              Declare Now
            </button>
          )}
        </div>
      </div>

      {/* Global Chapter Selector Modal */}
      <GlobalChapterSelector 
        isOpen={isGlobalChapterOpen} 
        onClose={closeGlobalChapter} 
      />
    </>
  );
};

export default Navbar;