import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mountain, Facebook, Twitter, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Crafting unforgettable memories in the heart of the Himalayas. Discover the serene beauty of India's hill stations with experts.
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
