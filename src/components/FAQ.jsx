import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Shield, BarChart, Zap, Clock, AlertTriangle, Users } from 'lucide-react';

const faqCategories = [
    {
        id: 'general',
        title: 'General Understanding',
        icon: <HelpCircle className="w-5 h-5" />,
        questions: [
            {
                q: "What is Syncro and what does the bot do?",
                a: "Syncro provides access to an automated trading bot that connects to your trading account and executes trades automatically based on a predefined strategy. You do not manually place trades, analyse charts, or make trading decisions. Once connected, the system operates automatically."
            },
            {
                q: "Is this a signals group or manual trading service?",
                a: "No. Syncro does not provide trading signals, trade calls, or manual instructions. All trades are executed automatically by the bot once your account is connected."
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
                a: "You can view live statistics, historical performance, and trading behaviour using the public Myfxbook tracking link. This allows you to review long-term performance, drawdowns, trade frequency, and typical trading times."
            },
            {
                q: "Has the bot performed consistently?",
                a: "Based on the live Myfxbook data, the bot has shown consistent gains since June 2024. Past performance is not a guarantee of future results."
            }
        ]
    },
    {
        id: 'access',
        title: 'Bot Access & Confirmation',
        icon: <Zap className="w-5 h-5" />,
        questions: [
            {
                q: "How long does it take to get access to the trading bot?",
                a: "Once all required steps are completed, bot access typically takes between 1–3 business working days. This timeframe relates to activating and connecting the bot, not your broker. You will be personally notified via a legitimate support ticket once your account is successfully connected."
            },
            {
                q: "I’ve submitted everything — when will I be confirmed?",
                a: "Please allow up to 1–3 business working days for the team to review your submission and complete the bot connection. If anything is missing, the team will contact you via your support ticket."
            }
        ]
    },
    {
        id: 'broker',
        title: 'Broker Requirements',
        icon: <Shield className="w-5 h-5" />,
        questions: [
            {
                q: "Which broker do I need to use?",
                a: "Syncro works exclusively with Vantage. You must open your Vantage trading account using the official Syncro affiliate link provided during onboarding."
            },
            {
                q: "What happens if I open a Vantage account without the affiliate link?",
                a: "If a broker account is created without using the correct affiliate link, the system will not work. This means the account cannot be linked, bot access cannot be enabled, and support cannot activate the system. Accounts opened outside the official link cannot be fixed or transferred."
            },
            {
                q: "I already have a Vantage account — can I use it?",
                a: "No. Existing Vantage accounts cannot be used unless they were created through the correct affiliate link. A new account must be opened using the provided link."
            },
            {
                q: "What leverage do I need?",
                a: "A leverage of 1:30 is not sufficient. The bot may open multiple positions and requires higher leverage to function correctly. Required leverage: 1:300 to 1:500."
            }
        ]
    },
    {
        id: 'trading',
        title: 'Trading Instruments & Activity',
        icon: <Clock className="w-5 h-5" />,
        questions: [
            {
                q: "What does the bot trade?",
                a: "The bot is specifically designed and optimised for XAUUSD (Gold). Trading other instruments is not supported unless officially confirmed."
            },
            {
                q: "How often does the bot trade?",
                a: "On average, the bot trades 2–4 times per week, typically from Monday to Thursday. Fridays are avoided to maintain a safer trading environment."
            },
            {
                q: "How long do trades usually last?",
                a: "Trades are generally short, with an average duration of around 5 minutes."
            }
        ]
    },
    {
        id: 'risk',
        title: 'Risk Settings',
        icon: <AlertTriangle className="w-5 h-5" />,
        questions: [
            {
                q: "How should I think about the bot’s risk setting?",
                a: "Think of it like an investor allocating money to a hedge fund. Some investors prefer lower risk, others accept higher risk for higher potential returns. The bot works in a similar way, allowing you to choose the risk exposure you're comfortable with."
            },
            {
                q: "What risk level does the bot use by default?",
                a: "The bot operates at a 30% risk level by default. This is the exact risk setting used for the verified 18+ months of live results shown on the tracking link."
            },
            {
                q: "Does the bot risk 30% on every trade?",
                a: "No. The 30% figure is not risk per trade, but the maximum total risk framework (equity stop) the bot is allowed to operate within. If this limit is reached, trading stops automatically."
            },
            {
                q: "Can I change the risk level?",
                a: "Yes, you can change the risk level. Lowering risk may reduce drawdowns but also reduce returns, while increasing risk may increase potential returns but also increase exposure and drawdown."
            },
            {
                q: "How do I change the risk if I choose to?",
                a: "A step-by-step video tutorial is available explaining how to adjust risk settings. Please watch the video carefully before making any changes."
            }
        ]
    },
    {
        id: 'platform',
        title: 'Platform & Monitoring',
        icon: <Zap className="w-5 h-5" />,
        questions: [
            {
                q: "How do I view my performance?",
                a: "You can view your performance directly through your MT5 app, where you can monitor Balance, Equity, and open/closed trades."
            },
            {
                q: "I’m on MT4/MT5 and can’t place a trade on EURUSD — what should I do?",
                a: "Use the RAW spread version of the pair, often labelled EURUSD+, EURUSD.pro, or EURUSD.ECN. Search for the correct symbol in your platform."
            }
        ]
    },
    {
        id: 'affiliates',
        title: 'Affiliates & Additional Accounts',
        icon: <Users className="w-5 h-5" />,
        questions: [
            {
                q: "Can I add additional personal accounts later?",
                a: "Yes, using external trade copiers such as MetaCopier. Note that Syncro does not provide support for external copier setups."
            }
        ]
    },
    {
        id: 'security',
        title: 'Security & Support',
        icon: <MessageCircle className="w-5 h-5" />,
        questions: [
            {
                q: "Will Syncro ever message me directly?",
                a: "No. Syncro will never send unsolicited direct messages. All official communication is handled through legitimate support tickets."
            },
            {
                q: "How do I get help if I need it?",
                a: "Open a support ticket in #support. A team member will assist you privately, securely, and professionally."
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

                <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
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
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
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
            </div>
        </section>
    );
}
