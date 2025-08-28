import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Brain, Target, Info, ChevronUp, ChevronDown, ArrowRight } from 'lucide-react';

export default function UniformProcessCards() {
  const [showAccuracyDetails, setShowAccuracyDetails] = useState(false);
  const [showRecommendationsDetails, setShowRecommendationsDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* What is Verocta - 3 Step Process */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What is Verocta?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Verocta turns messy bank feeds into clear financial intelligence – highlighting overspending, efficiency
            gaps, and tailored actions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Upload CSV",
              desc: "Simply upload your bank statement or export from your accounting software to quickly and securely get started with your financial setup.",
              icon: Upload,
              color: "from-blue-500 to-blue-600",
            },
            {
              step: "2",
              title: "Get AI Analysis",
              desc: "AI categorizes transactions and analyzes spending with 94% accuracy (up to 98% for optimized users)",
              icon: Brain,
              color: "from-indigo-500 to-indigo-600",
            },
            {
              step: "3",
              title: "Receive SpendScore & Insights",
              desc: "Get your financial health score plus actionable recommendations to cut costs",
              icon: Target,
              color: "from-purple-500 to-purple-600",
            },
          ].map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.step}
                className="relative h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.2 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {step.step}
                  </div>
                  
                  {/* Title and description - fixed height section */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-6 flex-grow">{step.desc}</p>
                  </div>

                  {/* Interactive section - fixed at bottom */}
                  <div className="mt-auto">
                    {step.step === "2" && (
                      <div>
                        <button
                          onClick={() => setShowAccuracyDetails(!showAccuracyDetails)}
                          className="flex items-center gap-2 mx-auto text-sm text-blue-600 hover:text-blue-700 transition-colors mb-4"
                        >
                          <Info className="w-4 h-4" />
                          How is accuracy calculated?
                          {showAccuracyDetails ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        {showAccuracyDetails && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left"
                          >
                            <h4 className="font-semibold text-slate-900 mb-3 text-sm">Our AI accuracy is based on:</h4>
                            <div className="space-y-2 text-xs text-slate-700">
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Historical transaction data:</strong> Learning from millions of categorized
                                  transactions to identify patterns and anomalies
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>AI-driven categorization:</strong> Spending categories are automatically
                                  detected and verified for accuracy using advanced machine learning
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Advanced algorithms:</strong> Detect unnecessary or duplicate expenses through
                                  pattern recognition
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Error correction:</strong> Continuous learning from user feedback and
                                  corrections
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Monthly updates:</strong> Regular model improvements reflecting the latest
                                  spending patterns and market trends
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Personalized insights:</strong> Analysis is tailored to each business's unique
                                  spending habits and industry patterns
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Data validation:</strong> Multiple verification layers ensure recommendations
                                  are reliable and actionable
                                </span>
                              </div>
                            </div>
                            <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                              <p className="text-xs text-blue-800">
                                <strong>Note:</strong> Accuracy improves with usage. New users start at 94% average,
                                while optimized users with clean data achieve up to 98%.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {step.step === "3" && (
                      <div>
                        <button
                          onClick={() => setShowRecommendationsDetails(!showRecommendationsDetails)}
                          className="flex items-center gap-2 mx-auto text-sm text-blue-600 hover:text-blue-700 transition-colors mb-4"
                        >
                          <Info className="w-4 h-4" />
                          How are recommendations generated?
                          {showRecommendationsDetails ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>

                        {showRecommendationsDetails && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left"
                          >
                            <h4 className="font-semibold text-slate-900 mb-3 text-sm">
                              Our recommendation engine uses:
                            </h4>
                            <div className="space-y-2 text-xs text-slate-700">
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Pattern analysis:</strong> Identifies spending patterns and anomalies across
                                  your transaction history
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Duplicate detection:</strong> Advanced algorithms automatically identify
                                  unnecessary or overlapping expenses
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Industry benchmarking:</strong> Compares your spending against similar
                                  businesses to identify optimization opportunities
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Personalized insights:</strong> Tailored recommendations based on your
                                  business size, industry, and spending habits
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Impact prioritization:</strong> Ranks suggestions by potential savings and
                                  implementation difficulty
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span>
                                  <strong>Continuous refinement:</strong> Monthly updates improve recommendations based
                                  on new data and market changes
                                </span>
                              </div>
                            </div>
                            <div className="mt-3 p-2 bg-purple-50 rounded border border-purple-200">
                              <p className="text-xs text-purple-800">
                                <strong>Result:</strong> Actionable, prioritized recommendations that typically identify
                                15-30% potential cost savings.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Spacer for card 1 to maintain equal height */}
                    {step.step === "1" && (
                      <div className="h-12 flex items-end">
                        <div className="w-full h-px"></div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Arrow between cards */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  );
}