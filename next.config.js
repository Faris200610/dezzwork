/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',      // هذا السطر هو الذي يجبره على إنشاء مجلد out
    images: {
      unoptimized: true,   // هذا ضروري عشان الصور تظهر في Netlify
    },
  };
  
  module.exports = nextConfig;