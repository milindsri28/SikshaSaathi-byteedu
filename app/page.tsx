"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import SplashScreen from "@/components/splash-screen"
import WelcomeScreens from "@/components/welcome-screens"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Globe,
  Video,
  FileText,
  Brain,
  FlaskConical,
  HelpCircle,
  TrendingUp,
  Wifi,
  Upload,
  Calendar,
  UserCheck,
  BarChart3,
  Shield,
  Smartphone,
  Zap,
  Heart,
  Star,
  Play,
  Download,
  CheckCircle,
  GraduationCap,
  Target,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SikhshaSaathiWebsite() {
  const [showSplash, setShowSplash] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem("userToken")

    // Show splash screen for 5 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false)

      if (isAuthenticated) {
        // User is already authenticated, redirect to dashboard
        const userType = localStorage.getItem("userType")
        if (userType === "admin") {
          router.push("/dashboard/admin")
        } else {
          router.push("/dashboard/student")
        }
      } else {
        // Show welcome screens for all users
        setShowWelcome(true)
      }
    }, 5000) // Changed to 5 seconds

    return () => clearTimeout(splashTimer)
  }, [router])

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    router.push("/auth/login") // Changed to new login page
  }

  if (showSplash) {
    return <SplashScreen />
  }

  if (showWelcome) {
    return <WelcomeScreens onComplete={handleWelcomeComplete} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-lg blur-sm opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                <Image
                  src="/images/sikhshasaathi-logo.jpg"
                  alt="SikhshaSaathi Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                SikhshaSaathi
              </h1>
              <p className="text-xs text-gray-400">LEARN AT YOUR PACE</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-[#57D9FF] transition-colors">
              Features
            </Link>
            <Link href="#classes" className="text-sm font-medium text-gray-300 hover:text-[#57D9FF] transition-colors">
              Classes
            </Link>
            <Link href="#platform" className="text-sm font-medium text-gray-300 hover:text-[#57D9FF] transition-colors">
              Platform
            </Link>
            <Button className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white">
              <Link href="/auth/login">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-[#111827] to-[#1a2234] text-[#57D9FF] border-[#3EADCF]/30">
                  <Heart className="w-3 h-3 mr-1" />
                  HCL Tech Grant Initiative
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Democratizing{" "}
                  <span className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                    Education
                  </span>{" "}
                  for Every Student
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  A student-centric, inclusive, and scalable learning platform designed to bridge the digital divide and
                  provide accessible education in rural and low-connectivity areas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white"
                >
                  <Link href="/auth/login" className="flex items-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Learning
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#3EADCF] text-[#57D9FF] hover:bg-[#111827]">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3EADCF]">6+</div>
                  <div className="text-sm text-gray-400">Major Subjects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#57D9FF]">100%</div>
                  <div className="text-sm text-gray-400">Offline Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#3EADCF]">Multi</div>
                  <div className="text-sm text-gray-400">Languages</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-[#111827] rounded-3xl p-8 shadow-2xl border border-gray-800">
                <Image
                  src="/images/sikhshasaathi-logo.jpg"
                  alt="SikhshaSaathi Learning Platform"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-full p-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Features */}
      <section id="features" className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-black text-[#57D9FF] mb-4">
              <Users className="w-3 h-3 mr-1" />
              For Students
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Empowering Students with{" "}
              <span className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                Smart Learning
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive learning tools designed to make education accessible, engaging, and effective for every
              student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#3EADCF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Multilingual Content</CardTitle>
                <CardDescription className="text-gray-400">
                  Access lessons in local and regional languages for better understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#57D9FF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Video Lessons</CardTitle>
                <CardDescription className="text-gray-400">
                  Chapter-wise, curriculum-aligned videos covering six major subjects.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#3EADCF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Short Notes</CardTitle>
                <CardDescription className="text-gray-400">
                  Printable, chapter-wise revision notes for quick reference and study.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#57D9FF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Interactive Modules</CardTitle>
                <CardDescription className="text-gray-400">
                  Subject-wise learning modules with quizzes and online exams.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#3EADCF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Virtual Labs</CardTitle>
                <CardDescription className="text-gray-400">
                  Interactive labs to perform experiments virtually for grades 8-12.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#57D9FF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Doubt Solving</CardTitle>
                <CardDescription className="text-gray-400">
                  Pre-recorded common doubts and their solutions repository.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#3EADCF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Progress Tracking</CardTitle>
                <CardDescription className="text-gray-400">
                  Real-time progress reports and analytics to monitor learning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#57D9FF] bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white">Offline Access</CardTitle>
                <CardDescription className="text-gray-400">
                  Easy-to-use offline mode with seamless sync when connected.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Class Levels Section */}
      <section id="classes" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#111827] text-[#57D9FF] mb-4">
              <GraduationCap className="w-3 h-3 mr-1" />
              Class Levels
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Learning for{" "}
              <span className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                Classes 1-12
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Curriculum-aligned content designed specifically for each grade level, ensuring age-appropriate learning
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Primary Classes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#3EADCF] bg-[#111827]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1-5</span>
                </div>
                <CardTitle className="text-lg text-white">Primary Classes</CardTitle>
                <CardDescription className="text-gray-400">
                  Foundation building with interactive stories, basic math, science experiments, and creative
                  activities.
                </CardDescription>
                <div className="pt-4">
                  <Badge className="bg-[#111827] text-[#57D9FF] border border-[#3EADCF]/30 text-xs">Ages 6-11</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Middle Classes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#57D9FF] bg-[#111827]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">6-8</span>
                </div>
                <CardTitle className="text-lg text-white">Middle Classes</CardTitle>
                <CardDescription className="text-gray-400">
                  Conceptual learning with detailed explanations, virtual labs, and skill-building exercises.
                </CardDescription>
                <div className="pt-4">
                  <Badge className="bg-[#111827] text-[#57D9FF] border border-[#3EADCF]/30 text-xs">Ages 11-14</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Secondary Classes */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#3EADCF] bg-[#111827]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">9-10</span>
                </div>
                <CardTitle className="text-lg text-white">Secondary Classes</CardTitle>
                <CardDescription className="text-gray-400">
                  Board exam preparation with comprehensive study materials, practice tests, and career guidance.
                </CardDescription>
                <div className="pt-4">
                  <Badge className="bg-[#111827] text-[#57D9FF] border border-[#3EADCF]/30 text-xs">Ages 14-16</Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Senior Secondary */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#57D9FF] bg-[#111827]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">11-12</span>
                </div>
                <CardTitle className="text-lg text-white">Senior Secondary</CardTitle>
                <CardDescription className="text-gray-400">
                  Advanced learning with specialization tracks, competitive exam prep, and college readiness programs.
                </CardDescription>
                <div className="pt-4">
                  <Badge className="bg-[#111827] text-[#57D9FF] border border-[#3EADCF]/30 text-xs">Ages 16-18</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Subject Coverage */}
          <div className="bg-[#111827] rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Complete Subject Coverage</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center p-4 rounded-lg bg-black border border-gray-800">
                <div className="w-12 h-12 bg-[#3EADCF] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">Math</span>
                </div>
                <p className="text-sm font-medium text-[#57D9FF]">Mathematics</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gray-800">
                <div className="w-12 h-12 bg-[#57D9FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">Sci</span>
                </div>
                <p className="text-sm font-medium text-[#3EADCF]">Science</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gray-800">
                <div className="w-12 h-12 bg-[#3EADCF] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">Eng</span>
                </div>
                <p className="text-sm font-medium text-[#57D9FF]">English</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gray-800">
                <div className="w-12 h-12 bg-[#57D9FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <p className="text-sm font-medium text-[#3EADCF]">Social Studies</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gray-800">
                <div className="w-12 h-12 bg-[#3EADCF] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">Lang</span>
                </div>
                <p className="text-sm font-medium text-[#57D9FF]">Languages</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-black border border-gray-800">
                <div className="w-12 h-12 bg-[#57D9FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">Arts</span>
                </div>
                <p className="text-sm font-medium text-[#3EADCF]">Arts & Crafts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Features */}
      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-black text-[#57D9FF] mb-4">
              <UserCheck className="w-3 h-3 mr-1" />
              For Admin & Teachers
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                Teaching Tools
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced management and teaching tools to create, organize, and deliver exceptional educational
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Content Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Upload and manage video lessons, notes, modules, quizzes, and labs with ease.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Teacher Training</CardTitle>
                <CardDescription className="text-gray-400">
                  Develop and manage digital training modules for continuous teacher development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Event Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Host webinars, seminars, and online workshops for enhanced learning experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Mentorship</CardTitle>
                <CardDescription className="text-gray-400">
                  Provide guidance, peer stories, and motivational content to inspire students.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Progress Tracking</CardTitle>
                <CardDescription className="text-gray-400">
                  Monitor student performance, assign tasks, and track attendance effectively.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-black">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Doubt Sessions</CardTitle>
                <CardDescription className="text-gray-400">
                  Organize doubt-solving sessions and respond to student queries in real-time.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="platform" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#111827] text-[#57D9FF] mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Platform Capabilities
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              Built for{" "}
              <span className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                Scale & Impact
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technical capabilities designed to ensure accessibility, scalability, and seamless user
              experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Scalability & Open Source</h3>
                  <p className="text-gray-300">
                    Modular architecture that allows easy replication and community-driven growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Analytics</h3>
                  <p className="text-gray-300">
                    Collect and analyze data to track student progress and engagement effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Cross-Platform Access</h3>
                  <p className="text-gray-300">
                    Designed for accessibility on web browsers, with plans for desktop app integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Secure Authentication</h3>
                  <p className="text-gray-300">
                    Role-based access for students and admins with robust security measures.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Multilingual Support</h3>
                  <p className="text-gray-300">
                    Seamless content delivery in multiple regional languages for inclusive education.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Quick Updates</h3>
                  <p className="text-gray-300">
                    Easy content and feature updates through modular deployment architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#111827] to-black rounded-3xl p-8 text-white border border-gray-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Frontend</span>
                    <Badge className="bg-[#3EADCF]">ReactJS + NextJS</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Styling</span>
                    <Badge className="bg-[#57D9FF]">TailwindCSS</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Authentication</span>
                    <Badge className="bg-[#3EADCF]">Supabase</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Database</span>
                    <Badge className="bg-[#57D9FF]">Supabase</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Language</span>
                    <Badge className="bg-[#3EADCF]">TypeScript</Badge>
                  </div>
                  <div className="mt-8 p-4 bg-black rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Deployment Status</div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#57D9FF]" />
                      <span className="text-[#57D9FF] text-sm">Production Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Empowering Bharat by Bridging the Digital Divide</h2>
            <p className="text-xl mb-8 opacity-90">
              Our platform embodies the vision of providing every student and teacher with the tools they need for a
              transformative learning experience, especially in rural and low-connectivity areas.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="opacity-80">Curriculum-aligned content for comprehensive learning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inclusive Access</h3>
                <p className="opacity-80">Designed for students from all backgrounds and regions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Scalable Impact</h3>
                <p className="opacity-80">Built to grow and adapt with educational needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Transform Education?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students and teachers already using SikhshaSaathi to create meaningful learning
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white"
              >
                <Link href="/auth/login" className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Today
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-[#3EADCF] text-[#57D9FF] hover:bg-[#111827]">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] rounded-lg blur-sm opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                    <Image
                      src="/images/sikhshasaathi-logo.jpg"
                      alt="SikhshaSaathi Logo"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">SikhshaSaathi</h3>
                  <p className="text-xs text-gray-400">LEARN AT YOUR PACE</p>
                  <p className="text-xs text-gray-500">by Aasra Foundation</p>
                </div>
              </div>
              <p className="text-gray-400">
                Democratizing education through innovative technology and inclusive learning solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Teacher Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Virtual Labs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#57D9FF] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SikhshaSaathi by Aasra Foundation Jaipur. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Badge className="bg-[#3EADCF]">HCL Tech Grant</Badge>
              <Badge className="bg-[#57D9FF]">Open Source</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
