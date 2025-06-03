"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Phone, Shield, Users, UserCheck, ArrowLeft, BookOpen, MessageSquare, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [authStep, setAuthStep] = useState<"phone" | "otp" | "role">("phone")
  const [userType, setUserType] = useState<"student" | "admin">("student")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const sendOTP = async () => {
    setLoading(true)
    // Simulate Firebase OTP sending
    setTimeout(() => {
      setLoading(false)
      setAuthStep("otp")
    }, 2000)
  }

  const verifyOTP = async () => {
    setLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false)
      if (otp === "123456") {
        setAuthStep("role")
      } else {
        alert("Invalid OTP. Please try again.")
      }
    }, 1500)
  }

  const completeAuth = () => {
    // Store authentication data
    localStorage.setItem("userToken", "authenticated")
    localStorage.setItem("userType", userType)
    localStorage.setItem("phoneNumber", phoneNumber)

    // Redirect to appropriate dashboard
    if (userType === "admin") {
      router.push("/dashboard/admin")
    } else {
      router.push("/dashboard/student")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111827] to-[#1a2234] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="space-y-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-[#57D9FF] hover:text-[#3EADCF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                  <Image
                    src="/images/sikhshasaathi-logo.jpg"
                    alt="SikhshaSaathi Logo"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                  SikhshaSaathi
                </h1>
                <p className="text-sm text-gray-400">LEARN AT YOUR PACE</p>
                <p className="text-xs text-gray-500">by Aasra Foundation</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                {authStep === "phone" && "Enter Your Mobile Number"}
                {authStep === "otp" && "Verify Your Number"}
                {authStep === "role" && "Choose Your Role"}
              </h2>
              <p className="text-lg text-gray-300">
                {authStep === "phone" && "We'll send you a verification code to get started"}
                {authStep === "otp" && "Enter the 6-digit code sent to your mobile"}
                {authStep === "role" && "Select how you'll be using SikhshaSaathi"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#57D9FF]" />
                  </div>
                  <span className="font-semibold text-white">Students</span>
                </div>
                <p className="text-sm text-gray-400">Access lessons, quizzes, and track progress</p>
              </div>

              <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-[#3EADCF]" />
                  </div>
                  <span className="font-semibold text-white">Teachers</span>
                </div>
                <p className="text-sm text-gray-400">Manage content and student progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-[#111827] border-gray-800">
          <CardHeader className="space-y-4">
            <div className="text-center">
              <CardTitle className="text-2xl font-bold text-white">
                {authStep === "phone" && "Mobile Authentication"}
                {authStep === "otp" && "Verify OTP"}
                {authStep === "role" && "Select Your Role"}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {authStep === "phone" && "Secure login with mobile OTP"}
                {authStep === "otp" && `Code sent to ${phoneNumber}`}
                {authStep === "role" && "Choose how you'll use the platform"}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {authStep === "phone" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Mobile Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-10 bg-black border-gray-800 text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                    />
                  </div>
                </div>

                <div className="bg-black rounded-lg p-4 border border-gray-800">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#3EADCF] mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white text-sm">Secure Authentication</h4>
                      <p className="text-xs text-gray-400 mt-1">
                        We use Firebase Authentication to ensure your data is protected with industry-standard security.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={sendOTP}
                  disabled={!phoneNumber || loading}
                  className="w-full bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending OTP...</span>
                    </div>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send OTP
                    </>
                  )}
                </Button>
              </div>
            )}

            {authStep === "otp" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-white">
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="text-center text-2xl tracking-widest bg-black border-gray-800 text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    Didn't receive the code?{" "}
                    <button onClick={sendOTP} className="text-[#57D9FF] hover:text-[#3EADCF] font-medium">
                      Resend OTP
                    </button>
                  </p>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setAuthStep("phone")}
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={verifyOTP}
                    disabled={otp.length !== 6 || loading}
                    className="flex-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      "Verify"
                    )}
                  </Button>
                </div>
              </div>
            )}

            {authStep === "role" && (
              <div className="space-y-6">
                <Tabs
                  value={userType}
                  onValueChange={(value) => setUserType(value as "student" | "admin")}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 bg-black">
                    <TabsTrigger
                      value="student"
                      className="flex items-center space-x-2 data-[state=active]:bg-[#3EADCF] data-[state=active]:text-white"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Student</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="admin"
                      className="flex items-center space-x-2 data-[state=active]:bg-[#3EADCF] data-[state=active]:text-white"
                    >
                      <Shield className="w-4 h-4" />
                      <span>Teacher</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="student" className="space-y-4 mt-6">
                    <div className="text-center mb-4">
                      <Badge className="bg-black text-[#57D9FF] border border-[#3EADCF]/30">
                        <Users className="w-3 h-3 mr-1" />
                        Student Access
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black border border-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#3EADCF]" />
                        <span className="text-sm text-gray-300">Access video lessons and study materials</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black border border-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#3EADCF]" />
                        <span className="text-sm text-gray-300">Take quizzes and track progress</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black border border-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#3EADCF]" />
                        <span className="text-sm text-gray-300">Access virtual labs and experiments</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="admin" className="space-y-4 mt-6">
                    <div className="text-center mb-4">
                      <Badge className="bg-black text-[#3EADCF] border border-[#3EADCF]/30">
                        <UserCheck className="w-3 h-3 mr-1" />
                        Teacher Access
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black border border-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#57D9FF]" />
                        <span className="text-sm text-gray-300">Manage and upload content</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black border border-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#57D9FF]" />
                        <span className="text-sm text-gray-300">Track student progress and performance</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-black border border-gray-800">
                        <CheckCircle className="w-4 h-4 text-[#57D9FF]" />
                        <span className="text-sm text-gray-300">Conduct doubt sessions and webinars</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <Button
                  onClick={completeAuth}
                  className="w-full bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white"
                >
                  Continue as {userType === "student" ? "Student" : "Teacher"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
