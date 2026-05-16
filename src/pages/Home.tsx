import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mountain, Compass, Map, ShieldCheck, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TourCard } from '../components/TourCard';
import { TOUR_PACKAGES, DESTINATIONS, TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop"
            alt="Himalayan Mountains"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.3em] text-sm font-bold text-emerald-400 mb-6 block">Welcome to Budget Trips</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter">
              Escape to the <span className="italic font-serif font-light">Serenity</span> of the Hills
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Curated luxury tours to India's most breathtaking hill stations. Experience nature like never before.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NavLink
                to="/packages"
                className="bg-emerald-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-900/40"
              >
                Explore Packages
              </NavLink>
              <NavLink
                to="/destinations"
                className="flex items-center gap-3 px-8 py-5 rounded-full text-white font-bold hover:bg-white/10 transition-all backdrop-blur-md border border-white/30"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600">
                  <ImageIcon className="h-5 w-5 fill-current" />
                </div>
                View Gallery
              </NavLink>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
           <div className="flex items-center gap-4">
              <div className="h-px w-20 bg-white/30"></div>
              <span className="text-white/50 text-xs uppercase tracking-widest font-bold">Scroll to explore</span>
           </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Famous Hill Stations"
            subtitle="Discover the jewels of the Indian mountains, from the snow-capped north to the lush green south."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 3).map((dest) => (
              <motion.div
                key={dest.id}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 block">{dest.state}</span>
                  <h3 className="text-3xl font-bold mb-4">{dest.name}</h3>
                  <p className="text-sm text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
                    {dest.description}
                  </p>
                  <NavLink
                    to={`/destinations#${dest.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-emerald-500 pb-1"
                  >
                    View Destination <ChevronRight className="h-4 w-4" />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
             <NavLink
               to="/destinations"
               className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all"
             >
               View All Destinations <ChevronRight className="h-5 w-5" />
             </NavLink>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <SectionHeader
                title="Why Choose Budget Trips?"
                subtitle="We don't just sell tours; we craft experiences that stay with you forever. With over a decade of expertise in Indian hill tourism."
                centered
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 text-left">
                {[
                  { icon: <Compass />, title: 'Customized Tours', desc: 'Itineraries tailored specifically to your preferences and pace.' },
                  { icon: <ShieldCheck />, title: 'Verified Safety', desc: 'Every stay and transport route is personally vetted for security.' },
                  { icon: <Map />, title: 'Local Expertise', desc: 'Guides who know every hidden trail and local secret of the hills.' },
                  { icon: <Mountain />, title: 'Sustainable Travel', desc: 'Promoting eco-friendly tourism to preserve our mountain heritage.' },
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center p-3">
                      {React.cloneElement(feature.icon as any, { className: 'h-full w-full' })}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Capturing the Spirit of the Hills"
            subtitle="A glimpse into the breathtaking landscapes and serene moments our travelers experience."
            centered
            className="text-white"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1596895111956-611882b0c243?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1472739839117-91950e322304?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1498604427760-410e24abd99c?q=80&w=800&auto=format&fit=crop'
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative rounded-2xl overflow-hidden group h-64 md:h-80",
                  i === 1 || i === 6 ? "md:col-span-2" : ""
                )}
              >
                <img
                  src={img}
                  alt={`Hill station gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <ImageIcon className="text-white h-8 w-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader
             title="What Our Travelers Say"
             subtitle="Real stories from people who explored the magnificent Indian hills with us."
             centered
           />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              {TESTIMONIALS.map((t) => (
                <motion.div 
                  key={t.id} 
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-8 items-center text-center md:text-left shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 relative group"
                >
                   <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-emerald-100 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="relative w-24 h-24 rounded-full border-4 border-white shadow-md z-10 object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"  
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white p-2 rounded-full shadow-lg z-20 scale-0 group-hover:scale-100 transition-transform duration-500">
                         <Star filled={true} className="w-3 h-3 text-white" />
                      </div>
                   </div>
                   <div className="relative">
                     <div className="flex gap-1 mb-4 justify-center md:justify-start">
                       {[1, 2, 3, 4, 5].map((s) => (
                         <Star key={s} filled={s <= Math.floor(t.rating)} className="w-5 h-5" />
                       ))}
                     </div>
                     <p className="text-gray-600 italic mb-6 leading-relaxed font-serif text-lg">"{t.text}"</p>
                     <div>
                        <h5 className="font-bold text-gray-900 text-xl">{t.name}</h5>
                        <span className="text-sm text-emerald-600 font-bold tracking-wide">{t.location}</span>
                     </div>
                   </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-emerald-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Your Himalayan adventure <br className="hidden md:block" /> starts here.</h2>
            <p className="text-lg md:text-xl text-emerald-50 mb-12 max-w-2xl mx-auto opacity-90">
              Join thousands of happy travelers and discover the magic of India's hill stations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <NavLink to="/booking" className="bg-white text-emerald-600 px-10 py-5 rounded-full text-lg font-bold hover:shadow-xl hover:-translate-y-1 transition-all">
                Plan My Trip
              </NavLink>
              <NavLink to="/contact" className="border-2 border-white/40 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
                Talk to an Expert
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Star: React.FC<{ className?: string; filled?: boolean }> = ({ className, filled = true }) => {
  return (
    <svg className={cn("w-4 h-4", className, filled ? "text-yellow-400 fill-current" : "text-gray-300")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};
