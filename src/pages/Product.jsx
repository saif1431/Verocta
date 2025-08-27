import { motion } from "framer-motion"
import { 
  BarChart3, 
  Upload, 
  Brain, 
  FileText, 
  LayoutDashboard, 
  Target,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function Product() {
  const features = [
    {
      title: 'SpendScore + Traffic Light',
      desc: 'A single score with green/amber/red status to summarize your spending health instantly.',
      icon: Target,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      delay: 0.1
    },
    { 
      title: 'CSV Import', 
      desc: 'Upload Monzo and Xero CSVs in seconds with drag-and-drop simplicity.',
      icon: Upload,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      delay: 0.2
    },
    { 
      title: 'Smart Categorization', 
      desc: 'AI-powered automatic grouping into meaningful spending categories with 95% accuracy.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      delay: 0.3
    },
    { 
      title: 'AI Insights', 
      desc: 'Personalized recommendations to reduce costs and improve cash flow backed by machine learning.',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200',
      delay: 0.4
    },
    { 
      title: 'Reports', 
      desc: 'Export clean, professional PDF summaries and presentations for stakeholders.',
      icon: FileText,
      color: 'from-slate-500 to-gray-600',
      bgColor: 'from-slate-50 to-gray-50',
      borderColor: 'border-slate-200',
      delay: 0.5
    },
    { 
      title: 'Dashboard', 
      desc: 'Real-time at-a-glance overview with interactive charts and key performance trends.',
      icon: LayoutDashboard,
      color: 'from-rose-500 to-red-600',
      bgColor: 'from-rose-50 to-red-50',
      borderColor: 'border-rose-200',
      delay: 0.6
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text  mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Product Features
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Verocta helps founders and finance teams see spending clearly and act quickly with 
            powerful AI-driven insights and intuitive visualizations.
          </motion.p>
          
          {/* Stats Bar */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-4 h-4" />
              <span>95% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>Sub-second Analysis</span>
            </div>
            <div className="flex items-center gap-2 textxt-white">
              <Shield className="w-4 h-4" />
              <span>Bank-grade Security</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div 
                  variants={cardHoverVariants}
                  className={`rounded-2xl bg-gradient-to-br ${feature.bgColor} p-8 border ${feature.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/90 h-full`}
                >
                  {/* Icon Container with Animation */}
                  <motion.div 
                    variants={iconVariants}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: feature.delay + 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors">
                      {feature.desc}
                    </p>
                  </motion.div>

                  {/* Hover Arrow */}
                  <motion.div 
                    className="flex items-center text-sm font-semibold text-slate-500 group-hover:text-slate-700 transition-colors"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.div>

                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 overflow-hidden rounded-2xl">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.color} transform rotate-12 scale-150`}></div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to transform your financial insights?
            </h3>
            <p className="text-slate-800 mb-6">
              Join thousands of businesses already using Verocta to optimize their spending.
            </p>
            <motion.button
              className="btn-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-5 h-5" />
              Start Free Trial
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}