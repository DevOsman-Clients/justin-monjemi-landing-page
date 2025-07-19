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
import { useState } from "react";

export default function AchievementsPage() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language];
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      name: "Ayşe Demir",
      university: "University of Oxford",
      program: language === "tr" ? "Tıp Fakültesi" : "Medical School",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Mehmet Kaya",
      university: "University of Cambridge",
      program: language === "tr" ? "Mühendislik" : "Engineering",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Zeynep Özkan",
      university: "Imperial College London",
      program: language === "tr" ? "Bilgisayar Bilimleri" : "Computer Science",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ali Yılmaz",
      university: "London School of Economics",
      program: language === "tr" ? "Ekonomi" : "Economics",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Elif Şahin",
      university: "King's College London",
      program: language === "tr" ? "Hukuk" : "Law",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Can Özdemir",
      university: "University College London",
      program: language === "tr" ? "Mimarlık" : "Architecture",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
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

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 3) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 3 + successStories.length) % successStories.length
    );
  };

  const getVisibleStories = () => {
    const stories = [];
    for (let i = 0; i < 3; i++) {
      stories.push(
        successStories[(currentStoryIndex + i) % successStories.length]
      );
    }
    return stories;
  };

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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#032445] mb-16">
            {language === "tr" ? "Başarı Hikayeleri" : "Success Stories"}
          </h2>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevStory}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10 hidden md:block"
            >
              <ChevronLeft className="h-6 w-6 text-[#032445]" />
            </button>
            <button
              onClick={nextStory}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10 hidden md:block"
            >
              <ChevronRight className="h-6 w-6 text-[#032445]" />
            </button>

            {/* Stories Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {getVisibleStories().map((story, index) => (
                <Card
                  key={`${story.name}-${currentStoryIndex}-${index}`}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#D29D33] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {story.year}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#032445] mb-2">
                      {story.name}
                    </h3>
                    <p className="text-[#D29D33] font-semibold mb-1">
                      {story.university}
                    </p>
                    <p className="text-gray-600 mb-3">{story.program}</p>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#D29D33]" />
                      <span className="text-sm font-semibold text-[#032445]">
                        {language === "tr"
                          ? "Başarılı Kabul"
                          : "Successful Admission"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center mt-8 space-x-4 md:hidden">
              <button
                onClick={prevStory}
                className="bg-[#D29D33] text-white rounded-full p-2 hover:bg-[#b8851f] transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextStory}
                className="bg-[#D29D33] text-white rounded-full p-2 hover:bg-[#b8851f] transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(successStories.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index * 3)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentStoryIndex / 3) === index
                        ? "bg-[#D29D33]"
                        : "bg-gray-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-[#032445]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              {language === "tr" ? "Resmi Tanınırlık" : "Official Recognition"}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              {language === "tr"
                ? "İngiltere Milli Eğitim Bakanlığı, British Council ve UKVI tarafından resmi olarak tanınan ve onaylanmış danışmanlık hizmetleri sunuyoruz."
                : "We provide officially recognized and approved consultancy services by the UK Department for Education, British Council, and UKVI."}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
              {[
                "UK Department for Education",
                "British Council",
                "UKVI Approved Agent",
                "GDPR Compliant",
              ].map((cert, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={`/placeholder.svg?height=80&width=120`}
                    alt={cert}
                    width={120}
                    height={80}
                    className="mx-auto mb-2 brightness-0 invert"
                  />
                  <p className="text-sm text-blue-100">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
