import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const pricingPlans = [
    {
      name: "Bronze",
      price: "£149",
      period: "month",
      yearlyPrice: "£1,500",
      yearlyPeriod: "year",
      description: "Basic financial analysis for small businesses",
      shortDescription: "For small businesses and startups who want a basic monthly financial check-up.",
      features: [
        "1 monthly SpendScore™ report (PDF)",
        "Analyse up to 3 data sources (e.g. bank feeds, Xero, CSV)",
        "Top 5 unnecessary spends flagged",
        "Efficiency Score + Colour Grade (Red/Yellow/Green)",
        "Monthly email summary"
      ],
      limitations: [
        "No dashboard or action tracking"
      ],
      idealFor: "lean businesses, pre-seed startups, solopreneurs",
      popular: false,
      cta: "Get Started",
      color: "bronze"
    },
    {
      name: "Silver",
      price: "£499",
      period: "month",
      yearlyPrice: "£5,000",
      yearlyPeriod: "year",
      description: "Expanded analysis with actionable intelligence",
      shortDescription: "For growing teams that need deeper insights and monthly optimization.",
      features: [
        "3 CSVs per month",
        "Full web dashboard access",
        "Top 5 inefficiencies + actionable suggestions",
        "Benchmarking vs industry averages",
        "Alternative vendors + cost-saving recommendations",
        "Slack/Email alerts when spending spikes",
        "Monthly strategy email from GPT assistant"
      ],
      limitations: [],
      idealFor: "agencies, eCom brands, Series A startups",
      popular: true,
      cta: "Start Free Trial",
      color: "silver"
    },
    {
      name: "Gold",
      price: "£1,499",
      period: "month",
      yearlyPrice: "£15,000",
      yearlyPeriod: "year",
      description: "Advanced analysis with AI CFO-as-a-Service",
      shortDescription: "For companies spending £1M+/month that want hands-off optimization.",
      features: [
        "Unlimited CSV inputs",
        "Green-tier rewards",
        "Competitor benchmark insights (public data used)",
        "Personalised recommendations by department",
        "Forecasting: Where you're headed if nothing changes",
        "Dedicated support + onboarding",
        "Quarterly live review (AI + human consultant hybrid)"
      ],
      limitations: [],
      idealFor: "7–9 figure businesses, CFOs, VC-backed ops",
      popular: false,
      cta: "Contact Sales",
      color: "gold"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "bronze":
        return {
          bg: "bg-gradient-to-b from-amber-50 to-orange-50",
          border: "border-amber-200",
          text: "text-amber-700",
          button: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white",
          popular: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
          hover: "hover:border-amber-300 hover:shadow-lg",
          gradient: "from-amber-400 to-orange-400",
          badge: "bg-amber-100 text-amber-800"
        };
      case "silver":
        return {
          bg: "bg-gradient-to-b from-gray-50 to-blue-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          button: "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white",
          popular: "bg-gradient-to-r from-gray-700 to-gray-900 text-white",
          hover: "hover:border-gray-300 hover:shadow-lg",
          gradient: "from-gray-400 to-blue-gray-400",
          badge: "bg-gray-100 text-gray-800"
        };
      case "gold":
        return {
          bg: "bg-gradient-to-b from-yellow-50 to-amber-50",
          border: "border-yellow-200",
          text: "text-yellow-700",
          button: "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white",
          popular: "bg-gradient-to-r from-yellow-500 to-amber-500 text-white",
          hover: "hover:border-yellow-300 hover:shadow-lg",
          gradient: "from-yellow-400 to-amber-400",
          badge: "bg-yellow-100 text-yellow-800",
          greenFeature: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800"
        };
      default:
        return {
          bg: "bg-gradient-to-b from-gray-50 to-blue-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          button: "bg-gray-900 hover:bg-gray-800 text-white",
          popular: "bg-gray-900 text-white",
          hover: "hover:border-gray-300 hover:shadow-lg",
          gradient: "from-gray-400 to-blue-gray-400",
          badge: "bg-gray-100 text-gray-800"
        };
    }
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color);
            
            return (
              <motion.div
                key={plan.name}
                className="relative flex"
                variants={fadeInUp}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Main Card Container */}
                <motion.div
                  className={`flex flex-col h-full border rounded-2xl p-8 ${colorClasses.bg} ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 ${
                    hoveredPlan === index ? 'shadow-xl' : 'shadow-lg'
                  } ${plan.popular ? 'ring-2 ring-gray-900 ring-opacity-20' : ''}`}
                  animate={{
                    scale: hoveredPlan === index ? 1.03 : 1,
                    zIndex: hoveredPlan === index ? 10 : 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${colorClasses.popular} shadow-md`}>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Header with gradient accent */}
                  <div className={`mb-6 pb-4 border-b ${colorClasses.border}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${colorClasses.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                        {plan.name.charAt(0)}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">{plan.description}</p>
                  </div>
                  
                  {/* Default content - shown when not hovering */}
                  <AnimatePresence mode="wait">
                    {hoveredPlan !== index ? (
                      <motion.div
                        key="default-content"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col flex-grow"
                      >
                        <div className="mb-6 text-center">
                          <div className="flex items-baseline justify-center gap-1 mb-2">
                            <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                            <span className="text-slate-600 text-lg">/{plan.period}</span>
                          </div>
                          <div className="text-sm text-slate-500">
                            or {plan.yearlyPrice}/{plan.yearlyPeriod}
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6 flex-grow">
                          {plan.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-slate-700 text-sm">{feature}</span>
                            </li>
                          ))}
                          {plan.features.length > 4 && (
                            <li className="text-slate-500 text-sm pl-8">
                              + {plan.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="hover-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col flex-grow"
                      >
                        <div className="mb-4 text-center">
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                            <span className="text-slate-600">/{plan.period}</span>
                            <span className="text-slate-400 text-sm">or</span>
                            <span className="text-xl font-bold text-slate-900">{plan.yearlyPrice}</span>
                            <span className="text-slate-600 text-sm">/{plan.yearlyPeriod}</span>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-4 text-center text-sm italic border-b pb-4 border-slate-200">
                          {plan.shortDescription}
                        </p>

                        <div className="mb-4 flex-grow">
                          <h4 className="font-semibold text-slate-900 mb-3 text-sm">Includes:</h4>
                          <ul className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <li 
                                key={i} 
                                className={`flex items-start space-x-2 p-2 rounded-md text-sm ${
                                  feature.includes("Green-tier") && plan.color === "gold" 
                                    ? "bg-green-50 border border-green-200 text-green-800" 
                                    : "text-slate-700"
                                }`}
                              >
                                <svg className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {plan.limitations.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-slate-900 mb-2 text-sm">Limitations:</h4>
                            <ul className="space-y-1">
                              {plan.limitations.map((limitation, i) => (
                                <li key={i} className="flex items-start space-x-2 text-sm text-slate-600">
                                  <svg className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                  </svg>
                                  <span>{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex items-center p-2 rounded-md bg-slate-50 mt-4">
                          <svg className="h-4 w-4 text-slate-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                          <span className="text-sm text-slate-700">Ideal for: {plan.idealFor}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    className={`w-full py-3 rounded-lg transition-all duration-200 font-medium ${colorClasses.button} shadow-md hover:shadow-lg mt-6`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}