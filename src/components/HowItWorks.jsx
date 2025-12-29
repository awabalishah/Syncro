import React from 'react';
import { motion } from 'framer-motion';
import {
    Wallet,
    Link2,
    Bot,
    Activity,
    BarChart3,
    ArrowRight,
    MessageSquare,
    ExternalLink
} from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Set Up Your Broker Account",
            desc: "You open and fund your own broker account using our simple setup guides, available through a dedicated link inside the Syncro Discord community. Your money stays fully under your control at all times, and you can withdraw whenever you want.",
            icon: <Wallet className="w-8 h-8 text-blue-600" />,
            span: "md:col-span-2",
            color: "bg-blue-50"
        },
        {
            num: "02",
            title: "Connect to Platform",
            desc: "You log in to MetaTrader 5 using broker details. No technical setup needed.",
            icon: <Link2 className="w-8 h-8 text-indigo-600" />,
            span: "md:col-span-1",
            color: "bg-indigo-50"
        },
        {
            num: "03",
            title: "Connect Through Syncro",
            desc: "Follow a straightforward connection process to link your account to the bot. Support is available in our Discord.",
            icon: <Bot className="w-8 h-8 text-purple-600" />,
            span: "md:col-span-1",
            color: "bg-purple-50"
        },
        {
            num: "04",
            title: "Automated Trading",
            desc: "Once connected, trades execute automatically based on predefined rules and built-in risk controls. No manual management required.",
            icon: <Activity className="w-8 h-8 text-emerald-600" />,
            span: "md:col-span-1",
            color: "bg-emerald-50"
        },
        {
            num: "05",
            title: "Monitor Anytime",
            desc: "Check performance anytime through MT5 or our live, independently verified link. Everything is transparent and real-time.",
            icon: <BarChart3 className="w-8 h-8 text-cyan-600" />,
            span: "md:col-span-1",
            color: "bg-cyan-50",
            link: "https://www.myfxbook.com/members/syncro_automation" // Placeholder
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">How Syncro <span className="text-blue-600">Works</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                        A seamless, automated journey to smarter wealth management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className={`${step.span} ${step.color} p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col relative group overflow-hidden`}
                        >
                            {/* Number Background Decoration */}
                            <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-900/[0.02] select-none pointer-events-none group-hover:text-blue-600/[0.03] transition-colors">
                                {step.num}
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm relative z-10 transition-transform group-hover:scale-110">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 relative z-10 text-sm">
                                {step.desc}
                            </p>

                            {(index === 0 || index === 2) && (
                                <div className="mt-auto relative z-10">
                                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-100/50 w-fit px-3 py-1.5 rounded-full">
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        Discord Support Included
                                    </div>
                                </div>
                            )}

                            {step.link && (
                                <a
                                    href={step.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 text-blue-600 font-bold hover:underline relative z-10 transition-all group-hover:translate-x-1"
                                >
                                    View Live Performance
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
