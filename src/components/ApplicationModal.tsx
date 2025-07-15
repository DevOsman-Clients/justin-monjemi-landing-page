"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE_CONTENT } from "@/lib/content";
import { X, Check, ChevronRight, ChevronLeft } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({
  isOpen,
  onClose,
}: ApplicationModalProps) {
  const { language } = useLanguage();
  const t = SITE_CONTENT[language];
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",

    // Academic Information
    currentEducation: "",
    gpa: "",
    englishLevel: "",
    ieltsScore: "",

    // Program Preferences
    preferredUniversity: "",
    preferredProgram: "",
    studyLevel: "",
    startDate: "",

    // Additional Information
    previousUKExperience: false,
    scholarshipInterest: false,
    additionalInfo: "",

    // Agreements
    termsAccepted: false,
    marketingConsent: false,
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    onClose();
    // Here you would typically send the data to your backend
  };

  const getStepTitle = (step: number) => {
    const steps = [
      t.application.steps.personalInfo,
      t.application.steps.academicInfo,
      t.application.steps.programPreferences,
      t.application.steps.additionalInfo,
    ];
    return steps[step - 1];
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.firstName} *
                </label>
                <Input
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="h-12 bg-white border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.lastName} *
                </label>
                <Input
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="h-12 bg-white border-gray-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.email} *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12 bg-white border-gray-300"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.phone} *
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-12 bg-white border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.dateOfBirth} *
                </label>
                <Input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                  className="h-12 bg-white border-gray-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.nationality} *
              </label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("nationality", value)
                }
              >
                <SelectTrigger className="h-12 bg-white border-gray-300">
                  <SelectValue placeholder={t.application.selectNationality} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="turkish">Turkish</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.educationStatus} *
              </label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("currentEducation", value)
                }
              >
                <SelectTrigger className="h-12 bg-white border-gray-300">
                  <SelectValue placeholder={t.application.selectEducation} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="high-school">
                    {t.application.levels.highSchool}
                  </SelectItem>
                  <SelectItem value="undergraduate">
                    {t.application.levels.undergraduate}
                  </SelectItem>
                  <SelectItem value="graduate">
                    {t.application.levels.graduate}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.gpa} *
                </label>
                <Input
                  value={formData.gpa}
                  onChange={(e) => handleInputChange("gpa", e.target.value)}
                  className="h-12 bg-white border-gray-300"
                  placeholder={t.application.placeholder.gpa}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.englishLevel} *
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("englishLevel", value)
                  }
                >
                  <SelectTrigger className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder={t.application.selectLevel} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="beginner">
                      {t.application.levels.beginner}
                    </SelectItem>
                    <SelectItem value="intermediate">
                      {t.application.levels.intermediate}
                    </SelectItem>
                    <SelectItem value="advanced">
                      {t.application.levels.advanced}
                    </SelectItem>
                    <SelectItem value="native">
                      {t.application.levels.native}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.ieltsScore}
              </label>
              <Input
                value={formData.ieltsScore}
                onChange={(e) =>
                  handleInputChange("ieltsScore", e.target.value)
                }
                className="h-12 bg-white border-gray-300"
                placeholder={t.application.placeholder.ielts}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.preferredUniversity}
              </label>
              <Select
                onValueChange={(value) =>
                  handleInputChange("preferredUniversity", value)
                }
              >
                <SelectTrigger className="h-12 bg-white border-gray-300">
                  <SelectValue placeholder={t.application.selectUniversity} />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="oxford">University of Oxford</SelectItem>
                  <SelectItem value="cambridge">
                    University of Cambridge
                  </SelectItem>
                  <SelectItem value="imperial">
                    Imperial College London
                  </SelectItem>
                  <SelectItem value="ucl">University College London</SelectItem>
                  <SelectItem value="lse">
                    London School of Economics
                  </SelectItem>
                  <SelectItem value="other">{t.application.other}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.preferredProgram}
              </label>
              <Input
                value={formData.preferredProgram}
                onChange={(e) =>
                  handleInputChange("preferredProgram", e.target.value)
                }
                className="h-12 bg-white border-gray-300"
                placeholder={t.application.placeholder.program}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.studyLevel} *
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("studyLevel", value)
                  }
                >
                  <SelectTrigger className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder={t.application.selectLevel} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="undergraduate">
                      {t.application.levels.undergraduate}
                    </SelectItem>
                    <SelectItem value="masters">
                      {t.application.levels.masters}
                    </SelectItem>
                    <SelectItem value="phd">
                      {t.application.levels.phd}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.application.startDate} *
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("startDate", value)
                  }
                >
                  <SelectTrigger className="h-12 bg-white border-gray-300">
                    <SelectValue placeholder={t.application.selectDate} />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="september-2024">
                      September 2024
                    </SelectItem>
                    <SelectItem value="january-2025">January 2025</SelectItem>
                    <SelectItem value="september-2025">
                      September 2025
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="ukExperience"
                  checked={formData.previousUKExperience}
                  onCheckedChange={(checked) =>
                    handleInputChange(
                      "previousUKExperience",
                      checked as boolean
                    )
                  }
                />
                <label
                  htmlFor="ukExperience"
                  className="text-sm font-medium text-gray-700"
                >
                  {t.application.previousUKExperience}
                </label>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="scholarship"
                  checked={formData.scholarshipInterest}
                  onCheckedChange={(checked) =>
                    handleInputChange("scholarshipInterest", checked as boolean)
                  }
                />
                <label
                  htmlFor="scholarship"
                  className="text-sm font-medium text-gray-700"
                >
                  {t.application.scholarshipInterest}
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.application.additionalInfo}
              </label>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange("additionalInfo", e.target.value)
                }
                className="min-h-[120px] bg-white border-gray-300"
                placeholder={t.application.placeholder.additionalInfo}
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) =>
                    handleInputChange("termsAccepted", checked as boolean)
                  }
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  {t.application.termsAccepted} *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketing"
                  checked={formData.marketingConsent}
                  onCheckedChange={(checked) =>
                    handleInputChange("marketingConsent", checked as boolean)
                  }
                />
                <label htmlFor="marketing" className="text-sm text-gray-700">
                  {t.application.marketingConsent}
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] h-[95vh] bg-white p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="px-8 py-6 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-[#032445]">
                {t.application.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center space-x-4 mt-6">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                (step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step === currentStep
                          ? "bg-[#D29D33] text-white"
                          : step < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step < currentStep ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step
                      )}
                    </div>
                    {step < totalSteps && (
                      <div
                        className={`w-16 h-1 mx-2 ${
                          step < currentStep ? "bg-green-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                )
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-[#032445]">
                {getStepTitle(currentStep)}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {t.application.stepInfo} {currentStep} {t.application.of}{" "}
                {totalSteps}
              </p>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="flex-1 px-8 py-6 overflow-y-auto">
            {renderStepContent()}
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 h-12 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                {t.application.buttons.previous}
              </Button>

              {currentStep === totalSteps ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.termsAccepted}
                  className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-8 py-3 h-12"
                >
                  {t.application.buttons.submit}
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="bg-[#D29D33] hover:bg-[#b8851f] text-white px-6 py-3 h-12"
                >
                  {t.application.buttons.next}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
