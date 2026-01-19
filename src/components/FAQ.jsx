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
                a: <div className="flex flex-col gap-2">
                    <p>Live performance and profits can be tracked in real time via your MT5 app. Our public <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Myfxbook</a> tracking link provides full transparency on historical profits, drawdowns, trade frequency, and typical trading times.</p>
                </div>
            },
            {
                q: "Has the bot performed consistently?",
                a: <div className="flex flex-col gap-2">
                    <p>Based on live, independently verified data via <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Myfxbook</a>, the bot has demonstrated consistent monthly performance since June 2024, delivering an average return of 7.8% per month throughout 2025. Past performance is not a guarantee of future results.</p>
                </div>
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
                a: "Once all required steps are completed, bot access typically takes 1–2 business days. This timeframe relates solely to the activation and connection of the bot and does not involve your broker. You will be personally notified via a legitimate support ticket once your account has been successfully connected."
            },
            {
                q: "I’ve submitted everything — when will I be confirmed?",
                a: <div className="flex flex-col gap-2">
                    <p>Please allow up to 1–2 business days for the team to review your submission and complete the bot connection. If any information is missing, the team will contact you via your support ticket within our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a>.</p>
                </div>
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
                a: <div className="flex flex-col gap-2">
                    <p>Syncro works with the following supported brokers: Vantage, VT Markets, Axi Trader, Bullwaves, PU Prime, StarTrader, and KudoTrade. Trading accounts must be opened using the official affiliate links provided in our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a> during onboarding.</p>
                </div>
            },
            {
                q: "What happens if I open a trading account with a supported broker without using the official affiliate link?",
                a: <div className="flex flex-col gap-2">
                    <p>If a broker account is created without using the correct affiliate link, the system will not work. This means the account cannot be linked, bot access cannot be enabled, and support cannot activate the system. Accounts opened outside the official link inside our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a> cannot be fixed or transferred.</p>
                </div>
            },
            {
                q: "I already have a trading account with one of the supported brokers — can I use it?",
                a: <div className="flex flex-col gap-2">
                    <p>No. A new trading account must be created using the official affiliate links provided in our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a>, or alternatively a different supported broker must be used via the official affiliate links. Existing accounts cannot be connected.</p>
                </div>
            },
            {
                q: "What leverage do I need?",
                a: <div className="flex flex-col gap-2">
                    <p>Required leverage: 1:300–1:500. Lower leverage levels, including 1:30, are not sufficient for the bot to operate correctly, as it may open multiple positions. Within our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a>, we provide clear guidelines on which supported broker to open an account with based on your location to ensure the required leverage is available.</p>
                </div>
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
                a: "The bot is specifically designed and optimised to trade XAUUSD (Gold). Trading other instruments is not supported unless officially confirmed."
            },
            {
                q: "How often does the bot trade?",
                a: "On average, the bot executes 2–4 trades per week, typically between Monday and Thursday. Some weeks may see fewer trades — including as little as one trade or no trades at all — while other weeks may see more, depending on market conditions. Trade frequency is entirely market-condition dependent, with capital protection as the first priority and account growth as the second. Fridays are avoided to maintain a safer trading environment."
            },
            {
                q: "How long do trades usually last?",
                a: "Trades are typically short and usually last only a few minutes. This approach helps reduce risk by limiting exposure to sudden market movements and unnecessary volatility."
            }
        ]
    },
    {
        id: 'risk',
        title: 'Risk Settings',
        icon: <AlertTriangle className="w-5 h-5" />,
        questions: [
            {
                q: "How should I think about the level of risk the bot takes with my capital?",
                a: <div className="flex flex-col gap-3">
                    <p>Think of it like choosing how much risk you're comfortable with when investing in a fund. Some investors prefer a lower-risk approach with steadier returns, while others are comfortable taking on more risk in exchange for higher potential returns. The bot works in a similar way — you choose the level of risk that suits you, and the bot trades within those limits.</p>
                    <p>Instructions on how to adjust your risk settings are provided within our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord community</a>; however, we strongly recommend keeping the default settings, as all past independently verified performance is based on the built-in risk configuration.</p>
                </div>
            },
            {
                q: "What risk level does the bot use by default?",
                a: <div className="flex flex-col gap-3">
                    <p>The bot operates at a 30% risk setting by default. This does not mean 30% of your account is risked on a single trade. Instead, it is a relative risk setting that controls position sizing and overall exposure within the bot's built-in risk management framework.</p>
                    <p>This default setting has been used consistently for 18+ months of live, independently verified performance, as shown on our official <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Myfxbook</a> tracking link. Over this period, the bot has delivered positive account growth every month, while maintaining a clear focus on capital protection first and account growth second.</p>
                </div>
            },
            {
                q: "Does the bot risk 30% on every trade?",
                a: "No. The 30% figure is not a per-trade risk. It represents the maximum overall risk framework (equity stop) the bot is allowed to operate within. If this limit is ever reached, trading automatically stops, protecting the account from further losses."
            },
            {
                q: "Can I change the risk level?",
                a: <div className="flex flex-col gap-3">
                    <p>Yes. As explained above, the risk level controls how actively the bot trades within its overall risk framework. You can adjust this setting if you wish — lowering the risk may reduce drawdowns but can also reduce potential returns, while increasing the risk may increase potential returns but also increases exposure and drawdown.</p>
                    <p>That said, we strongly recommend keeping the default risk setting, as all live, independently verified performance has been achieved using the built-in configuration.</p>
                </div>
            },
            {
                q: "How do I change the risk if I choose to?",
                a: <div className="flex flex-col gap-2">
                    <p>A step-by-step video tutorial is available inside our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a> showing exactly how to adjust your risk settings. Please watch the video carefully in full before making any changes.</p>
                </div>
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
                a: <div className="flex flex-col gap-3">
                    <p>You can view your performance directly through your MT5 app, where you can monitor your balance, equity, open and closed trades in real time.</p>
                    <p>In addition, performance can be tracked through our public <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">Myfxbook</a> tracking link, which provides transparent visibility of historical returns, drawdowns, trade frequency, and typical trading times. Together, these tools allow you to monitor both short-term activity and long-term performance.</p>
                </div>
            }
        ]
    },
    {
        id: 'additional',
        title: 'Additional Accounts',
        icon: <Users className="w-5 h-5" />,
        questions: [
            {
                q: "Can I add personal accounts after my account with one of your supported brokers is activated?",
                a: <div className="flex flex-col gap-3">
                    <p>Yes. You may add personal accounts using MetaCopier or any other external trade copier.</p>
                    <p>Please note that our team does not provide support for setting up or managing external copiers. For assistance, you must contact the relevant platform’s official support team via their live chat or support system.</p>
                </div>
            }
        ]
    },
    {
        id: 'rewards',
        title: 'Affiliate Reward Program',
        icon: <Zap className="w-5 h-5" />,
        questions: [
            {
                q: "How does the Affiliate Reward Programme work?",
                a: <div className="flex flex-col gap-3">
                    <p>The Affiliate Reward Programme is Level 1 only — this is not a multi-level marketing scheme.</p>
                    <p>For every person you personally refer to the Syncro system, you receive 20% of Syncro’s performance fee generated from that specific client’s account, only when the account is in profit.</p>
                    <p>To be clear, this is not 20% of the referred client’s trading profits. It is 20% of the performance fee charged by Syncro.</p>
                    <p>This programme is simply a thank you for introducing others to the Syncro ecosystem and provides an opportunity to earn a secondary passive income stream alongside your own trading results.</p>
                </div>
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
                a: <div className="flex flex-col gap-3">
                    <p>No. Syncro will never send unsolicited direct messages. All official communication is handled exclusively through legitimate support tickets inside our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a>.</p>
                    <p>We do not communicate via direct messages in order to protect our community from impersonation attempts and scams. If you require support or need to contact the team, this must always be done through the support ticket system in our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a>.</p>
                </div>
            },
            {
                q: "How do I get help if I need it?",
                a: <div className="flex flex-col gap-2">
                    <p>Open a support ticket in the dedicated support channel within our <a href="#" onClick={(e) => e.preventDefault()} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Discord server</a>. A team member will assist you privately, securely, and professionally through the ticket system.</p>
                </div>
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

                <SectionCTA nextSectionId="fees" label="Service Fees" />
            </div>
        </section>
    );
}
