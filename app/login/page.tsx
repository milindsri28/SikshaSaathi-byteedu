"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, UserCheck, Eye, EyeOff, Mail, Lock, ArrowLeft, BookOpen, Shield } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginType, setLoginType] = useState<"student" | "admin">("student")

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
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
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                  SikhshaSaathi
                </h1>
                <p className="text-sm text-gray-400">by Aasra Foundation</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Welcome Back!</h2>
              <p className="text-lg text-gray-300">
                Access your personalized learning dashboard and continue your educational journey.
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
                <p className="text-sm text-gray-400">Access lessons, quizzes, and track your progress</p>
              </div>

              <div className="bg-[#111827] rounded-lg p-4 border border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-[#3EADCF]" />
                  </div>
                  <span className="font-semibold text-white">Teachers</span>
                </div>
                <p className="text-sm text-gray-400">Manage content, track student progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-[#111827] border-gray-800">
          <CardHeader className="space-y-4">
            <div className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Sign In</CardTitle>
              <CardDescription className="text-gray-400">
                Choose your account type and enter your credentials
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <Tabs
              value={loginType}
              onValueChange={(value) => setLoginType(value as "student" | "admin")}
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
                    Student Portal
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email" className="text-white">
                      Email or Student ID
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="student-email"
                        placeholder="Enter your email or student ID"
                        className="pl-10 bg-black border-gray-800 text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-password" className="text-white">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="student-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 bg-black border-gray-800 text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-[#57D9FF]"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-class" className="text-white">
                      Select Your Class
                    </Label>
                    <select
                      id="student-class"
                      className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EADCF] text-white"
                    >
                      <option value="">Choose your class</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4 mt-6">
                <div className="text-center mb-4">
                  <Badge className="bg-black text-[#3EADCF] border border-[#3EADCF]/30">
                    <UserCheck className="w-3 h-3 mr-1" />
                    Teacher Portal
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-white">
                      Email or Teacher ID
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-email"
                        placeholder="Enter your email or teacher ID"
                        className="pl-10 bg-black border-gray-800 text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-white">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 bg-black border-gray-800 text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-[#57D9FF]"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-role" className="text-white">
                      Your Role
                    </Label>
                    <select
                      id="admin-role"
                      className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EADCF] text-white"
                    >
                      <option value="">Select your role</option>
                      <option value="teacher">Teacher</option>
                      <option value="admin">School Admin</option>
                      <option value="coordinator">Academic Coordinator</option>
                      <option value="principal">Principal</option>
                    </select>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded bg-black border-gray-700 text-[#3EADCF]" />
                <span className="text-gray-300">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-[#57D9FF] hover:text-[#3EADCF]">
                Forgot password?
              </Link>
            </div>

            <Button
              className={`w-full ${
                loginType === "student"
                  ? "bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF]"
                  : "bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF]"
              } text-white`}
              onClick={() => {
                // Simulate login and redirect to appropriate dashboard
                if (loginType === "student") {
                  window.location.href = "/dashboard/student"
                } else {
                  window.location.href = "/dashboard/admin"
                }
              }}
            >
              Sign In to {loginType === "student" ? "Student" : "Teacher"} Portal
            </Button>

            <div className="text-center text-sm text-gray-400">
              {"Don't have an account? "}
              <Link href="/register" className="text-[#57D9FF] hover:text-[#3EADCF] font-medium">
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
