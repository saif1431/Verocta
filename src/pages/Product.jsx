"use client"

import { motion } from "framer-motion"
import {
  Upload,
  Brain,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  BarChart3,
  PieChart,
  AlertTriangle,
  Award,
  Clock,
  Lightbulb,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"
import UniformProcessCards from "../components/VeroctaCard"

export default function Product() {
  const [showAccuracyDetails, setShowAccuracyDetails] = useState(false)
  const [showRecommendationsDetails, setShowRecommendationsDetails] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Verocta finds the waste in your business spend,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              so you don't have to
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No consultants, no spreadsheets. Just Verocta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Upload className="w-5 h-5" />
              Upload CSV & Get SpendScore
            </motion.button>
            <motion.button
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* What is Verocta - 3 Step Process */}
     <UniformProcessCards/>

        {/* SpendScore System */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The SpendScore System</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Your financial health score, calculated using our proprietary AI algorithm
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-700 mb-1">90-100</div>
                  <div className="text-sm font-semibold text-green-600">Efficient</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-amber-700 mb-1">70-89</div>
                  <div className="text-sm font-semibold text-amber-600">Mixed</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white rotate-180" />
                  </div>
                  <div className="text-2xl font-bold text-red-700 mb-1">&lt;70</div>
                  <div className="text-sm font-semibold text-red-600">Overspending</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">How it's calculated:</h3>
                <div className="space-y-3">
                  {[
                    { label: "Category diversity", desc: "Balanced spending across categories" },
                    { label: "Frequency score", desc: "Consistency of essential payments" },
                    { label: "Budget adherence", desc: "Staying within optimal spending ranges" },
                    { label: "Wasteful ratio", desc: "Identifying unnecessary or duplicate expenses" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">{item.label}</div>
                        <div className="text-sm text-slate-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-green-600 mb-2">78</div>
                <div className="text-lg font-semibold text-slate-700">Your SpendScore</div>
                <div className="text-sm text-amber-600 font-medium">Mixed - Room for improvement</div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
                <div
                  className="bg-gradient-to-r from-amber-400 to-amber-500 h-3 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Category diversity</span>
                  <span className="font-semibold text-slate-900">85/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Frequency score</span>
                  <span className="font-semibold text-slate-900">72/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Budget adherence</span>
                  <span className="font-semibold text-slate-900">81/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Wasteful ratio</span>
                  <span className="font-semibold text-red-600">64/100</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's Inside the Report */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What's Inside Your Report?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get a comprehensive analysis of your spending with actionable insights and recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "High/Medium/Low Impact Insights",
                desc: "Prioritized recommendations based on potential savings",
                icon: Target,
                color: "from-red-500 to-rose-600",
                example: "High: Cancel unused £2,400/month software licenses",
              },
              {
                title: "Spending by Category",
                desc: "Visual breakdown of where your money goes",
                icon: PieChart,
                color: "from-blue-500 to-indigo-600",
                example: "Software: 34% | Marketing: 28% | Operations: 22%",
              },
              {
                title: "Wasteful Spend Detection",
                desc: "AI identifies duplicate subscriptions and unnecessary costs",
                icon: AlertTriangle,
                color: "from-amber-500 to-orange-600",
                example: "Found 7 duplicate tools costing £890/month",
              },
              {
                title: "Tailored Recommendations",
                desc: "Specific actions to optimize your spending",
                icon: Lightbulb,
                color: "from-green-500 to-emerald-600",
                example: "Switch to annual billing to save 20% on SaaS costs",
              },
              {
                title: "Actionable Savings Ideas",
                desc: "Step-by-step guides to implement cost reductions",
                icon: DollarSign,
                color: "from-purple-500 to-violet-600",
                example: "Consolidate 4 tools into 1 platform: Save £1,200/month",
              },
              {
                title: "Executive Summary",
                desc: "C-suite ready overview with key metrics and ROI",
                icon: BarChart3,
                color: "from-slate-500 to-gray-600",
                example: "Total potential savings: £47,000 annually",
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-3 text-sm">{item.desc}</p>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-700 font-medium">{item.example}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Built for Business Leaders */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Built for Business Owners, Founders & Finance Leads
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Tailored solutions for every type of business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                type: "Startups",
                benefit: "Optimise burn rate",
                desc: "Extend runway and make every pound count",
                icon: "🚀",
                color: "from-blue-50 to-indigo-50",
                border: "border-blue-200",
              },
              {
                type: "Agencies",
                benefit: "Cut hidden SaaS bloat",
                desc: "Eliminate duplicate tools and subscriptions",
                icon: "🎯",
                color: "from-purple-50 to-violet-50",
                border: "border-purple-200",
              },
              {
                type: "eCommerce",
                benefit: "Improve margins with insight",
                desc: "Optimize operational costs and increase profitability",
                icon: "🛒",
                color: "from-green-50 to-emerald-50",
                border: "border-green-200",
              },
              {
                type: "Accountants",
                benefit: "Easy reporting for clients",
                desc: "Professional reports and insights for client advisory",
                icon: "📊",
                color: "from-amber-50 to-orange-50",
                border: "border-amber-200",
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.type}
                className={`bg-gradient-to-br ${useCase.color} rounded-xl p-6 border-2 ${useCase.border} hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + index * 0.1 }}
              >
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">For {useCase.type}</h3>
                <div className="text-sm font-semibold text-blue-600 mb-2">{useCase.benefit}</div>
                <p className="text-sm text-slate-600">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gamification Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Achieve More, Save More</h2>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                At Verocta we don't just analyse your spending, we incentivise you to improve it. Every month your
                business is scored using our AI-powered SpendScore system.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                Achieve a score of 90+ (Green Tier) and unlock:
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: DollarSign,
                    title: "15% off next month",
                    desc: "Automatic discount on your subscription",
                    color: "text-green-600",
                  },
                  {
                    icon: Award,
                    title: "Green Tier Badge",
                    desc: "Verified badge for reports and dashboard",
                    color: "text-blue-600",
                  },
                  {
                    icon: BarChart3,
                    title: "Industry Insights",
                    desc: "Access to spending benchmarks and trends",
                    color: "text-purple-600",
                  },
                ].map((reward, index) => {
                  const IconComponent = reward.icon
                  return (
                    <div key={index} className="text-center">
                      <div
                        className={`w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-3`}
                      >
                        <IconComponent className={`w-6 h-6 ${reward.color}`} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">{reward.title}</h4>
                      <p className="text-sm text-slate-600">{reward.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "We uncovered £3k/month in unnecessary spend",
                name: "Sarah Chen",
                role: "CFO, TechFlow",
                rating: 5,
              },
              {
                quote: "It's like having a finance analyst on demand",
                name: "Marcus Rodriguez",
                role: "Finance Director, GrowthCorp",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 + index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Privacy */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 max-w-2xl mx-auto text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <p className="text-slate-700 font-medium">Your data is encrypted, stored securely, and never shared</p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Get your SpendScore report in under 5 minutes and uncover unnecessary spending
            </h3>
            <p className="text-slate-700 mb-6 text-lg">Upload your CSV and get a free trial</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Upload className="w-5 h-5" />
                Upload CSV & Get Free SpendScore
              </motion.button>
              <motion.button
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span>Results in 5 minutes</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Bank-level security</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
