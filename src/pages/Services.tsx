import { Link } from "react-router-dom";

const services = [
  { id: "ai-business-automation", title: "AI Business Automation", path: "/services/ai-business-automation" },
  { id: "ai-business-promotion", title: "AI Business Promotion", path: "/services/ai-business-promotion" },
  { id: "ai-agent-talk-time", title: "AI Agent Talk Time", path: "/services/ai-agent-talk-time" },
  { id: "ai-automated-chatbot", title: "AI Automated Chatbot", path: "/services/ai-automated-chatbot" },
  { id: "ai-addon-services", title: "AI add-on Services", path: "/services/ai-addon-services" },
  { id: "industry-specific", title: "Industry Specific AI Use Cases", path: "/services/industry-specific" },
];

function Services() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
          Our AI Services
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Explore our comprehensive AI solutions designed to transform your business operations, enhance customer engagement, and drive growth.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <Link key={service.id} to={service.path}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  Click to learn more about our {service.title.toLowerCase()} solutions
                </p>
                <button className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors">
                  Learn More →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

