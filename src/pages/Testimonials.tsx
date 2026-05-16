import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Voice of our Travelers"
          subtitle="Real stories, real photos, and real memories shared by our community of mountain explorers."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
           {TESTIMONIALS.map((t) => (
             <div key={t.id} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
               <Quote className="h-10 w-10 text-emerald-100 absolute top-8 right-8" />
               <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6 group-hover:scale-110 transition-transform"  referrerPolicy="no-referrer"/>
               <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("h-4 w-4", i < Math.floor(t.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200")} />
                  ))}
               </div>
               <p className="text-gray-600 italic leading-relaxed mb-8 font-serif text-lg">"{t.text}"</p>
               <div>
                  <h5 className="text-xl font-bold text-gray-900">{t.name}</h5>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{t.location}</span>
               </div>
             </div>
           ))}
           {/* Add more testimonials to make it look full */}
           <div className="bg-emerald-600 text-white p-10 rounded-[2rem] shadow-lg flex flex-col items-center justify-center text-center">
              <h4 className="text-3xl font-bold mb-6">Be our next story!</h4>
              <p className="text-emerald-50 mb-8 opacity-80 leading-relaxed">
                Join the 10,000+ happy explorers who found their peace in the hills. Book your journey today.
              </p>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                 Share Your Review
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
