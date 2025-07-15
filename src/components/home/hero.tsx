"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  heroContent: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export default function Hero({ heroContent }: HeroProps) {
  return (
    <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/home-page-hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {heroContent.title}
        </h1>
        <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {heroContent.subtitle}
        </p>
        <Button
          size="lg"
          className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-8 py-4 text-lg font-semibold rounded-lg"
        >
          {heroContent.cta}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
