import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions? Our team of Himalayan experts is here to help you 24/7."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
           <div className="lg:col-span-1 space-y-8">
              {[
                { 
                  icon: <MessageCircle />, 
                  title: 'WhatsApp', 
                  info: '+91 92178 07801', 
                  sub: 'Support on Chat 24/7',
                  link: 'https://wa.me/919217807801'
                },
                { 
                  icon: <Instagram />, 
                  title: 'Instagram', 
                  info: '@budgettrips2025', 
                  sub: 'Follow us for updates',
                  link: 'https://www.instagram.com/budgettrips2025?igsh=MXFhZm8wY3pqbjhqdA=='
                },
                { icon: <Mail />, title: 'Email', info: 'budgettrip4u@gmail.com', sub: 'Support 24/7' },
                { icon: <MapPin />, title: 'Head Office', info: 'Sector 4, Gurgaon, Landmark', sub: 'GURUGRAM, HARYANA, India - 122001' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
                   <div className="bg-white p-4 rounded-2xl text-emerald-600 shadow-sm">
                      {React.cloneElement(item.icon as any, { className: 'h-6 w-6' })}
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <div className="text-lg font-bold text-gray-900">{item.info}</div>
                      )}
                      <div className="text-xs text-gray-500 font-medium">{item.sub}</div>
                   </div>
                </div>
              ))}
           </div>

           <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 p-8 md:p-12">
              <form className="space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" />
                    <input type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" />
                 </div>
                 <input type="text" placeholder="Subject" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium" />
                 <textarea rows={6} placeholder="How can we help?" className="w-full px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"></textarea>
                 <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/10">
                    Send Message <Send className="h-5 w-5" />
                 </button>
              </form>
           </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] bg-gray-100 rounded-[2.5rem] flex items-center justify-center text-gray-400 overflow-hidden relative group">
           <img
             src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
             alt="Map Background"
             className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[2px]">
              <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
                 <div className="bg-emerald-600 p-3 rounded-2xl text-white"><MapPin className="h-6 w-6" /></div>
                 <div>
                    <h5 className="font-bold text-gray-900">Visit Our Gurgaon Office</h5>
                    <p className="text-sm text-gray-500">Directions available on Google Maps</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
