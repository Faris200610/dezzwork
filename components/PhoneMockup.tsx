import React from 'react';

interface PhoneMockupProps {
  notificationText: string;
}

export default function PhoneMockup({ notificationText }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] h-[560px] sm:h-[640px]">
      {/* Shadow that animates with float */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-[30px] bg-black/20 rounded-full blur-xl animate-float-shadow"></div>
      
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-[12px] border-gray-900 animate-float">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="relative w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 rounded-[2rem] overflow-hidden">
          {/* Background Logo - Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
            <img 
              src="/deezwork.png" 
              alt="Dezzwork Logo" 
              className="w-56 h-56 object-contain"
            />
          </div>

          {/* Status Bar */}
          <div className="relative flex justify-between items-center px-6 pt-3 pb-2 text-xs text-gray-700 z-10">
            <span className="font-semibold">9:41</span>
            <div className="flex gap-1 items-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* WhatsApp Notification */}
          <div className="absolute top-16 left-4 right-4 z-20 animate-slide-in">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                {/* WhatsApp Icon */}
                <div className="relative flex-shrink-0 w-10 h-10">
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 bg-whatsapp rounded-full animate-pulse-ring"></div>
                  <div className="relative w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Notification Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Dezzwork</span>
                    <span className="text-xs text-gray-500">الآن</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {notificationText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* App Icons (Background) */}
          <div className="absolute bottom-8 left-0 right-0 px-6 z-10">
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-white/40 backdrop-blur-sm rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
