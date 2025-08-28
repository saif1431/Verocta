import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Target, Award, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Testimonial() {
  const [activeOption, setActiveOption] = useState('metrics');

  const options = [
    { id: 'metrics', label: 'Key Metrics', icon: TrendingUp },
    { id: 'beta', label: 'Beta Testimonials', icon: Users },
    { id: 'case-studies', label: 'Case Studies', icon: Target },
    { id: 'hybrid', label: 'Hybrid Approach', icon: Zap }
  ];

  const renderMetricsSection = () => (
    <section className="py-20 lg:px-12 px-4 bg-slate-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Proven Results</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real outcomes from our beta testing phase and pilot programs
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
              metric: "12%",
              description: "Average expense reduction in first month",
              icon: TrendingUp,
              detail: "Based on 15 pilot companies"
            },
            {
              metric: "4.2hrs",
              description: "Weekly time saved on financial analysis",
              icon: Target,
              detail: "Reported by finance teams"
            },
            {
              metric: "£8,500",
              description: "Average monthly savings identified",
              icon: CheckCircle,
              detail: "For businesses with £50K+ monthly spend"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{item.metric}</div>
              <p className="text-lg font-semibold text-slate-700 mb-2">{item.description}</p>
              <p className="text-sm text-slate-500">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  const renderBetaSection = () => (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Early User Feedback</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from our beta testing program
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 mb-8"
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-slate-700 mb-4 italic">
              "The AI identified subscription overlaps we didn't even know existed. Saved us £2,400 in the first week alone."
            </p>
            <p className="text-sm text-slate-600">
              — Finance Manager, Tech Startup (Beta User)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white border border-slate-200 rounded-xl p-6"
              variants={fadeInUp}
            >
              <p className="text-slate-700 mb-3">
                "Finally understand where our money is actually going."
              </p>
              <p className="text-sm text-slate-600">— CFO, E-commerce Company</p>
            </motion.div>
            <motion.div
              className="bg-white border border-slate-200 rounded-xl p-6"
              variants={fadeInUp}
            >
              <p className="text-slate-700 mb-3">
                "The dashboard makes complex financial data actually actionable."
              </p>
              <p className="text-sm text-slate-600">— Operations Director, SaaS</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const renderCaseStudiesSection = () => (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Anonymous case studies from our pilot program
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "SaaS Company, 50+ employees",
              challenge: "Hidden subscription costs across multiple departments",
              solution: "SpendScore identified 8 duplicate services and 5 unused licenses",
              result: "£3,200 monthly savings, 18% reduction in software costs",
              timeframe: "2 weeks"
            },
            {
              title: "E-commerce Business, £2M revenue",
              challenge: "Inconsistent supplier pricing and contract terms",
              solution: "AI analysis revealed better pricing opportunities",
              result: "£1,800 monthly savings on operational expenses",
              timeframe: "1 month"
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8"
              variants={fadeInUp}
            >
              <div className="bg-blue-50 rounded-lg p-1 inline-block mb-4">
                <span className="text-sm font-semibold text-blue-700 px-3 py-1">{study.title}</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Challenge:</h4>
                  <p className="text-slate-600">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Solution:</h4>
                  <p className="text-slate-600">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Result:</h4>
                  <p className="text-green-700 font-semibold">{study.result}</p>
                  <p className="text-slate-500 text-sm">Achieved in {study.timeframe}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  const renderHybridSection = () => (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Proven Impact</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real results from our beta program and pilot implementations
          </p>
        </motion.div>

        {/* Key Metrics Row */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { metric: "12%", description: "Average monthly savings", icon: TrendingUp },
            { metric: "4.2hrs", description: "Time saved per week", icon: Target },
            { metric: "98%", description: "Would recommend to peers", icon: Award }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 text-center"
              variants={fadeInUp}
            >
              <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{item.metric}</div>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-slate-700 mb-4 italic">
            "SpendScore found £18K in annual savings we completely missed. The AI insights were spot-on and immediately actionable."
          </p>
          <p className="text-slate-600">
            — Finance Director, Series A Tech Company
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 rounded-xl p-6 inline-block">
            <p className="text-slate-700 mb-3">
              Ready to discover your potential savings?
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
              Start Your Free Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Option Selector */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex flex-col items-center mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Authentic Testimonials Section Options</h1>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveOption(option.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeOption === option.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <option.icon className="h-4 w-4 mr-2" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeOption === 'metrics' && renderMetricsSection()}
        {activeOption === 'beta' && renderBetaSection()}
        {activeOption === 'case-studies' && renderCaseStudiesSection()}
        {activeOption === 'hybrid' && renderHybridSection()}
      </div>

      {/* Implementation Notes */}
      <div className="bg-white border-t border-gray-200 p-8">
        <div className="container mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Notes:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Metrics Option:</h4>
              <ul className="space-y-1">
                <li>• Uses real data from beta testing</li>
                <li>• Builds credibility without individual testimonials</li>
                <li>• Easy to update as you get more data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Beta Testimonials Option:</h4>
              <ul className="space-y-1">
                <li>• Features real quotes from beta users</li>
                <li>• Maintains privacy with anonymous attribution</li>
                <li>• Shows genuine user experiences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Case Studies Option:</h4>
              <ul className="space-y-1">
                <li>• Detailed before/after scenarios</li>
                <li>• Shows specific problem-solution fit</li>
                <li>• Demonstrates tangible ROI</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Hybrid Option:</h4>
              <ul className="space-y-1">
                <li>• Combines metrics with testimonial</li>
                <li>• Includes strong call-to-action</li>
                <li>• Balanced approach for maximum impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}