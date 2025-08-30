"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Company() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance"
          >
            Driven by Data. <span className="text-blue-600">Guided by Truth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto text-pretty"
          >
            At Verocta, we're reshaping how lean businesses understand and manage their finances through intelligent
            automation and insight.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Meet the Founders
            </button>
            <button className="btn-secondary text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty">
              Verocta was created by two founders with a shared vision: empowering small businesses to cut waste and
              grow smarter through intelligent financial insights.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="lg:max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {[
                {
                  year: "2025",
                  title: "Verocta Founded",
                  description: "Founded in the UK & Australia with a mission to democratize financial intelligence",
                },
                {
                  year: "Q1 2025",
                  title: "Initial Vision",
                  description:
                    "AI-powered financial clarity for all - making enterprise-level insights accessible to lean businesses",
                },
                {
                  year: "Q2-Q3 2025",
                  title: "Development & Testing",
                  description:
                    "Development begins with real user testing, gathering feedback from actual small business owners",
                },
                {
                  year: "Q4 2025",
                  title: "Soft Launch",
                  description: "Planned soft launch with select beta customers to refine our SpendScore™ system",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="card-bg p-6 rounded-lg shadow-lg border border-slate-200">
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Smarter Finance. Better Business.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty">
              Our vision is to democratise financial intelligence — helping even the leanest companies access insights
              once reserved for enterprise giants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity",
                description: "Know where your money really goes",
                icon: "🔍",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Automation",
                description: "Let AI do the heavy lifting",
                icon: "🤖",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Growth",
                description: "Turn insights into action",
                icon: "📈",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-bg p-8 rounded-xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
              We're a lean team today — but we're building something big.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Jack Gurney-Smith",
                role: "Co-Founder, Product & Strategy Lead",
                bio: "Jack is the driving force behind Verocta's vision, product direction, and customer experience. With a passion for solving real-world business inefficiencies, he leads the design and strategy to ensure every feature delivers value for lean companies.",
                initials: "JGS",
              },
              {
                name: "Christopher Walden",
                role: "Co-Founder, Finance & Operations Lead",
                bio: "Christopher brings a background in finance and a sharp eye for operational efficiency. Formally working in the finance sector, he now leads Verocta's internal systems, financial planning, and technical implementation. His hybrid expertise ensures the platform is scalable, stable, and built with real business needs in mind.",
                initials: "CW",
              },
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-bg p-8 rounded-xl border border-slate-200"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{founder.role}</p>
                    <p className="text-slate-600 leading-relaxed">{founder.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h2>
            <p className="text-lg text-slate-600">Get in touch with our team</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">support@verocta.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl">
                  🗺️
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Base</h3>
                  <p className="text-slate-600">UK / Australia</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-slate-700 mb-2">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Careers – Coming Soon</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto text-pretty">
              We're not hiring yet — but we're growing fast. Interested in joining us? Reach out and say hi.
            </p>
            <button className="bg-slate-100 text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors">
              Stay Updated
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
