"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, FileText, Cookie, Brain, Mail, ExternalLink, Calendar, CheckCircle } from "lucide-react"

export default function Legal() {
  const [activeTab, setActiveTab] = useState("privacy")

  const legalSections = [
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: Shield,
      lastUpdated: "December 15, 2024",
      content: {
        sections: [
          {
            title: "Information We Collect",
            content:
              "We collect information you provide directly to us when you create an account, upload financial data, use our services, or contact us. This includes personal identifiers, financial data, usage information, and communication records.",
          },
          {
            title: "How We Use Your Information",
            content:
              "We use your information to provide and improve our services, process transactions, generate financial insights, communicate with you, ensure security, and comply with legal obligations.",
          },
          {
            title: "Data Security & Protection",
            content:
              "We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and strict access controls to protect your personal information.",
          },
          {
            title: "Your Rights & Controls",
            content:
              "You have the right to access, update, delete, or export your data. You can also control how we use your information for marketing and analytics purposes through your account settings.",
          },
          {
            title: "Data Retention",
            content:
              "We retain your personal information only as long as necessary to provide our services and comply with legal obligations. You can request deletion of your data at any time.",
          },
        ],
      },
    },
    {
      id: "terms",
      title: "Terms of Service",
      icon: FileText,
      lastUpdated: "December 15, 2024",
      content: {
        sections: [
          {
            title: "Service Agreement",
            content:
              "By using Verocta, you agree to these terms. Our service provides AI-powered financial analysis and recommendations based on your data. We reserve the right to modify these terms with notice.",
          },
          {
            title: "Account Responsibilities",
            content:
              "You are responsible for maintaining account security, providing accurate information, and using our service in compliance with applicable laws and these terms.",
          },
          {
            title: "Acceptable Use",
            content:
              "You may use Verocta for legitimate business and personal financial analysis. Prohibited uses include illegal activities, attempting to breach security, or misusing our AI systems.",
          },
          {
            title: "Service Availability",
            content:
              "We strive for 99.9% uptime but cannot guarantee uninterrupted service. We may perform maintenance, updates, or modifications that temporarily affect availability.",
          },
          {
            title: "Limitation of Liability",
            content:
              "Verocta provides financial insights and recommendations for informational purposes. We are not liable for financial decisions made based on our analysis. Our liability is limited to the amount paid for our services.",
          },
        ],
      },
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      icon: Cookie,
      lastUpdated: "December 15, 2024",
      content: {
        sections: [
          {
            title: "What Are Cookies",
            content:
              "Cookies are small text files stored on your device that help us provide a better user experience, remember your preferences, and analyze how our service is used.",
          },
          {
            title: "Essential Cookies",
            content:
              "These cookies are necessary for basic website functionality, user authentication, security, and session management. They cannot be disabled without affecting core features.",
          },
          {
            title: "Analytics & Performance",
            content:
              "We use analytics cookies to understand user behavior, measure performance, and improve our service. This data is anonymized and aggregated.",
          },
          {
            title: "Personalization Cookies",
            content:
              "These cookies help us customize your experience, remember your preferences, and provide relevant content and recommendations.",
          },
          {
            title: "Managing Cookie Preferences",
            content:
              "You can control cookie settings through your browser or our cookie preference center. Note that disabling certain cookies may limit functionality.",
          },
        ],
      },
    },
    {
      id: "ai-ethics",
      title: "Responsible AI Statement",
      icon: Brain,
      lastUpdated: "December 15, 2024",
      content: {
        sections: [
          {
            title: "Our AI Principles",
            content:
              "We develop AI systems that are transparent, fair, accountable, and designed to augment human decision-making. Our AI serves users' best interests while maintaining the highest ethical standards.",
          },
          {
            title: "Transparency & Explainability",
            content:
              "We provide clear explanations of how our AI generates insights and recommendations. Users can understand the reasoning behind AI-driven suggestions and maintain full control over their decisions.",
          },
          {
            title: "Bias Prevention & Fairness",
            content:
              "We actively monitor and mitigate bias in our AI systems through diverse training data, regular audits, fairness testing, and continuous improvement of our algorithms.",
          },
          {
            title: "Human Oversight & Control",
            content:
              "All AI recommendations are designed to support, not replace, human judgment. Users maintain complete control over their financial decisions and can override any AI suggestions.",
          },
          {
            title: "Privacy-Preserving AI",
            content:
              "Our AI systems are built with privacy by design, using techniques like differential privacy and federated learning to protect user data while providing valuable insights.",
          },
        ],
      },
    },
  ]

  const currentSection = legalSections.find((section) => section.id === activeTab)

  return (
    <div className="min-h-screen ">
      <section className="relative  py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 text-balance leading-tight">
              Trust is Earned —<br />
              <span className="text-blue-400">Here's Ours.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transparency, security, and responsibility are at the core of everything we do. Explore our comprehensive
              legal framework and commitments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="card-bg border-b border-slate-200 mb-12">
            <nav className="flex space-x-8 overflow-x-auto">
              {legalSections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`flex items-center text-center space-x-3 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === section.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card-bg p-3 rounded-lg"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-400">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <currentSection.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{currentSection.title}</h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">Last updated: {currentSection.lastUpdated}</span>
                  </div>
                </div>
              </div>
              <a
                href={`/legal/${currentSection.id}.pdf`}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-400 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-200 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>

            <div className="space-y-8">
              {currentSection.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-200 rounded-xl p-8 border border-slate-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                      <p className="text-slate-700 leading-relaxed text-lg">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Questions or Concerns?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Our legal team is here to help. If you have questions about any of our policies or need clarification,
              we're committed to providing transparent answers.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:legal@verocta.com"
                className="inline-flex items-center space-x-3 px-8 py-4 btn-primary text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                <span>legal@verocta.com</span>
              </a>
              <p className="text-slate-500">We typically respond within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-white font-semibold mb-4">Compliance</h3>
              <div className="space-y-2 text-slate-400">
                <p>GDPR Compliant</p>
                <p>SOC 2 Type II Certified</p>
                <p>ISO 27001 Certified</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal Updates</h3>
              <div className="space-y-2 text-slate-400">
                <p>Last Policy Review: Dec 15, 2024</p>
                <p>Next Scheduled Review: Jun 15, 2025</p>
                <p>Version: 2.1</p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Data Protection</h3>
              <div className="space-y-2 text-slate-400">
                <p>Data Protection Officer Available</p>
                <p>EU Representative: Available</p>
                <p>Privacy by Design Certified</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Verocta. All rights reserved. These policies are regularly reviewed and updated to ensure
              compliance with evolving regulations and best practices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
