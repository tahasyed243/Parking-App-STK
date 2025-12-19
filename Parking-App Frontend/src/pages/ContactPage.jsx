// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Snowfall from "react-snowfall";
import PublicNavbar from "../components/PublicNavbar";

// Custom STK Logo Component
const STKLogo = () => (
  <div className="relative group">
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
    
    {/* STK Logo Container */}
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 shadow-xl">
      <div className="flex items-center gap-0.5">
        {/* S Letter with gradient */}
        <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          S
        </span>
        
        {/* T Letter with gradient */}
        <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          T
        </span>
        
        {/* K Letter with gradient */}
        <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          K
        </span>
        
        {/* Sparkle Icon */}
        <svg className="w-3.5 h-3.5 ml-1 text-cyan-300 opacity-70" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
    
    {/* Corner accents */}
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-gradient-to-r from-cyan-500 to-transparent rounded-full opacity-60"></div>
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-l from-blue-500 to-transparent rounded-full opacity-60"></div>
  </div>
);

// SVG Icons for Contact Info
const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89-4.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: "Email",
      details: "support@stkparkease.com",
      link: "mailto:support@stkparkease.com"
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      details: "+92 (313) 281-9077",
      link: "tel:+923132819077"
    },
    {
      icon: <LocationIcon />,
      title: "Address",
      details: "STK ParkEase HQ, CB-78 Karachi, Pakistan",
      link: "https://maps.google.com"
    }
  ];

  const faqItems = [
    {
      question: "What are your support hours?",
      answer: "We provide 24/7 email support and phone support from 9 AM to 6 PM EST."
    },
    {
      question: "How do I get a refund?",
      answer: "Contact our support team within 30 days of purchase for full refunds."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! Contact our sales team for custom enterprise packages."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans with full access to features."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 relative overflow-hidden">
      <PublicNavbar />
      {/* Snowfall Effect */}
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0
        }}
        color="rgba(255, 255, 255, 0.8)"
        snowflakeCount={150}
        speed={[0.5, 2.5]}
        wind={[-0.5, 1.5]}
        radius={[0.5, 3]}
        rotationSpeed={[-0.5, 0.5]}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>


      <main className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? Our team is ready to help you 24/7.
            Let's make parking management effortless together.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-700 hover:border-cyan-800/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl border border-cyan-800/50">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-300 font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder-gray-400"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 font-medium" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder-gray-400"
                    placeholder="test@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 font-medium" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder-gray-400"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </button>

                {submitMessage && (
                  <div className="p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 text-green-300 rounded-xl border border-green-800/50 animate-fade-in">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {submitMessage}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-8 animate-slide-up delay-100">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-800/80 to-cyan-900/20 rounded-3xl p-8 backdrop-blur-lg border border-gray-700 hover:border-cyan-800/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-800/50">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                We typically respond within 24 hours. For urgent matters, please call us directly.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-900/40 rounded-xl hover:bg-gray-800/60 transition-all duration-300 border border-gray-700 hover:border-cyan-800/50 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 rounded-lg border border-cyan-800/50 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                        {info.details}
                      </p>
                    </div>
                    <svg className="w-5 h-5 ml-auto text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-gray-800/80 to-indigo-900/20 rounded-3xl p-8 backdrop-blur-lg border border-gray-700 hover:border-indigo-800/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl border border-purple-800/50">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-gray-900/40 rounded-xl hover:bg-gray-800/60 transition-all duration-300 border border-gray-700 hover:border-purple-800/50"
                  >
                    <h3 className="font-semibold text-cyan-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10 mt-20">
        <Footer />
      </div>
    </div>
  );
}