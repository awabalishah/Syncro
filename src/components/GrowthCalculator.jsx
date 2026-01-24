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
    const [growthSlider, setGrowthSlider] = useState(6.5);

    const { feeTier, retainedGrowth } = useMemo(() => {
        // Logic: 0-5%: 20%, 5-10%: 25%, 10%+: 30%
        let tier = 25;
        if (growthSlider < 5) tier = 20;
        else if (growthSlider >= 10) tier = 30;

        const retained = growthSlider * (1 - tier / 100);
        return {
            feeTier: tier,
            retainedGrowth: retained.toFixed(1)
        };
    }, [growthSlider]);

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
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-bold mb-8 shadow-lg"
                    >
                        <img src={myfxbookLogo} alt="Myfxbook" className="h-4 w-auto" />
                        <span className="w-px h-3 bg-slate-700" />
                        <span>Live Data Feed</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        2025 Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Strategy Performance</span> Overview
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        View account activity anytime through your MT5 app or our live, independently tracked data feed. Updates are automatic and transparent.
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
                        <div className="bg-[#0b1221] rounded-[2rem] md:rounded-[3rem] border-2 border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] p-6 md:p-10 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-[pulse_0.8s_ease-in-out_infinite]" />
                                    <span className="text-emerald-400 text-[11px] font-black uppercase tracking-widest">Live</span>
                                </div>
                                <a
                                    href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform"
                                >
                                    <ExternalLink className="w-6 h-6 text-slate-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Verified Strategy Performance Data</h3>
                                <div className="text-slate-400 text-sm flex items-center gap-3 font-semibold">
                                    <span className="text-blue-400 flex items-center gap-2">
                                        Verified by <img src={myfxbookLogo} alt="Myfxbook" className="h-5 w-auto" />
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-6 mb-12">
                                <div className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 gap-4">
                                    <div className="text-center sm:text-left">
                                        <p className="text-slate-400 text-[10px] md:text-[11px] uppercase font-black tracking-[0.2em] mb-3">Cumulative Performance (2025)</p>
                                        <p className="text-4xl md:text-5xl font-black text-orange-500">+174.43%</p>
                                    </div>
                                    <div className="w-32 h-16">
                                        <svg viewBox="0 0 100 40" className="w-full h-full text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]" fill="none" stroke="currentColor" strokeWidth="4">
                                            <path d="M0 35 L10 32 L20 34 L30 25 L40 28 L50 15 L60 18 L70 8 L80 12 L90 2 L100 5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 md:gap-6">
                                    <div className="p-6 md:p-7 rounded-[2rem] bg-white/[0.03] border border-white/5 text-center sm:text-left">
                                        <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-3">Average Monthly Change</p>
                                        <p className="text-2xl md:text-3xl font-black text-emerald-400">8.03%</p>
                                    </div>
                                    <div className="p-6 md:p-7 rounded-[2rem] bg-white/[0.03] border border-white/5 text-center sm:text-left">
                                        <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest mb-3">Maximum Drawdown</p>
                                        <p className="text-2xl md:text-3xl font-black text-rose-500">3.95%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5 mb-12 ml-2">
                                <div className="flex items-center gap-4 text-slate-300 text-base font-bold">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span>Independently Tracked</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300 text-base font-bold">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span>Live Myfxbook Feed</span>
                                </div>
                            </div>

                            <a
                                href="https://www.myfxbook.com/members/Syncro_/syncro-bot/11880753"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 md:py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] font-black text-sm md:text-lg transition-all flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 group shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden border-beam"
                            >
                                <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                    View Live Stats on
                                </span>
                                <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                    <img src={myfxbookLogo} alt="Myfxbook" className="h-5 md:h-7 w-auto brightness-0 invert" />
                                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                                </span>
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
                        {/* Illustrative Growth Scenario Card */}
                        <div className="bg-[#fcfcfc] rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.08)] p-6 md:p-10">
                            <div className="mb-12">
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Illustrative Growth Scenario</h3>
                                <p className="text-slate-500 text-lg leading-relaxed">
                                    This illustration demonstrates how growth levels interact with Syncro’s service fee structure. Figures shown are hypothetical.
                                </p>
                            </div>

                            <div className="relative mb-20 pt-10">
                                <input
                                    type="range"
                                    min="0"
                                    max="12"
                                    step="0.5"
                                    value={growthSlider}
                                    onChange={(e) => setGrowthSlider(parseFloat(e.target.value))}
                                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-8 text-sm text-slate-400 font-black uppercase tracking-widest px-1">
                                    <span>0%</span>
                                    <span>4%</span>
                                    <span className="text-blue-600">6%</span>
                                    <span>8%</span>
                                    <span>10+</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 shadow-sm relative overflow-hidden group">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">Illustrative Account Growth</p>
                                    <p className="text-4xl font-black text-slate-900 mb-3">+{growthSlider}%</p>
                                    <p className="text-slate-400 text-xs font-bold">Hypothetical scenario</p>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-slate-100 shadow-sm relative overflow-hidden group">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">Applicable Service Fee Tier</p>
                                    <p className="text-4xl font-black text-slate-900 mb-3">{feeTier}%</p>
                                    <p className="text-slate-400 text-xs font-bold">Based on selected growth range</p>
                                </div>
                                <div className="p-8 rounded-[2rem] bg-emerald-50/30 border-2 border-emerald-100 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-600/10 transition-colors" />
                                    <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-4">Growth Retained After Service Fee</p>
                                    <p className="text-4xl font-black text-slate-900 mb-3">~{retainedGrowth}%</p>
                                    <div className="w-12 h-1 bg-emerald-400/30 rounded-full mt-2" />
                                </div>
                            </div>

                            <p className="text-center text-slate-400 text-[11px] font-bold tracking-tight mt-12">
                                Shown for explanation purposes only. Not a forecast or guarantee.
                            </p>
                        </div>

                        {/* Performance Chart */}
                        <div className="bg-[#fcfcfc] rounded-[2.5rem] border-2 border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.12)] p-6 md:p-10 h-auto min-h-[500px]">
                            {/* Chart Header - Matching Image */}
                            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-12 border-b border-slate-200 pb-6 gap-4">
                                <h4 className="text-base md:text-xl font-bold text-slate-700 text-center sm:text-left">2025 Verified Monthly Performance Data</h4>
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
                                <h5 className="text-[14px] font-bold text-slate-700">Monthly Performance Change</h5>
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
