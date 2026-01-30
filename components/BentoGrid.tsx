import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function BentoCard({ title, description, icon: Icon }: BentoCardProps) {
  return (
    <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 hover:border-whatsapp transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-whatsapp/20 transition-colors">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-whatsapp" strokeWidth={2} />
        </div>
        
        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-cairo">
          {title}
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

interface BentoGridProps {
  children: React.ReactNode;
}

export function BentoGrid({ children }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {children}
    </div>
  );
}
