"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PartnersProps {
  schoolsContent: {
    readonly title: string
    readonly items: readonly {
      readonly name: string
      readonly location: string
      readonly image: string
    }[]
  }
}

export default function Partners({ schoolsContent }: PartnersProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPartners = (direction: "left" | "right") => {
    const container = document.getElementById("partners-container")
    if (container) {
      const scrollAmount = 320
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(schoolsContent.items.length / 2))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(schoolsContent.items.length / 2)) % Math.ceil(schoolsContent.items.length / 2),
    )
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#032445] mb-8 sm:mb-12">
          {schoolsContent.title}
        </h2>

        <div className="relative">
          {/* Desktop: Horizontal scroll */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollPartners("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <ChevronLeft className="h-6 w-6 text-[#032445]" />
            </button>
            <button
              onClick={() => scrollPartners("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <ChevronRight className="h-6 w-6 text-[#032445]" />
            </button>

            <div
              id="partners-container"
              className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {schoolsContent.items.map((school, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl group"
                >
                  <Image
                    src={school.image || "/placeholder.svg"}
                    alt={school.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover object-center rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                    <h3 className="text-xl font-bold text-white mb-2">{school.name}</h3>
                    <p className="text-white/90">{school.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Carousel with 2 items per slide */}
          <div className="md:hidden">
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
              >
                <ChevronLeft className="h-5 w-5 text-[#032445]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
              >
                <ChevronRight className="h-5 w-5 text-[#032445]" />
              </button>

              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(schoolsContent.items.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 gap-3 px-8">
                        {schoolsContent.items.slice(slideIndex * 2, slideIndex * 2 + 2).map((school, index) => (
                          <div
                            key={index}
                            className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg group"
                          >
                            <Image
                              src={school.image || "/placeholder.svg"}
                              alt={school.name}
                              width={300}
                              height={200}
                              className="w-full h-32 sm:h-40 object-cover object-center rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-lg">
                              <h3 className="text-sm sm:text-base font-bold text-white mb-1">{school.name}</h3>
                              <p className="text-xs sm:text-sm text-white/90">{school.location}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots indicator for mobile */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(schoolsContent.items.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#D29D33]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
