"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowLeft,
  BookOpen,
  Shield,
  Users,
  UserCheck,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  School,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [registerType, setRegisterType] = useState<"student" | "teacher">("student")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    class: "",
    school: "",
    role: "",
    subject: "",
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = async () => {
    setLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setLoading(false)

      // Store authentication data
      localStorage.setItem("userToken", "authenticated")
      localStorage.setItem("userType", registerType === "student" ? "student" : "admin")
      localStorage.setItem("userEmail", formData.email)
      localStorage.setItem("userName", `${formData.firstName} ${formData.lastName}`)

      if (registerType === "student") {
        localStorage.setItem("userClass", formData.class)
        router.push("/dashboard/student")
      } else {
        localStorage.setItem("userRole", formData.role)
        router.push("/dashboard/admin")
      }
    }, 2000)
  }

  const isFormValid = () => {
    const baseValid =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword

    if (registerType === "student") {
      return baseValid && formData.class && formData.school
    } else {
      return baseValid && formData.school && formData.role && formData.subject
    }
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
              <h2 className="text-4xl font-bold text-white">Join Our Learning Community!</h2>
              <p className="text-lg text-gray-300">
                Create your account and start your journey towards quality education for all.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-6 border border-[#334155]">
              <h3 className="font-semibold text-white mb-4">What you'll get:</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3EADCF] rounded-full"></div>
                  <span>Access to curriculum-aligned content for Classes 1-12</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#57D9FF] rounded-full"></div>
                  <span>Interactive video lessons and virtual labs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3EADCF] rounded-full"></div>
                  <span>Progress tracking and personalized dashboards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#57D9FF] rounded-full"></div>
                  <span>Multilingual content and offline access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-[#1e293b] border-[#334155]">
          <CardHeader className="space-y-4">
            <div className="text-center">
              <CardTitle className="text-2xl font-bold text-white">Create Account</CardTitle>
              <CardDescription className="text-gray-400">Join thousands of learners and educators</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <Tabs
              value={registerType}
              onValueChange={(value) => setRegisterType(value as "student" | "teacher")}
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
                    Student Registration
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-first-name" className="text-white">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="student-first-name"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-last-name" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="student-last-name"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-email" className="text-white">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student-phone" className="text-white">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="student-phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-class" className="text-white">
                        Class
                      </Label>
                      <select
                        id="student-class"
                        value={formData.class}
                        onChange={(e) => handleInputChange("class", e.target.value)}
                        className="w-full px-3 py-2 border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EADCF] bg-[#0f172a] text-white"
                      >
                        <option value="">Select class</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            Class {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-school" className="text-white">
                        School Name
                      </Label>
                      <div className="relative">
                        <School className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="student-school"
                          placeholder="School name"
                          value={formData.school}
                          onChange={(e) => handleInputChange("school", e.target.value)}
                          className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
                        />
                      </div>
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
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
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
                    <Label htmlFor="student-confirm-password" className="text-white">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="student-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#3EADCF]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-[#3EADCF]"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="teacher" className="space-y-4 mt-6">
                <div className="text-center mb-4">
                  <Badge className="bg-[#0f172a] text-[#57D9FF] border border-[#57D9FF]/30">
                    <UserCheck className="w-3 h-3 mr-1" />
                    Teacher Registration
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-first-name" className="text-white">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="teacher-first-name"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-last-name" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="teacher-last-name"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teacher-email" className="text-white">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="teacher-email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teacher-phone" className="text-white">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="teacher-phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teacher-school" className="text-white">
                      School/Institution
                    </Label>
                    <div className="relative">
                      <School className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="teacher-school"
                        placeholder="School or institution name"
                        value={formData.school}
                        onChange={(e) => handleInputChange("school", e.target.value)}
                        className="pl-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teacher-role" className="text-white">
                        Role
                      </Label>
                      <select
                        id="teacher-role"
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        className="w-full px-3 py-2 border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#57D9FF] bg-[#0f172a] text-white"
                      >
                        <option value="">Select role</option>
                        <option value="teacher">Teacher</option>
                        <option value="admin">School Admin</option>
                        <option value="coordinator">Academic Coordinator</option>
                        <option value="principal">Principal</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teacher-subject" className="text-white">
                        Subject Specialization
                      </Label>
                      <select
                        id="teacher-subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="w-full px-3 py-2 border border-[#334155] rounded-md focus:outline-none focus:ring-2 focus:ring-[#57D9FF] bg-[#0f172a] text-white"
                      >
                        <option value="">Select subject</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                        <option value="social-studies">Social Studies</option>
                        <option value="languages">Languages</option>
                        <option value="arts">Arts & Crafts</option>
                        <option value="multiple">Multiple Subjects</option>
                      </select>
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
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
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
                    <Label htmlFor="teacher-confirm-password" className="text-white">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="teacher-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 bg-[#0f172a] border-[#334155] text-white focus:border-[#57D9FF]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-[#57D9FF]"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-4">
              <label className="flex items-start space-x-2 text-sm">
                <input type="checkbox" className="rounded border-[#334155] mt-0.5 bg-[#0f172a]" />
                <span className="text-gray-300">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#57D9FF] hover:text-[#3EADCF]">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-[#57D9FF] hover:text-[#3EADCF]">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              <Button
                onClick={handleRegister}
                disabled={!isFormValid() || loading}
                className={`w-full ${
                  registerType === "student"
                    ? "bg-[#3EADCF] hover:bg-[#3EADCF]/90"
                    : "bg-[#57D9FF] hover:bg-[#57D9FF]/90"
                } text-white`}
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  `Create ${registerType === "student" ? "Student" : "Teacher"} Account`
                )}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#57D9FF] hover:text-[#3EADCF] font-medium">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
