import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, ShieldCheck, CheckCircle2, ExternalLink, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionCTA } from './SectionCTA';
import myfxbookLogo from '../assets/myfxbook-logo.png';

const MONTHLY_DATA = [
    { name: 'Jan', return: 5.15 },
    { name: 'Feb', return: 6.68 },
    { name: 'Mar', return: 11.52 },
    { name: 'Apr', return: 5.90 },
    { name: 'May', return: 10.40 },
    { name: 'Jun', return: 5.27 },
    { name: 'Jul', return: 8.85 },
    { name: 'Aug', return: 6.83 },
    { name: 'Sep', return: 10.57 },
    { name: 'Oct', return: 12.08 },
    { name: 'Nov', return: 6.57 },
    { name: 'Dec', return: 2.76 },
];

export function GrowthCalculator() {
    const [initialInvestment, setInitialInvestment] = useState(1000);

    const { chartData, finalBalance, totalProfit } = useMemo(() => {
        let currentBalance = initialInvestment;
        const data = MONTHLY_DATA.map(month => {
            const profit = currentBalance * (month.return / 100);
            currentBalance += profit;
            return {
                ...month,
                balance: Math.round(currentBalance),
                profit: Math.round(profit)
            };
        });

        return {
            chartData: data,
            finalBalance: Math.round(currentBalance),
            totalProfit: Math.round(currentBalance - initialInvestment)
        };
    }, [initialInvestment]);

    return (
        <section id="performance" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Live Performance Tracking
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        See How Your Capital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Could Grow</span>
                    </h2>

                    <p className="text-lg text-slate-600">
                        The AI-driven trading bot operates within a strict, rules-based strategy designed to ensure consistency, discipline, and controlled risk. Explore how a starting capital could have compounded over the last 12 months using our 2025 verified results.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left Side: Syncro Verified Results Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl shadow-blue-900/20 p-8 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">Live Results</span>
                                </div>
                                <ExternalLink className="w-5 h-5 text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="mb-10">
                                <h3 className="text-3xl font-black text-white mb-3">Syncro Verified Results</h3>
                                <p className="text-slate-400 text-sm flex items-center gap-2 font-medium">
                                    Managed by Syncro AI • <span className="text-blue-400 flex items-center gap-2 font-bold">Verified by <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto" /></span>
                                </p>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <div>
                                        <p className="text-slate-300 text-xs uppercase font-bold tracking-widest mb-2">Total Gain</p>
                                        <p className="text-4xl font-bold text-orange-500">+88.55%</p>
                                    </div>
                                    <div className="w-24 h-12">
                                        <svg viewBox="0 0 100 40" className="w-full h-full text-orange-500" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M0 35 L20 30 L40 32 L60 15 L80 18 L100 5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-slate-300 text-xs uppercase font-bold tracking-widest mb-2">Monthly Gain</p>
                                        <p className="text-2xl font-bold text-emerald-400">7.82%</p>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <p className="text-slate-300 text-xs uppercase font-bold tracking-widest mb-2">Drawdown</p>
                                        <p className="text-2xl font-bold text-rose-400">4.12%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                                    </div>
                                    <span>Track Record Verified</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                                    </div>
                                    <span>Live Performance Tracking</span>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/40">
                                View Live Stats on <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto brightness-0 invert" />
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side: Calculator & Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Account Growth Example Card */}
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-10">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12">
                                <div className="max-w-md">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Account Growth Example</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        This example is based on verified 2025 performance data and is shown for illustrative purposes.
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 border border-blue-100 px-6 py-4 rounded-2xl text-left sm:text-right shrink-0">
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Initial Deposit</p>
                                    <p className="text-3xl font-bold text-blue-600">${initialInvestment.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="relative mb-16 pt-6">
                                <input
                                    type="range"
                                    min="500"
                                    max="50000"
                                    step="500"
                                    value={initialInvestment}
                                    onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                    <span>$500</span>
                                    <span>$10k</span>
                                    <span>$25k</span>
                                    <span>$50k</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100">
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">Total Profit</p>
                                    <p className="text-4xl font-bold text-slate-900">${totalProfit.toLocaleString()}</p>
                                    <p className="text-emerald-500 text-sm font-bold mt-2">+88.55% Return</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-emerald-50/30 border border-emerald-100">
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">Final Balance</p>
                                    <p className="text-4xl font-bold text-slate-900">${finalBalance.toLocaleString()}</p>
                                    <p className="text-slate-500 text-sm mt-2">After 12 Months</p>
                                </div>
                            </div>
                        </div>

                        {/* Performance Chart */}
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-10 h-[450px]">
                            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
                                <TrendingUp className="w-5 h-5 text-blue-500" />
                                Monthly Compounded Growth
                            </h4>
                            <div className="h-[280px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                                                <stop offset="100%" stopColor="#2563eb" stopOpacity={0.6} />
                                            </linearGradient>
                                            <linearGradient id="barGradientHigh" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
                                                <stop offset="100%" stopColor="#059669" stopOpacity={0.6} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 600 }}
                                            dy={15}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#cbd5e1', fontSize: 11, fontWeight: 600 }}
                                            tickFormatter={(value) => `$${value > 1000 ? (value / 1000).toFixed(1) + 'k' : value}`}
                                        />
                                        <Tooltip
                                            cursor={{ fill: '#f1f5f9', radius: 8 }}
                                            content={({ active, payload, label }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-2xl shadow-slate-200/50 min-w-[200px]">
                                                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">{label} PERFORMANCE</p>
                                                            <div className="space-y-3">
                                                                <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                                                                    <span className="text-slate-500 text-sm">Return:</span>
                                                                    <span className="text-emerald-500 font-bold">+{payload[0].payload.return}%</span>
                                                                </div>
                                                                <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                                                                    <span className="text-slate-500 text-sm">Balance:</span>
                                                                    <span className="text-slate-900 font-bold">${payload[0].value.toLocaleString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                        <Bar dataKey="balance" radius={[6, 6, 0, 0]} barSize={40}>
                                            {chartData.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={entry.return > 10 ? 'url(#barGradientHigh)' : 'url(#barGradient)'}
                                                />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-400 text-xs mt-12 mb-12 max-w-2xl mx-auto"
                >
                    <Info className="w-3 h-3 inline mr-1 mb-0.5" />
                    Past performance does not guarantee future results. Trading involves risk.
                    Calculations are based on historical monthly returns of the Syncro Master account for 2025.
                </motion.p>

                <SectionCTA nextSectionId="how-it-works" label="The Process" />
            </div>
        </section>
    );
}
