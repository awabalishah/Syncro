import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Lock, Settings, BarChart, Clock, AlertTriangle } from 'lucide-react';

export function Technology() {
    const features = [
        { icon: <Zap />, title: "Fixed scalping strategy", desc: "The linked system uses a predefined scalping strategy focused on short-duration trades." },
        { icon: <BarChart />, title: "Short market exposure", desc: "Trades typically last minutes, reducing prolonged exposure to market volatility." },
        { icon: <Clock />, title: "Time-based trading windows", desc: "Trading only occurs during specific sessions based on historical market behaviour." },
        { icon: <Cpu />, title: "AI-optimised entry logic", desc: "Entry conditions are optimised using AI processes combined with multiple technical indicators." },
        { icon: <Shield />, title: "Multi-indicator confirmation", desc: "Trades require alignment across 13 custom indicators before execution." },
        { icon: <Lock />, title: "Built-in protection mechanisms", desc: "Seven independent safeguards are used to manage downside risk." },
        { icon: <AlertTriangle />, title: "Equity drawdown protection", desc: "A 30% equity stop is in place to limit drawdown exposure" },
        { icon: <Settings />, title: "Fixed position sizing", desc: "The system uses fixed lot sizes for predictable risk exposure." },
        { icon: <Zap />, title: "Automated hedging logic", desc: "Hedge orders may be added automatically using a grid-based mechanism when conditions align." },
        { icon: <Clock />, title: "Selective trade frequency", desc: "On average, the system places 2–4 trades per week." },
        { icon: <AlertTriangle />, title: "Controlled trading schedule", desc: "Trades run Monday to Thursday only; Fridays are excluded to avoid unstable conditions." }
    ];

    return (
        <section id="technology" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Technology <span class="text-blue-600">Linked Through Syncro</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Built for consistency, safety and long term performance
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                        >
                            <div className="text-blue-600 mt-1 flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <a href="#performance" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-xl shadow-blue-600/20">
                        View verified performance
                    </a>
                </div>
            </div>
        </section>
    );
}
