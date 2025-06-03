"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Video, TrendingUp, Wifi, ChevronRight, ChevronLeft } from "lucide-react"

interface WelcomeScreensProps {
  onComplete: () => void
}

export default function WelcomeScreens({ onComplete }: WelcomeScreensProps) {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    {
      title: "Welcome to SikhshaSaathi",
      subtitle: "Your Personal Learning Companion",
      description:
        "Democratizing education through innovative technology and inclusive learning solutions designed for every student.",
      icon: (
        <Image
          src="/images/sikhshasaathi-logo.jpg"
          alt="SikhshaSaathi"
          width={120}
          height={120}
          className="rounded-2xl"
        />
      ),
      features: [
        "Curriculum-aligned content for Classes 1-12",
        "Available in multiple regional languages",
        "Designed for rural and low-connectivity areas",
      ],
    },
    {
      title: "Interactive Learning Experience",
      subtitle: "Engage with Dynamic Content",
      description:
        "Access video lessons, virtual labs, interactive quizzes, and comprehensive study materials all in one place.",
      icon: <Video className="w-24 h-24 text-[#3EADCF]" />,
      features: [
        "Chapter-wise video lessons",
        "Virtual science laboratories",
        "Interactive quizzes and assessments",
        "Printable study notes",
      ],
    },
    {
      title: "Learn Anywhere, Anytime",
      subtitle: "Offline-First Approach",
      description:
        "Download content for offline access and sync your progress when connected. Perfect for areas with limited internet.",
      icon: <Wifi className="w-24 h-24 text-[#57D9FF]" />,
      features: [
        "100% offline functionality",
        "Automatic sync when online",
        "Progressive Web App (PWA)",
        "Works on any device",
      ],
    },
    {
      title: "Track Your Progress",
      subtitle: "Personalized Learning Journey",
      description:
        "Monitor your learning progress, earn achievements, and get personalized recommendations based on your performance.",
      icon: <TrendingUp className="w-24 h-24 text-[#3EADCF]" />,
      features: [
        "Real-time progress tracking",
        "Achievement badges and rewards",
        "Personalized learning paths",
        "Performance analytics",
      ],
    },
  ]

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    } else {
      onComplete()
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
    }
  }

  const skipToAuth = () => {
    onComplete()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111827] to-[#1a2234] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="bg-black/50 backdrop-blur-sm border-gray-800 p-8 lg:p-12">
          <div className="text-center space-y-8">
            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 mb-8">
              {screens.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentScreen
                      ? "bg-[#3EADCF] scale-125"
                      : index < currentScreen
                        ? "bg-[#57D9FF]"
                        : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  {screens[currentScreen].icon}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <h1 className="text-3xl lg:text-4xl font-bold text-white">{screens[currentScreen].title}</h1>
              <h2 className="text-xl text-[#57D9FF] font-medium">{screens[currentScreen].subtitle}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{screens[currentScreen].description}</p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {screens[currentScreen].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="w-2 h-2 bg-[#3EADCF] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8">
              <Button
                variant="ghost"
                onClick={prevScreen}
                disabled={currentScreen === 0}
                className="text-gray-400 hover:text-white disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button variant="ghost" onClick={skipToAuth} className="text-gray-400 hover:text-[#57D9FF]">
                Skip
              </Button>

              <Button
                onClick={nextScreen}
                className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white"
              >
                {currentScreen === screens.length - 1 ? "Get Started" : "Next"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
