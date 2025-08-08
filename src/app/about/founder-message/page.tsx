"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function FounderMessagePage() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language].about.founderMessage;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-[#032445] to-[#0a3a5c]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {content.title}
            </h1>
            <p className="text-base text-blue-100 max-w-3xl mx-auto">
              {language === "tr"
                ? "Kurucumuzdan kişisel bir mesaj ve vizyonumuzun hikayesi"
                : "A personal message from our founder and the story of our vision"}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Message - Single Column Layout */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              {/* Founder Photo and Info - Centered at Top */}
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Justin Monajemi"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#032445] mb-2">
                  {content.name}
                </h3>
                <p className="text-[#D29D33] font-semibold mb-3 text-base">
                  {content.title}
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
                  <span>
                    {language === "tr"
                      ? "Oxford Üniversitesi Mezunu"
                      : "Oxford University Graduate"}
                  </span>
                  <span>•</span>
                  <span>
                    {language === "tr"
                      ? "15+ Yıl Eğitim Deneyimi"
                      : "15+ Years Education Experience"}
                  </span>
                  <span>•</span>
                  <span>
                    {language === "tr"
                      ? "500+ Başarılı Öğrenci"
                      : "500+ Successful Students"}
                  </span>
                </div>
              </div>

              {/* Message Content */}
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Quote className="h-6 w-6 text-[#D29D33] mr-2" />
                  <h2 className="text-lg md:text-xl font-bold text-[#032445]">
                    {content.greeting}
                  </h2>
                </div>

                <div className="prose prose-base max-w-none">
                  {content.content.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-3 text-sm md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      {language === "tr" ? "İletişim:" : "Contact:"}
                    </p>
                    <a 
                      href="mailto:Justin@justinmonajemi.com"
                      className="text-[#D29D33] hover:text-[#b8851f] font-medium"
                    >
                      Justin@justinmonajemi.com
                    </a>
                  </div>
                  <p className="text-base text-gray-700 mb-3">
                    {content.signature}
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-1 bg-[#D29D33]"></div>
                    <div className="text-center">
                      <p className="font-bold text-[#032445] text-base">
                        {content.name}
                      </p>
                      <p className="text-[#D29D33] font-semibold text-sm">
                        {content.position}
                      </p>
                    </div>
                    <div className="w-12 h-1 bg-[#D29D33]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#032445] mb-4">
                  {language === "tr" ? "Vizyonumuz" : "Our Vision"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {language === "tr"
                    ? "Daha adil, sağlıklı, güvenli ve zengin bir dünya inşa etmek, hatta insanlığa yeni dünyalara köprü olmak vizyonuyla hareket ediyoruz. Her öğrencimizin potansiyelini en üst seviyeye çıkararak, geleceğin liderlerini yetiştiriyoruz."
                    : "We strive to build a fairer, healthier, safer, and more prosperous world, with a vision that extends beyond our planet—to become a bridge to new worlds. We nurture future leaders by maximizing each student's potential."}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#032445] mb-4">
                  {language === "tr" ? "Misyonumuz" : "Our Mission"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {language === "tr"
                    ? "Türkiye'den İngiltere'nin en seçkin eğitim kurumlarına giden yolda öğrencilerimizin hayatlarını değiştiren kararlarında rehberlik etmek. Her adımda mentor, yol arkadaşı ve en büyük destekçi olarak yanlarında olmak."
                    : "To guide students from Turkey on life-changing paths to the UK's most prestigious educational institutions. To stand as mentors, companions, and strongest supporters at every step of their journey."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-br from-[#D29D33] to-[#b8851f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {language === "tr"
              ? "Hayallerinizi Birlikte Gerçeğe Dönüştürelim"
              : "Let's Turn Your Dreams Into Reality Together"}
          </h2>
          <p className="text-lg text-yellow-50 mb-6">
            {language === "tr"
              ? "Bizimle başlayan her yolculuk, geleceğe atılan en güçlü adımdır."
              : "Every journey that begins with us is a bold step towards the future."}
          </p>
        </div>
      </section>
    </div>
  );
}
