"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialsProps {
  testimonials: readonly {
    readonly name: string
    readonly university: string
    readonly quote: string
    readonly image: string
  }[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-[#032445] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#032445] to-[#041f35] opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our students who have achieved their dreams of studying at top UK universities
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
                  isTransitioning ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg?height=96&width=96"}
                          alt={testimonials[currentIndex].name}
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
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-[#D29D33] font-medium text-lg">{testimonials[currentIndex].university}</p>
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D29D33] scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>
                {currentIndex + 1} of {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
