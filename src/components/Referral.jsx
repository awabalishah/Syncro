import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, ArrowRight } from 'lucide-react';

export function Referral() {
    return (
        <section id="referral" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <Gift className="w-6 h-6" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                        A simple thank-you for <br /> genuine introductions
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                        Syncro offers an optional referral reward for clients who introduce others to the service.
                        This is a single-level referral structure — it is not multi-level marketing.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mt-12 mb-16">
                        <div>
                            <h3 className="font-bold text-slate-900 mb-4 text-xl">How Referral Rewards Work</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                    <span>You receive a personal referral link</span>
                                </li>
                                <li className="flex gap-3 items-start text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                    <span>When someone you introduce becomes an active client, you earn 20% of the performance fees charged by Syncro on that client’s account, each time new monthly profits are generated.</span>
                                </li>
                                <li className="flex gap-3 items-start text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                    <span>Rewards are based on actual performance fees paid — not sign-ups alone</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-slate-500 italic">
                                There is no obligation to refer anyone to use Syncro. Referral rewards provide an optional way to earn alongside your own account activity.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900 mb-4 text-xl">Simple, One-Level Structure</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                    <span>Referral rewards apply only to people you directly introduce</span>
                                </li>
                                <li className="flex gap-3 items-start text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                    <span>There are no levels beyond this</span>
                                </li>
                                <li className="flex gap-3 items-start text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                    <span>You do not earn from people your referrals introduce</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-slate-500 italic">
                                This keeps the structure simple, transparent, and sustainable.
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://form.typeform.com/to/d75elwPl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all transform hover:-translate-y-1"
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
