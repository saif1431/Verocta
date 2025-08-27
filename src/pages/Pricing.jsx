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
      color: "amber"
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
      color: "gray"
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
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "amber":
        return {
          bg: "bg-amber-50",
          border: "border-amber-200",
          text: "text-amber-700",
          button: "bg-gray-300 hover:bg-gray-400 text-black",
          popular: "bg-amber-600 text-white",
          hover: "hover:border-amber-300 hover:shadow-lg"
        };
      case "gray":
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          button: "bg-gray-900 hover:bg-gray-800 text-white",
          popular: "bg-gray-900 text-white",
          hover: "hover:border-gray-300 hover:shadow-lg"
        };
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-700",
        button: "bg-gray-300 hover:bg-gray-400 text-black",
          popular: "bg-blue-600 text-white",
          hover: "hover:border-blue-300 hover:shadow-lg"
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          button: "bg-gray-900 hover:bg-gray-800 text-white",
          popular: "bg-gray-900 text-white",
          hover: "hover:border-gray-300 hover:shadow-lg"
        };
    }
  };

  return (
    <section id="pricing" className="py-16 bg-white">
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
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
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
                className="relative"
                variants={fadeInUp}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Main Card Container */}
                <motion.div
                  className={`bg-white border rounded-2xl p-8 flex flex-col ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 ${
                    hoveredPlan === index ? 'shadow-xl' : 'shadow-md'
                  }`}
                  animate={{
                    scale: hoveredPlan === index ? 1.03 : 1,
                    zIndex: hoveredPlan === index ? 10 : 1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${colorClasses.popular}`}>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Default content - shown when not hovering */}
                  <AnimatePresence mode="wait">
                    {hoveredPlan !== index ? (
                      <motion.div
                        key="default-content"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col"
                      >
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                        <p className="text-slate-600 mb-6">{plan.description}</p>
                        <div className="mb-8">
                          <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                          <span className="text-slate-600">/{plan.period}</span>
                        </div>
                        
                        <ul className="space-y-4 mb-8 flex-grow">
                          {plan.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                          <li className="text-slate-500 text-sm">
                            + {plan.features.length - 3} more features
                          </li>
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="hover-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col"
                      >
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                        
                        <div className="mb-6 text-center">
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                            <span className="text-slate-600">/{plan.period}</span>
                            <span className="text-slate-500 text-sm">or</span>
                            <span className="text-xl font-bold text-slate-900">{plan.yearlyPrice}</span>
                            <span className="text-slate-600">/{plan.yearlyPeriod}</span>
                          </div>
                        </div>

                        <p className="text-slate-700 mb-6 text-center italic text-sm">{plan.shortDescription}</p>

                        <div className="mb-6 flex-grow">
                          <h4 className="font-semibold text-slate-900 mb-3">Includes:</h4>
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start space-x-3">
                                <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-slate-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {plan.limitations.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-slate-900 mb-3">Limitations:</h4>
                            <ul className="space-y-3">
                              {plan.limitations.map((limitation, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                  <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-slate-700 text-sm">{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex items-center mb-4">
                          <svg className="h-5 w-5 text-slate-700 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                          <span className="text-sm font-medium text-slate-900">Ideal for: {plan.idealFor}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <motion.button
                    className={`w-full py-3 rounded-lg transition-all duration-200 font-medium ${colorClasses.button} mt-4`}
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