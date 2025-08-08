"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import {
  Award,
  Users,
  Globe,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function HomePage() {
  const { language } = useLanguage();
  const t = SITE_CONTENT[language];
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(
        (prev) => (prev + 1) % t.testimonials.items.length
      );
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, t.testimonials.items.length]);

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(
        (prev) =>
          (prev - 1 + t.testimonials.items.length) % t.testimonials.items.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentTestimonialIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/home-page-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-[220px] h-[220px] mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <Image
                    src="/uk-department-edu.png"
                    alt="UK Department for Education"
                    width={220}
                    height={220}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-[#032445] mb-2 md:mb-3 text-base md:text-lg">
                  {t.homepage.partners.items[0].name}
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {t.homepage.partners.items[0].role}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-[220px] h-[220px] mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <Image
                    src="/british-council.png"
                    alt="British Council"
                    width={220}
                    height={220}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h4 className="font-bold text-[#032445] mb-2 md:mb-3 text-base md:text-lg">
                  {t.homepage.partners.items[1].name}
                </h4>
                <p className="text-gray-600 font-medium text-sm md:text-base">
                  {t.homepage.partners.items[1].role}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-[220px] h-[220px] mx-auto mb-4 md:mb-6 flex items-center justify-center">
                  <Image
                    src="/russell-group.png"
                    alt="Russell Group Universities"
                    width={220}
                    height={220}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
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
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/student-2.jpg"
                alt="Happy Student"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#032445] mb-4">
              {t.schools.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D29D33] to-[#b8851f] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partnering with world-class institutions to shape your future
            </p>
          </div>

          <div className="relative">
            {/* Desktop: Horizontal scroll */}
            <div className="hidden md:block">
              <button
                onClick={() => {
                  const container =
                    document.getElementById("partners-container");
                  if (container) {
                    const scrollAmount = 320;
                    container.scrollBy({
                      left: -scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-gradient-to-r from-[#D29D33] to-[#b8851f] text-white rounded-full p-3 hover:shadow-lg hover:scale-105 transition-all duration-300 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => {
                  const container =
                    document.getElementById("partners-container");
                  if (container) {
                    const scrollAmount = 320;
                    container.scrollBy({
                      left: scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-gradient-to-r from-[#D29D33] to-[#b8851f] text-white rounded-full p-3 hover:shadow-lg hover:scale-105 transition-all duration-300 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div
                id="partners-container"
                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {t.schools.items.map((school, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D29D33]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
                  >
                    <div className="h-40 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src={school.image || "/placeholder.svg"}
                        alt={school.name}
                        width={280}
                        height={160}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5 bg-gradient-to-br from-white to-gray-50/50">
                      <h3 className="text-lg font-bold text-[#032445] mb-2 group-hover:text-[#D29D33] transition-colors duration-300">
                        {school.name}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-[#D29D33]" />
                        {school.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Enhanced grid */}
            <div className="md:hidden">
              <div className="relative">
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
                    {t.schools.items.map((school, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#D29D33]/30 transition-all duration-300 hover:shadow-lg group"
                      >
                        <div className="h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Image
                            src={school.image || "/placeholder.svg"}
                            alt={school.name}
                            width={200}
                            height={128}
                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 bg-gradient-to-br from-white to-gray-50/30">
                          <h3 className="text-base font-bold text-[#032445] mb-1 group-hover:text-[#D29D33] transition-colors duration-300">
                            {school.name}
                          </h3>
                          <p className="text-gray-600 font-medium text-xs flex items-center">
                            <Globe className="h-3 w-3 mr-1 text-[#D29D33]" />
                            {school.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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

      {/* Inspiration Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/student-1.jpg"
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

      {/* Testimonials Section */}
      <section className="py-20 bg-[#032445] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#032445] to-[#041f35] opacity-90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevTestimonial}
                disabled={isTransitioning}
                className="absolute left-0 z-10 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="max-w-4xl mx-auto px-16">
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isTransitioning
                      ? "opacity-0 transform translate-y-8"
                      : "opacity-100 transform translate-y-0"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                          <Image
                            src={
                              t.testimonials.items[currentTestimonialIndex]
                                .image
                            }
                            alt={
                              t.testimonials.items[currentTestimonialIndex].name
                            }
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-[#D29D33] rounded-full p-2">
                          <Quote className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-light italic">
                        &ldquo;
                        {t.testimonials.items[currentTestimonialIndex].quote}
                        &rdquo;
                      </blockquote>

                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white">
                          {t.testimonials.items[currentTestimonialIndex].name}
                        </h4>
                        <p className="text-[#D29D33] font-medium text-lg">
                          {
                            t.testimonials.items[currentTestimonialIndex]
                              .university
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextTestimonial}
                disabled={isTransitioning}
                className="absolute right-0 z-10 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center mt-12 space-x-3">
              {t.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? "bg-[#D29D33] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>
                  {currentTestimonialIndex + 1} of {t.testimonials.items.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
