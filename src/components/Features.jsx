import React from 'react';
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

export function Features() {
    const generalFeatures = [
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Smart Automation, Built for Consistency",
            description: "Syncro uses an automated system that only operates when market conditions meet strict rules. Instead of trading constantly, it waits for the right moments to act helping focus on steady, long-term growth rather than short-term activity."
        },
        {
            icon: <Target className="w-8 h-8 text-indigo-600" />,
            title: "Trades Only When Conditions Are Right",
            description: "Syncro does not trade every day. Some days are active, others are quiet. This is intentional. Trades are only placed when conditions align, helping reduce unnecessary risk during uncertain markets."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
            title: "Results Vary With Market Conditions",
            description: "Some periods may feel more active, while others may feel very quiet. This is normal. Syncro adjusts how it operates based on market conditions to help protect accounts during uncertain or unstable phases. The focus isn’t constant activity — it’s steady, disciplined performance over time."
        },
        {
            icon: <ShieldAlert className="w-8 h-8 text-orange-600" />,
            title: "Careful Use of Your Balance",
            description: "The system only uses a portion of your available balance at any one time. This helps manage risk carefully and allows positions to adjust smoothly as markets move."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
            title: "Built-In Risk Controls",
            description: "Syncro is designed with safety and consistency in mind, not high-risk trading.",
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
            description: "You can see every trade directly inside your own MT5 trading account as shown in our client results section. Performance is tracked through our live, independently verified Myfxbook link that updates in real time."
        },
        {
            icon: <Clock className="w-8 h-8 text-purple-600" />,
            title: "Fully Automated, No Daily Effort",
            description: "Once connected, Syncro runs automatically in the background. There’s no need to manage trades or make adjustments — you can simply check in whenever you like."
        }
    ];

    const inactiveReasons = [
        {
            icon: <CloudRain className="w-8 h-8 text-slate-600" />,
            title: "Market Conditions Not Suitable",
            description: "If markets are too volatile or unclear, Syncro stays on the sidelines. The first priority is protecting your balance — growth comes second."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
            title: "Entry Conditions Not Fully Met",
            description: "Even if markets appear active, Syncro will only trade when all system checks align. There is no guessing or rushing."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
            title: "Market Events & Uncertainty",
            description: "During major news events or uncertain periods, Syncro may pause trading to help protect your account balance."
        }
    ];

    return (
        <section id="features" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Syncro <span className="text-blue-600">Features</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                        Powerful automation engineered for professional results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {generalFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.3 }
                            }}
                            className="group bg-gradient-to-br from-white to-slate-50/30 p-10 rounded-[2.5rem] border border-slate-200/60 shadow-lg hover:shadow-2xl hover:border-blue-200/60 flex flex-col relative overflow-hidden transition-all duration-500"
                        >
                            {/* Gradient Accent */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl group-hover:from-blue-500/10 transition-all duration-500" />

                            <div className="relative z-10">
                                {/* Icon with gradient background */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center mb-6 shadow-sm border border-blue-100/50 group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                                    <div className="scale-110">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-base mb-6">
                                    {feature.description}
                                </p>

                                {feature.list && (
                                    <ul className="space-y-3 mt-auto pt-6 border-t border-slate-200/60">
                                        {feature.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Syncro Doesn’t Trade Every Day Section */}
                <div className="mt-32 pt-24 border-t border-slate-100">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Why Syncro <span className="text-blue-600">Doesn’t Trade Every Day</span></h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                            Syncro only trades when conditions are right. Below are common reasons why it may remain inactive at times.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {inactiveReasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-lg flex flex-col items-center text-center group transition-colors hover:bg-white hover:border-blue-200"
                            >
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-500 font-medium italic">
                            The focus isn’t constant activity — it’s steady, disciplined performance over time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
