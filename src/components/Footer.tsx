import { Linkedin, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const quickLinks = [
  "Services",
  "About Us",
  "Testimonials",
  "Pricing",

];

const testimonials = [
  {
    name: "James Patterson",
    role: "CEO & Founder",
    company: "Velocity Enterprises",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Before working with EuroDigital, our business felt busy but not productive. We were putting in long hours, handling leads manually, following up late, and constantly switching between tools that never really worked together. On paper things looked fine, but behind the scenes it felt chaotic and exhausting.\n\nEuroDigital helped us step back and rebuild the foundation properly. They streamlined our workflows, automated the parts that slowed us down, and gave us clarity over our entire operation. For the first time, our systems actually supported our growth instead of holding it back. We now spend more time making decisions and less time fixing problems.",
  },
  {
    name: "Rachel Thompson",
    role: "Director of Sales",
    company: "Horizon Real Estate Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    text: "We had no shortage of interest in our business, but we were losing opportunities simply because we couldn't respond fast enough. Messages were missed, follow-ups were delayed, and potential customers quietly moved on. It was frustrating because we knew the demand was there.\n\nOnce EuroDigital came in, everything shifted. Leads were handled instantly, conversations were tracked properly, and nothing slipped through the cracks. Beyond the technology, what stood out was how thoughtfully everything was set up. It didn't feel automated — it felt intelligent, personal, and reliable. Our conversion rate improved, but more importantly, our confidence did too.",
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    company: "Peak Performance Logistics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "Running the business used to feel like we were always reacting. Every day brought new fires to put out — repetitive tasks, manual processes, and inconsistent customer experiences. Our team was stretched, and scaling felt impossible without hiring more people.\n\nEuroDigital changed that dynamic completely. By automating routine work and creating a smoother customer journey, they gave our team breathing room. We didn't just become more efficient — we became more focused. The business now feels calm, controlled, and scalable in a way it never did before.",
  },
  {
    name: "Jennifer Martinez",
    role: "Chief Technology Officer",
    company: "NextGen Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    text: "As our company grew, the cracks in our digital systems became impossible to ignore. What worked when we were small simply didn't scale, and adding more staff only increased costs without solving the core issues.\n\nEuroDigital helped us grow smarter, not heavier. They optimized our processes so we could handle more volume with the same team, without sacrificing quality. It felt less like adding software and more like adding structure, discipline, and long-term thinking to the business.",
  },
  {
    name: "Michael Andrews",
    role: "Managing Director",
    company: "Summit Financial Partners",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    text: "We were already doing \"okay\" before EuroDigital, but deep down we knew we were operating below our potential. Too many tools, too many manual steps, and no single source of truth made decision-making harder than it should have been.\n\nEuroDigital brought everything together into one clean, efficient system. The difference was night and day. Operations became smoother, insights became clearer, and growth finally felt intentional instead of accidental. It gave us the confidence that our business is now built to last, not just survive.",
  },
];

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
};

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative mt-12 md:mt-16 overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden px-6 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedTestimonials.map((item: Testimonial, index: number) => (
          <div
            key={`${item.name}-${index}`}
            className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 shrink-0"
            style={{ width: '480px', maxWidth: '90vw' }}
          >
            {/* Quote Icon */}
            <div className="mb-6">
              <svg
                className="w-10 h-10 opacity-20"
                style={{ color: 'var(--primary-blue)' }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="text-[15px] leading-relaxed mb-8 whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {item.text}
            </p>

            {/* Person Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 shrink-0"
                style={{ borderColor: 'var(--primary-blue-light)' }}
              />
              <div>
                <h4 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                  {item.name}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {item.role}
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--primary-blue)' }}>
                  {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to right, white, transparent)' }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none"
        style={{ background: 'linear-gradient(to left, white, transparent)' }}
      />
    </div>
  );
}

function Footer() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-4 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Real Journey. Real People. Real Success
          </h2>
          <p className="text-sm md:text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great AI <br /> products to market - fast.
          </p>
        </div>

        <TestimonialsSection testimonials={testimonials} />
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 md:py-20" style={{ borderTop: '1px solid rgba(24, 182, 227, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top section - Logo */}
          <div 
            className="flex items-center justify-between pb-10 md:pb-12"
            style={{ borderBottom: '1px solid rgba(24, 182, 227, 0.15)' }}
          >
            <Link to="/">
              <img
                src="/logo/logo.svg"
                alt="Euro Digital Technologies"
                className="h-10 md:h-12"
              />
            </Link>
          </div>

          {/* Middle section - Three columns */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-20 py-12 md:py-16">
            {/* Left column - Description */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                Building corporation power for visionary entrepreneurs. Structure, compliance, and capital-ready business formation.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ color: 'var(--primary-navy)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ color: 'var(--primary-navy)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ color: 'var(--primary-navy)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ color: 'var(--primary-navy)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle column - Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--primary-navy)' }}>Quick Links</h3>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link to="/">
                      <span className="relative group inline-block text-[15px]" style={{ color: 'var(--text-primary)' }}>
                        {link}
                        <span 
                          className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 ease-in-out group-hover:w-full"
                          style={{ backgroundColor: 'var(--primary-blue)' }}
                        ></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{ color: 'var(--primary-navy)' }}>Contact Us</h3>
              <div className="space-y-3.5 text-[15px]" style={{ color: 'var(--text-primary)' }}>
                <p className="leading-relaxed">
                  Mussafah Shabiya MBZ-12,
                  <br />
                  Building No. C-201,
                  <br />
                  Office No. M-03,
                  <br />
                  Abu Dhabi, UAE
                </p>
                <p className="hover:text-blue-600 transition-colors cursor-pointer">
                  support@eurodigital.site
                </p>
                <p className="hover:text-blue-600 transition-colors cursor-pointer">
                  +971 561874676
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section - Copyright and Legal Links */}
          <div 
            className="pt-8 pb-2 space-y-4"
            style={{ borderTop: '1px solid rgba(24, 182, 227, 0.15)' }}
          >
            {/* Copyright */}
            <p className="text-sm text-center" style={{ color: 'var(--text-primary)' }}>
              © 2025 Upscale Consulting. All rights reserved. Built for Corporate Excellence.
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center justify-center gap-5 text-sm pb-2" style={{ color: '#9ca3af' }}>
              <Link to="/privacy-policy" className="hover:text-gray-600 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms-and-conditions" className="hover:text-gray-600 transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
