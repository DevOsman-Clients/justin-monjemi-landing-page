"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";

export default function Footer() {
  const { language } = useLanguage();
  const navContent = SITE_CONTENT[language].nav;
  const footerContent = SITE_CONTENT[language].footer;
  return (
    <footer className="bg-[#032445] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo-dark.jpg"
              alt="Justin Monajemi"
              width={150}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300">{footerContent.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{footerContent.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D29D33] transition-colors"
                >
                  {navContent.about}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D29D33] transition-colors"
                >
                  {navContent.services}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D29D33] transition-colors"
                >
                  {navContent.success}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{footerContent.contact}</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@justinmonajemi.com</p>
              <p>+44 7436 771695</p>
              <p>+90 551 453 8083</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Justin Monajemi British Educational Consultancy.{" "}
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
