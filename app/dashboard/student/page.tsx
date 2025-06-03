"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  BookOpen,
  Video,
  FileText,
  Brain,
  FlaskConical,
  HelpCircle,
  TrendingUp,
  Bell,
  Download,
  Play,
  Star,
  Award,
  Target,
  CheckCircle,
  BarChart3,
  GraduationCap,
  Menu,
  Search,
  Settings,
  LogOut,
  Bookmark,
  Users,
  Trophy,
  Moon,
  Sun,
  Plus,
  Filter,
  Share,
  ThumbsUp,
  MessageCircle,
  BookmarkPlus,
  Languages,
} from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [language, setLanguage] = useState("English")
  const [activeTab, setActiveTab] = useState("overview")

  const subjects = [
    {
      name: "Mathematics",
      progress: 75,
      color: "bg-[#3EADCF]",
      lessons: 24,
      completed: 18,
      nextTopic: "Quadratic Equations",
    },
    { name: "Science", progress: 60, color: "bg-[#57D9FF]", lessons: 20, completed: 12, nextTopic: "Photosynthesis" },
    { name: "English", progress: 85, color: "bg-[#3EADCF]", lessons: 18, completed: 15, nextTopic: "Essay Writing" },
    {
      name: "Social Studies",
      progress: 45,
      color: "bg-[#57D9FF]",
      lessons: 16,
      completed: 7,
      nextTopic: "Indian History",
    },
    { name: "Hindi", progress: 70, color: "bg-[#3EADCF]", lessons: 14, completed: 10, nextTopic: "Grammar Rules" },
    {
      name: "Computer Science",
      progress: 90,
      color: "bg-[#57D9FF]",
      lessons: 12,
      completed: 11,
      nextTopic: "Python Basics",
    },
  ]

  const personalizedRecommendations = [
    {
      type: "lesson",
      title: "Quadratic Formula Practice",
      subject: "Mathematics",
      difficulty: "Medium",
      time: "15 min",
    },
    { type: "quiz", title: "Photosynthesis Quick Test", subject: "Science", difficulty: "Easy", time: "10 min" },
    { type: "lab", title: "Chemical Reactions Simulation", subject: "Science", difficulty: "Hard", time: "30 min" },
    { type: "video", title: "Essay Structure Guide", subject: "English", difficulty: "Easy", time: "12 min" },
  ]

  const bookmarkedContent = [
    { title: "Pythagorean Theorem", subject: "Mathematics", type: "video", bookmarkedAt: "2 days ago" },
    { title: "Periodic Table Notes", subject: "Science", type: "notes", bookmarkedAt: "1 week ago" },
    { title: "Grammar Rules Quiz", subject: "English", type: "quiz", bookmarkedAt: "3 days ago" },
  ]

  const weeklyGoals = [
    { goal: "Complete 5 Math lessons", progress: 80, current: 4, target: 5 },
    { goal: "Take 3 Science quizzes", progress: 67, current: 2, target: 3 },
    { goal: "Read 2 English chapters", progress: 100, current: 2, target: 2 },
    { goal: "Practice 1 Virtual Lab", progress: 0, current: 0, target: 1 },
  ]

  const leaderboard = [
    { rank: 1, name: "Priya Sharma", score: 2450, avatar: "PS", class: "10A" },
    { rank: 2, name: "Rahul Kumar", score: 2380, avatar: "RK", class: "10B" },
    { rank: 3, name: "You", score: 2320, avatar: "YU", class: "10A", isCurrentUser: true },
    { rank: 4, name: "Anita Singh", score: 2280, avatar: "AS", class: "10A" },
    { rank: 5, name: "Vikram Patel", score: 2250, avatar: "VP", class: "10B" },
  ]

  const achievements = [
    { title: "Math Master", description: "Completed 50 math lessons", icon: "🏆", earned: true, date: "Dec 10" },
    { title: "Science Explorer", description: "Finished 10 virtual labs", icon: "🔬", earned: true, date: "Dec 8" },
    { title: "Quiz Champion", description: "Scored 90%+ in 20 quizzes", icon: "🎯", earned: false, progress: 85 },
    { title: "Study Streak", description: "7 days continuous learning", icon: "🔥", earned: true, date: "Dec 12" },
  ]

  const communityPosts = [
    {
      author: "Priya S.",
      subject: "Mathematics",
      question: "Can someone explain the quadratic formula step by step?",
      replies: 5,
      likes: 12,
      time: "2 hours ago",
    },
    {
      author: "Rahul K.",
      subject: "Science",
      question: "What's the difference between mitosis and meiosis?",
      replies: 8,
      likes: 15,
      time: "4 hours ago",
    },
  ]

  const upcomingEvents = [
    { title: "Mathematics Test", date: "Tomorrow", time: "10:00 AM", type: "test" },
    { title: "Science Webinar", date: "Dec 15", time: "2:00 PM", type: "webinar" },
    { title: "English Assignment Due", date: "Dec 18", time: "11:59 PM", type: "assignment" },
  ]

  const notifications = [
    { type: "assignment", message: "New assignment posted in Mathematics", time: "1 hour ago", read: false },
    { type: "achievement", message: "You earned the 'Study Streak' badge!", time: "2 hours ago", read: false },
    { type: "reminder", message: "Science test tomorrow at 10 AM", time: "1 day ago", read: true },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111827] shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF]">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-white" />
            <div className="text-white">
              <h1 className="text-lg font-bold">SikhshaSaathi</h1>
              <p className="text-xs opacity-90">Student Portal</p>
            </div>
          </div>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "overview"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab("learning")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "learning"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Learning Path</span>
          </button>

          <button
            onClick={() => setActiveTab("content")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "content"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Video className="w-5 h-5" />
            <span>Video Lessons</span>
          </button>

          <button
            onClick={() => setActiveTab("downloads")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "downloads"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Download className="w-5 h-5" />
            <span>Download Center</span>
          </button>

          <button
            onClick={() => setActiveTab("bookmarks")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "bookmarks"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Bookmark className="w-5 h-5" />
            <span>Bookmarks</span>
          </button>

          <button
            onClick={() => setActiveTab("labs")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "labs"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <FlaskConical className="w-5 h-5" />
            <span>Virtual Labs</span>
          </button>

          <button
            onClick={() => setActiveTab("community")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "community"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Community</span>
          </button>

          <button
            onClick={() => setActiveTab("doubts")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "doubts"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            <span>Doubt Solving</span>
          </button>

          <button
            onClick={() => setActiveTab("progress")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "progress"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span>Progress Report</span>
          </button>

          <button
            onClick={() => setActiveTab("achievements")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
              activeTab === "achievements"
                ? "text-white bg-[#3EADCF] border-l-4 border-l-[#57D9FF]"
                : "text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Award className="w-5 h-5" />
            <span>Achievements</span>
          </button>
        </nav>

        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <button
            onClick={() => setActiveTab("settings")}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <Link
            href="/logout"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/20"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-[#111827] shadow-sm border-b border-gray-800">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white">Welcome back, Rahul!</h1>
                <p className="text-gray-400">Class 10 • Ready to learn today?</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4 text-gray-500" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="text-sm border rounded px-2 py-1 bg-black border-gray-600 text-white"
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
                  placeholder="Search lessons, notes..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3EADCF] w-64 bg-black border-gray-600 text-white"
                />
              </div>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#57D9FF] rounded-full text-xs"></span>
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
                <Card className="bg-[#111827] border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-200">Total Lessons</CardTitle>
                    <BookOpen className="w-4 h-4 text-[#3EADCF]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">104</div>
                    <p className="text-xs text-gray-400">73 completed</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#111827] border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-200">Quiz Score</CardTitle>
                    <Star className="w-4 h-4 text-[#57D9FF]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">85%</div>
                    <p className="text-xs text-gray-400">Average this month</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#111827] border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-200">Study Streak</CardTitle>
                    <Target className="w-4 h-4 text-[#3EADCF]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">12</div>
                    <p className="text-xs text-gray-400">Days in a row</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#111827] border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-200">Achievements</CardTitle>
                    <Award className="w-4 h-4 text-[#57D9FF]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">8</div>
                    <p className="text-xs text-gray-400">Badges earned</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Subject Progress */}
                <div className="lg:col-span-2">
                  <Card className="bg-[#111827] border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Subject Progress</CardTitle>
                      <CardDescription className="text-gray-400">
                        Your learning progress across all subjects
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {subjects.map((subject, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                              <span className="font-medium text-white">{subject.name}</span>
                            </div>
                            <div className="text-sm text-gray-400">
                              {subject.completed}/{subject.lessons} lessons
                            </div>
                          </div>
                          <Progress value={subject.progress} className="h-2" />
                          <div className="text-right text-sm text-gray-400">{subject.progress}%</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Weekly Goals */}
                <div>
                  <Card className="bg-[#111827] border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Weekly Goals</CardTitle>
                      <CardDescription className="text-gray-400">Track your weekly learning targets</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {weeklyGoals.map((goal, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white">{goal.goal}</span>
                            <span className="text-xs text-gray-400">
                              {goal.current}/{goal.target}
                            </span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Personalized Recommendations */}
              <Card className="bg-[#111827] border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Recommended for You</CardTitle>
                  <CardDescription className="text-gray-400">
                    Personalized content based on your learning progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {personalizedRecommendations.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-gray-600 bg-black hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          {item.type === "lesson" && <BookOpen className="w-4 h-4 text-[#3EADCF]" />}
                          {item.type === "quiz" && <Brain className="w-4 h-4 text-[#57D9FF]" />}
                          {item.type === "lab" && <FlaskConical className="w-4 h-4 text-[#3EADCF]" />}
                          {item.type === "video" && <Video className="w-4 h-4 text-[#57D9FF]" />}
                          <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {item.difficulty}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm mb-1 text-white">{item.title}</h4>
                        <p className="text-xs text-gray-400 mb-2">{item.subject}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{item.time}</span>
                          <Button size="sm" variant="outline" className="border-[#3EADCF] text-[#3EADCF]">
                            Start
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "bookmarks" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Bookmarked Content</h2>
                <Button className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF]">
                  <BookmarkPlus className="w-4 h-4 mr-2" />
                  Add Bookmark
                </Button>
              </div>

              <Card className="bg-[#111827] border-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {bookmarkedContent.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border border-gray-600"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              item.type === "video"
                                ? "bg-[#57D9FF]/20"
                                : item.type === "notes"
                                  ? "bg-[#3EADCF]/20"
                                  : "bg-[#57D9FF]/20"
                            }`}
                          >
                            {item.type === "video" && <Video className="w-5 h-5 text-[#57D9FF]" />}
                            {item.type === "notes" && <FileText className="w-5 h-5 text-[#3EADCF]" />}
                            {item.type === "quiz" && <Brain className="w-5 h-5 text-[#57D9FF]" />}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{item.title}</h4>
                            <p className="text-sm text-gray-400">
                              {item.subject} • Bookmarked {item.bookmarkedAt}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" className="border-[#3EADCF] text-[#3EADCF]">
                            <Play className="w-4 h-4 mr-1" />
                            Open
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "community" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Community Discussions</h2>
                <Button className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF]">
                  <Plus className="w-4 h-4 mr-2" />
                  Ask Question
                </Button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  {communityPosts.map((post, index) => (
                    <Card key={index} className="bg-[#111827] border-gray-800">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium text-white">{post.author}</span>
                              <Badge variant="outline" className="border-gray-600 text-gray-300">
                                {post.subject}
                              </Badge>
                              <span className="text-sm text-gray-500">{post.time}</span>
                            </div>
                            <p className="text-gray-300 mb-3">{post.question}</p>
                            <div className="flex items-center space-x-4">
                              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#57D9FF]">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {post.likes}
                              </Button>
                              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#57D9FF]">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                {post.replies} replies
                              </Button>
                              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-[#57D9FF]">
                                <Share className="w-4 h-4 mr-1" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Card className="bg-[#111827] border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-white">Leaderboard</CardTitle>
                      <CardDescription className="text-gray-400">Top performers this week</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {leaderboard.map((user, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-3 rounded-lg ${
                            user.isCurrentUser ? "bg-[#3EADCF]/20 border border-[#3EADCF]/30" : "bg-black"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                user.rank === 1
                                  ? "bg-[#57D9FF] text-white"
                                  : user.rank === 2
                                    ? "bg-gray-400 text-white"
                                    : user.rank === 3
                                      ? "bg-[#3EADCF] text-white"
                                      : "bg-gray-600 text-gray-300"
                              }`}
                            >
                              {user.rank}
                            </span>
                            <div className="w-8 h-8 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">{user.avatar}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm text-white">{user.name}</div>
                            <div className="text-xs text-gray-400">
                              {user.class} • {user.score} points
                            </div>
                          </div>
                          {user.rank <= 3 && <Trophy className="w-4 h-4 text-[#57D9FF]" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Achievements & Badges</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className={`${
                      achievement.earned ? "border-[#57D9FF] bg-[#57D9FF]/10" : "bg-[#111827] border-gray-800"
                    }`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <h3 className="font-bold mb-2 text-white">{achievement.title}</h3>
                      <p className="text-sm mb-4 text-gray-400">{achievement.description}</p>
                      {achievement.earned ? (
                        <Badge className="bg-[#57D9FF] text-white">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Earned {achievement.date}
                        </Badge>
                      ) : (
                        <div className="space-y-2">
                          <Progress value={achievement.progress} className="h-2" />
                          <span className="text-xs text-gray-500">{achievement.progress}% complete</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Download Center</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="border-gray-600 text-gray-300">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF]">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-[#111827]">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#3EADCF]">
                    All Content
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="data-[state=active]:bg-[#3EADCF]">
                    Videos
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="data-[state=active]:bg-[#3EADCF]">
                    Notes
                  </TabsTrigger>
                  <TabsTrigger value="worksheets" className="data-[state=active]:bg-[#3EADCF]">
                    Worksheets
                  </TabsTrigger>
                  <TabsTrigger value="offline" className="data-[state=active]:bg-[#3EADCF]">
                    Offline Ready
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  <Card className="bg-[#111827] border-gray-800">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {subjects.map((subject, index) => (
                          <div key={index} className="p-4 rounded-lg border border-gray-600 space-y-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                              <h4 className="font-medium text-white">{subject.name}</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Videos</span>
                                <Button size="sm" variant="ghost">
                                  <Download className="w-3 h-3" />
                                </Button>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Notes</span>
                                <Button size="sm" variant="ghost">
                                  <Download className="w-3 h-3" />
                                </Button>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Worksheets</span>
                                <Button size="sm" variant="ghost">
                                  <Download className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-[#3EADCF] to-[#57D9FF]" size="sm">
                              Download All
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Settings</h2>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-[#111827] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Appearance</CardTitle>
                    <CardDescription className="text-gray-400">Customize your learning environment</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-white">Dark Mode</label>
                        <p className="text-sm text-gray-400">Switch to dark theme</p>
                      </div>
                      <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                    </div>
                    <div className="space-y-2">
                      <label className="font-medium text-white">Theme Color</label>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-[#3EADCF] rounded-full cursor-pointer border-2 border-[#57D9FF]"></div>
                        <div className="w-8 h-8 bg-[#57D9FF] rounded-full cursor-pointer"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
                        <div className="w-8 h-8 bg-amber-500 rounded-full cursor-pointer"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#111827] border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">Language & Accessibility</CardTitle>
                    <CardDescription className="text-gray-400">Language and accessibility preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="font-medium text-white">Preferred Language</label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full p-2 border rounded bg-black border-gray-600 text-white"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">हिंदी</option>
                        <option value="Marathi">मराठी</option>
                        <option value="Gujarati">ગુજરાતી</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-white">Large Text</label>
                        <p className="text-sm text-gray-400">Increase text size for better readability</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-white">Screen Reader</label>
                        <p className="text-sm text-gray-400">Enable screen reader support</p>
                      </div>
                      <Switch />
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
