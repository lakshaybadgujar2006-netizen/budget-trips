import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Mountain, Users, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
           <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544430294-754805826f1c?q=80&w=1200&auto=format&fit=crop"
                alt="Our Team"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-10 rounded-3xl text-white shadow-xl z-20 hidden md:block">
                 <div className="text-5xl font-bold mb-2">12+</div>
                 <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Experience</div>
              </div>
           </div>
           <div className="space-y-8">
              <SectionHeader
                title="Your Journey is Our Passion"
                subtitle="Founded in 2012, Budget Trips has redefined luxury and comfort in Indian hill station tourism. Our mission is to connect travelers with the soul of the mountains."
              />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                 <p>
                   We started as a small group of mountaineers who wanted to share the unexplored beauty of the Indian Himalayas with the world. Today, we are proud to be one of the most trusted names in the industry, having hosted over 10,000 travelers from across the globe.
                 </p>
                 <p>
                   Our team consists of passionate travel experts, licensed local guides, and dedicated support staff who work around the clock to ensure your trip is nothing short of magical.
                 </p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Heart />, title: 'Customer First', desc: 'Every detail of our tours is centered around your comfort and wishes.' },
            { icon: <Award />, title: 'Premium Quality', desc: 'We partner with the finest hotels and transport providers in the region.' },
            { icon: <Users />, title: 'Local Communities', desc: 'We actively support local artisans and communities through sustainable tourism.' },
            { icon: <Mountain />, title: 'Heritage Preservation', desc: 'Our tours emphasize the cultural and natural heritage of the hills.' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 p-4">
                {React.cloneElement(item.icon as any, { className: 'w-full h-full' })}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
