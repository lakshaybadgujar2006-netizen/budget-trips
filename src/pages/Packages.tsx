import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TOUR_PACKAGES } from '../constants';
import { TourCard } from '../components/TourCard';
import { RatingSystem } from '../components/RatingSystem';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TourPackages() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);

  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>
          
          <SectionHeader
            title="Premium Tour Packages"
            subtitle="Carefully crafted itineraries for solo travelers, families, and adventure seekers."
            className="mb-0 text-left relative z-10"
          />
          
          <div className="w-full lg:w-auto space-y-6 relative z-10">
            {/* Search Bar */}
            <div className="relative group/search">
              <input 
                type="text" 
                placeholder="Search by location or trip..."
                className="w-full lg:w-[400px] px-8 py-5 bg-gray-50/50 rounded-3xl border-2 border-transparent shadow-inner focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white transition-all pl-16 text-lg font-medium placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Filter className="h-6 w-6 text-gray-400 absolute left-6 top-1/2 -translate-y-1/2 group-focus-within/search:text-emerald-500 transition-colors" />
            </div>

            <div className="flex flex-wrap gap-2 items-center bg-gray-50/50 p-2 rounded-2xl border border-gray-100">
               <div className="flex items-center gap-2 px-4 border-r border-gray-200">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Filter By</span>
               </div>
               {['All', 'Budget', 'Luxury', 'Adventure', 'Family'].map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-5 py-2.5 rounded-xl text-sm font-bold transition-all relative overflow-hidden",
                     activeCategory === cat ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "text-gray-500 hover:bg-white hover:text-emerald-600 border border-transparent hover:border-emerald-100"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col h-full group hover:-translate-y-1 transition-all duration-500">
              <TourCard pkg={pkg} />
              
              <div className="mt-4 flex flex-col gap-3">
                {/* Details Expansion Toggle */}
                <button 
                  onClick={() => setExpandedDetails(expandedDetails === pkg.id ? null : pkg.id)}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-bold transition-all shadow-sm border",
                    expandedDetails === pkg.id 
                      ? "bg-blue-50 border-blue-100 text-blue-700 font-extrabold" 
                      : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  )}
                >
                  {expandedDetails === pkg.id ? (
                    <>Close Details <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>Package Specifications <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>

                {/* Reviews Expansion Toggle */}
                <button 
                  onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-bold transition-all shadow-sm border",
                    expandedPackage === pkg.id 
                      ? "bg-emerald-50 border-emerald-100 text-emerald-700" 
                      : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                  )}
                >
                  {expandedPackage === pkg.id ? (
                    <>Hide Reviews <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>View & Write Reviews <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>

                {/* Details Section */}
                {expandedDetails === pkg.id && (
                  <div className="mt-2 bg-white p-8 rounded-[2.5rem] border border-blue-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                       <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">i</span>
                       Trip Overview
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6 italic">"{pkg.description}"</p>
                    
                    <div className="space-y-4">
                      <h5 className="text-sm font-black uppercase tracking-widest text-blue-500">Package Inclusions</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.includes.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 group/item hover:bg-blue-50/50 hover:border-blue-100 transition-all">
                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold">✓</div>
                             <span className="text-sm font-medium text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Reviews Section */}
                {expandedPackage === pkg.id && (
                  <div className="mt-2 bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
                    <RatingSystem packageId={pkg.id} />
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {filteredPackages.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="bg-white p-16 rounded-[4rem] border-2 border-dashed border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="h-10 w-10 text-gray-300" />
                </div>
                <p className="text-2xl font-black text-gray-300 tracking-tight">No Results Found</p>
                <p className="text-gray-400 mt-2 max-w-md mx-auto font-medium">Try adjusting your filters or search keywords to find the perfect adventure.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-8 px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
