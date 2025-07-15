"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";
import Testimonials from "@/components/home/testimonials";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import { Award, Users, Globe, BookOpen } from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const t = SITE_CONTENT[language];

  return (
    <div className="min-h-screen bg-white">
      <Hero heroContent={t.hero} />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#032445] mb-6 md:mb-8">
              {t.homepage.whoWeAreSection.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              {t.homepage.whoWeAreSection.description}
            </p>
          </div>

          <div className="mb-16 md:mb-20">
            <h3 className="text-xl md:text-2xl font-bold text-center text-[#032445] mb-8 md:mb-12">
              {t.homepage.partners.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                <Image
                  src="/placeholder.svg?height=80&width=120"
                  alt="UK Department for Education"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 md:mb-6"
                />
                <h4 className="font-bold text-[#032445] mb-2 md:mb-3 text-base md:text-lg">
                  {t.homepage.partners.items[0].name}
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {t.homepage.partners.items[0].role}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                <Image
                  src="/placeholder.svg?height=80&width=120"
                  alt="British Council"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 md:mb-6"
                />
                <h4 className="font-bold text-[#032445] mb-2 md:mb-3 text-base md:text-lg">
                  British Council
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {t.homepage.partners.items[1].role}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                <Image
                  src="/placeholder.svg?height=80&width=120"
                  alt="Russell Group Universities"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 md:mb-6"
                />
                <h4 className="font-bold text-[#032445] mb-2 md:mb-3 text-base md:text-lg">
                  {t.homepage.partners.items[2].name}
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {t.homepage.partners.items[2].role}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#032445] mb-6 md:mb-8">
                {t.about.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                {t.homepage.aboutDescription1}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10">
                {t.homepage.aboutDescription2}
              </p>
              <Button className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg">
                {t.about.cta}
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/happy-student.jpg"
                alt="Happy Student"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Partners schoolsContent={t.schools} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#032445] mb-12 md:mb-16">
            {t.leadership.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {t.leadership.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 md:mb-8">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg mx-auto w-full h-auto"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#032445] mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/student-studying.jpg"
                alt="Student Studying"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#032445] mb-6 md:mb-8">
                {t.inspiration.title}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                {t.inspiration.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    icon: Users,
                    text: t.homepage.features.expertTeam,
                  },
                  {
                    icon: Award,
                    text: t.homepage.features.successGuarantee,
                  },
                  {
                    icon: Globe,
                    text: t.homepage.features.globalNetwork,
                  },
                  {
                    icon: BookOpen,
                    text: t.homepage.features.comprehensiveSupport,
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#D29D33] rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials testimonials={t.testimonials} />
    </div>
  );
}
