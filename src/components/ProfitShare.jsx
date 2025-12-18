import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, ShieldCheck } from 'lucide-react';

export function ProfitShare() {
    return (
        <section id="fees" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 blur-[120px] rounded-full -z-1" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Fees & transparency</h2>
                        <h3 className="text-xl text-blue-600 font-bold mb-8">Clear. Fair. Performance Based</h3>

                        <ul className="space-y-4 mb-8">
                            {[
                                "No subscriptions",
                                "No charges on your initial deposit",
                                "Fees are only charged when new profits are made",
                                "If there are no new profits in a month, there is no fee"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="text-slate-900 font-medium text-lg mb-8">
                            If your account doesn’t grow in a given month, you pay nothing.
                        </p>

                        <div className="mb-8">
                            <h4 className="text-lg font-bold text-slate-900 mb-2">How Performance Fees Are Calculated</h4>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Fees are worked out monthly and apply only to the profit made during that month.
                                Once a fee has been applied, those profits are never charged again.
                            </p>
                        </div>

                        <a href="#referral" className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full font-bold transition-all">
                            View referral rewards
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-200"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">Monthly Performance Fee Tiers</h3>
                        <div className="space-y-4">
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                                <span className="text-slate-600 font-medium">Profits 0% to 6%</span>
                                <span className="text-xl font-bold text-blue-600">20% Fee</span>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                                <span className="text-slate-600 font-medium">Profits 6% to 10%</span>
                                <span className="text-xl font-bold text-blue-600">25% Fee</span>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                                <span className="text-slate-600 font-medium">Profits 10% or more</span>
                                <span className="text-xl font-bold text-blue-600">30% Fee</span>
                            </div>
                        </div>
                        <p className="mt-8 text-slate-500 text-sm text-center">
                            There are no fees outside of these profit levels. When your account grows, we grow with you.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
