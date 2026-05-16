import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Mountain, Facebook, Twitter, Instagram, Mail, Phone, MapPin, MessageCircle, Send, Loader2, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="bg-emerald-900/40 rounded-[3rem] p-10 md:p-16 mb-20 border border-emerald-800/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Stay Inspired</h2>
            <p className="text-emerald-100/70 text-lg">Join 10,000+ travelers and get the best deals, hidden gems, and travel tips delivered to your inbox.</p>
            
            {status === 'success' ? (
              <div className="flex items-center justify-center gap-3 text-emerald-400 font-bold text-xl animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="h-8 w-8" />
                You're on the list!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative max-w-xl mx-auto mt-8">
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900/50 border border-emerald-800/30 text-white px-8 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all pl-14"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
                <button
                  disabled={status === 'loading'}
                  className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-2xl font-bold transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
                  Subscribe
                </button>
              </form>
            )}
            {status === 'error' && <p className="text-red-400 text-sm font-bold">Something went wrong. Please try again.</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-sans text-white tracking-tight uppercase">Budget <span className="text-emerald-600">Trips</span></span>
            </NavLink>
            <p className="text-gray-400 leading-relaxed">
              Crafting unforgettable budget travel experiences across India. Discover breathtaking destinations with the best value tour packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/budgettrips2025?igsh=MXFhZm8wY3pqbjhqdA==" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li><NavLink to="/about" className="hover:text-emerald-500 transition-colors text-sm">About Us</NavLink></li>
              <li><NavLink to="/packages" className="hover:text-emerald-500 transition-colors text-sm">Tour Packages</NavLink></li>
              <li><NavLink to="/destinations" className="hover:text-emerald-500 transition-colors text-sm">Destinations</NavLink></li>
              <li><NavLink to="/testimonials" className="hover:text-emerald-500 transition-colors text-sm">Testimonials</NavLink></li>
              <li><a href="https://www.instagram.com/budgettrips2025?igsh=MXFhZm8wY3pqbjhqdA==" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors text-sm flex items-center gap-2"><Instagram className="h-3 w-3" /> Instagram</a></li>
              <li><NavLink to="/faq" className="hover:text-emerald-500 transition-colors text-sm">FAQ</NavLink></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-4">
              <li><NavLink to="/contact" className="hover:text-emerald-500 transition-colors text-sm">Contact Us</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-emerald-500 transition-colors text-sm">Privacy Policy</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-emerald-500 transition-colors text-sm">Terms & Conditions</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm">Sector 4, Gurgaon, Landmark, GURUGRAM, HARYANA, India - 122001</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                <a 
                  href="https://wa.me/919217807801" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-emerald-500 transition-colors"
                >
                  +91 92178 07801 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm">budgettrip4u@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Budget Trips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
