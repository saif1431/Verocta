import { ArrowRight, BarChart3, Target, TrendingUp, Star, CheckCircle, CreditCard, DollarSign, PiggyBank, Shield, TrendingDown, Activity, Wallet } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
}

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
}

const bounce = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10 
    } 
  }
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className=" mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold  mb-6 leading-tight"
            >
              Transform Your Financial Insights with <span className="">SpendScore</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl  mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Unlock the power of your spending data with actionable insights. Make smarter financial decisions with our
              advanced analytics platform.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-white py-4 px-8 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2 shadow-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 hover:border-slate-400  hover:bg-white/50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors backdrop-blur-sm"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* SpendScore Visual/Animation */}
        <motion.div 
          className="mx-auto px-4 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={scaleIn}
              className=" rounded-2xl "
            >
              {/* Main Score Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div 
                 variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="text-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <CreditCard className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-green-700 mb-1">85</div>
                  <h3 className="font-semibold text-slate-800 mb-1">Credit Score</h3>
                  <p className="text-sm text-green-600 font-medium">Excellent</p>
                  <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                    <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={bounce}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="text-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <BarChart3 className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-blue-700 mb-1">92</div>
                  <h3 className="font-semibold text-slate-800 mb-1">Spend Score</h3>
                  <p className="text-sm text-blue-600 font-medium">Outstanding</p>
                  <div className="w-full bg-blue-200 rounded-full h-2 mt-3">
                    <div className="bg-blue-500 h-2 rounded-full w-[92%]"></div>
                  </div>
                </motion.div>

                <motion.div 
                  variants={bounce}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="text-center bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-6 border border-amber-200"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <PiggyBank className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold text-amber-700 mb-1">$2.4K</div>
                  <h3 className="font-semibold text-slate-800 mb-1">Monthly Savings</h3>
                  <p className="text-sm text-amber-600 font-medium">+15% this month</p>
                  <div className="flex items-center justify-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">Improving</span>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold  mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl  max-w-2xl mx-auto"
            >
              Three simple steps to transform your financial insights
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div 
              variants={slideInFromLeft}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <BarChart3 className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Analyze Your Spending</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect your accounts and let our AI analyze your spending patterns, identifying trends and
                opportunities for improvement.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <Target className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Receive Your Score</h3>
              <p className="text-slate-600 leading-relaxed">
                Get your personalized SpendScore based on your financial habits, with detailed breakdowns and actionable
                recommendations.
              </p>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="text-center bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Optimize for Success</h3>
              <p className="text-slate-600 leading-relaxed">
                Implement our personalized strategies to improve your financial health and watch your SpendScore grow
                over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold  mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl max-w-2xl mx-auto"
            >
              Join thousands of satisfied users who have transformed their financial lives
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "SpendScore helped me identify spending patterns I never noticed. I've saved over $500 per month since
                using it!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-sm text-slate-500">Marketing Manager</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "The insights are incredible. My SpendScore improved from 65 to 89 in just three months. Highly
                recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-emerald-600 font-semibold">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Michael Chen</p>
                  <p className="text-sm text-slate-500">Software Engineer</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Finally, a financial tool that actually makes sense. The recommendations are spot-on and easy to
                implement."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-amber-600 font-semibold">ER</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Emily Rodriguez</p>
                  <p className="text-sm text-slate-500">Small Business Owner</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-indigo-400  ">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Join Thousands of Satisfied Users
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Start your journey to better financial health today. Get your SpendScore and personalized recommendations in
            minutes.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              Start Your Free Trial
              <CheckCircle className="w-5 h-5" />
            </motion.button>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-blue-200 text-sm"
            >
              No credit card required • 14-day free trial
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}