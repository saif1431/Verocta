"use client"

import { motion } from "framer-motion"
import { Upload, Brain, FileText, Star, Check, ArrowRight, TrendingUp, Shield, Clock, Award } from "lucide-react"

export default function Landing() {
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
    <div className="min-h-screen  bg-white">
    

      {/* Hero Section */}
      <section className="relative px-12 overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="text-center lg:text-left"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="mb-6 inline-flex items-center gap-2 bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2 rounded-full text-sm font-medium"
                variants={fadeInUp}
              >
                <Award className="h-4 w-4" />
                Trusted by 2,500+ Finance Teams
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
                variants={fadeInUp}
              >
                Optimize Business Spending with
                <span className="block text-slate-700 mt-2">AI-Powered Insights</span>
              </motion.h1>

              <motion.p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed" variants={fadeInUp}>
                Transform your expense data into actionable cost-saving recommendations. Get your proprietary
                SpendScore™ and reduce operational costs by up to 35%.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                variants={fadeInUp}
              >
                <motion.button
                  className="btn-primary text-white hover:bg-slate-800 text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg flex items-center justify-center font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Get Your SpendScore™
                </motion.button>
                <motion.button
                  className="btn-secondary text-slate-700 hover:bg-slate-50 text-lg px-8 py-2 rounded-lg bg-white transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-8 text-slate-600"
                variants={fadeInUp}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Bank-Grade Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">5-Minute Setup</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative" variants={fadeInLeft} initial="initial" animate="animate">
              <motion.div
                className="relative bg-white border border-slate-200 shadow-2xl max-w-lg mx-auto rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">SpendScore™ Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600 font-medium">Live</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                        />
                        <motion.path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#1e293b"
                          strokeWidth="2"
                          strokeDasharray="85, 100"
                          initial={{ strokeDasharray: "0, 100" }}
                          animate={{ strokeDasharray: "85, 100" }}
                          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            className="text-3xl font-bold text-slate-900"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                          >
                            85
                          </motion.div>
                          <div className="text-sm text-slate-600 font-medium">Excellent</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Software Subscriptions", score: 92, savings: "£3,200", color: "green" },
                      { label: "Marketing Spend", score: 78, savings: "£1,800", color: "yellow" },
                      { label: "Office & Operations", score: 65, savings: "£950", color: "red" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 1.2 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              item.color === "green"
                                ? "bg-green-500"
                                : item.color === "yellow"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            }`}
                          />
                          <span className="text-sm font-medium text-slate-900">{item.label}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">{item.score}</div>
                          <div className="text-xs text-slate-600">Save {item.savings}/mo</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-700" />
                      <span className="text-sm font-semibold text-green-900">Priority Recommendation</span>
                    </div>
                    <p className="text-sm text-green-800 mb-3">
                      Consolidate overlapping SaaS subscriptions across teams
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="bg-green-700 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Save £5,950/month
                      </div>
                      <span className="text-xs text-green-700 font-medium">96% confidence</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
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
            {[
              {
                icon: Upload,
                title: "Secure Data Upload",
                description:
                  "Upload CSV files or connect Google Sheets with bank-grade encryption. Support for all major accounting formats including QuickBooks, Xero, and SAP exports.",
                features: ["256-bit encryption", "GDPR compliant", "Auto-categorization"],
              },
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                description:
                  "Our proprietary algorithms analyze spending patterns, benchmark against industry standards, and identify cost optimization opportunities with 94% accuracy.",
                features: ["Machine learning models", "Industry benchmarking", "Anomaly detection"],
              },
              {
                icon: FileText,
                title: "Actionable Reports",
                description:
                  "Receive detailed reports with prioritized recommendations, ROI projections, and implementation roadmaps reviewed by certified financial analysts.",
                features: ["Executive summaries", "Implementation guides", "ROI tracking"],
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{step.description}</p>
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
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Trusted by Finance Leaders</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              See how companies have reduced operational costs and improved financial efficiency
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Chen",
                role: "CFO, TechFlow Solutions",
                company: "Series B SaaS, 200+ employees",
                content:
                  "SpendScore identified £18,000 in monthly savings we completely missed. The AI insights were incredibly accurate and the recommendations were immediately actionable. ROI was achieved in the first month.",
                // savings: "£216K annually",
                avatar: "SC",
              },
              {
                name: "Marcus Rodriguez",
                role: "VP Finance, GrowthCorp",
                company: "E-commerce, £50M revenue",
                content:
                  "The real-time dashboard gives us unprecedented visibility into spending efficiency. We've reduced operational costs by 32% while maintaining growth trajectory. Essential tool for any finance team.",
                // savings: "£1.2M annually",
                avatar: "MR",
              },
              {
                name: "Emma Thompson",
                role: "Finance Director, InnovateLab",
                company: "R&D Company, 150 employees",
                content:
                  "Finally, a solution that makes complex financial analysis simple and actionable. The AI recommendations have saved us over £85K annually while improving our budget allocation strategy.",
                // savings: "£85K annually",
                avatar: "ET",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-slate-700">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <p className="text-xs text-slate-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-700">{testimonial.savings}</div>
                    {/* <div className="text-xs text-slate-500">saved</div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business size. All plans include our core SpendScore™ technology
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Starter",
                price: "£49",
                description: "Perfect for small businesses",
                features: [
                  "Up to 2,500 transactions/month",
                  "Basic SpendScore™ analysis",
                  "Monthly optimization reports",
                  "Email support",
                  "CSV upload & Google Sheets",
                ],
                popular: false,
                cta: "Start 14-Day Free Trial",
              },
              {
                name: "Professional",
                price: "£149",
                description: "For growing companies",
                features: [
                  "Up to 15,000 transactions/month",
                  "Advanced SpendScore™ with benchmarking",
                  "Weekly reports & real-time alerts",
                  "Priority support & onboarding",
                  "API access & custom integrations",
                  "Team collaboration tools",
                ],
                popular: true,
                cta: "Start 14-Day Free Trial",
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: [
                  "Unlimited transactions",
                  "Enterprise SpendScore™ suite",
                  "Real-time dashboards & alerts",
                  "Dedicated customer success manager",
                  "White-label options",
                  "Advanced security & compliance",
                  "Custom reporting & analytics",
                ],
                popular: false,
                cta: "Contact Sales",
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`bg-white border rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "border-slate-900 shadow-lg" : "border-slate-200"
                }`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-600">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-lg transition-all duration-200 font-medium ${
                    plan.popular
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-black relative overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to optimize your business spending?
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
            >
              <Upload className="mr-2 h-5 w-5" />
              Start 14-Day Free Trial
            </motion.button>
            <motion.button
              className="btn-secondary text-white hover:bg-slate-800 text-lg px-8 py-4 rounded-lg bg-transparent transition-all duration-200 flex items-center justify-center font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

     
    </div>
  )
}
