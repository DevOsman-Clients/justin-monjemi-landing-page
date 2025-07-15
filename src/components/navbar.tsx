"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import ApplicationModal from "@/components/ApplicationModal";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = SITE_CONTENT[language];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo-light.jpg"
                  alt="Justin Monajemi Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-[#032445]">
                  Justin Monajemi
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#032445] font-medium transition-colors"
              >
                {t.nav.home}
              </Link>

              <div className="relative">
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative"
                >
                  <button className="flex items-center text-gray-700 hover:text-[#032445] font-medium transition-colors py-2">
                    {t.nav.about}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href="/about"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#032445] transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {language === "tr" ? "Hakkımızda" : "About Us"}
                      </Link>
                      <Link
                        href="/about/founder-message"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#032445] transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {language === "tr"
                          ? "Kurucudan Mesaj"
                          : "Founder's Message"}
                      </Link>
                      <Link
                        href="/about/achievements"
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#032445] transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {language === "tr"
                          ? "Başarılarımız"
                          : "Our Achievements"}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/services"
                className="text-gray-700 hover:text-[#032445] font-medium transition-colors"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#032445] font-medium transition-colors"
              >
                {t.nav.contact}
              </Link>

              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="flex items-center text-gray-700 hover:text-[#032445] font-medium transition-colors"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language === "tr" ? "EN" : "TR"}
              </button>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-6 py-2 rounded-lg font-semibold"
              >
                {language === "tr" ? "Başvuru Yap" : "Apply Now"}
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#032445] focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-colors"
                  onClick={closeMenu}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-colors"
                  onClick={closeMenu}
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-colors"
                  onClick={closeMenu}
                >
                  {t.nav.services}
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-colors"
                  onClick={closeMenu}
                >
                  {t.nav.contact}
                </Link>
                <button
                  onClick={() => {
                    setLanguage(language === "tr" ? "en" : "tr");
                    closeMenu();
                  }}
                  className="flex items-center px-3 py-3 text-gray-700 hover:text-[#032445] font-medium transition-colors w-full text-left"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "tr" ? "English" : "Türkçe"}
                </button>
                <div className="px-3 py-3">
                  <Button
                    onClick={() => {
                      setIsModalOpen(true);
                      closeMenu();
                    }}
                    className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-6 py-3 rounded-lg font-semibold w-full"
                  >
                    {language === "tr" ? "Başvuru Yap" : "Apply Now"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
