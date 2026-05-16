import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { DESTINATIONS } from '../constants';
import { MapPin, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Destinations() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number; gallery: string[] } | null>(null);

  const nextImage = () => {
    if (!selectedImage) return;
    const nextIdx = (selectedImage.index + 1) % selectedImage.gallery.length;
    setSelectedImage({
      ...selectedImage,
      index: nextIdx,
      url: selectedImage.gallery[nextIdx]
    });
  };

  const prevImage = () => {
    if (!selectedImage) return;
    const prevIdx = (selectedImage.index - 1 + selectedImage.gallery.length) % selectedImage.gallery.length;
    setSelectedImage({
      ...selectedImage,
      index: prevIdx,
      url: selectedImage.gallery[prevIdx]
    });
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Explore Our Destinations"
          subtitle="From the pristine peaks of Himachal to the aromatic tea gardens of Kerala, explore the diversity of Indian hill stations."
          centered
        />

        <div className="space-y-32 mt-20">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={dest.id}
              id={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={cn(
                "group flex flex-col gap-12 items-center",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 w-full relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-50 rounded-3xl -z-10 group-hover:scale-110 transition-transform"></div>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 right-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block">Region</span>
                    <span className="text-lg font-bold text-gray-900">{dest.state}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full space-y-8">
                <div>
                  <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Destination 0{i + 1}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{dest.name}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-emerald-500 pl-6 py-2">
                    {dest.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Top Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {dest.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                        <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                        <span className="text-sm font-semibold text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {dest.gallery && (
                  <div className="space-y-6">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Gallery</h4>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                      {dest.gallery.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="flex-shrink-0 w-48 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-md cursor-pointer group/img"
                          onClick={() => setSelectedImage({ url: img, index: idx, gallery: dest.gallery! })}
                        >
                          <img 
                            src={img} 
                            alt={`${dest.name} gallery ${idx + 1}`} 
                            className="w-full h-full object-cover transition-transform group-hover/img:scale-110" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className="flex items-center gap-3 text-emerald-600 font-bold hover:gap-5 transition-all">
                  Full Guide & Itineraries <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-emerald-400 transition-colors z-20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-10 w-10" />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white hover:text-emerald-400 transition-colors z-20"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button 
              className="absolute right-4 md:right-10 text-white hover:text-emerald-400 transition-colors z-20"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            <motion.div 
              key={selectedImage.url}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white/60 text-sm font-medium">
                Photo {selectedImage.index + 1} of {selectedImage.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
