"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  GraduationCap,
  Award,
  Star,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function AchievementsPage() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const successStories = [
    {
      name: "Ayşe Demir",
      university: "University of Oxford",
      program: language === "tr" ? "Tıp Fakültesi" : "Medical School",
      year: "2024",
      image: "/student-1-testimonial.jpg",
    },
    {
      name: "Mehmet Kaya",
      university: "University of Cambridge",
      program: language === "tr" ? "Mühendislik" : "Engineering",
      year: "2024",
      image: "/student-2-testimonial.jpg",
    },
    {
      name: "Zeynep Özkan",
      university: "Imperial College London",
      program: language === "tr" ? "Bilgisayar Bilimleri" : "Computer Science",
      year: "2023",
      image: "/student-3-testimonial.jpg",
    },
    {
      name: "Ali Yılmaz",
      university: "London School of Economics",
      program: language === "tr" ? "Ekonomi" : "Economics",
      year: "2024",
      image: "/student-1-testimonial.jpg",
    },
    {
      name: "Elif Şahin",
      university: "King's College London",
      program: language === "tr" ? "Hukuk" : "Law",
      year: "2023",
      image: "/student-2-testimonial.jpg",
    },
    {
      name: "Can Özdemir",
      university: "University College London",
      program: language === "tr" ? "Mimarlık" : "Architecture",
      year: "2024",
      image: "/student-3-testimonial.jpg",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: language === "tr" ? "Oxbridge Başarısı" : "Oxbridge Success",
      description:
        language === "tr"
          ? "Son 2 yılda 25+ öğrencimiz Oxford ve Cambridge'e kabul aldı"
          : "25+ students accepted to Oxford and Cambridge in the last 2 years",
      number: "25+",
    },
    {
      icon: GraduationCap,
      title: language === "tr" ? "Russell Group" : "Russell Group",
      description:
        language === "tr"
          ? "Öğrencilerimizin %85'i Russell Group üniversitelerine yerleşti"
          : "85% of our students placed in Russell Group universities",
      number: "85%",
    },
    {
      icon: Award,
      title: language === "tr" ? "Burs Başarısı" : "Scholarship Success",
      description:
        language === "tr"
          ? "Öğrencilerimiz önemli burslar kazandı"
          : "Our students secured significant scholarships",
      number: "£2M+",
    },
    {
      icon: Target,
      title: language === "tr" ? "Vize Başarısı" : "Visa Success",
      description:
        language === "tr"
          ? "Vize başvurularında %98 başarı oranı"
          : "98% success rate in visa applications",
      number: "98%",
    },
  ];

  const nextStory = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, successStories.length]);

  const prevStory = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStoryIndex(
        (prev) => (prev - 1 + successStories.length) % successStories.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentStoryIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStoryIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextStory();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextStory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D29D33] to-[#b8851f]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {content.achievements.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {content.achievements.subtitle}
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.achievements.stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-[#D29D33] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-[#032445]">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#032445] mb-16">
            {language === "tr"
              ? "Detaylı Başarılarımız"
              : "Our Detailed Achievements"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#D29D33] rounded-full flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#D29D33] mb-2">
                        {achievement.number}
                      </div>
                      <h3 className="text-xl font-bold text-[#032445] mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-20 bg-[#032445] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#032445] to-[#041f35] opacity-90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {language === "tr" ? "Başarı Hikayeleri" : "Success Stories"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === "tr"
                ? "Hayallerini gerçekleştiren öğrencilerimizin ilham verici hikayeleri"
                : "Inspiring stories of our students who achieved their dreams"}
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                onClick={prevStory}
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
                            src={successStories[currentStoryIndex].image}
                            alt={successStories[currentStoryIndex].name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-[#D29D33] rounded-full p-2">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        <h4 className="text-2xl font-bold text-white">
                          {successStories[currentStoryIndex].name}
                        </h4>
                        <p className="text-[#D29D33] font-semibold text-xl">
                          {successStories[currentStoryIndex].university}
                        </p>
                        <p className="text-lg text-gray-300">
                          {successStories[currentStoryIndex].program}
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                          <div className="bg-[#D29D33] text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {successStories[currentStoryIndex].year}
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {language === "tr"
                              ? "Başarılı Kabul"
                              : "Successful Admission"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextStory}
                disabled={isTransitioning}
                className="absolute right-0 z-10 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center mt-12 space-x-3">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStoryIndex
                      ? "bg-[#D29D33] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>
                  {currentStoryIndex + 1} of {successStories.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
