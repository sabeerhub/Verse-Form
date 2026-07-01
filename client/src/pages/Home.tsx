import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Layers,
  Lock,
  Smartphone,
  Gauge,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Verse Forms - Apple-Level Premium Landing Page
 * Design Philosophy: Refined Minimalism with Premium Elegance
 * - Clean whitespace and breathing room
 * - Smooth scroll animations
 * - Professional lucide icons
 * - No AI-generated look, pure craftsmanship
 * - Minimalist color palette (white, black, subtle grays)
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    {
      icon: Layers,
      title: "Drag & Drop Builder",
      description: "Create sophisticated forms in seconds without writing code",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor responses and completion rates as they arrive",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Perfect experience on mobile, tablet, and desktop",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with global standards",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second load times",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Your data is yours. GDPR, CCPA, and HIPAA compliant",
    },
  ];

  const useCases = [
    {
      title: "Customer Feedback",
      description: "Gather structured insights from your users",
    },
    {
      title: "Lead Generation",
      description: "Capture qualified leads with beautiful forms",
    },
    {
      title: "Event Registration",
      description: "Streamline attendee sign-ups and management",
    },
    {
      title: "Surveys & Polls",
      description: "Create engaging surveys in minutes",
    },
    {
      title: "Application Forms",
      description: "Manage job applications and admissions",
    },
    {
      title: "Booking & Scheduling",
      description: "Enable appointment scheduling seamlessly",
    },
  ];

  const faqItems = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can create your first form in under 2 minutes. Sign up, choose a template or start from scratch, and begin collecting responses immediately.",
    },
    {
      question: "Is Verse Forms really free?",
      answer:
        "Yes, completely free. No credit card required. Create unlimited forms and collect unlimited responses at no cost.",
    },
    {
      question: "Can I customize the appearance?",
      answer:
        "Absolutely. Full control over colors, fonts, branding, and layout. Match your forms perfectly to your brand identity.",
    },
    {
      question: "How is my data protected?",
      answer:
        "We use AES-256 encryption, regular security audits, and comply with GDPR, CCPA, HIPAA, and SOC 2 Type II standards.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes. Export all forms and responses at any time in CSV, JSON, or Excel format. You maintain complete ownership.",
    },
    {
      question: "What integrations are available?",
      answer:
        "We integrate with Zapier, Slack, Google Sheets, Salesforce, HubSpot, and 1000+ other tools via our REST API.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg">Verse Forms</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {["Features", "Use Cases", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-3"
          >
            <Button variant="ghost" className="text-sm">
              Sign In
            </Button>
            <Button className="bg-black text-white hover:bg-gray-900 text-sm">
              Get Started Free
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3"
          >
            {["Features", "Use Cases", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
            <div className="space-y-2 pt-4">
              <Button variant="ghost" className="w-full text-sm">
                Sign In
              </Button>
              <Button className="w-full bg-black text-white hover:bg-gray-900 text-sm">
                Get Started Free
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6"
              >
                <Zap className="w-4 h-4" />
                <span className="text-xs font-medium">Completely Free</span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Forms that feel effortless.
              </h1>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-lg">
                Create beautiful, responsive forms in seconds. Collect responses, analyze data, and make better decisions. No credit card required.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-base font-medium flex items-center gap-2">
                    Get Started Free <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-base font-medium"
                  >
                    View Demo
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 md:h-full min-h-96"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/manus-storage/verse-hero-minimal_1a269f8f.png"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 md:px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Powerful features
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Everything you need to create professional forms
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all hover:shadow-lg group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Builder Showcase */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-full min-h-96"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/manus-storage/verse-builder-showcase_dd18c430.png"
                  alt="Builder"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                Build with ease
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Our intuitive drag-and-drop builder makes creating forms effortless. No technical knowledge required. Just drag, drop, and publish.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Drag-and-drop form builder",
                  "50+ pre-built form elements",
                  "Real-time preview",
                  "Conditional logic support",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 px-4 md:px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Works for any use case
            </h2>
            <p className="text-xl text-gray-600 font-light">
              From simple surveys to complex applications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4 group-hover:bg-black group-hover:text-white transition-colors flex items-center justify-center">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                Understand your data
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Get real-time insights into your form responses. Track completion rates, identify drop-off points, and make data-driven decisions.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-base font-medium">
                  Explore Analytics
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-full min-h-96"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/manus-storage/verse-dashboard-preview_5617873a.png"
                  alt="Dashboard"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 md:px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Questions?
            </h2>
            <p className="text-xl text-gray-600 font-light">
              We have answers
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-left text-gray-900">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </motion.div>
                </button>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-5 bg-gray-50 border-t border-gray-200"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/manus-storage/verse-cta-bg_1daa2a17.png"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white">
              Ready to create better forms?
            </h2>
            <p className="text-xl text-gray-200 mb-10 font-light">
              Start for free. No credit card required. Create unlimited forms and collect unlimited responses.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-base font-semibold">
                Get Started Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <span className="font-semibold text-white">Verse Forms</span>
              </div>
              <p className="text-sm">
                Create beautiful forms that people actually want to fill out.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 Verse Forms. Crafted with precision by Sabeer-Verse.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
