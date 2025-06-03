"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function SplashScreen() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111827] to-[#1a2234] flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#3EADCF]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#57D9FF]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#3EADCF]/5 to-[#57D9FF]/5 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Main content */}
      <div
        className={`text-center z-10 transition-all duration-1000 ${fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <Image
              src="/images/sikhshasaathi-logo.jpg"
              alt="SikhshaSaathi Logo"
              width={200}
              height={200}
              className="mx-auto rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent animate-pulse">
            SikhshaSaathi
          </h1>
          <p className="text-lg text-gray-300 font-medium tracking-wide">LEARN AT YOUR PACE</p>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Democratizing education through innovative technology
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-12">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#3EADCF] rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-[#57D9FF] rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-[#3EADCF] rounded-full animate-bounce delay-200"></div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Loading your learning experience...</p>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-500 text-xs">by Aasra Foundation • HCL Tech Grant Initiative</p>
      </div>
    </div>
  )
}
