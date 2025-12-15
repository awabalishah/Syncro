import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck } from 'lucide-react';

export function ProfitShare() {
    return (
        <section id="profit-share" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 blur-[120px] rounded-full -z-1" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">The Profit Share Explained</h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 h-fit">
                                    <PieChart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Performance-Based Fee</h3>
                                    <p className="text-slate-600">
                                        You only pay when the automated trading engine makes you profit.
                                        No profit = No fee.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-indigo-100 p-2 rounded-lg text-indigo-600 h-fit">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Fair & Transparent</h3>
                                    <p className="text-slate-600">
                                        Smaller profit months → Lower performance fee.<br />
                                        Bigger profit months → Higher performance fee.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600 h-fit">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Safety First</h3>
                                    <p className="text-slate-600">
                                        Fees never touch your deposit — only new profit.
                                        You always keep the majority (70–80%) of your profits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/50"
                    >
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900">Monthly Performance</h3>
                            <div className="w-full h-4 bg-slate-100 rounded-full mb-8 overflow-hidden flex">
                                <div className="w-[80%] h-full bg-blue-600" />
                                <div className="w-[20%] h-full bg-slate-300" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <p className="text-blue-600 text-sm mb-1 font-semibold">Your Share</p>
                                    <p className="text-3xl font-bold text-slate-900">80%</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <p className="text-slate-500 text-sm mb-1 font-semibold">Syncro Fee</p>
                                    <p className="text-3xl font-bold text-slate-400">20%</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
