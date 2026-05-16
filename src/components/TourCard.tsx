import React from 'react';
import { Star, Clock, ListChecks } from 'lucide-react';
import { TourPackage } from '../types';
import { NavLink } from 'react-router-dom';

export const TourCard: React.FC<{ pkg: TourPackage }> = ({ pkg }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-700 shadow-sm">
          {pkg.difficulty}
        </div>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-gray-900">{pkg.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold mb-2">
          <Clock className="h-3 w-3" />
          {pkg.duration}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{pkg.title}</h3>
        <ul className="space-y-2 mb-6">
          {pkg.includes.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <ListChecks className="h-4 w-4 text-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block uppercase font-bold tracking-widest leading-none mb-1">Starting from</span>
            <span className="text-2xl font-bold text-gray-900">₹{pkg.price.toLocaleString()}</span>
          </div>
          <NavLink
            to={`/booking?package=${pkg.id}`}
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all"
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
