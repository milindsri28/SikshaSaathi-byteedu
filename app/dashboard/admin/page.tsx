"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Users,
  Video,
  FileText,
  Calendar,
  Bell,
  Upload,
  BarChart3,
  TrendingUp,
  Settings,
  LogOut,
  Menu,
  Search,
  Plus,
  Eye,
  Edit,
  GraduationCap,
  Award,
  Clock,
  CheckCircle,
  MessageSquare,
  Download,
  Send,
  Filter,
  ClipboardList,
  Moon,
  Sun,
  Languages,
  Database,
  Mail,
  FileSpreadsheet,
  Presentation,
  Mic,
  Share,
  Archive,
  MoreHorizontal,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [language, setLanguage] = useState("English")

  const classStats = [
    { class: "Class 10", students: 45, completion: 78, avgScore: 85, attendance: 92 },
    { class: "Class 9", students: 52, completion: 82, avgScore: 79, attendance: 88 },
    { class: "Class 8", students: 38, completion: 75, avgScore: 88, attendance: 95 },
    { class: "Class 7", students: 41, completion: 85, avgScore: 82, attendance: 90 },
  ]

  const recentContent = [
    {
      type: "video",
      title: "Quadratic Equations",
      subject: "Mathematics",
      class: "Class 10",
      uploaded: "2 hours ago",
      views: 156,
      status: "published",
    },
    {
      type: "quiz",
      title: "Photosynthesis Test",
      subject: "Science",
      class: "Class 9",
      uploaded: "1 day ago",
      attempts: 89,
      status: "published",
    },
    {
      type: "assignment",
      title: "Essay Writing Task",
      subject: "English",
      class: "Class 8",
      uploaded: "2 days ago",
      submissions: 34,
      status: "active",
    },
    {
      type: "lab",
      title: "Chemical Reactions Lab",
      subject: "Science",
      class: "Class 10",
      uploaded: "3 days ago",
      completions: 67,
      status: "published",
    },
  ]

  const assignments = [
    {
      title: "Algebra Problem Set",
      subject: "Mathematics",
      class: "Class 10",
      dueDate: "Dec 15",
      submissions: 32,
      total: 45,
      status: "active",
    },
    {
      title: "Science Project",
      subject: "Science",
      class: "Class 9",
      dueDate: "Dec 20",
      submissions: 28,
      total: 52,
      status: "active",
    },
    {
      title: "English Essay",
      subject: "English",
      class: "Class 8",
      dueDate: "Dec 12",
      submissions: 38,
      total: 38,
      status: "completed",
    },
  ]

  const studentQueries = [
    {
      student: "Priya Sharma",
      class: "Class 10",
      subject: "Mathematics",
      query: "Doubt about quadratic formula derivation",
      time: "30 min ago",
      status: "pending",
      priority: "high",
    },
    {
      student: "Rahul Kumar",
      class: "Class 9",
      subject: "Science",
      query: "Photosynthesis process explanation needed",
      time: "1 hour ago",
      status: "answered",
      priority: "medium",
    },
    {
      student: "Anita Singh",
      class: "Class 8",
      subject: "English",
      query: "Grammar rules clarification required",
      time: "2 hours ago",
      status: "pending",
      priority: "low",
    },
  ]

  const upcomingEvents = [
    {
      title: "Mathematics Webinar",
      date: "Tomorrow",
      time: "2:00 PM",
      attendees: 120,
      type: "webinar",
      status: "scheduled",
    },
    {
      title: "Science Quiz Competition",
      date: "Dec 15",
      time: "10:00 AM",
      attendees: 85,
      type: "competition",
      status: "scheduled",
    },
    {
      title: "Parent-Teacher Meeting",
      date: "Dec 18",
      time: "4:00 PM",
      attendees: 200,
      type: "meeting",
      status: "scheduled",
    },
  ]

  const teacherPerformance = {
    contentUploaded: 89,
    studentEngagement: 85,
    averageRating: 4.7,
    responseTime: "2.3 hours",
    coursesCompleted: 12,
    certificationsEarned: 5,
  }

  const notifications = [
    {
      type: "assignment",
      message: "New assignment submission from Priya Sharma",
      time: "5 min ago",
      read: false,
    },
    {
      type: "doubt",
      message: "Urgent doubt query from Class 10 student",
      time: "15 min ago",
      read: false,
    },
    {
      type: "system",
      message: "Weekly progress report is ready",
      time: "1 hour ago",
      read: true,
    },
  ]

  const resourceLibrary = [
    { title: "Algebra Lesson Plans", type: "ppt", downloads: 234, subject: "Mathematics" },
    { title: "Science Experiment Videos", type: "video", downloads: 189, subject: "Science" },
    { title: "English Grammar Worksheets", type: "pdf", downloads: 156, subject: "English" },
    { title: "History Timeline Charts", type: "image", downloads: 98, subject: "Social Studies" },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-white" />
            <div className="text-white">
              <h1 className="text-lg font-bold">SikhshaSaathi</h1>
              <p className="text-xs opacity-90">Teacher Portal</p>
            </div>
          </div>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "overview"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab("content")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "content"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <Upload className="w-5 h-5" />
            <span>Content Management</span>
          </button>

          <button
            onClick={() => setActiveTab("assignments")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "assignments"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <ClipboardList className="w-5 h-5" />
            <span>Assignment Management</span>
          </button>

          <button
            onClick={() => setActiveTab("students")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "students"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Student Management</span>
          </button>

          <button
            onClick={() => setActiveTab("events")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "events"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Events & Webinars</span>
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "analytics"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span>Analytics & Reports</span>
          </button>

          <button
            onClick={() => setActiveTab("doubts")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "doubts"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Doubt Sessions</span>
          </button>

          <button
            onClick={() => setActiveTab("communication")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "communication"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <Mail className="w-5 h-5" />
            <span>Communication Hub</span>
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "resources"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <Database className="w-5 h-5" />
            <span>Resource Repository</span>
          </button>

          <button
            onClick={() => setActiveTab("training")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "training"
                ? "text-gray-700 bg-emerald-50 border-l-4 border-l-emerald-500"
                : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
            }`}
          >
            <Award className="w-5 h-5" />
            <span>Teacher Training</span>
          </button>
        </nav>

        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <Link
            href="/logout"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
              darkMode ? "text-red-400 hover:bg-red-900/20" : "text-red-600 hover:bg-red-50"
            }`}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} shadow-sm border-b`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Welcome, Mrs. Sharma!
                </h1>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Mathematics Teacher • Manage your classes and content
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-gray-500" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={`text-sm border rounded px-2 py-1 ${
                    darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
                  }`}
                >
                  <option value="English">English</option>
                  <option value="Hindi">हिंदी</option>
                  <option value="Marathi">मराठी</option>
                  <option value="Gujarati">ગુજરાતી</option>
                </select>
              </div>

              {/* Dark Mode Toggle */}
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="w-4 h-4" />
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students, content..."
                  className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64 ${
                    darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                  }`}
                />
              </div>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Content
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-200" : ""}`}>
                      Total Students
                    </CardTitle>
                    <Users className="w-4 h-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${darkMode ? "text-white" : ""}`}>176</div>
                    <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Across all classes</p>
                  </CardContent>
                </Card>

                <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-200" : ""}`}>
                      Content Uploaded
                    </CardTitle>
                    <Upload className="w-4 h-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${darkMode ? "text-white" : ""}`}>89</div>
                    <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>This month</p>
                  </CardContent>
                </Card>

                <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-200" : ""}`}>
                      Avg. Completion
                    </CardTitle>
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${darkMode ? "text-white" : ""}`}>80%</div>
                    <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Student progress</p>
                  </CardContent>
                </Card>

                <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className={`text-sm font-medium ${darkMode ? "text-gray-200" : ""}`}>
                      Pending Doubts
                    </CardTitle>
                    <MessageSquare className="w-4 h-4 text-amber-600" />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${darkMode ? "text-white" : ""}`}>12</div>
                    <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Need attention</p>
                  </CardContent>
                </Card>
              </div>

              {/* Teacher Performance Overview */}
              <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                <CardHeader>
                  <CardTitle className={darkMode ? "text-white" : ""}>Your Teaching Performance</CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : ""}>
                    Overview of your teaching effectiveness and engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-emerald-600 ${darkMode ? "text-emerald-400" : ""}`}>
                        {teacherPerformance.contentUploaded}
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Content Uploaded</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-blue-600 ${darkMode ? "text-blue-400" : ""}`}>
                        {teacherPerformance.studentEngagement}%
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Student Engagement</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-amber-600 ${darkMode ? "text-amber-400" : ""}`}>
                        {teacherPerformance.averageRating}
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Average Rating</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-purple-600 ${darkMode ? "text-purple-400" : ""}`}>
                        {teacherPerformance.responseTime}
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Avg Response Time</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-rose-600 ${darkMode ? "text-rose-400" : ""}`}>
                        {teacherPerformance.coursesCompleted}
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Courses Completed</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-indigo-600 ${darkMode ? "text-indigo-400" : ""}`}>
                        {teacherPerformance.certificationsEarned}
                      </div>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Certifications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Class Performance */}
                <div className="lg:col-span-2">
                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Class Performance Overview</CardTitle>
                      <CardDescription className={darkMode ? "text-gray-400" : ""}>
                        Student progress and performance across different classes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {classStats.map((classData, index) => (
                        <div key={index} className="space-y-3 p-4 rounded-lg border">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{classData.class.split(" ")[1]}</span>
                              </div>
                              <div>
                                <h4 className={`font-medium ${darkMode ? "text-white" : ""}`}>{classData.class}</h4>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                  {classData.students} students • {classData.attendance}% attendance
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-emerald-600">{classData.avgScore}%</div>
                              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Avg Score</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className={darkMode ? "text-gray-300" : ""}>Completion Rate</span>
                              <span className={darkMode ? "text-gray-300" : ""}>{classData.completion}%</span>
                            </div>
                            <Progress value={classData.completion} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Notifications */}
                <div>
                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Recent Notifications</CardTitle>
                      <CardDescription className={darkMode ? "text-gray-400" : ""}>
                        Latest updates and alerts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {notifications.map((notification, index) => (
                        <div
                          key={index}
                          className={`flex items-start space-x-3 p-3 rounded-lg ${
                            notification.read
                              ? darkMode
                                ? "bg-gray-700"
                                : "bg-gray-50"
                              : darkMode
                                ? "bg-blue-900/20"
                                : "bg-blue-50"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === "assignment"
                                ? "bg-green-500"
                                : notification.type === "doubt"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className={`text-sm ${darkMode ? "text-white" : ""}`}>{notification.message}</p>
                            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {notification.time}
                            </p>
                          </div>
                          {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Notifications
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === "assignments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Assignment Management
                </h2>
                <div className="flex space-x-2">
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Assignment
                  </Button>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Active Assignments</CardTitle>
                      <CardDescription className={darkMode ? "text-gray-400" : ""}>
                        Manage and track assignment submissions
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {assignments.map((assignment, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${darkMode ? "border-gray-600" : "border-gray-200"}`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h4 className={`font-medium ${darkMode ? "text-white" : ""}`}>{assignment.title}</h4>
                              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                {assignment.subject} • {assignment.class}
                              </p>
                            </div>
                            <Badge
                              variant={assignment.status === "completed" ? "default" : "secondary"}
                              className={assignment.status === "completed" ? "bg-green-500" : ""}
                            >
                              {assignment.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className={darkMode ? "text-gray-300" : ""}>Submissions</span>
                              <span className={darkMode ? "text-gray-300" : ""}>
                                {assignment.submissions}/{assignment.total}
                              </span>
                            </div>
                            <Progress value={(assignment.submissions / assignment.total) * 100} className="h-2" />
                            <div className="flex justify-between items-center">
                              <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                Due: {assignment.dueDate}
                              </span>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-3 h-3 mr-1" />
                                  View
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Edit className="w-3 h-3 mr-1" />
                                  Edit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Quick Actions</CardTitle>
                      <CardDescription className={darkMode ? "text-gray-400" : ""}>
                        Common assignment tasks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <ClipboardList className="w-4 h-4 mr-2" />
                        Create New Assignment
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileSpreadsheet className="w-4 h-4 mr-2" />
                        Grade Submissions
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export Grades
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Send className="w-4 h-4 mr-2" />
                        Send Reminders
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === "doubts" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Doubt Resolution Center
                </h2>
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Live Session
                </Button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Student Queries</CardTitle>
                      <CardDescription className={darkMode ? "text-gray-400" : ""}>
                        Recent doubts and questions from students
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {studentQueries.map((query, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg border ${darkMode ? "border-gray-600" : "border-gray-200"} space-y-3`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">
                                    {query.student
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </div>
                                <div>
                                  <h4 className={`font-medium ${darkMode ? "text-white" : ""}`}>{query.student}</h4>
                                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                    {query.class} • {query.subject}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge
                                  variant={
                                    query.priority === "high"
                                      ? "destructive"
                                      : query.priority === "medium"
                                        ? "default"
                                        : "secondary"
                                  }
                                >
                                  {query.priority}
                                </Badge>
                                <Badge variant={query.status === "answered" ? "default" : "secondary"}>
                                  {query.status === "answered" ? (
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                  ) : (
                                    <Clock className="w-3 h-3 mr-1" />
                                  )}
                                  {query.status}
                                </Badge>
                              </div>
                            </div>
                            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{query.query}</p>
                            <div className="flex items-center justify-between">
                              <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {query.time}
                              </span>
                              <div className="flex space-x-2">
                                {query.status === "pending" && (
                                  <>
                                    <Button size="sm" variant="outline">
                                      <MessageSquare className="w-3 h-3 mr-1" />
                                      Reply
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      <Video className="w-3 h-3 mr-1" />
                                      Video Call
                                    </Button>
                                  </>
                                )}
                                <Button size="sm" variant="ghost">
                                  <MoreHorizontal className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Doubt Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className={`text-2xl font-bold text-red-600 ${darkMode ? "text-red-400" : ""}`}>12</div>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Pending Queries</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold text-green-600 ${darkMode ? "text-green-400" : ""}`}>
                          45
                        </div>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Resolved Today</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold text-blue-600 ${darkMode ? "text-blue-400" : ""}`}>
                          2.3h
                        </div>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Avg Response Time</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                    <CardHeader>
                      <CardTitle className={darkMode ? "text-white" : ""}>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Video className="w-4 h-4 mr-2" />
                        Start Live Session
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Mic className="w-4 h-4 mr-2" />
                        Record Solution
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="w-4 h-4 mr-2" />
                        Create FAQ
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Archive className="w-4 h-4 mr-2" />
                        View Archive
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === "resources" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Resource Repository
                </h2>
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Resource
                </Button>
              </div>

              <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                <CardHeader>
                  <CardTitle className={darkMode ? "text-white" : ""}>Teaching Resources</CardTitle>
                  <CardDescription className={darkMode ? "text-gray-400" : ""}>
                    Centralized library for lesson plans, presentations, and materials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {resourceLibrary.map((resource, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${darkMode ? "border-gray-600" : "border-gray-200"} space-y-3`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              resource.type === "ppt"
                                ? "bg-orange-100"
                                : resource.type === "video"
                                  ? "bg-red-100"
                                  : resource.type === "pdf"
                                    ? "bg-blue-100"
                                    : "bg-green-100"
                            }`}
                          >
                            {resource.type === "ppt" && <Presentation className="w-5 h-5 text-orange-600" />}
                            {resource.type === "video" && <Video className="w-5 h-5 text-red-600" />}
                            {resource.type === "pdf" && <FileText className="w-5 h-5 text-blue-600" />}
                            {resource.type === "image" && <Eye className="w-5 h-5 text-green-600" />}
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-medium text-sm ${darkMode ? "text-white" : ""}`}>{resource.title}</h4>
                            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                              {resource.subject}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {resource.downloads} downloads
                          </span>
                          <div className="flex space-x-1">
                            <Button size="sm" variant="ghost">
                              <Download className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Share className="w-3 h-3" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Settings</h2>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <CardHeader>
                    <CardTitle className={darkMode ? "text-white" : ""}>Dashboard Customization</CardTitle>
                    <CardDescription className={darkMode ? "text-gray-400" : ""}>
                      Personalize your teaching dashboard
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Dark Mode</label>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Switch to dark theme
                        </p>
                      </div>
                      <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                    </div>
                    <div className="space-y-2">
                      <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Dashboard Layout</label>
                      <select
                        className={`w-full p-2 border rounded ${
                          darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                        }`}
                      >
                        <option value="default">Default Layout</option>
                        <option value="compact">Compact View</option>
                        <option value="detailed">Detailed View</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Quick Actions</label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className={`text-sm ${darkMode ? "text-gray-300" : ""}`}>Show content upload</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className={`text-sm ${darkMode ? "text-gray-300" : ""}`}>Show assignment creation</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className={`text-sm ${darkMode ? "text-gray-300" : ""}`}>Show analytics shortcut</span>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={darkMode ? "bg-gray-800 border-gray-700" : ""}>
                  <CardHeader>
                    <CardTitle className={darkMode ? "text-white" : ""}>Communication Preferences</CardTitle>
                    <CardDescription className={darkMode ? "text-gray-400" : ""}>
                      Manage notification and communication settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Email Notifications</label>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Receive email updates for important events
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Doubt Alerts</label>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Get notified when students ask questions
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Assignment Reminders</label>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Reminders for assignment due dates
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <label className={`font-medium ${darkMode ? "text-white" : ""}`}>Preferred Language</label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className={`w-full p-2 border rounded ${
                          darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                        }`}
                      >
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                        <option value="Marathi">मराठी</option>
                        <option value="Gujarati">ગુજરાતી</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
