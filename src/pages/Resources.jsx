"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Database,
  FileCheck,
  PlayCircle,
  Download,
  Search,
  ChevronDown,
  ChevronRight,
  Mail,
  MessageSquare,
  BookOpen,
} from "lucide-react"

export default function Resources() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("all")

  const trustItems = [
    {
      icon: Shield,
      title: "Data Security",
      description: "Bank-grade encryption and security practices to protect your financial data",
      details: "Learn about our SOC 2 compliance, end-to-end encryption, and secure data handling procedures.",
    },
    {
      icon: Database,
      title: "How We Use Your Data",
      description: "Complete transparency on AI processing and data usage",
      details: "Understand exactly how we process your data, what we store, and how our AI algorithms work.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Legal",
      description: "GDPR, ISO standards, and financial compliance overview",
      details: "Review our compliance certifications, legal frameworks, and regulatory adherence.",
    },
  ]

  const onboardingItems = [
    {
      title: "Getting Started Checklist",
      content:
        "Complete step-by-step guide to upload your first CSV and generate your SpendScore report. Includes data preparation tips and common troubleshooting solutions.",
    },
    {
      title: "SpendScore Breakdown",
      content:
        "Visual explanation of how your SpendScore is calculated, what each component means, and how to interpret your results for maximum business impact.",
    },
    {
      title: "Video Tutorials",
      content:
        "Short, focused video guides covering report generation, score improvement strategies, and advanced portal features.",
    },
  ]

  const faqCategories = [
    { id: "all", name: "All Questions" },
    { id: "upload", name: "Upload Issues" },
    { id: "billing", name: "Billing Questions" },
    { id: "accuracy", name: "Data Accuracy" },
    { id: "technical", name: "Technical" },
  ]

  const faqs = [
    {
      category: "upload",
      question: "How is Verocta different from Xero or other accounting platforms?",
      answer:
        "Xero and similar accounting tools focus mainly on bookkeeping and accounting. Verocta goes further by analyzing your transaction data to identify unnecessary expenses and provide actionable recommendations. It’s designed specifically for small businesses and startups, giving clear insights to optimize spending and save money.",
    },
    {
      category: "billing",
      question: "How does Verocta compare to AI tools like ChatGPT?",
      answer:
        "While ChatGPT can provide general ideas or insights, it is not designed for precise financial analysis and its results may vary depending on input data. Verocta, on the other hand, is purpose-built for financial analysis. It integrates directly with your business transactions to deliver reliable, personalized insights, SpendScore reports, and actionable cost-saving recommendations with consistent accuracy.",
    },
    {
      category: "accuracy",
      question: "What makes Verocta unique compared to other financial tools?",
      answer:
        "Verocta combines AI-powered insights with practical, actionable reporting. Key differentiators include instant PDF reports summarizing actionable insights, a traffic-light system for quick prioritization, tiered plans that suit lean businesses, and recommendations backed by verified algorithms tailored to your spending habits.",
    },
    {
      category: "technical",
      question: "How can Verocta give actionable insights in minutes if there’s a human review?",
      answer:
        "Verocta’s AI engine analyses your spending data instantly and generates actionable insights for you to start optimising right away. Some reports are also reviewed by a human in the background to check for accuracy and refine recommendations. You still get your insights immediately human review just makes future reports even more reliable.",
    },
  ]

  const downloadableResources = [
    {
      title: "Sample SpendScore Report",
      description: "Interactive PDF showing what your report will look like",
      icon: FileCheck,
      type: "PDF",
    },
    {
      title: "CSV Preparation Guide",
      description: "Step-by-step guide to prepare your financial data",
      icon: Database,
      type: "PDF",
    },
    {
      title: "Onboarding Checklist",
      description: "Complete checklist for new users",
      icon: BookOpen,
      type: "PDF",
    },
  ]

  const blogPosts = [
    {
      title: "5 Ways to Reduce SaaS Spend with AI",
      category: "AI Tips",
      date: "Dec 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Case Study: Saving £20K in 60 Days",
      category: "Case Studies",
      date: "Dec 10, 2024",
      readTime: "8 min read",
    },
    {
      title: "Latest Product Updates – December 2024",
      category: "Product News",
      date: "Dec 5, 2024",
      readTime: "3 min read",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      (selectedFaqCategory === "all" || faq.category === selectedFaqCategory) &&
      (searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Everything You Need to Master Verocta
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
          >
            Learn how to get started, explore our SpendScore system, and discover how your business can benefit from
            smarter financial insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Sample Report
            </button>
            <button className="btn-secondary text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Getting Started Video
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Trust & Transparency
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <p className="text-sm text-slate-500">{item.details}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding & Help Section */}
      <section className="py-16 px-4 ">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Onboarding & Help
          </motion.h2>
          <div className="space-y-4">
            {onboardingItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900">{item.title}</span>
                  {activeAccordion === index ? (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-slate-600">{item.content}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Support & FAQs
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Search and Filter */}
              <div className="mb-6">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedFaqCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedFaqCategory === category.id
                          ? "bg-[#1E40AF]  text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Need More Help?</h3>
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Support
                  </button>
                  <button className="w-full border border-slate-300 text-slate-700 px-4 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Submit a Question
                  </button>
                </div>
                <p className="text-sm text-slate-500 mt-4">Typical response time: Under 24 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Feature Request</h3>
                <p className="text-slate-600 mb-4">Help shape our product roadmap with your suggestions.</p>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Submit Feature Request
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Downloadable Resources
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-500 bg-slate-200 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{resource.title}</h3>
                <p className="text-slate-600 mb-4">{resource.description}</p>
                <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Insights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 text-center mb-12"
          >
            Blog & Insights
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-sm text-slate-500">{post.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="btn-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
