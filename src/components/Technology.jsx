import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Lock, Settings, BarChart, Clock, AlertTriangle } from 'lucide-react';

export function Technology() {
    const features = [
        { icon: <Zap />, text: "Specialised XAUUSD (Gold) Strategy" },
        { icon: <Clock />, text: "Trades 2-4 Times Per Week" },
        { icon: <AlertTriangle />, text: "Avoids Trading on Fridays (Risk Control)" },
        { icon: <Settings />, text: "Fixed Lot Trading" },
        { icon: <BarChart />, text: "Minimal Market Exposure" },
        { icon: <Clock />, text: "Short Average Trade Duration (Avg 5 mins)" },
        { icon: <Cpu />, text: "13 Smart Indicators & AI Optimisation" },
        { icon: <Shield />, text: "7 Integrated Protection Systems" },
        { icon: <Lock />, text: "30% Maximum Equity Protection" }
    ];

    return (
        <section id="technology" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Inside the Technology</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Built for consistency, safety, and long-term performance.
                        Our automated system uses advanced algorithms to protect and grow your capital.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                        >
                            <div className="text-blue-600 mt-1">
                                {item.icon}
                            </div>
                            <p className="font-semibold text-slate-700">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
