import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown, Play, Zap, Shield, Gauge } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Verse Forms - Premium Landing Page
 * Design: Refined Minimalism
 * Professional, crafted, Apple-level UI
 * Every detail is intentional and refined
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for professional feel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const features = [
    {
      title: "Drag & Drop Builder",
      description: "Create sophisticated forms in minutes with our intuitive, professional interface",
      icon: "⚙️",
    },
    {
      title: "Live Preview",
      description: "See your changes instantly with real-time synchronization",
      icon: "👁️",
    },
    {
      title: "Responsive Design",
      description: "Perfect rendering across all devices and screen sizes",
      icon: "📱",
    },
    {
      title: "Real-Time Analytics",
      description: "Monitor responses and completion rates as they arrive",
      icon: "📊",
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with global standards",
      icon: "🔒",
    },
    {
      title: "Data Export",
      description: "Export responses in multiple formats for analysis",
      icon: "📥",
    },
    {
      title: "Dark Mode",
      description: "Comfortable viewing experience in any lighting condition",
      icon: "🌙",
    },
    {
      title: "File Uploads",
      description: "Enable users to upload files directly through forms",
      icon: "📎",
    },
    {
      title: "Access Control",
      description: "Restrict form access with passwords and permissions",
      icon: "🔐",
    },
  ];

  const templates = [
    { title: "Contact Form", description: "Professional inquiry form" },
    { title: "Feedback Survey", description: "Gather structured feedback" },
    { title: "Registration", description: "Event or service signup" },
    { title: "Assessment", description: "Quiz or evaluation form" },
    { title: "Intake Form", description: "Medical or professional intake" },
    { title: "Application", description: "Job or program application" },
    { title: "Booking Form", description: "Appointment scheduling" },
    { title: "Certification", description: "Compliance and certification" },
  ];

  const benefits = [
    {
      title: "Minimal Design",
      description: "Clean, distraction-free interface that respects user attention",
      icon: "✨",
    },
    {
      title: "Lightning Speed",
      description: "Optimized performance with sub-second load times",
      icon: "⚡",
    },
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption",
      icon: "🛡️",
    },
    {
      title: "99.99% Uptime",
      description: "Redundant infrastructure with automatic failover",
      icon: "🎯",
    },
    {
      title: "WCAG Compliant",
      description: "Fully accessible to users with disabilities",
      icon: "♿",
    },
    {
      title: "Handcrafted",
      description: "Built with meticulous attention to every detail",
      icon: "🎨",
    },
  ];

  const testimonials = [
    {
      quote:
        "Verse Forms completely transformed our data collection process. The user experience is unparalleled.",
      author: "Sarah Chen",
      title: "Product Director, TechCorp",
      initials: "SC",
    },
    {
      quote:
        "Finally, a form builder that respects both design principles and functionality. Exceptional work.",
      author: "Marcus Johnson",
      title: "Design Lead, Creative Studio",
      initials: "MJ",
    },
    {
      quote:
        "We switched our entire team to Verse Forms. The support and reliability are outstanding.",
      author: "Emily Rodriguez",
      title: "Operations Manager, StartupXYZ",
      initials: "ER",
    },
  ];

  const faqItems = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can create your first form in under 5 minutes. Sign up, choose a template or start from scratch, and begin collecting responses immediately. No credit card required for the free tier.",
    },
    {
      question: "Can I customize the appearance of my forms?",
      answer:
        "Absolutely. You have complete control over colors, typography, branding, layout, and styling. Match your forms perfectly to your brand identity.",
    },
    {
      question: "How is my data protected?",
      answer:
        "We use AES-256 encryption, regular security audits, and comply with GDPR, CCPA, HIPAA, and SOC 2 Type II standards. Your data is your own.",
    },
    {
      question: "What integrations are available?",
      answer:
        "We integrate with Zapier, Slack, Google Sheets, Salesforce, HubSpot, and 1000+ other tools. Custom integrations via our REST API are also available.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes. You can export all forms and responses at any time in CSV, JSON, or Excel format. You maintain complete ownership of your data.",
    },
    {
      question: "Is team collaboration supported?",
      answer:
        "Yes. Pro and Team plans include full collaboration, role-based access control, audit logs, and team management features.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for individuals",
      features: [
        "Up to 3 forms",
        "100 responses/month",
        "Basic customization",
        "Email support",
        "Community access",
      ],
      cta: "Get Started Free",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For growing teams",
      features: [
        "Unlimited forms",
        "Unlimited responses",
        "Advanced customization",
        "Priority support",
        "Integrations",
        "Advanced analytics",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For organizations",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Advanced security",
        "Custom branding",
        "API access",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white font-bold text-sm">
              V
            </div>
            <span className="font-bold text-lg tracking-tight">Verse Forms</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Templates", "Pricing", "Resources"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <Button className="btn-primary text-sm">Get Started</Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 bg-gradient-to-b from-white via-white to-gray-50/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Create forms people actually enjoy completing.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Build elegant, responsive forms with an experience designed for speed, clarity, and simplicity. No coding required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-primary flex items-center gap-2 text-base">
                    Get Started Free <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-secondary flex items-center gap-2 text-base">
                    <Play className="w-4 h-4" /> Watch Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-premium">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                  <div className="pt-4 space-y-3">
                    <div className="h-10 bg-gray-100 rounded-lg"></div>
                    <div className="h-10 bg-gray-100 rounded-lg"></div>
                    <div className="h-10 bg-gray-100 rounded-lg w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Panel */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-lg-premium w-56 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Gauge className="w-4 h-4 text-gray-900" />
                  <div className="text-xs font-semibold text-gray-900">Response Analytics</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Total Responses</span>
                    <span className="text-sm font-bold text-gray-900">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Completion Rate</span>
                    <span className="text-sm font-bold text-gray-900">94%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-black rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 border-t border-gray-200/50">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold text-gray-500 mb-10 uppercase tracking-widest"
          >
            Trusted by teams at leading companies
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
          >
            {["TechCorp", "StartupXYZ", "Creative Studio", "Enterprise Co", "Global Inc"].map(
              (company, i) => (
                <motion.div key={i} variants={itemVariants} className="text-gray-400 font-semibold text-sm">
                  {company}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Powerful features, simple interface
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
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card-premium group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 px-4 bg-gray-50/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              See it in action
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Experience the power and elegance of Verse Forms
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-premium p-1 mb-12"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer"
                  >
                    <Play className="w-10 h-10 text-white" />
                  </motion.div>
                  <p className="text-gray-600 font-medium">Dashboard Preview</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Panels */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 -left-6 md:left-auto md:right-16 bg-white rounded-xl p-5 shadow-premium w-60 border border-gray-100 hidden md:block"
            >
              <div className="text-xs font-semibold mb-4 text-gray-900">Template Library</div>
              <div className="space-y-3">
                <div className="h-12 bg-gray-100 rounded-lg"></div>
                <div className="h-12 bg-gray-100 rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 -right-6 md:right-auto md:left-16 bg-white rounded-xl p-5 shadow-premium w-60 border border-gray-100 hidden md:block"
            >
              <div className="text-xs font-semibold mb-4 text-gray-900">Recent Forms</div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Contact Form</span>
                  <span className="text-gray-400 text-xs">3 days ago</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Feedback Survey</span>
                  <span className="text-gray-400 text-xs">1 week ago</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready-made templates
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Start with professionally designed templates
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {templates.map((template, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card-premium cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 h-40 rounded-lg mb-4 group-hover:from-gray-200 group-hover:to-gray-100 transition-colors"></div>
                <h3 className="font-semibold mb-2 text-gray-900">{template.title}</h3>
                <p className="text-sm text-gray-600">{template.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Verse Forms */}
      <section className="py-32 px-4 bg-gray-50/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Why Verse Forms?
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Built for teams that demand excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, i) => (
              <motion.div key={i} variants={itemVariants} className="card-premium">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 text-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Loved by teams worldwide
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} variants={itemVariants} className="card-premium">
                <p className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-700">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-4 bg-gray-50/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gray-900 text-white shadow-lg-premium md:scale-105"
                    : "bg-white border border-gray-200 shadow-soft"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlighted ? "text-gray-300" : "text-gray-600"}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <ul className={`space-y-4 mb-8 ${plan.highlighted ? "text-gray-200" : "text-gray-700"}`}>
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className={
                      plan.highlighted
                        ? "w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                        : "btn-primary w-full"
                    }
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Frequently asked questions
            </h2>
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
                className="border border-gray-200 rounded-xl overflow-hidden transition-all"
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
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Start creating better forms today.
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 font-semibold text-lg">
                Create Your First Form
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 Sabeer-Verse. All rights reserved. Crafted with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
