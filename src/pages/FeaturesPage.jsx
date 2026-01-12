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
            title: "Smart Automation, Built for Consistency",
            description: "Syncro uses an automated system that only operates when market conditions meet strict rules. Instead of trading constantly, it waits for the right moments to act helping focus on steady, long-term growth rather than short-term activity."
        },
        {
            icon: <Target className="w-8 h-8 text-indigo-600" />,
            title: "Trades Only When Conditions Are Right",
            description: "The bot does not trade every day. Some days are active, others are quiet. This is intentional. Trades are only placed when conditions align, helping reduce unnecessary risk during uncertain markets."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
            title: "Results Vary With Market Conditions",
            description: "Some periods may feel more active, while others may feel very quiet. This is normal. The bot adjusts how it operates based on market conditions to help protect accounts during uncertain or unstable phases. The focus isn't constant activity — it's steady, disciplined performance over time."
        },
        {
            icon: <ShieldAlert className="w-8 h-8 text-orange-600" />,
            title: "Careful Use of Your Balance",
            description: "The system only uses a portion of your available balance at any one time. This helps manage risk carefully and allows positions to adjust smoothly as markets move."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
            title: "Built-In Risk Controls",
            description: "The bot is designed with safety and consistency in mind, not high-risk trading.",
            list: [
                "No aggressive leverage",
                "No martingale behaviour",
                "Risk limits applied at account level",
                "Withdraw your funds at any time"
            ]
        },
        {
            icon: <Eye className="w-8 h-8 text-cyan-600" />,
            title: "Real-Time Transparency",
            description: <div className="flex flex-col gap-2">
                <p>You can see every trade directly inside your own MT5 trading account as shown in our client results section. Performance is tracked through our live, independently verified tracking link on:</p>
                <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto self-start grayscale opacity-70" />
                <p>that updates in real time.</p>
            </div>
        },
        {
            icon: <Clock className="w-8 h-8 text-purple-600" />,
            title: "Fully Automated, No Daily Effort",
            description: "Once connected to the Syncro the bot runs automatically in the background. There's no need to manage trades or make adjustments — you can simply check in whenever you like."
        }
    ];

    const inactiveReasons = [
        {
            icon: <CloudRain className="w-8 h-8 text-slate-600" />,
            title: "Market Conditions Not Suitable",
            description: "If markets are too volatile or unclear, the bot stays on the sidelines. The first priority is protecting your balance — growth comes second."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
            title: "Entry Conditions Not Fully Met",
            description: "Even if markets appear active, the bot will only trade when all system checks align. There is no guessing or rushing."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
            title: "Market Events & Uncertainty",
            description: "During major news events or uncertain periods, the bot may pause trading to help protect your account balance."
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
                        Powerful <span className="text-blue-600">Features</span> for People Focused on <span className="text-blue-600">Growing Wealth</span>
                    </h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
                        Syncro is engineered to seamlessly connect users to an automated trading system that operates with advanced algorithms and strict risk management.
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">The <span className="text-blue-600">Bot</span> only Trades when <span className="text-blue-600">Conditions are Right!</span></h2>
                            <p className="text-slate-600 max-w-2xl mx-auto text-xl">
                                Here's why the system might stay on the sidelines.
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
