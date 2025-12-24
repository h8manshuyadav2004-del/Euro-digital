import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIBusinessPromotion() {
  const serviceData = {
    id: "ai-business-promotion",
    title: "AI Business Promotion",
    description:
      "Our AI Business Promotion solutions help you reach the right audience at the right time with personalized, data-driven strategies. By leveraging AI, we improve engagement, increase conversions, and make your marketing efforts more efficient.",
    image: "/servicesImages/Ai-business-promotion.png",
    features: [
      "Automated marketing workflows",
      "Personalised customer communication",
      "Intelligent campaign optimisation",
      "AI-driven content distribution",
      "Performance tracking and insights"
    ],
    detailedDescription: "EuroDigital enables businesses to scale their marketing efforts while maintaining consistency and quality across all channels.",
    primaryButtonText: "Try To Sales",
  };

  return (
    <>
        {/* Service Content */}
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
                  {serviceData.title}
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {serviceData.description}
                </p>
                
                {serviceData.features && (
                  <div className="space-y-3 ml-4">
                    <ul className="space-y-2">
                        {serviceData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>●</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {serviceData.detailedDescription && (
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {serviceData.detailedDescription}
                  </p>
                )}
                
                <div className="flex gap-4 pt-4">
                  <button 
                    className="rounded-full  font-medium px-6 py-2 shadow-lg  text-black cursor-pointer"
                    style={{ backgroundColor: 'var(--primary-blue)' }}
                  >
                    {serviceData.primaryButtonText}
                  </button>
                
                </div>
              </div>

              <div className="relative ">
                <motion.img
                  src={serviceData.image}
                  alt={serviceData.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Width Image Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/servicesImages/Ai-business-automation1.png"
              alt="AI Business Promotion"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-16 bg-gradient-to-b from-white to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Heading with Billing Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Pay only for what you use
              </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {/* AI Startup Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-100 rounded-2xl p-8 md:p-10 min-h-[700px] hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-5xl font-bold mb-4 text-slate-800 whitespace-nowrap">
                  AI Startup
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  For startups and publishers
                </p>
                <p className="text-sm font-semibold mb-6 text-slate-800">
                  <span className="text-5xl md:text-6xl text-slate-500">$399</span> <span className="text-lg">Per Month</span>
                </p>
                <div className="space-y-4 mb-8 ">
                  <button 
                    className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 cursor-pointer transition-all hover:shadow-lg"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-3 mt-10 text-center">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Basic dashboard</span>
                  </div>
                  <div className="flex items-start gap-3 text-center">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Limited API access</span>
                  </div>
                  <div className="flex items-start gap-3 text-center">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Email Support</span>
                  </div>
                  <div className="flex items-start gap-3 text-center">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">2 Agents</span>
                  </div>
                  <div className="flex items-start gap-3 text-center">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Basic analytics</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Business Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-100 rounded-2xl p-8 md:p-10 min-h-[700px] border-2 border-cyan-400 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-5xl font-bold mb-4 text-slate-800 whitespace-nowrap">
                  AI Business
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  For rapidly scaling startups and publishers
                </p>
                <p className="text-sm font-semibold mb-6 text-slate-800">
                  <span className="text-5xl md:text-6xl text-slate-500">$699</span> <span className="text-lg">Per Month</span>
                </p>
                <div className="space-y-4 mb-8">
                  <button 
                    className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 transition-all hover:shadow-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-3 mt-10">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Advanced dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Priority API access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Live chat support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">5 Agents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Custom branding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Call recording</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Enterprise Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-100 rounded-2xl p-8 md:p-10 min-h-[700px] hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-5xl font-bold mb-4 text-slate-800 whitespace-nowrap">
                  AI Enterprise
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Advanced solutions for large enterprises with custom needs
                </p>
                <p className="text-sm font-semibold mb-6 text-slate-800">
                  <span className="text-5xl md:text-6xl text-slate-500">Custom</span>
                </p>
                <div className="space-y-4 mb-8">
                  <button 
                    className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 transition-all hover:shadow-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-3 mt-10">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Full-featured dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Unlimited API calls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">24/7 dedicated support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">5+ Customisation agents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Custom AI models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">SLA guarantee</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Priority processing</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {getFAQsByServiceId(serviceData.id) && (
          <FAQ
            faqs={getFAQsByServiceId(serviceData.id)!.faqs}
            subtitle={getFAQsByServiceId(serviceData.id)!.subtitle}
          />
        )}
    </>
  );
}

export default AIBusinessPromotion;

