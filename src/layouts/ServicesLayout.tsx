import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  { id: "ai-business-automation", title: "AI Business Automation", path: "/services/ai-business-automation" },
  { id: "ai-business-promotion", title: "AI Business Promotion", path: "/services/ai-business-promotion" },
  { id: "ai-agent-talk-time", title: "AI Agent Talk Time", path: "/services/ai-agent-talk-time" },
  { id: "ai-automated-chatbot", title: "AI Automated Chatbot", path: "/services/ai-automated-chatbot" },
  { id: "ai-addon-services", title: "AI add-on Services", path: "/services/ai-addon-services" },
  { id: "industry-specific", title: "Industry Specific AI Use Cases", path: "/services/industry-specific" },
];

function ServicesLayout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Services Navigation Bar - Shows on all service pages */}
      <div className="mt-[72px] bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-cyan-200 shadow-md">
        <div className="max-w-[1425px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-start gap-2 overflow-x-auto scrollbar-hide py-3">
            {services.map((service) => {
              const isActive = location.pathname === service.path;
              return (
                <Link key={service.id} to={service.path}>
                  <button
                    className={`px-4 md:px-5 py-2.5 whitespace-nowrap text-sm md:text-base font-medium rounded-md transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-cyan-400 text-white shadow-md"
                        : "bg-transparent text-slate-700 hover:bg-cyan-400/50 hover:text-white"
                    }`}
                  >
                    {service.title}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Individual Service Page Content Renders Here */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ServicesLayout;

