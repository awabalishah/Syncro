import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Shield, BarChart, Zap, Clock, AlertTriangle, Users } from 'lucide-react';
import { SectionCTA } from './SectionCTA';
import myfxbookLogo from '../assets/myfxbook-logo.png';

const faqCategories = [
    {
        id: 'general',
        title: 'General Understanding',
        icon: <HelpCircle className="w-5 h-5" />,
        questions: [
            {
                q: "What is Syncro and what does the automated strategy do?",
                a: "Syncro provides access to an automated trading strategy that connects to your brokerage account and executes trades based on a predefined algorithmic strategy. You do not manually place trades or analyse charts; the system operates autonomously once connected."
            },
            {
                q: "Is this a signals group or manual trading service?",
                a: "No. Syncro does not provide trading signals or manual instructions. All trades are executed automatically by the strategy once your account is connected."
            }
        ]
    },
    {
        id: 'performance',
        title: 'Performance & Transparency',
        icon: <BarChart className="w-5 h-5" />,
        questions: [
            {
                q: "Where can I view live statistics and historical performance?",
                a: <span>Transparency is a core value. Our public <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Myfxbook tracking link</a> provides full visibility on historical profits, drawdowns, and trade frequency.</span>
            },
            {
                q: "Has the automated strategy performed consistently?",
                a: <div className="flex flex-col gap-2">
                    <p>Based on verified data, the system has demonstrated consistent monthly performance since December 2024, delivering an average return of 7.8% per month throughout 2025.</p>
                    <p className="text-rose-500 font-bold text-xs uppercase tracking-tight">Mandatory Disclosure: Past performance is not a reliable indicator of future results. Trading involves significant risk to your capital.</p>
                </div>
            }
        ]
    },
    {
        id: 'fees',
        title: 'Service Fees',
        icon: <TrendingUp className="w-5 h-5" />,
        questions: [
            {
                q: "What are the fees for using Syncro?",
                a: "Syncro operates on a results-first model with a flat 25% service fee strictly on realised net profits. There are no upfront costs or subscription fees."
            },
            {
                q: "How is the fee calculated and settled?",
                a: "Fees are calculated using the High-Water Mark principle. This ensures you only pay a fee when your account reaches a new net profit high. Fees are settled daily via the automated STARTRADER portal."
            },
            {
                q: "What if my account is in a drawdown?",
                a: "If the account balance remains below your initial deposit or previous high, no service fees are charged until that value is exceeded."
            }
        ]
    },
    {
        id: 'technical',
        title: 'Broker & Tech Requirements',
        icon: <Shield className="w-5 h-5" />,
        questions: [
            {
                q: "Which brokers are supported?",
                a: "Syncro now works exclusively with STARTRADER to ensure the most stable technical connection and automated fee settlement. Accounts must be opened using the official Syncro links provided during onboarding."
            },
            {
                q: "What leverage is required?",
                a: "A leverage of 1:300–1:500 is required. Standard retail leverage (1:30) is insufficient for the strategy to operate correctly."
            }
        ]
    },
    {
        id: 'risk',
        title: 'Risk & Strategy Mechanics',
        icon: <AlertTriangle className="w-5 h-5" />,
        questions: [
            {
                q: "What is traded?",
                a: "The strategy is specifically optimised for XAUUSD (Gold)."
            },
            {
                q: "How is risk managed?",
                a: "The system operates at a 30% risk framework by default, which includes a built-in equity stop as a protective mechanism. If this limit is reached, trading stops automatically."
            },
            {
                q: "Can I change my risk settings?",
                a: <div className="flex flex-col gap-3">
                    <p>Yes. While we STRONGLY RECOMMEND the default setting of 1, you can adjust your multiplier in the portal. Higher settings offer higher potential returns at higher risk, while lower settings reduce risk and returns.</p>
                    <p>A video tutorial is provided during onboarding to guide you through the process.</p>
                </div>
            }
        ]
    },
    {
        id: 'affiliate-security',
        title: 'Affiliate & Security',
        icon: <Users className="w-5 h-5" />,
        questions: [
            {
                q: "How does the referral programme work?",
                a: "You receive 20% of the performance fee generated from any client you personally refer, provided their account is in profit. This is 20% of the fee Syncro charges, not 20% of the client's total profits."
            },
            {
                q: "Will Syncro message me directly?",
                a: "No. To protect against scams, all official communication is handled exclusively through private support tickets in our Discord."
            }
        ]
    }
];

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
            >
                <span className="text-lg font-semibold text-slate-900">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center ${isOpen ? 'bg-blue-600 border-blue-600 text-white' : 'text-slate-400'}`}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-slate-600 leading-relaxed pr-10">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FAQ() {
    const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
    const [openIndex, setOpenIndex] = useState(0);

    const currentQuestions = faqCategories.find(c => c.id === activeCategory)?.questions || [];

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Everything you need to know about Syncro and our automated trading systems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start mb-24">
                    {/* Categories Sidebar */}
                    <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
                        {faqCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    setOpenIndex(0);
                                }}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap lg:whitespace-normal text-left ${activeCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                    : 'bg-white text-slate-600 hover:bg-white/80 border border-slate-100'
                                    }`}
                            >
                                <span className={activeCategory === cat.id ? 'text-white' : 'text-blue-600'}>
                                    {cat.icon}
                                </span>
                                <span className="font-semibold text-sm">{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Questions Area */}
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-600/10 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
                    >
                        {currentQuestions.map((item, idx) => (
                            <FAQItem
                                key={idx}
                                question={item.q}
                                answer={item.a}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                            />
                        ))}
                    </motion.div>
                </div>

                <SectionCTA nextSectionId="profit-share" label="Service Fees" />
            </div>
        </section>
    );
}
