"use client";

import type React from "react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Send, Clock, Award, Users } from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();
  const content = SITE_CONTENT[language].contact;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    educationLevel: "",
    program: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gradient-to-br from-[#032445] to-[#0a3a5c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-8">
            {content.title}
          </h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            {content.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#D29D33]" />
              </div>
              <p className="text-white font-semibold">
                {content.quickResponse}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#D29D33]" />
              </div>
              <p className="text-white font-semibold">
                {content.expertConsultants}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#D29D33]" />
              </div>
              <p className="text-white font-semibold">
                {content.freeConsultation}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
                <h2 className="text-2xl font-bold text-[#032445] mb-8">
                  {content.contactForm}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        {content.form.fullName} *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        placeholder={content.placeholder.fullName}
                        className="bg-white border-gray-300 focus:border-[#D29D33] focus:ring-[#D29D33]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        {content.form.email} *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="example@email.com"
                        className="bg-white border-gray-300 focus:border-[#D29D33] focus:ring-[#D29D33]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        {content.form.phone} *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+90 5XX XXX XX XX"
                        className="bg-white border-gray-300 focus:border-[#D29D33] focus:ring-[#D29D33]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        {content.form.educationLevel} *
                      </label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("educationLevel", value)
                        }
                      >
                        <SelectTrigger className="bg-white border-gray-300 focus:border-[#D29D33] focus:ring-[#D29D33]">
                          <SelectValue
                            placeholder={content.placeholder.select}
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-300">
                          <SelectItem value="highSchool">
                            {content.form.levels.highSchool}
                          </SelectItem>
                          <SelectItem value="university">
                            {content.form.levels.university}
                          </SelectItem>
                          <SelectItem value="postgraduate">
                            {content.form.levels.postgraduate}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      {content.form.message} *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="h-40 bg-white border-gray-300 focus:border-[#D29D33] focus:ring-[#D29D33]"
                      placeholder={content.placeholder.message}
                    />
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        handleInputChange("consent", checked as boolean)
                      }
                      className="mt-1"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-gray-700 leading-relaxed"
                    >
                      {content.form.consent}
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formData.consent}
                    className="w-full bg-[#D29D33] hover:bg-[#b8851f] text-white py-4 rounded-lg font-semibold text-lg disabled:opacity-50"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {content.form.submit}
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-[#032445] mb-6">
                  {content.contactInfo}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D29D33] rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        +44 20 1234 5678
                      </p>
                      <p className="text-sm text-gray-600">UK Office</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D29D33] rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        +90 212 123 4567
                      </p>
                      <p className="text-sm text-gray-600">Turkey Office</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D29D33] rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        info@justinmonajemi.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#D29D33] rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {content.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#032445] rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-lg font-bold mb-4">
                  {content.quickContact}
                </h3>
                <p className="text-blue-100 mb-6 text-sm">
                  {content.whatsappSupport}
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  WhatsApp: +90 5XX XXX XX XX
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
