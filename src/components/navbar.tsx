"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { SITE_CONTENT } from "@/lib/content"
import ApplicationModal from "@/components/ApplicationModal"
import { Menu, X, ChevronDown, Globe } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = SITE_CONTENT[language]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setIsMobileAboutOpen(false)
  }

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main navbar content */}
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/logo-light.jpg"
                    alt="Justin Monajemi Logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="relative text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 ease-in-out group"
              >
                {t.nav.home}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D29D33] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="relative">
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative"
                >
                  <button className="flex items-center text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 py-2 group relative">
                    {t.nav.about}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D29D33] transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  <div
                    className={`absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-300 transform ${
                      isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#032445] transition-all duration-200 hover:pl-6"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {language === "tr" ? "Hakkımızda" : "About Us"}
                    </Link>
                    <Link
                      href="/about/founder-message"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#032445] transition-all duration-200 hover:pl-6"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {language === "tr" ? "Kurucudan Mesaj" : "Founder's Message"}
                    </Link>
                    <Link
                      href="/about/achievements"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#032445] transition-all duration-200 hover:pl-6"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {language === "tr" ? "Başarılarımız" : "Our Achievements"}
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                className="relative text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 ease-in-out group"
              >
                {t.nav.services}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D29D33] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="relative text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 ease-in-out group"
              >
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D29D33] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="flex items-center text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 hover:scale-105"
              >
                <Globe className="h-4 w-4 mr-1 transition-transform duration-300" />
                {language === "tr" ? "EN" : "TR"}
              </button>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              >
                {language === "tr" ? "Başvuru Yap" : "Apply Now"}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#032445] focus:outline-none transition-all duration-300 hover:scale-110"
              >
                <div className="transition-transform duration-300">
                  {isOpen ? (
                    <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="h-6 w-6 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Outside the container to allow full expansion */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                onClick={closeMenu}
              >
                {t.nav.home}
              </Link>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                >
                  {t.nav.about}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileAboutOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-6 space-y-1 py-2">
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-gray-600 hover:text-[#032445] transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                      onClick={closeMenu}
                    >
                      {language === "tr" ? "Hakkımızda" : "About Us"}
                    </Link>
                    <Link
                      href="/about/founder-message"
                      className="block px-3 py-2 text-gray-600 hover:text-[#032445] transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                      onClick={closeMenu}
                    >
                      {language === "tr" ? "Kurucudan Mesaj" : "Founder's Message"}
                    </Link>
                    <Link
                      href="/about/achievements"
                      className="block px-3 py-2 text-gray-600 hover:text-[#032445] transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                      onClick={closeMenu}
                    >
                      {language === "tr" ? "Başarılarımız" : "Our Achievements"}
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                onClick={closeMenu}
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 hover:bg-gray-50 hover:pl-6 rounded-lg"
                onClick={closeMenu}
              >
                {t.nav.contact}
              </Link>
              <button
                onClick={() => {
                  setLanguage(language === "tr" ? "en" : "tr")
                  closeMenu()
                }}
                className="flex items-center px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-all duration-300 w-full text-left hover:bg-gray-50 hover:pl-6 rounded-lg"
              >
                <Globe className="h-4 w-4 mr-2 transition-transform duration-300" />
                {language === "tr" ? "English" : "Türkçe"}
              </button>
              <div className="px-3 py-3">
                <Button
                  onClick={() => {
                    setIsModalOpen(true)
                    closeMenu()
                  }}
                  className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-6 py-3 rounded-lg font-semibold w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                >
                  {language === "tr" ? "Başvuru Yap" : "Apply Now"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
