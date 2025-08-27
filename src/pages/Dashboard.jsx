"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

export default function Dashboard() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const fileInputRef = useRef(null)

  const mockReports = [
    { id: 1, date: "2024-01-15", score: 78, status: "Complete", savings: "£2,400", categories: 12, transactions: 1247 },
    { id: 2, date: "2024-01-01", score: 72, status: "Complete", savings: "£1,800", categories: 11, transactions: 1156 },
    { id: 3, date: "2023-12-15", score: 68, status: "Complete", savings: "£1,200", categories: 10, transactions: 1089 },
    { id: 4, date: "2023-12-01", score: 65, status: "Complete", savings: "£900", categories: 9, transactions: 967 },
  ]

  const scoreHistory = [
    { month: "Aug", score: 65 },
    { month: "Sep", score: 68 },
    { month: "Oct", score: 72 },
    { month: "Nov", score: 75 },
    { month: "Dec", score: 78 },
  ]

  const businessMetrics = [
    { label: "Total Analyzed", value: "£847,392", change: "+12.3%", positive: true },
    { label: "Categories Tracked", value: "47", change: "+3", positive: true },
    { label: "Avg Monthly Spend", value: "£28,246", change: "-8.2%", positive: true },
    { label: "Optimization Rate", value: "94.2%", change: "+2.1%", positive: true },
  ]

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const getScoreColor = (score) => {
    if (score >= 75) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBg = (score) => {
    if (score >= 75) return "bg-green-100"
    if (score >= 60) return "bg-yellow-100"
    return "bg-red-100"
  }

  return (
    <div className="min-h-screen bg-slate-50">
     

      <div className=" px-6 lg:px-16 py-8">
        <div className="mb-8">
          <nav className="flex flex-wrap overflow-auto space-x-1 bg-slate-100 p-1 rounded-lg w-fit">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "reports", label: "Reports", icon: "📈" },
              { id: "upload", label: "Upload Data", icon: "📤" },
              { id: "account", label: "Account", icon: "⚙️" },
              { id: "support", label: "Support", icon: "💬" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">{metric.label}</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</p>
                    </div>
                    <div
                      className={`flex items-center space-x-1 text-sm font-medium ${
                        metric.positive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <span>{metric.positive ? "↗" : "↘"}</span>
                      <span>{metric.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-slate-900">Current SpendScore™</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Excellent
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-28 h-28">
                      <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="6" fill="none" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="url(#gradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${78 * 2.51} 251`}
                          strokeLinecap="round"
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#1d4ed8" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-slate-900">78</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">vs Last Month</p>
                      <p className="text-lg font-semibold text-green-600">+3 points</p>
                      <p className="text-xs text-slate-400 mt-1">Above industry avg</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">£2,400</p>
                    <p className="text-sm text-slate-500">Monthly savings</p>
                    <p className="text-xs text-slate-400 mt-1">Potential identified</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">6-Month Trend</h2>
                <div className="flex items-end justify-between h-40 mb-4">
                  {scoreHistory.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div className="relative w-full max-w-8 mx-2">
                        <div
                          className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-1000 delay-100"
                          style={{ height: `${(item.score / 100) * 120}px` }}
                        ></div>
                      </div>
                      <span className="text-xs text-slate-500 mt-2 font-medium">{item.month}</span>
                      <span className="text-sm font-bold text-slate-900">{item.score}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Improving trend</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">+20% growth</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab("upload")}
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-4xl mb-4">📤</div>
                <h3 className="text-lg font-bold mb-2">Upload New Data</h3>
                <p className="text-sm opacity-90">Get your latest SpendScore analysis</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab("reports")}
                className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-bold mb-2">View Reports</h3>
                <p className="text-sm opacity-90">Access detailed financial insights</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab("support")}
                className="bg-gradient-to-br from-slate-600 to-slate-700 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-bold mb-2">Get Support</h3>
                <p className="text-sm opacity-90">Expert help when you need it</p>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Upload Tab */}
        {activeTab === "upload" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Upload Transaction Data</h2>
                <p className="text-slate-600">Upload your financial data to generate a new SpendScore™ analysis</p>
              </div>

              <div
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 ${
                  dragActive
                    ? "border-blue-500 bg-blue-50 scale-105"
                    : "border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {uploadedFile ? (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">{uploadedFile.name}</p>
                      <p className="text-slate-500 mt-1">File uploaded successfully • Ready for processing</p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Process File
                      </button>
                      <button
                        onClick={() => setUploadedFile(null)}
                        className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">Drop your files here</p>
                      <p className="text-slate-500 mt-1">or click to browse from your computer</p>
                    </div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Choose Files
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                    <span className="text-xl mr-2">📋</span>
                    Supported Formats
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>CSV files from banks & accounting
                      software
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Excel files (.xlsx, .xls)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Required columns: Date,
                      Description, Amount
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center">
                    <span className="text-xl mr-2">🔒</span>
                    Data Security
                  </h3>
                  <ul className="text-sm text-green-800 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Bank-grade encryption (256-bit
                      SSL)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>Data processed & deleted within
                      24hrs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>SOC 2 Type II compliant
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-8 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">SpendScore™ Reports</h2>
                    <p className="text-slate-600 mt-1">View and download your historical financial analysis reports</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                      Export All
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Generate New
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Report Date
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        SpendScore™
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Categories
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Transactions
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Savings Identified
                      </th>
                      <th className="px-8 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {mockReports.map((report) => (
                      <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div className="text-sm font-medium text-slate-900">
                            {new Date(report.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${getScoreBg(report.score)} ${getScoreColor(report.score)}`}
                            >
                              {report.score}
                            </span>
                            <span className="text-xs text-slate-500">
                              {report.score >= 75 ? "Excellent" : report.score >= 60 ? "Good" : "Needs Attention"}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-sm text-slate-600">
                          {report.categories} categories
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-sm text-slate-600">
                          {report.transactions.toLocaleString()} items
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <span className="text-lg font-bold text-green-600">{report.savings}</span>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-sm font-medium space-x-4">
                          <button className="text-blue-600 hover:text-blue-900 font-semibold">View Report</button>
                          <button className="text-slate-600 hover:text-slate-900 font-semibold">Download PDF</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "account" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Account Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john.doe@company.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      defaultValue="Acme Corporation Ltd"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Update Information
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Subscription Plan</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-blue-900">Professional Plan</h3>
                        <p className="text-sm text-blue-700">Unlimited reports & advanced analytics</p>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">
                        £49<span className="text-sm">/mo</span>
                      </span>
                    </div>
                    <div className="text-sm text-blue-800 space-y-1">
                      <p>• Next billing: 15 January 2024</p>
                      <p>• Payment method: Visa •••• 4242</p>
                      <p>• Auto-renewal enabled</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 bg-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                      Change Plan
                    </button>
                    <button className="px-4 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                      Update Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-6 border border-slate-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-slate-900">Password</h3>
                    <p className="text-sm text-slate-500">Last updated 3 months ago</p>
                  </div>
                  <button className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Change Password
                  </button>
                </div>
                <div className="flex justify-between items-center p-6 border border-slate-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-slate-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "support" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Support</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>General Question</option>
                      <option>Technical Issue</option>
                      <option>Billing Question</option>
                      <option>Feature Request</option>
                      <option>Data Security Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your question or issue in detail..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Help</h2>
                <div className="space-y-4">
                  {[
                    { icon: "📚", title: "Documentation", desc: "Complete guides and tutorials", color: "blue" },
                    { icon: "❓", title: "FAQ", desc: "Common questions & answers", color: "green" },
                    { icon: "🎥", title: "Video Tutorials", desc: "Step-by-step visual guides", color: "purple" },
                    { icon: "💬", title: "Live Chat", desc: "Chat with our support team", color: "orange" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div
                        className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <svg
                        className="w-5 h-5 text-slate-400 ml-auto group-hover:text-slate-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
