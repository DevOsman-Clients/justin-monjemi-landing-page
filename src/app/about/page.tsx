"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, BookOpen } from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#032445] to-[#0a3a5c]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {content.about.whoWeAre.title}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                {language === "tr"
                  ? "Geleceğin liderlerini yetiştiren, İngiltere'nin en prestijli eğitim kurumlarına giden yolda rehberlik eden uzman ekibiz."
                  : "We are the expert team that nurtures future leaders, guiding students on their path to the UK's most prestigious educational institutions."}
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop"
                alt="UK University Campus"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {content.about.whoWeAre.content
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#D29D33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032445] mb-2">
                  {language === "tr" ? "Uzman Ekip" : "Expert Team"}
                </h3>
                <p className="text-gray-600">
                  {language === "tr"
                    ? "Oxford ve Cambridge mezunu uzmanlar"
                    : "Oxford and Cambridge graduate experts"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#D29D33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032445] mb-2">
                  {language === "tr"
                    ? "Resmi Temsilci"
                    : "Official Representative"}
                </h3>
                <p className="text-gray-600">
                  {language === "tr"
                    ? "UK Eğitim Bakanlığı ve British Council"
                    : "UK Department for Education & British Council"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#D29D33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032445] mb-2">
                  {language === "tr" ? "Küresel Vizyon" : "Global Vision"}
                </h3>
                <p className="text-gray-600">
                  {language === "tr"
                    ? "Daha iyi bir dünya inşa etme misyonu"
                    : "Mission to build a better world"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#D29D33] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#032445] mb-2">
                  {language === "tr"
                    ? "Kapsamlı Destek"
                    : "Comprehensive Support"}
                </h3>
                <p className="text-gray-600">
                  {language === "tr"
                    ? "Başvurudan mezuniyete kadar"
                    : "From application to graduation"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#032445] mb-6">
                {content.about.team.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                {content.about.team.content
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
              <Button className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-8 py-3 rounded-lg mt-6">
                {language === "tr" ? "Ekibimizle Tanışın" : "Meet Our Team"}
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Our Expert Team"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center text-[#032445] mb-12">
            {language === "tr" ? "Resmi Ortaklarımız" : "Our Official Partners"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {[
              { name: "UK Department for Education", width: 120 },
              { name: "British Council", width: 100 },
              { name: "University of Oxford", width: 80 },
              { name: "University of Cambridge", width: 80 },
              { name: "Imperial College London", width: 100 },
              { name: "UCL", width: 80 },
            ].map((partner, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=${partner.width}`}
                  alt={partner.name}
                  width={partner.width}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
