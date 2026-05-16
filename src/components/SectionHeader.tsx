import React from 'react';
import { cn } from '../lib/utils';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = false, className }: Props) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight drop-shadow-sm">{title}</h2>
      {subtitle && <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className={cn("h-1.5 w-20 bg-emerald-600 mt-6 rounded-full", centered && "mx-auto")}></div>
    </div>
  );
}
