// src/pages/PricingPage.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Snowfall from "react-snowfall";
import PublicNavbar from "../components/PublicNavbar";

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: "Basic",
            price: isAnnual ? "$9" : "$12",
            period: isAnnual ? "/month billed annually" : "/month",
            description: "Perfect for occasional parkers",
            features: [
                "Up to 10 reservations per month",
                "Basic spot availability",
                "Email support",
                "Standard navigation",
                "Single vehicle"
            ],
            buttonText: "Get Started",
            buttonVariant: "outline",
            popular: false,
            color: "from-gray-700 to-gray-800"
        },
        {
            name: "Pro",
            price: isAnnual ? "$19" : "$24",
            period: isAnnual ? "/month billed annually" : "/month",
            description: "Best for daily commuters",
            features: [
                "Unlimited reservations",
                "Real-time availability",
                "Priority support",
                "Advanced navigation",
                "Up to 3 vehicles",
                "Cancel anytime",
                "Reservation history"
            ],
            buttonText: "Start Free Trial",
            buttonVariant: "primary",
            popular: true,
            color: "from-cyan-700 to-blue-700"
        },
        {
            name: "Business",
            price: "Custom",
            period: "tailored to your needs",
            description: "For companies and fleets",
            features: [
                "Everything in Pro",
                "Multiple user accounts",
                "Bulk reservations",
                "Dedicated account manager",
                "API access",
                "Custom reporting",
                "White-label options"
            ],
            buttonText: "Contact Sales",
            buttonVariant: "outline",
            popular: false,
            color: "from-purple-700 to-indigo-700"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950">
            <PublicNavbar />
            {/* Snowfall Effect */}
            <Snowfall
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0
                }}
                color="white"
                snowflakeCount={200}
                speed={[0.5, 3]}
                wind={[-0.5, 2]}
                radius={[0.5, 4]}
                rotationSpeed={[-1, 1]}
            />

            <main className="relative z-10 container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Transparent</span> Pricing
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Choose the perfect plan for your parking needs. No hidden fees, no surprises.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={`font-medium ${!isAnnual ? 'text-cyan-400' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative inline-flex h-8 w-16 items-center rounded-full bg-cyan-600 hover:bg-cyan-700 transition"
                        >
                            <span
                                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-9' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className={`font-medium ${isAnnual ? 'text-cyan-400' : 'text-gray-500'}`}>
                                Annual
                            </span>
                            <span className="px-2 py-1 bg-green-900/50 text-green-300 text-sm font-medium rounded-full border border-green-800">
                                Save 25%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 backdrop-blur-sm ${plan.popular
                                ? `bg-gradient-to-b ${plan.color} border-2 border-cyan-500 shadow-2xl transform -translate-y-2`
                                : 'bg-gray-800/70 border border-gray-700 shadow-xl'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="px-4 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold rounded-full border border-cyan-400">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline justify-center mb-2">
                                    <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-gray-400 ml-2">{plan.period}</span>}
                                </div>
                                <p className="text-gray-300">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <NavLink
                                to={plan.name === "Business" ? "/contact" : "/signup"}
                                className={`block w-full py-3 px-6 text-center font-semibold rounded-lg transition ${plan.buttonVariant === "primary"
                                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 border border-cyan-500'
                                    : 'border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-900/30'
                                    }`}
                            >
                                {plan.buttonText}
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-24 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                question: "Can I switch plans anytime?",
                                answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time."
                            },
                            {
                                question: "Is there a free trial?",
                                answer: "Yes, we offer a 14-day free trial on our Pro plan with no credit card required."
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
                            },
                            {
                                question: "Do you offer discounts for students or non-profits?",
                                answer: "Yes! Contact our support team with proof of status for special discounts."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-700 transition-colors">
                                <h3 className="text-lg font-semibold text-cyan-300 mb-2">{faq.question}</h3>
                                <p className="text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-gray-800/80 to-cyan-900/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            All Plans Include
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                "24/7 Customer Support",
                                "Secure Payment Processing",
                                "Mobile App Access"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center justify-center gap-3">
                                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-cyan-800/50">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Our team is here to help you choose the perfect plan for your needs
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <NavLink
                                to="/contact"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                Contact Sales
                            </NavLink>
                            <NavLink
                                to="/features"
                                className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 font-bold rounded-full hover:bg-cyan-900/30 transition-all duration-300 transform hover:scale-105"
                            >
                                View All Features
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>

            {/* Dark Footer */}
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}