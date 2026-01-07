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
            desc: "The system is exclusively designed to trade XAUUSD (spot gold), and the strategy is tailored specifically for this market."
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Fixed scalping strategy",
            desc: "The linked system uses a predefined scalping strategy focused on short-duration trades."
        },
        {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Short market exposure",
            desc: "Trades typically last minutes, reducing prolonged exposure to market volatility."
        },
        {
            icon: <Target className="w-5 h-5" />,
            title: "AI-optimised entry logic",
            desc: "Entry conditions are optimised using AI processes combined with multiple technical indicators."
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Multi-indicator confirmation",
            desc: "Trades require alignment across 13 custom indicators before execution."
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "Built-in protection mechanisms",
            desc: "Seven independent safeguards are used to manage downside risk."
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            title: "Controlled trading schedule",
            desc: "Trades run Monday to Thursday only; Fridays are excluded to avoid unstable conditions."
        },
        {
            icon: <ShieldAlert className="w-5 h-5" />,
            title: "Equity drawdown protection",
            desc: "A 30% equity stop is in place to limit drawdown exposure."
        },
        {
            icon: <Settings className="w-5 h-5" />,
            title: "Fixed position sizing",
            desc: "The system uses fixed lot sizes for predictable risk exposure."
        },
        {
            icon: <Activity className="w-5 h-5" />,
            title: "Automated hedging logic",
            desc: "Hedge orders may be added automatically using a grid-based mechanism when conditions align."
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Selective trade frequency",
            desc: "On average, the system places 2–4 trades per week."
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
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-blue-500/50 hover:bg-white/[0.08] transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner border border-blue-500/20">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-white mb-3 text-lg leading-tight">{item.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-20">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.myfxbook.com/members/syncro_automation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-600/30 group"
                    >
                        View Verified Performance on <img src={myfxbookLogo} alt="Myfxbook" className="h-6 w-auto brightness-0 invert" />
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                </div>

                <SectionCTA nextSectionId="features" label="Key Features" />
            </div>
        </section>
    );
}



