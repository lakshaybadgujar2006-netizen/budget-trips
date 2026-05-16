import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Search, Send } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeader
            title="Travel Guides & Stories"
            subtitle="Expert tips and inspiring stories from the heart of the mountains."
            className="mb-0"
          />
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search guides..."
              className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Featured Post */}
           <div className="lg:col-span-2 space-y-12">
              <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                 <div className="h-[450px] overflow-hidden relative">
                    <img src={BLOG_POSTS[0].image} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"  referrerPolicy="no-referrer"/>
                    <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                       Featured Guide
                    </div>
                 </div>
                 <div className="p-8 md:p-12">
                    <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                       <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-emerald-500" /> {BLOG_POSTS[0].date}</span>
                       <span className="flex items-center gap-2"><User className="h-4 w-4 text-emerald-500" /> {BLOG_POSTS[0].author}</span>
                       <span className="text-emerald-600">#{BLOG_POSTS[0].category}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors leading-tight">{BLOG_POSTS[0].title}</h2>
                    <p className="text-lg text-gray-500 leading-relaxed mb-8">{BLOG_POSTS[0].excerpt}</p>
                    <button className="flex items-center gap-3 text-emerald-600 font-bold hover:gap-5 transition-all text-lg underline underline-offset-8 decoration-2 decoration-emerald-200 hover:decoration-emerald-500">
                       Read Full Guide <ArrowRight className="h-6 w-6" />
                    </button>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {BLOG_POSTS.slice(1).map((post) => (
                    <div key={post.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                       <div className="relative h-60 overflow-hidden">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"  referrerPolicy="no-referrer"/>
                       </div>
                       <div className="p-8">
                          <div className="flex flex-wrap gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                             <span className="text-emerald-600">#{post.category}</span>
                             <span>{post.date}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">{post.excerpt}</p>
                          <button className="text-sm font-bold text-gray-900 flex items-center gap-2 group/btn">
                             Read More <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform text-emerald-500" />
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Sidebar */}
           <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="text-lg font-bold mb-6">Categories</h4>
                 <div className="space-y-3">
                    {['Destinations', 'Travel Tips', 'Mountain Food', 'Culture', 'Photography'].map((cat) => (
                      <button key={cat} className="flex justify-between items-center w-full px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-600">
                         {cat} <span className="bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full text-xs">12</span>
                      </button>
                    ))}
                 </div>
              </div>

              <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                 <div className="relative z-10">
                   <h4 className="text-xl font-bold mb-4">Newsletter</h4>
                   <p className="text-sm text-emerald-50 mb-6 opacity-80 leading-relaxed">
                     Get the latest travel guides and exclusive offers directly in your inbox.
                   </p>
                   <form className="space-y-4">
                      <input type="email" placeholder="Your email" className="w-full px-5 py-3 bg-white/20 rounded-xl border border-white/30 placeholder:text-white/60 focus:outline-none focus:bg-white focus:text-gray-900 transition-all font-medium" />
                      <button className="w-full bg-white text-emerald-700 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Subscribe</button>
                   </form>
                 </div>
                 <div className="absolute top-0 right-0 p-4 opacity-10"><Send className="h-24 w-24 -rotate-12" /></div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="text-lg font-bold mb-6">Popular Tags</h4>
                 <div className="flex flex-wrap gap-2">
                    {['Himalayas', 'Tea', 'Snow', 'Adventure', 'Soul', 'Peace', 'Nature', 'Guides'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-gray-50 rounded-lg text-xs font-bold text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer transition-colors">
                        #{tag}
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
