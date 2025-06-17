import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const DeclareEmergency = () => {
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    website: '',
    country: 'United Kingdom',
    discipline: '',
    email: '',
    reason: ''
  });
  const [consentChecked, setConsentChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [disciplineDropdownOpen, setDisciplineDropdownOpen] = useState(false);

  const declarationTypes = [
    { id: 'business', label: 'As a business' },
    { id: 'individual', label: 'As an individual' },
    { id: 'institution', label: 'As a public institution' },
    { id: 'team', label: 'As a team or department' }
  ];

  const countries = [
    'United Kingdom',
    'Ireland',
    'Australia',
    'Brasil',
    'Other'
  ];

  const disciplines = [
    'Graphic Design',
    'Industrial Design',
    'Digital Design',
    'Communication Design',
    'Service Design',
    'Product Design',
    'UX/UI Design',
    'Brand Design',
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
    console.log('Declaration submitted:', { selectedType, formData, consentChecked, newsletterChecked });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - Title (4 columns) - Sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-0">
              <h1 className="text-2xl font-normal text-white tracking-tight">
                Declare Emergency Now
              </h1>
            </div>
          </div>
          
          {/* Right side - Description and Form (7 columns) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-8">
            {/* Description text */}
            <div className="space-y-6">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                Design Declares is open to individuals and institutions working in industrial,   
              </p>
            </div>

            {/* Declaration Form */}
            <div className="border border-white mt-16">
              <div className="p-8 md:p-10 lg:p-12">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-12">
                  I am Declaring Emergency
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-0">
                  {/* Declaration Type Selection */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {declarationTypes.map((type) => (
                        <label
                          key={type.id}
                          className="flex items-center gap-4 cursor-pointer group"
                        >
                          <div className="relative">
                            <input
                              type="radio"
                              name="declarationType"
                              value={type.id}
                              checked={selectedType === type.id}
                              onChange={(e) => setSelectedType(e.target.value)}
                              className="sr-only"
                            />
                            <div 
                              className={`w-6 h-6 border-2 border-white transition-all duration-200 ${
                                selectedType === type.id 
                                  ? 'bg-white' 
                                  : 'bg-transparent group-hover:bg-white group-hover:bg-opacity-10'
                              }`}
                            >
                              {selectedType === type.id && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="w-3 h-3 bg-black"></div>
                                </div>
                              )}
                            </div>
                          </div>
                          <span className="text-white text-lg md:text-xl font-light group-hover:text-gray-300 transition-colors">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Website Field */}
                  <div className="border border-white">
                    <input
                      type="url"
                      placeholder="Website:*"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full bg-transparent px-4 py-4 text-white placeholder-gray-400 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Country Dropdown */}
                  <div className="relative border border-white">
                    <button
                      type="button"
                      onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                      className="w-full bg-transparent px-4 py-4 text-left focus:outline-none flex justify-between items-center"
                    >
                      <span className="text-gray-400">
                        Country:* <span className="text-white ml-2">{formData.country}</span>
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          countryDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {countryDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 bg-black border border-white border-t-0 z-10">
                        {countries.map((country, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              handleInputChange('country', country);
                              setCountryDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-900 transition-colors border-b border-gray-700 last:border-b-0"
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Discipline Dropdown */}
                  <div className="relative border border-white">
                    <button
                      type="button"
                      onClick={() => setDisciplineDropdownOpen(!disciplineDropdownOpen)}
                      className="w-full bg-transparent px-4 py-4 text-left focus:outline-none flex justify-between items-center"
                    >
                      <span className="text-gray-400">
                        Discipline:* {formData.discipline && (
                          <span className="text-white ml-2">{formData.discipline}</span>
                        )}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          disciplineDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {disciplineDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 bg-black border border-white border-t-0 z-10">
                        {disciplines.map((discipline, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              handleInputChange('discipline', discipline);
                              setDisciplineDropdownOpen(false);
                            }}
                            className="w-full px-4 py-3 text-left text-white hover:bg-gray-900 transition-colors border-b border-gray-700 last:border-b-0"
                          >
                            {discipline}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
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

                  {/* Reason Textarea */}
                  <div className="border border-white">
                    <textarea
                      placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
                      value={formData.reason}
                      onChange={(e) => handleInputChange('reason', e.target.value)}
                      rows={6}
                      className="w-full bg-transparent px-4 py-4 text-white placeholder-gray-400 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 py-6">
                    <div className="relative flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        id="consent-checkbox"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="consent-checkbox" 
                        className="cursor-pointer flex items-center justify-center w-5 h-5 border border-white bg-transparent hover:bg-gray-900 transition-colors"
                      >
                        {consentChecked && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </label>
                    </div>
                    <label htmlFor="consent-checkbox" className="text-white text-sm leading-relaxed cursor-pointer">
                      I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
                    </label>
                  </div>

                  {/* Newsletter Checkbox */}
                  <div className="flex items-start gap-3 py-2">
                    <div className="relative flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        id="newsletter-checkbox"
                        checked={newsletterChecked}
                        onChange={(e) => setNewsletterChecked(e.target.checked)}
                        className="sr-only"
                      />
                      <label 
                        htmlFor="newsletter-checkbox" 
                        className="cursor-pointer flex items-center justify-center w-5 h-5 border border-white bg-transparent hover:bg-gray-900 transition-colors"
                      >
                        {newsletterChecked && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </label>
                    </div>
                    <label htmlFor="newsletter-checkbox" className="text-white text-sm leading-relaxed cursor-pointer">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </label>
                  </div>

                  {/* Privacy Policy Link */}
                  <div className="pt-4 pb-8">
                    <a href="#" className="text-white text-sm underline hover:text-gray-300 transition-colors">
                      View our Privacy Policy
                    </a>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="bg-white hover:bg-gray-200 text-black px-12 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
                    >
                      Declare Emergency Now
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

export default DeclareEmergency;