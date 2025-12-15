import React from 'react';
import { motion } from 'framer-motion';

export function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Deposit Funds",
            desc: "Deposit a minimum of £800 into your own Trading Broker Account. You control your own funds at all times."
        },
        {
            num: "02",
            title: "Activate Bot",
            desc: "Activate the automated trading bot through guided setup. Full instructions and support are provided."
        },
        {
            num: "03",
            title: "Earn & Grow",
            desc: "Earn money from automatic hands-off trading. Your account grows monthly AND you can build a passive referral income."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-100/50 px-3 py-1 rounded">Process</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">How it Works</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200 to-blue-200/0 -z-1" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative bg-slate-50 pt-4"
                        >
                            <div className="text-6xl font-black text-slate-200/80 mb-6 select-none">
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
