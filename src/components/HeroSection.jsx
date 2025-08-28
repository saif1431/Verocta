"use client"

import { motion } from "framer-motion"
import { Check, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [realTimeData, setRealTimeData] = useState({
    spend_score: 85,
    tier_info: {
      color: "Amber",
      tier: "Good",
      description: "Good financial habits with room for improvement",
    },
    score_breakdown: {
      frequency_score: 78.5,
      category_diversity: 92.0,
      budget_adherence: 85.3,
      redundancy_detection: 95.0,
      spike_detection: 72.1,
      waste_ratio: 88.7,
      final_score: 85,
    },
    transaction_summary: {
      total_transactions: 150,
      total_amount: 25750.5,
      median_amount: 125.0,
      mean_amount: 171.67,
      unique_categories: 12,
      unique_vendors: 45,
    },
    ai_insights: [
      "Consider consolidating software subscriptions to reduce redundant costs",
      "Dining expenses represent 23% of spending - budget optimization opportunity",
    ],
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData((prev) => ({
        ...prev,
        spend_score: prev.spend_score + (Math.random() - 0.5) * 2,
        score_breakdown: {
          ...prev.score_breakdown,
          final_score: prev.score_breakdown.final_score + (Math.random() - 0.5) * 1,
        },
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 lg:px-12 bg-gradient-to-br from-slate-50 to-white py-10  lg:py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className=" relative mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <motion.div
              className="text-center lg:text-left"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                className="text-3xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
                variants={fadeInUp}
              >
                Optimise your spendings,
                <span className="text-blue-600 ">maximise</span>
                <span className="block text-blue-600 mt-2">your profits</span>
              </motion.h1>

              <motion.p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed" variants={fadeInUp}>
                Verocta analyses your company’s finances with AI to identify unnecessary expenses and sends you clear,
                actionable reports.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                variants={fadeInUp}
              >
                <motion.button
                  className="btn-primary text-white text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try free analysis
                </motion.button>
                <motion.button
                  className="btn-secondary hover:bg-slate-50 text-lg px-8 py-4 rounded-lg bg-white transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign up/log in
                </motion.button>
              </motion.div>

              <motion.div className="space-y-4" variants={fadeInUp}>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">What You Get:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">
                      <strong>Instant SpendScore™</strong> - Know exactly where you stand
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">
                      <strong>AI + Human Review</strong> - Accurate, trustworthy insights
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">
                      <strong>Actionable Recommendations</strong> - Clear steps to save money
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">
                      <strong>Average £2,400/month savings</strong> - Real results
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative" variants={fadeInLeft} initial="initial" animate="animate">
              <motion.div
                className="relative bg-white border border-slate-200 shadow-2xl lg:max-w-2xl mx-auto rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <div className="flex items-center  justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Your SpendScore™ Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <span className="text-sm text-slate-600 font-medium">Live</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Real-time financial intelligence</p>
                </div>

                <div className="p-6">
                  {/* Main SpendScore Circle */}
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-32 h-32">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="3"
                          />
                          <motion.path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="3"
                            strokeDasharray={`${Math.round(realTimeData.spend_score)}, 100`}
                            initial={{ strokeDasharray: "0, 100" }}
                            animate={{ strokeDasharray: `${Math.round(realTimeData.spend_score)}, 100` }}
                            transition={{ duration: 2, ease: "easeOut" }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              className="text-3xl font-bold text-slate-900"
                              key={Math.round(realTimeData.spend_score)}
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {Math.round(realTimeData.spend_score)}
                            </motion.div>
                            <div className="text-sm text-slate-600 font-medium">Excellent</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Cards */}
                    <div className="space-y-3 w-full mb-6">
                      {[
                        {
                          label: "Software & Tools",
                          score: 85,
                          change: "+5",
                          color: "bg-green-500",
                          textColor: "text-green-500",
                          subtitle: "12 subscriptions",
                        },
                        {
                          label: "Marketing Spend",
                          score: 72,
                          change: "-0",
                          color: "bg-orange-500",
                          textColor: "text-orange-500",
                          subtitle: "8 channels",
                        },
                        {
                          label: "Office Expenses",
                          score: 64,
                          change: "-3",
                          color: "bg-red-500",
                          textColor: "text-red-500",
                          subtitle: "Needs attention",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          className={`flex items-center justify-between p-3 rounded-lg bg-slate-100 border border-slate-100 `}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 1.2 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded ${item.color}`} />
                            <div>
                              <div className="text-sm font-medium text-slate-900">{item.label}</div>
                              <div className="text-xs text-slate-500">{item.subtitle}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-bold text-slate-900 ${item.textColor}`}>{item.score}</div>
                            <div
                              className={`text-xs font-medium ${item.change.startsWith("+") ? "text-green-600" : item.change === "-0" ? "text-slate-500" : "text-red-600"}`}
                            >
                              {item.change}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 6-Month Improvement Chart */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-900">6-Month Improvement</h4>
                      <div className="flex items-center space-x-1 text-green-600">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-medium">+18%</span>
                      </div>
                    </div>
                    <div className="flex items-end space-x-2 h-12">
                      {[40, 45, 60, 65, 75, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          className={`flex-1 rounded-t ${index < 2 ? "bg-slate-300" : index < 4 ? "bg-orange-400" : "bg-green-500"}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${(height / 85) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 2 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Top Recommendation */}
                  <motion.div
                    className="p-4 bg-blue-50 rounded-xl border border-blue-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900">Top Recommendation</span>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">Consolidate 4 overlapping software subscriptions</p>
                    <div className="flex items-center justify-between">
                      <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Save £2,400/month
                      </div>
                      <span className="text-xs text-slate-600 font-medium">94% confidence</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div />
      </section>
    </div>
  )
}
