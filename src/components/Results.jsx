import React from 'react';
import { motion } from 'framer-motion';

export function Results() {
    const results = [1, 2, 3];

    return (
        <section id="results" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Real Client Results</h2>
                        <p className="text-slate-600 text-lg">
                            These screenshots represent real MT5 accounts running the same automation engine.
                            Past performance does not guarantee future results.
                        </p>
                    </div>
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors">
                        View Verified MyFXBook
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-[3/4] rounded-2xl bg-white border border-slate-200 relative group overflow-hidden shadow-xl shadow-slate-200/50"
                        >
                            {/* Placeholder Content for Results */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                Review Screenshot {item}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-60" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="h-2 w-full bg-slate-200 rounded-full mb-3" />
                                <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
