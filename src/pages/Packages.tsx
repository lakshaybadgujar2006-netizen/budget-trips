import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TOUR_PACKAGES } from '../constants';
import { TourCard } from '../components/TourCard';
import { RatingSystem } from '../components/RatingSystem';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TourPackages() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const filteredPackages = TOUR_PACKAGES.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <SectionHeader
            title="Premium Tour Packages"
            subtitle="Carefully crafted itineraries for solo travelers, families, and adventure seekers."
            className="mb-0"
          />
          
          <div className="w-full lg:w-auto space-y-4">
            {/* Search Bar */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search by location or trip..."
                className="w-full lg:w-96 px-6 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all pl-14"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Filter className="h-5 w-5 text-gray-400 absolute left-6 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-500 transition-colors" />
            </div>

            <div className="flex flex-wrap gap-4 items-center bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-2 px-4 border-r border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Category</span>
               </div>
               {['All', 'Budget', 'Luxury', 'Adventure', 'Family'].map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={cn(
                     "px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                     activeCategory === cat ? "bg-emerald-600 text-white" : "text-gray-600 hover:bg-gray-100"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="flex flex-col h-full">
              <TourCard pkg={pkg} />
              <div className="mt-4">
                <button 
                  onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-emerald-600 transition-all shadow-sm"
                >
                  {expandedPackage === pkg.id ? (
                    <>Hide Reviews <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>View & Write Reviews <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>
                {expandedPackage === pkg.id && (
                  <div className="mt-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                    <RatingSystem packageId={pkg.id} />
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {filteredPackages.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="bg-white p-12 rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-xl font-bold text-gray-400">No packages match your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-4 text-emerald-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Custom Package Section */}
          {activeCategory === 'All' && filteredPackages.length > 0 && [...Array(3)].map((_, i) => (
             <div key={i} className="group bg-gray-100/50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-12 text-center h-full">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-6"></div>
                <h3 className="text-xl font-bold text-gray-400">Custom Package</h3>
                <p className="text-sm text-gray-400 mt-2">Coming soon or request a custom quote now.</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
