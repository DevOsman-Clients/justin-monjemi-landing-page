"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import Image from "next/image";
import {
  GraduationCap,
  FileText,
  Users,
  Globe,
  CheckCircle,
  BookOpen,
  Award,
  Target,
  Clock,
} from "lucide-react";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = SITE_CONTENT[language];

  const services = t.services.serviceList.map((service, index) => ({
    icon: [GraduationCap, FileText, Users, Globe][index],
    title: service.title,
    description: service.description,
    features: service.features,
    image: service.image
  }));

  const processSteps = t.services.processSteps.map((step, index) => ({
    icon: [Target, BookOpen, FileText, Award][index],
    title: step.title,
    description: step.description,
  }));

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#032445] to-[#041f35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.services.pageTitle}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {t.services.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="bg-[#032445] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#032445] mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-2xl w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#032445] mb-6">
              {t.services.processTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.processSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-[#032445] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-[#D29D33] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#032445] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 bg-[#D29D33] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="h-16 w-16 text-[#032445] mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">
            {t.services.whyChooseTitle}
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {t.services.whyChooseDescription}
          </p>
        </div>
      </section>

    </div>
  );
}
