export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals getting started",
      features: ["Upload 10 CSVs/month", "Basic data insights", "Email support", "Standard templates", "Export to PDF"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Unlimited CSV uploads",
        "Advanced AI insights",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Team collaboration",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantee",
        "White-label options",
        "Custom training",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent pricing that scales with your business. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "bg-white text-black  border-primary shadow-2xl shadow-primary/20"
                  : "bg-white  text-black shadow-xl hover:border-primary/50"
              }`}
            >
              {/* Popular span */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white  px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold  mb-2">{plan.name}</h3>
                <p className=" mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold ">{plan.price}</span>
                  <span className=" ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5  mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-md transition-all duration-200 ${
                  plan.popular
                    ? "btn-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                    : "btn-primary  text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                Get Started with {plan.name}
              </button>

              {/* Money Back Guarantee */}
              <p className="text-center text-sm text-muted-foreground mt-4">30-day money-back guarantee</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Need a custom solution? We're here to help.</p>
          <button className="text-primary hover:text-primary/80 font-semibold">Contact Sales →</button>
        </div>
      </div>
    </div>
  )
}
