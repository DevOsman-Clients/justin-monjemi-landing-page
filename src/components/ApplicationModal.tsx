"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/contexts/LanguageContext"
import { SITE_CONTENT } from "@/lib/content"
import { X, ChevronRight, ChevronLeft } from "lucide-react"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const { language } = useLanguage()
  const t = SITE_CONTENT[language]
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    currentEducation: "",
    gpa: "",
    englishLevel: "",
    ieltsScore: "",
    preferredUniversity: "",
    preferredProgram: "",
    studyLevel: "",
    startDate: "",
    previousUKExperience: false,
    scholarshipInterest: false,
    additionalInfo: "",
    termsAccepted: false,
    marketingConsent: false,
  })

  const totalSteps = 4

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    onClose()
  }

  const getStepTitle = (step: number) => {
    const steps = [
      t.application.steps.personalInfo,
      t.application.steps.academicInfo,
      t.application.steps.programPreferences,
      t.application.steps.additionalInfo,
    ]
    return steps[step - 1]
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.firstName} *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.lastName} *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.email} *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.phone} *</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.dateOfBirth} *</label>
                <Input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.nationality} *</label>
              <Select onValueChange={(value) => handleInputChange("nationality", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.application.selectNationality} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="turkish">Turkish</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.educationStatus} *</label>
              <Select onValueChange={(value) => handleInputChange("currentEducation", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.application.selectEducation} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">{t.application.levels.highSchool}</SelectItem>
                  <SelectItem value="undergraduate">{t.application.levels.undergraduate}</SelectItem>
                  <SelectItem value="graduate">{t.application.levels.graduate}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.gpa} *</label>
                <Input
                  value={formData.gpa}
                  onChange={(e) => handleInputChange("gpa", e.target.value)}
                  className="w-full"
                  placeholder={t.application.placeholder.gpa}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.englishLevel} *</label>
                <Select onValueChange={(value) => handleInputChange("englishLevel", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.application.selectLevel} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">{t.application.levels.beginner}</SelectItem>
                    <SelectItem value="intermediate">{t.application.levels.intermediate}</SelectItem>
                    <SelectItem value="advanced">{t.application.levels.advanced}</SelectItem>
                    <SelectItem value="native">{t.application.levels.native}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.ieltsScore}</label>
              <Input
                value={formData.ieltsScore}
                onChange={(e) => handleInputChange("ieltsScore", e.target.value)}
                className="w-full"
                placeholder={t.application.placeholder.ielts}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.preferredUniversity}
              </label>
              <Select onValueChange={(value) => handleInputChange("preferredUniversity", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.application.selectUniversity} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oxford">University of Oxford</SelectItem>
                  <SelectItem value="cambridge">University of Cambridge</SelectItem>
                  <SelectItem value="imperial">Imperial College London</SelectItem>
                  <SelectItem value="ucl">University College London</SelectItem>
                  <SelectItem value="lse">London School of Economics</SelectItem>
                  <SelectItem value="other">{t.application.other}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.preferredProgram}</label>
              <Input
                value={formData.preferredProgram}
                onChange={(e) => handleInputChange("preferredProgram", e.target.value)}
                className="w-full"
                placeholder={t.application.placeholder.program}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.studyLevel} *</label>
                <Select onValueChange={(value) => handleInputChange("studyLevel", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.application.selectLevel} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="undergraduate">{t.application.levels.undergraduate}</SelectItem>
                    <SelectItem value="masters">{t.application.levels.masters}</SelectItem>
                    <SelectItem value="phd">{t.application.levels.phd}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.startDate} *</label>
                <Select onValueChange={(value) => handleInputChange("startDate", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t.application.selectDate} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="september-2024">September 2024</SelectItem>
                    <SelectItem value="january-2025">January 2025</SelectItem>
                    <SelectItem value="september-2025">September 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="ukExperience"
                  checked={formData.previousUKExperience}
                  onCheckedChange={(checked) => handleInputChange("previousUKExperience", checked as boolean)}
                />
                <label htmlFor="ukExperience" className="text-sm font-medium text-gray-700">
                  {t.application.previousUKExperience}
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="scholarship"
                  checked={formData.scholarshipInterest}
                  onCheckedChange={(checked) => handleInputChange("scholarshipInterest", checked as boolean)}
                />
                <label htmlFor="scholarship" className="text-sm font-medium text-gray-700">
                  {t.application.scholarshipInterest}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.application.additionalInfo}</label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                className="w-full min-h-[100px]"
                placeholder={t.application.placeholder.additionalInfo}
              />
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                  {t.application.termsAccepted} *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketing"
                  checked={formData.marketingConsent}
                  onCheckedChange={(checked) => handleInputChange("marketingConsent", checked as boolean)}
                />
                <label htmlFor="marketing" className="text-sm text-gray-700 leading-relaxed">
                  {t.application.marketingConsent}
                </label>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-2xl max-h-[95vh] p-0 gap-0 overflow-hidden bg-white">
        {/* Header */}
        <DialogHeader className="px-6 py-4 border-b bg-gray-50 space-y-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-[#032445]">{t.application.title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-gray-200">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{getStepTitle(currentStep)}</span>
              <span className="text-sm text-gray-500">
                {currentStep} / {totalSteps}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#D29D33] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">{renderStepContent()}</div>

        {/* Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
            {t.application.buttons.previous}
          </Button>

          {currentStep === totalSteps ? (
            <Button
              onClick={handleSubmit}
              disabled={!formData.termsAccepted}
              className="bg-[#D29D33] hover:bg-[#b8851f] text-white disabled:opacity-50"
            >
              {t.application.buttons.submit}
            </Button>
          ) : (
            <Button onClick={nextStep} className="bg-[#D29D33] hover:bg-[#b8851f] text-white flex items-center gap-2">
              {t.application.buttons.next}
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
