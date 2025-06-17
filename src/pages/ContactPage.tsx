import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamToContact: '',
    enquiryType: '',
    message: ''
  });
  const [isNewsletterChecked, setIsNewsletterChecked] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [enquiryDropdownOpen, setEnquiryDropdownOpen] = useState(false);

  const teamOptions = [
    'General Enquiry',
    'Partnership', 
    'Media',
    'Events',
    'Technical Support'
  ];

  const enquiryOptions = [
    'General Question',
    'Partnership Opportunity',
    'Media Inquiry',
    'Event Collaboration',
    'Technical Issue',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* D! Logo positioned at top-left */}
      <div className="px-6 py-6">
      <div
  className="text-white text-6xl  font-black"
  style={{ fontFamily: 'var(--font-inter), Helvetica, sans-serif' }}
>
  D!
</div>

      </div>

      <div className="container mx-auto px-6 py-12">
        {/* 12 Column Grid: 4 cols left + 1 col gap + 7 cols right */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          
          {/* Left Section - 4 columns - Made Sticky */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Contact Heading - Sticky */}
            <div className="lg:sticky lg:top-8">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                Contact
              </h1>
            </div>
          </div>
          
          {/* Right Section - 7 columns (starting from column 6 to leave 1 column gap) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {/* Complete rectangular border around the entire form */}
            <div className="border border-white">
              <div className="p-8 md:p-10 lg:p-12">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-8 lg:mb-12">
                  Send Us A Message
                </h2>
                
                <form onSubmit={handleSubmit} className="">
                  {/* Name field - Individual rectangular border */}
                  <div className="border border-white">
                    <input
                      type="text"
                      placeholder="Name:*"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-transparent px-4 py-4 text-white placeholder-gray-400 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Email field - Individual rectangular border */}
                  <div className="border border-white">
                    <input
                      type="email"
                      placeholder="Email:*"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-transparent px-4 py-4 text-white placeholder-gray-400 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Team to contact dropdown - Individual rectangular border */}
                  <div className="relative border border-white">
                    <button
                      type="button"
                      onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                      className="w-full bg-transparent px-4 py-4 text-left focus:outline-none flex justify-between items-center"
                    >
                      <span className="text-gray-400">
                        Team to contact:* {formData.teamToContact && (
                          <span className="text-white ml-2">{formData.teamToContact}</span>
                        )}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          teamDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {teamDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 bg-black border border-white border-t-0 z-10">
                        {teamOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              handleInputChange('teamToContact', option);
                              setTeamDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-900 transition-colors border-b border-gray-700 last:border-b-0"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Enquiry type dropdown - Individual rectangular border */}
                  <div className="relative border border-white">
                    <button
                      type="button"
                      onClick={() => setEnquiryDropdownOpen(!enquiryDropdownOpen)}
                      className="w-full bg-transparent px-4 py-4 text-left focus:outline-none flex justify-between items-center"
                    >
                      <span className="text-gray-400">
                        Enquiry type:* {formData.enquiryType && (
                          <span className="text-white ml-2">{formData.enquiryType}</span>
                        )}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          enquiryDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {enquiryDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 bg-black border border-white border-t-0 z-10">
                        {enquiryOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              handleInputChange('enquiryType', option);
                              setEnquiryDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-900 transition-colors border-b border-gray-700 last:border-b-0"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message textarea - Individual rectangular border */}
                  <div className="border border-white">
                    <textarea
                      placeholder="Please write your message here."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      className="w-full bg-transparent px-4 py-4 text-white placeholder-gray-400 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Newsletter checkbox */}
                  <div className="flex items-start gap-3 py-6">
                    <div className="relative flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        id="newsletter-signup"
                        checked={isNewsletterChecked}
                        onChange={(e) => setIsNewsletterChecked(e.target.checked)}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="newsletter-signup" 
                        className="cursor-pointer flex items-center justify-center w-5 h-5 border border-white bg-transparent hover:bg-gray-900 transition-colors"
                      >
                        {isNewsletterChecked && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </label>
                    </div>
                    <label htmlFor="newsletter-signup" className="text-gray-300 text-sm leading-relaxed cursor-pointer">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </label>
                  </div>

                  {/* Privacy policy link */}
                  <div className="pt-2">
                    <a href="#" className="text-gray-400 text-sm underline hover:text-gray-300 transition-colors">
                      View our Privacy Policy
                    </a>
                  </div>

                  {/* Submit button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;