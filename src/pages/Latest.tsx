import React, { useState } from 'react';

const Latest = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');

  const categories = ['All', 'Events', 'Case Studies', 'Updates', 'Perspective'];
  const chapters = ['All', 'D! UK', 'D! Ireland', 'D! Australia'];

  const articles = [
    {
      id: 1,
      category: 'Case Studies',
      chapter: 'D! Ireland',
      date: '30.04.2025, 04 PM:30',
      title: 'Embedding Sustainability in the Design Curriculum',
      subtitle: 'Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design\'s curriculum for BA Graphic Design students.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: true,
      type: 'case-study'
    },
    {
      id: 2,
      category: 'Events',
      chapter: 'D! UK',
      date: '24.04.2025, 03 PM:30',
      title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
      subtitle: 'Working Session Recap: How can Service Design drive meaningful sustainability impact?',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: false,
      type: 'working-session'
    },
    {
      id: 3,
      category: 'Perspective',
      chapter: 'D! Australia',
      date: '18.12.2024, 08 AM:38',
      title: 'Sasha Titchkosky Interview',
      subtitle: 'An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: false,
      type: 'interview'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesChapter = selectedChapter === 'All' || article.chapter === selectedChapter;
    return matchesCategory && matchesChapter;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* D! Logo positioned at top-left */}
      <div className="px-6 py-6">
        <div className="text-white font-black text-6xl leading-none tracking-tight">
          D!
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* 12 Column Grid: 4 cols left + 1 col gap + 7 cols right */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          
          {/* Left Section - 4 columns - Made Sticky */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-8 space-y-8">
              {/* Categories Section */}
              <div className="space-y-4">
                <h2 className="text-white text-2xl font-medium">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* View by Chapter Section */}
              <div className="space-y-4">
                <h2 className="text-white text-2xl font-medium">View by Chapter</h2>
                <div className="flex flex-wrap gap-2">
                  {chapters.map((chapter) => (
                    <button
                      key={chapter}
                      onClick={() => setSelectedChapter(chapter)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedChapter === chapter
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {chapter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - 7 columns (starting from column 6 to leave 1 column gap) */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="space-y-12">
              {filteredArticles.map((article, index) => (
                <article key={article.id} className="group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Article Image */}
                    <div className="md:col-span-1">
                      <div className="relative overflow-hidden bg-gray-800 aspect-[4/3]">
                        {article.type === 'case-study' ? (
                          <div className="relative">
                            <img 
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay with text */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-6">
                              <div className="bg-gray-600 bg-opacity-80 px-3 py-1 rounded text-white text-sm font-medium self-start">
                                Case Study
                              </div>
                              <div className="text-white">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-2">
                                  EMBEDDING<br />
                                  SUSTAINABILITY<br />
                                  IN THE DESIGN<br />
                                  CURRICULUM
                                </div>
                                <div className="text-sm opacity-80">
                                  from National College of Art & Design, Ireland
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : article.type === 'working-session' ? (
                          <div className="relative">
                            <img 
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay with text for working session */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-6">
                              <div className="bg-white bg-opacity-90 px-4 py-3 rounded text-black self-start max-w-xs">
                                <div className="text-sm font-bold mb-1">Working Session Recap</div>
                                <div className="text-xs">
                                  How can Service Design drive meaningful sustainability impact?
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Interview type - clean image without overlay
                          <div className="relative">
                            <img 
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="md:col-span-1 space-y-4 flex flex-col justify-center">
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="bg-gray-700 text-white px-3 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-medium">
                          {article.chapter}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {article.date}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight group-hover:text-gray-300 transition-colors">
                        {article.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;