"use client"

import { motion } from "framer-motion"
import { Upload, Brain, FileText, Star, Check, ArrowRight, TrendingUp, Shield, Clock, Award } from "lucide-react"
import HeroSection from "../components/HeroSection"
import Pricing from "./Pricing"
import Testimonial from "../components/Testimonial"
import { useState } from "react"
import FileUploadPopup from "../components/FileUploadPopup "

export default function Landing() {
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);

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
    <div className="min-h-screen  ">
    

      {/* Hero Section */}
  
  <HeroSection/>
      {/* Features Section */}
      <section id="features" className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How SpendScore™ Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our enterprise-grade AI analyzes your spending patterns and delivers actionable insights in minutes, not
              weeks
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {
         [
  {
    icon: Upload,
    title: "Secure Data Upload",
    description:
      "Upload CSV files or connect Google Sheets with bank-grade encryption. Support for all major accounting formats including QuickBooks, Xero, and SAP exports.",
    features: ["256-bit encryption", "GDPR compliant", "Auto-categorization"],
    bg: "bg-blue-100", // 🔹 custom background
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Our proprietary algorithms analyze spending patterns, benchmark against industry standards, and identify cost optimization opportunities with 94% accuracy.",
    features: ["Machine learning models", "Industry benchmarking", "Anomaly detection"],
    bg: "bg-purple-100", // 🟣 different bg
    iconColor: "text-purple-600",
  },
  {
    icon: FileText,
    title: "Actionable Reports",
    description:
      "Receive detailed reports with prioritized recommendations, ROI projections, and implementation roadmaps reviewed by certified financial analysts.",
    features: ["Executive summaries", "Implementation guides", "ROI tracking"],
    bg: "bg-green-100", // 🟢 another bg
    iconColor: "text-green-600",
  },
]
.map((step, index) => (
              <motion.div
                key={step.title}
                className="card-bg border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              > 
              <div className={`w-16 h-16 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
</div>
                <h3 className="text-xl text-center font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 text-center mb-6 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
   <Testimonial/>

      {/* Pricing */}
      <Pricing/>

      {/* Final CTA */}
      <section className=" text-black relative overflow-hidden">
        <div className="absolute inset-0 " />

        <div style={{ background: "linear-gradient(135deg, #00416A 0%, #b583c8 100%)" }} className=" relative mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 text-white">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Start your first SpendScore Report – It’s Free
          </motion.h2>
          <motion.p
            className="text-xl   mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join 2,500+ finance teams using SpendScore™ to reduce costs and improve financial efficiency
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="btn-primary text-slate-900 hover:bg-slate-100 text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsUploadPopupOpen(true)}
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload CSV
            </motion.button>
            <motion.button
              className="btn-secondary text-white hover:bg-slate-800 text-lg px-8 py-4 rounded-lg bg-transparent transition-all duration-200 flex items-center justify-center font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
            click to learn more 
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

<FileUploadPopup 
  isOpen={isUploadPopupOpen} 
  onClose={() => setIsUploadPopupOpen(false)} 
/>
    </div>
  )
}
