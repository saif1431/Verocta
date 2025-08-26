import { ArrowRight, BarChart3, Target, TrendingUp, Star, CheckCircle } from "lucide-react"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Transform Your Financial Insights with <span className="text-primary">SpendScore</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
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
                className="btn-primary py-4 px-8 text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-muted transition-colors"
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
              className="border border-blue-300 rounded-2xl p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  variants={bounce}
                  className="text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#61a8fa] rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="text-2xl font-bold text-primary">85</div>
                  </motion.div>
                  <h3 className="font-semibold text-card-foreground">Credit Score</h3>
                  <p className="text-sm text-secondary">Excellent</p>
                </motion.div>
                <motion.div 
                  variants={bounce}
                  className="text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#61a8fa] rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="text-2xl font-bold text-accent">92</div>
                  </motion.div>
                  <h3 className="font-semibold text-card-foreground">Spend Score</h3>
                  <p className="text-sm text-secondary">Outstanding</p>
                </motion.div>
                <motion.div 
                  variants={bounce}
                  className="text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#61a8fa] rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="text-2xl font-bold text-chart-1">$2.4K</div>
                  </motion.div>
                  <h3 className="font-semibold text-card-foreground">Monthly Savings</h3>
                  <p className="text-sm text-secondary">+15% this month</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-10">
        <div className="mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              Three simple steps to transform your financial insights
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
          >
            <motion.div 
              variants={slideInFromLeft}
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <BarChart3 className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Analyze Your Spending</h3>
              <p className="text-secondary leading-relaxed">
                Connect your accounts and let our AI analyze your spending patterns, identifying trends and
                opportunities for improvement.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-[#84cc16] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Target className="w-10 h-10 text-accent-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Receive Your Score</h3>
              <p className="text-secondary leading-relaxed">
                Get your personalized SpendScore based on your financial habits, with detailed breakdowns and actionable
                recommendations.
              </p>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Optimize for Success</h3>
              <p className="text-secondary leading-relaxed">
                Implement our personalized strategies to improve your financial health and watch your SpendScore grow
                over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerChildren}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-secondary max-w-2xl mx-auto"
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
              className="bg-card border border-slate-300 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">
                "SpendScore helped me identify spending patterns I never noticed. I've saved over $500 per month since
                using it!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Sarah Johnson</p>
                  <p className="text-sm text-secondary">Marketing Manager</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">
                "The insights are incredible. My SpendScore improved from 65 to 89 in just three months. Highly
                recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-semibold">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Michael Chen</p>
                  <p className="text-sm text-secondary">Software Engineer</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.4 }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">
                "Finally, a financial tool that actually makes sense. The recommendations are spot-on and easy to
                implement."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-semibold">ER</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Emily Rodriguez</p>
                  <p className="text-sm text-secondary">Small Business Owner</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#62a8f8b5]">
        <motion.div 
          className="container  mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerChildren}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4"
          >
            Join Thousands of Satisfied Users
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto"
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
              className="btn-primary text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-background/90 transition-colors flex items-center gap-2"
            >
              Start Your Free Trial
              <CheckCircle className="w-5 h-5" />
            </motion.button>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-accent-foreground/60 text-sm"
            >
              No credit card required • 14-day free trial
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}