"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { SITE_CONTENT } from "@/lib/content"
import { PLACEHOLDER_IMAGES } from "@/lib/images"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function FounderMessagePage() {
  const { language } = useLanguage()
  const content = SITE_CONTENT[language].about.founderMessage

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#032445] to-[#0a3a5c]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{content.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === "tr"
                ? "Kurucumuzdan kişisel bir mesaj ve vizyonumuzun hikayesi"
                : "A personal message from our founder and the story of our vision"}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Founder Photo and Info */}
            <div className="lg:col-span-1">
              <Card className="border-none shadow-lg sticky top-8">
                <CardContent className="p-8 text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src={PLACEHOLDER_IMAGES.founder || "/placeholder.svg"}
                      alt="Justin Monajemi"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#032445] mb-2">{content.name}</h3>
                  <p className="text-[#D29D33] font-semibold mb-4">{content.title}</p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>{language === "tr" ? "Oxford Üniversitesi Mezunu" : "Oxford University Graduate"}</p>
                    <p>{language === "tr" ? "15+ Yıl Eğitim Deneyimi" : "15+ Years Education Experience"}</p>
                    <p>{language === "tr" ? "500+ Başarılı Öğrenci" : "500+ Successful Students"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="h-8 w-8 text-[#D29D33] mr-3" />
                    <h2 className="text-2xl font-bold text-[#032445]">{content.greeting}</h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {content.content.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-lg text-gray-700 mb-2">{content.signature}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-1 bg-[#D29D33]"></div>
                      <div>
                        <p className="font-bold text-[#032445] text-lg">{content.name}</p>
                        <p className="text-[#D29D33] font-semibold">{content.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#032445] mb-6">
                  {language === "tr" ? "Vizyonumuz" : "Our Vision"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {language === "tr"
                    ? "Daha adil, sağlıklı, güvenli ve zengin bir dünya inşa etmek, hatta insanlığa yeni dünyalara köprü olmak vizyonuyla hareket ediyoruz. Her öğrencimizin potansiyelini en üst seviyeye çıkararak, geleceğin liderlerini yetiştiriyoruz."
                    : "We strive to build a fairer, healthier, safer, and more prosperous world, with a vision that extends beyond our planet—to become a bridge to new worlds. We nurture future leaders by maximizing each student's potential."}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#032445] mb-6">
                  {language === "tr" ? "Misyonumuz" : "Our Mission"}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
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
      <section className="py-20 bg-[#032445]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === "tr"
              ? "Hayallerinizi Birlikte Gerçeğe Dönüştürelim"
              : "Let's Turn Your Dreams Into Reality Together"}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === "tr"
              ? "Bizimle başlayan her yolculuk, geleceğe atılan en güçlü adımdır."
              : "Every journey that begins with us is a bold step towards the future."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {language === "tr" ? "Başvuru Yap" : "Apply Now"}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#032445] px-8 py-3 rounded-lg font-semibold transition-colors">
              {language === "tr" ? "Bilgi Al" : "Get Information"}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
