import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { FAQS } from '../constants';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { NavLink } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about your upcoming Himalayan adventure."
          centered
        />

        <div className="space-y-4 mt-20">
           {FAQS.map((faq, i) => (
             <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <button
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 className="flex justify-between items-center w-full px-8 py-6 text-left"
               >
                 <span className="text-xl font-bold text-gray-900">{faq.question}</span>
                 <div className={cn(
                   "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                   openIndex === i ? "bg-emerald-600 text-white rotate-180" : "bg-gray-100 text-gray-400"
                 )}>
                   {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                 </div>
               </button>
               {openIndex === i && (
                 <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-500 leading-relaxed border-t border-gray-50 pt-6">
                      {faq.answer}
                    </p>
                 </div>
               )}
             </div>
           ))}
        </div>

        <div className="mt-24 bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center relative overflow-hidden">
           <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                 <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                No problem! Get in touch with our travel consultants directly and we'll help you out in minutes.
              </p>
              <div className="flex justify-center gap-4">
                 <NavLink to="/contact" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all">
                    Contact Us
                 </NavLink>
                 <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
                    Chat with Expert
                 </button>
              </div>
           </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg- emerald-50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
