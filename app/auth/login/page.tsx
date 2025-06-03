"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowLeft, BookOpen, Shield, Users, UserCheck, Eye, EyeOff, Mail, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginType, setLoginType] = useState<"student" | "teacher">("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedRole, setSelectedRole] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)

    // Simulate login process
    setTimeout(() => {
      setLoading(false)

      // Store authentication data
      localStorage.setItem("userToken", "authenticated")
      localStorage.setItem("userType", loginType === "student" ? "student" : "admin")
      localStorage.setItem("userEmail", email)

      if (loginType === "student") {
        localStorage.setItem("userClass", selectedClass)
        router.push("/dashboard/student")
      } else {
        localStorage.setItem("userRole", selectedRole)
        router.push("/dashboard/admin")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
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
                <p className="text-sm text-gray-400">by Aasra Foundation</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
              <p className="text-lg text-gray-300">
                Access your personalized learning dashboard and continue your educational journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-[#1e293b] border-[#334155] hover:border-[#3EADCF] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-[#3EADCF] rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">Students</span>
                  </div>
                  <p className="text-sm text-gray-400">Access lessons, quizzes, and track your progress</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1e293b] border-[#334155] hover:border-[#57D9FF] transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-[#57D9FF] rounded-lg flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">Teachers</span>
                  </div>
                  <p className="text-sm text-gray-400">Manage content, track student progress</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-[#1e293b] border-[#334155]">
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
              onValueChange={(value) => setLoginType(value as "student" | "teacher")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 bg-[#0f172a]">
                <TabsTrigger
                  value="student"
                  className="flex items-center space-x-2 data-[state=active]:bg-[#3EADCF] data-[state=active]:text-white"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Student</span>
                </TabsTrigger>
                <TabsTrigger
                  value="teacher"
                  className="flex items-center space-x-2 data-[state=active]:bg-[#57D9FF] data-[state=active]:text-white"
                >
                  <Shield className="w-4 h-4" />
                  <span>Teacher</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4 mt-6">
                <div className="text-center mb-4">
                  <Badge className="bg-[#0f172a] text-[#3EADCF] border border-[#3EADCF]/30">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF] focus:ring-[#3EADCF]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-[#3EADCF]"
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
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EADCF] text-white"
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

              <TabsContent value="teacher" className="space-y-4 mt-6">
                <div className="text-center mb-4">
                  <Badge className="bg-[#0f172a] text-[#57D9FF] border border-[#57D9FF]/30">
                    <UserCheck className="w-3 h-3 mr-1" />
                    Teacher Portal
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher-email" className="text-white">
                      Email or Teacher ID
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="teacher-email"
                        placeholder="Enter your email or teacher ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF] focus:ring-[#57D9FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teacher-password" className="text-white">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="teacher-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF] focus:ring-[#57D9FF]"
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
                    <Label htmlFor="teacher-role" className="text-white">
                      Your Role
                    </Label>
                    <select
                      id="teacher-role"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#57D9FF] text-white"
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
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded bg-[#0f172a] border-[#334155] text-[#3EADCF]"
                />
                <span className="text-gray-300">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-[#57D9FF] hover:text-[#3EADCF]">
                Forgot password?
              </Link>
            </div>

            <Button
              onClick={handleLogin}
              disabled={
                !email ||
                !password ||
                (loginType === "student" && !selectedClass) ||
                (loginType === "teacher" && !selectedRole) ||
                loading
              }
              className={`w-full ${
                loginType === "student" ? "bg-[#3EADCF] hover:bg-[#3EADCF]/90" : "bg-[#57D9FF] hover:bg-[#57D9FF]/90"
              } text-white`}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                `Sign In to ${loginType === "student" ? "Student" : "Teacher"} Portal`
              )}
            </Button>

            <div className="text-center text-sm text-gray-400">
              {"Don't have an account? "}
              <Link href="/auth/register" className="text-[#57D9FF] hover:text-[#3EADCF] font-medium">
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
