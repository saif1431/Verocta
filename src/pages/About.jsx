import { Shield, Target, Users, ChevronRight, Building2, Globe, Award, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '10K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '2021', label: 'Founded', icon: Building2 }
  ];

  const principles = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize financial intelligence and make sophisticated business insights accessible to every entrepreneur, regardless of company size or technical expertise.'
    },
    {
      icon: Award,
      title: 'Our Vision',
      description: 'A world where every business decision is informed by clear, actionable data, enabling sustainable growth and long-term success.'
    },
    {
      icon: Shield,
      title: 'Our Commitment',
      description: 'Bank-grade security, complete data privacy, and unwavering dedication to customer success. Your trust is our most valuable asset.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
        <div className="container-page relative py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              Trusted by businesses worldwide
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Verocta</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              We transform complex financial data into clear insights that drive business growth. 
              Our platform empowers entrepreneurs to make confident, data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800/50">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Founded in 2021 by a team of financial technology veterans who witnessed 
                    the daily struggles of small business owners trying to understand their 
                    financial position.
                  </p>
                  <p>
                    We saw brilliant entrepreneurs making gut decisions instead of data-driven 
                    ones, simply because the right tools were too complex or expensive. 
                    That's when we knew we had to build something different.
                  </p>
                  <p>
                    Today, Verocta serves thousands of businesses across 50+ countries, 
                    transforming millions of data points into actionable insights every day.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Series A Funded</div>
                  <div className="text-sm text-slate-400">Backed by leading venture capital firms</div>
                </div>
              </div>
            </div>

            {/* Right Column - Principles */}
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="p-8 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                        <principle.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {principle.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-900/20">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Verocta</h2>
            <p className="text-slate-300 text-lg">
              We're not just another analytics platform. We're your strategic partner in business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Security',
                description: 'SOC 2 Type II compliance with bank-grade encryption',
                features: ['256-bit SSL encryption', 'Regular security audits', 'GDPR compliant']
              },
              {
                title: 'Real-time Insights',
                description: 'Live data synchronization with instant notifications',
                features: ['Automated reporting', 'Custom dashboards', 'Mobile access']
              },
              {
                title: 'Expert Support',
                description: '24/7 customer success team with financial expertise',
                features: ['Live chat support', 'Onboarding assistance', 'Training resources']
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join thousands of successful businesses using Verocta to make smarter financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Free Trial
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}