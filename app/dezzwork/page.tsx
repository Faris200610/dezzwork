import React from 'react';
import { MessageCircle, Bell, Filter, MessageSquare, CheckCircle } from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import { BentoGrid, BentoCard } from '@/components/BentoGrid';
import Navbar from '@/components/Navbar';

export default function DezzworkLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-emerald-100/20 relative overflow-hidden">
      {/* Background Green Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-whatsapp/20 via-green-300/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-emerald-200/20 via-green-200/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-t from-whatsapp/10 via-green-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-300/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 bg-whatsapp/10 text-whatsapp px-4 py-2 rounded-full text-sm font-medium">
              خدمة تابعة لشركة Dezloop
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Right Side - Text Content */}
            <div className="text-center lg:text-right order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-cairo leading-tight">
                وظيفتك وتخليص خدماتك.. كله على واتساب
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                لا داعي للبحث الطويل. اشترك الآن واحصل على تنبيهات فورية بالوظائف المناسبة لتخصصك، وخدمات رقمية تنجزها بضغطة زر.
              </p>

              {/* CTA Button */}
              <a 
                href="https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5N2M3MzQ2YzY3OTdhNTQ3ZjYzNTYyOCJ9.mymTkpzRwuq1vdiVavTZ1-p4yiTWPK78GSA0LtvosRc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                <span>اشترك الآن (٢٠ ريال/شهر)</span>
              </a>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-whatsapp" />
                  <span>بدون التزام طويل</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-whatsapp" />
                  <span>إلغاء في أي وقت</span>
                </div>
              </div>
            </div>

            {/* Left Side - Phone Mockup */}
            <div className="flex justify-center order-1 lg:order-2">
              <PhoneMockup notificationText="وظيفة جديدة: مطور واجهات - الرياض" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-cairo">
              لماذا Dezzwork؟
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              نوفر لك تجربة بحث عن الوظائف بطريقة عصرية وسهلة
            </p>
          </div>

          <BentoGrid>
            <BentoCard
              icon={Bell}
              title="تنبيهات فورية"
              description="الإشعارات تصلك بمجرد نزول الوظيفة. كن أول المتقدمين."
            />
            <BentoCard
              icon={Filter}
              title="تخصيص كامل"
              description="تصلك فقط الوظائف التي تناسب مجالك وخبرتك."
            />
            <BentoCard
              icon={MessageSquare}
              title="سهولة تامة"
              description="بدون مواقع معقدة أو تسجيل دخول. كل شيء يتم عبر شات واتساب."
            />
          </BentoGrid>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-cairo">
              خطة واحدة، قيمة كبيرة
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              اشتراك شهري بسيط يوفر لك كل ما تحتاجه
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-8 sm:p-10">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-bold text-gray-900 font-cairo">٢٠</span>
                  <div className="text-right">
                    <div className="text-xl text-gray-600">ريال</div>
                    <div className="text-sm text-gray-500">شهرياً</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {[
                  'تنبيهات وظائف غير محدودة',
                  'دعم فني مباشر',
                  'إلغاء الاشتراك في أي وقت'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-whatsapp/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-whatsapp" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://checkout.tap.company/?mode=page&themeMode=&language=en&token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY5N2M3MzQ2YzY3OTdhNTQ3ZjYzNTYyOCJ9.mymTkpzRwuq1vdiVavTZ1-p4yiTWPK78GSA0LtvosRc"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-4 rounded-2xl text-lg text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                ابدأ التجربة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Help Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-whatsapp to-whatsapp-hover">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-cairo">
            عندك استفسار؟
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            فريق الدعم جاهز للرد عليك فوراً عبر واتساب.
          </p>
          <a
            href="https://wa.me/966573621277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-whatsapp hover:bg-gray-50 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            <span>تحدث معنا (0573621277)</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 Dezzwork. Powered by Dezloop.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                الشروط والأحكام
              </a>
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
