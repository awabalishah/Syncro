import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, ArrowRight } from 'lucide-react';

export function Referral() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-6">
                        <Gift className="w-6 h-6" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Optional Referral Rewards</h2>
                    <p className="text-xl text-slate-600 mb-12">
                        Earn from introducing people to the system. Completely optional.
                        Receive 20% of Syncro’s performance fee for each client you onboard.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
                            <h3 className="font-bold text-slate-900 mb-2">Passive Income</h3>
                            <p className="text-slate-600 text-sm">Payments based on real monthly profits, not deposits.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
                            <h3 className="font-bold text-slate-900 mb-2">No Management</h3>
                            <p className="text-slate-600 text-sm">Fully automated. No MLM complexity.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50">
                            <h3 className="font-bold text-slate-900 mb-2">Grow Together</h3>
                            <p className="text-slate-600 text-sm">Your personal trading account grows automatically alongside.</p>
                        </div>
                    </div>

                    <a
                        href="https://form.typeform.com/to/d75elwPl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all transform hover:-translate-y-1"
                    >
                        Ready to Sign Up?
                        <ArrowRight className="w-5 h-5" />
                    </a>

                    <p className="mt-8 text-sm text-slate-500">
                        Before beginning the onboarding process, please review our <a href="#" className="underline hover:text-blue-600">Client Agreement</a>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
