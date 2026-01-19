import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    BarChart3,
    ShieldCheck,
    Lock,
    Clock,
    Target,
    ShieldAlert,
    Settings,
    Activity,
    Coins,
    Calendar,
    ExternalLink
} from 'lucide-react';
import { SectionCTA } from './SectionCTA';
import { BackgroundIcons } from './BackgroundIcons';
import myfxbookLogo from '../assets/myfxbook-logo.png';

export function Technology() {
    const techItems = [
        {
            icon: <Coins className="w-5 h-5" />,
            title: "XAUUSD (spot gold)",
            desc: "The linked strategy focuses exclusively on XAUUSD (spot gold) and is configured specifically for this market."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Fixed scalping strategy",
            desc: "The linked strategy follows a predefined scalping approach focused on short-duration trades."
        },
        {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Short market exposure",
            desc: "Trades typically last minutes, limiting prolonged exposure to market conditions."
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "AI-optimised entry logic",
            desc: "Entry conditions are generated using rule-based logic supported by machine-learning analysis and multiple technical inputs."
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Multi-indicator confirmation",
            desc: "Trade signals are generated only when multiple technical indicators align"
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "Built-in protection mechanisms",
            desc: "The strategy incorporates multiple predefined safeguards designed to limit exposure."
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            title: "Controlled trading schedule",
            desc: "The strategy is configured to operate Monday to Thursday, with Fridays excluded due to market conditions. Trading does not occur on weekends when markets are closed."
        },
        {
            icon: <ShieldAlert className="w-5 h-5" />,
            title: "Equity drawdown protection",
            desc: "The strategy includes a predefined equity threshold set at 30%, after which further trading activity is automatically restricted."
        },
        {
            icon: <Settings className="w-5 h-5" />,
            title: "Fixed position sizing",
            desc: "The strategy applies fixed position sizes as part of its predefined configuration."
        },
        {
            icon: <Activity className="w-5 h-5" />,
            title: "Automated hedging logic",
            desc: "Hedge orders may be generated automatically using predefined grid logic when specific conditions are met."
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Selective trade frequency",
            desc: "Based on historical data, the strategy typically executes 2–4 trades per week."
        }
    ];

    return (
        <section id="technology" className="py-32 bg-slate-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <BackgroundIcons />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight tracking-tight">
                        Technology <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Linked Through Syncro</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium">
                        Built for consistency, safety and long term performance
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                    {techItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col h-full border-beam"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner border border-blue-500/20">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-white mb-3 text-lg leading-tight">{item.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>



                <SectionCTA nextSectionId="features" label="Key Features" />
            </div>
        </section>
    );
}



