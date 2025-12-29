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

export function Technology() {
    const row1 = [
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
        }
    ];

    const row2 = [
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
        }
    ];

    const row3 = [
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

    const MarqueeRow = ({ items, direction = 1 }) => (
        <div className="flex overflow-hidden py-4 select-none">
            <motion.div
                className="flex gap-6 whitespace-nowrap min-w-full"
                animate={{ x: direction > 0 ? [0, -1920] : [-1920, 0] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-[400px] p-8 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 hover:border-blue-500/30 transition-all group"
                    >
                        <div className="flex items-start gap-4 h-full">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner border border-blue-100/50">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                                <p className="text-sm text-slate-600 whitespace-normal leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section id="technology" className="py-32 bg-slate-50 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight tracking-tight">
                        Technology <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Linked Through Syncro</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">
                        Built for consistency, safety and long term performance
                    </p>
                </div>
            </div>

            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] space-y-4 mb-20">
                <MarqueeRow items={row1} direction={1} />
                <MarqueeRow items={row2} direction={-1} />
                <MarqueeRow items={row3} direction={1} />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.myfxbook.com/members/syncro_automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-600/30 group"
                >
                    View Verified Performance
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
            </div>
        </section>
    );
}
