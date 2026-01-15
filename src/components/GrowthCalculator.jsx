import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { TrendingUp, ShieldCheck, CheckCircle2, ExternalLink, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionCTA } from './SectionCTA';
import myfxbookLogo from '../assets/myfxbook-logo.png';

const MONTHLY_DATA = [
    { name: 'Jan 2025', return: 5.15 },
    { name: 'Feb 2025', return: 6.68 },
    { name: 'Mar 2025', return: 11.52 },
    { name: 'Apr 2025', return: 5.90 },
    { name: 'May 2025', return: 10.40 },
    { name: 'Jun 2025', return: 5.27 },
    { name: 'Jul 2025', return: 8.85 },
    { name: 'Aug 2025', return: 6.83 },
    { name: 'Sep 2025', return: 10.57 },
    { name: 'Oct 2025', return: 12.08 },
    { name: 'Nov 2025', return: 6.57 },
    { name: 'Dec 2025', return: 4.78 },
];

export function GrowthCalculator() {
    const [initialInvestment, setInitialInvestment] = useState(1000);

    const { chartData, finalBalance, totalProfit, totalROI } = useMemo(() => {
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

        const profit = currentBalance - initialInvestment;
        const roi = (profit / initialInvestment) * 100;

        return {
            chartData: data,
            finalBalance: Math.round(currentBalance),
            totalProfit: Math.round(profit),
            totalROI: roi.toFixed(2)
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
                        2025 Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Monthly Performance</span>
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
                        <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-800 shadow-[0_32px_64px_-16px_rgba(255,255,255,0.05)] p-6 md:p-8 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider">Live Results</span>
                                </div>
                                <a
                                    href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <ExternalLink className="w-5 h-5 text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>

                            <div className="mb-10">
                                <h3 className="text-3xl font-black text-white mb-3">Syncro Verified Results</h3>
                                <div className="text-slate-400 text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 font-medium">
                                    <span>Managed by Syncro AI</span>
                                    <span className="hidden sm:inline opacity-50">•</span>
                                    <span className="text-blue-400 flex items-center gap-2 font-bold">
                                        Verified by <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto" />
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-6 rounded-2xl bg-white/5 border border-white/5 gap-4">
                                    <div className="text-center sm:text-left">
                                        <p className="text-slate-300 text-[10px] md:text-xs uppercase font-bold tracking-widest mb-1 md:mb-2">Total Gain (2025)</p>
                                        <p className="text-3xl md:text-4xl font-bold text-orange-500">+174.43%</p>
                                    </div>
                                    <div className="w-24 h-12">
                                        <svg viewBox="0 0 100 40" className="w-full h-full text-orange-500" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M0 35 L10 32 L20 34 L30 25 L40 28 L50 15 L60 18 L70 8 L80 12 L90 2 L100 5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 text-center sm:text-left">
                                        <p className="text-slate-300 text-[10px] uppercase font-bold tracking-widest mb-1 md:mb-2 text-[8px] md:text-[10px]">Monthly Gain</p>
                                        <p className="text-xl md:text-2xl font-bold text-emerald-400">8.03%</p>
                                    </div>
                                    <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/5 text-center sm:text-left">
                                        <p className="text-slate-300 text-[10px] uppercase font-bold tracking-widest mb-1 md:mb-2 text-[8px] md:text-[10px]">Drawdown</p>
                                        <p className="text-xl md:text-2xl font-bold text-rose-400">3.95%</p>
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

                            <a
                                href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/40"
                            >
                                View Live Stats on <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto brightness-0 invert" />
                                <ExternalLink className="w-4 h-4" />
                            </a>
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
                        <div className="bg-[#fcfcfc] rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.08)] p-6 md:p-10">
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12">
                                <div className="max-w-md">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Account Growth Example</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        This example is based on verified 2025 performance data and is shown for illustrative purposes.
                                    </p>
                                </div>
                                <div className="bg-blue-50/50 border border-blue-100 px-4 md:px-6 py-3 md:py-4 rounded-2xl text-left sm:text-right shrink-0">
                                    <p className="text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-0.5 md:mb-1">Initial Deposit</p>
                                    <p className="text-2xl md:text-3xl font-bold text-blue-600">${initialInvestment.toLocaleString()}</p>
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
                                <div className="p-8 rounded-[2.5rem] bg-blue-50/40 border-2 border-blue-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors" />
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Total Profit</p>
                                    <p className="text-4xl font-bold text-slate-900 mb-3">${totalProfit.toLocaleString()}</p>
                                    <p className="text-emerald-600 text-sm font-bold flex items-center gap-1">
                                        <TrendingUp className="w-4 h-4" />
                                        +{totalROI}% Compounded
                                    </p>
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-emerald-50/30 border-2 border-emerald-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-600/10 transition-colors" />
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Final Balance</p>
                                    <p className="text-4xl font-bold text-slate-900 mb-3">${finalBalance.toLocaleString()}</p>
                                    <p className="text-slate-500 text-sm font-medium">After 12 Months (2025)</p>
                                </div>
                            </div>
                        </div>

                        {/* Performance Chart */}
                        <div className="bg-[#fcfcfc] rounded-[2.5rem] border-2 border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.12)] p-6 md:p-10 h-auto min-h-[500px]">
                            {/* Chart Header - Matching Image */}
                            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 border-b border-slate-200 pb-6 gap-4">
                                <h4 className="text-base md:text-xl font-bold text-slate-700 text-center sm:text-left">2025 Verified Monthly Performance</h4>
                                <div className="flex items-center bg-transparent">
                                    <div className="px-4 py-2 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg shadow-sm text-sm">
                                        2025
                                    </div>
                                    <div className="ml-4 opacity-40">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                                            <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h5 className="text-[14px] font-bold text-slate-700">Monthly Gain(Change)</h5>
                            </div>

                            <div className="h-[320px] relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={MONTHLY_DATA} margin={{ top: 20, right: 0, left: -25, bottom: 40 }}>
                                        <defs>
                                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity={0.8} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#e2e8f0" />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#64748b', fontSize: 10, fontWeight: 500 }}
                                            angle={-45}
                                            textAnchor="end"
                                            dy={5}
                                            interval={window.innerWidth < 640 ? 1 : 0}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            domain={[0, 15]}
                                            ticks={[0, 5, 10, 15]}
                                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                                            tickFormatter={(value) => `${value}%`}
                                        />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(37, 99, 235, 0.05)', radius: 8 }}
                                            content={({ active, payload, label }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-white border-2 border-blue-500/20 px-4 py-2 rounded-xl shadow-lg relative">
                                                            <p className="text-slate-700 font-bold text-sm">
                                                                {label}
                                                            </p>
                                                            <p className="text-blue-600 font-black text-lg">
                                                                {payload[0].value}%
                                                            </p>
                                                            {/* Tooltip triangle tail */}
                                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-blue-500/20 rotate-45" />
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                        <Bar dataKey="return" fill="url(#barGradient)" radius={[4, 4, 0, 0]} barSize={window.innerWidth < 640 ? 15 : 35}>
                                            {/* Labels on top of bars */}
                                            <LabelList
                                                dataKey="return"
                                                position="top"
                                                formatter={(val) => `${val}%`}
                                                style={{ fill: '#1e293b', fontSize: window.innerWidth < 640 ? '7px' : '11px', fontWeight: '800' }}
                                                offset={10}
                                            />
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
