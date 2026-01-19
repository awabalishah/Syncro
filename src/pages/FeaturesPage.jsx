import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Target,
    TrendingUp,
    ShieldAlert,
    ShieldCheck,
    Eye,
    Clock,
    CloudRain,
    CheckCircle2,
    AlertTriangle
} from 'lucide-react';
import myfxbookLogo from '../assets/myfxbook-logo.png';

export function FeaturesPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const generalFeatures = [
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Smart Automation, Rule-Based Execution",
            description: "The system operates automatically based on predefined market conditions and structured rules. Rather than trading continuously, activity occurs only when specific criteria are met."
        },
        {
            icon: <Target className="w-8 h-8 text-indigo-600" />,
            title: "Trades Only When Conditions Are Met",
            description: "The system does not trade every day. Some periods are more active than others by design. Trades are generated only when predefined conditions align."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
            title: "System Behaviour Adapts to Market Conditions",
            description: "Activity levels may vary over time depending on market conditions. Periods of higher or lower activity are expected, reflecting how the system responds to different market environments."
        },
        {
            icon: <ShieldAlert className="w-8 h-8 text-orange-600" />,
            title: "Controlled Balance Utilisation",
            description: "The strategy allocates only a portion of available account equity at any given time, based on predefined parameters."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
            title: "System Operating Constraints",
            description: "The strategy operates within a set of predefined constraints that govern how trades are executed and how exposure is limited.",
            list: [
                "No aggressive leverage",
                "No martingale behaviour",
                "Account-level constraints applied",
                "Funds remain accessible via your broker at all times"
            ]
        },
        {
            icon: <Eye className="w-8 h-8 text-cyan-600" />,
            title: "Real-Time Transparency",
            description: <div className="flex flex-col gap-2">
                <p>All trade activity is visible directly within your own MT5 account.</p>
                <p>Independently tracked data is available via a live Myfxbook link that updates automatically.</p>
                <a href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753" target="_blank" rel="noopener noreferrer" className="self-start mt-2">
                    <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity" />
                </a>
            </div>
        },
        {
            icon: <Clock className="w-8 h-8 text-purple-600" />,
            title: "Automated Execution, Minimal Interaction",
            description: "Once connected, the system executes trades automatically based on predefined rules. Ongoing activity runs in the background, with users able to monitor performance and account activity at their discretion."
        }
    ];

    const inactiveReasons = [
        {
            icon: <CloudRain className="w-8 h-8 text-slate-600" />,
            title: "Market Conditions Not Suitable",
            description: "During periods of heightened volatility or unclear market structure, the system may remain inactive rather than force participation."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
            title: "Entry Conditions Not Fully Met",
            description: "Even when markets appear active, trades are only generated once all system checks align. Activity does not occur unless predefined criteria are satisfied."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
            title: "Market Events & Uncertainty",
            description: "During major news events or periods of increased uncertainty, trading activity may pause in response to changing market conditions."
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                        Powerful <span className="text-blue-600">Features</span> Built for <span className="text-blue-600">Structured Trading Automation</span>
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
                        The features below outline the core components and operating logic of the automated trading system available through Syncro.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {generalFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group bg-slate-900 p-10 rounded-[2.5rem] border border-slate-700 hover:bg-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border-beam"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 shadow-sm border border-slate-700 group-hover:scale-105 transition-all duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-slate-300 leading-relaxed text-base mb-6">
                                {feature.description}
                            </p>

                            {feature.list && (
                                <ul className="space-y-3 mt-auto pt-6 border-t border-slate-700">
                                    {feature.list.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="bg-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-slate-200 shadow-xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -mr-48 -mt-48" />

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Designed to Be <span className="text-blue-600">Selective, Not Constant</span></h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-xl">
                                The system does not aim to trade continuously across all market conditions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {inactiveReasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 border-beam"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">{reason.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center mt-16">
                            <motion.a
                                href="#" onClick={(e) => e.preventDefault()}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-700 transition-all duration-300 border-beam inline-flex items-center gap-3"
                            >
                                Request Access
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
