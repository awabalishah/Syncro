import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, ShieldCheck, CheckCircle2, ExternalLink, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
                        Our AI-driven strategies undergo rigorous real-time verification.
                        Explore how a starting capital could have compounded over the last 12 months.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: MyFxBook Style Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6">
                                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">Live</span>
                                </div>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold text-slate-900">Syncro Real Master</h3>
                                    <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                                <p className="text-slate-500 text-sm flex items-center gap-2">
                                    Managed by Syncro AI • Verified by MyFxBook
                                </p>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Total Gain</p>
                                        <p className="text-3xl font-bold text-emerald-600">+88.55%</p>
                                    </div>
                                    <TrendingUp className="w-10 h-10 text-emerald-600/20" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Monthly</p>
                                        <p className="text-xl font-bold text-slate-900">7.82%</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Drawdown</p>
                                        <p className="text-xl font-bold text-rose-500">4.12%</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-10">
                                <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>Track Record Verified</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>Trading Privileges Verified</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20">
                                View Full Stats on MyFxBook
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                                <span>Broker: IC Markets</span>
                                <span>Platform: MT4</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Calculator & Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8"
                    >
                        {/* Investment Slider */}
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Calculate Your Growth</h3>
                                    <p className="text-slate-500 text-sm">Adjust the slider to see historical performance</p>
                                </div>
                                <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                                    <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Initial Deposit</span>
                                    <span className="text-2xl font-bold text-blue-600">${initialInvestment.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="relative mb-12">
                                <input
                                    type="range"
                                    min="500"
                                    max="50000"
                                    step="500"
                                    value={initialInvestment}
                                    onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                    <span>$500</span>
                                    <span>$10k</span>
                                    <span>$25k</span>
                                    <span>$50k</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                                    <p className="text-slate-500 text-xs font-bold uppercase mb-2">Total Profit</p>
                                    <p className="text-3xl font-bold text-slate-900">${totalProfit.toLocaleString()}</p>
                                    <p className="text-emerald-600 text-sm font-bold mt-1">+88.55% Return</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                                    <p className="text-slate-500 text-xs font-bold uppercase mb-2">Final Balance</p>
                                    <p className="text-3xl font-bold text-slate-900">${finalBalance.toLocaleString()}</p>
                                    <p className="text-slate-600 text-sm mt-1">After 12 Months</p>
                                </div>
                            </div>
                        </div>

                        {/* Performance Chart */}
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-8 h-[400px]">
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-blue-600" />
                                Monthly Compounded Growth
                            </h4>
                            <div className="h-[280px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#2563eb" stopOpacity={1} />
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.4} />
                                            </linearGradient>
                                            <linearGradient id="barGradientHigh" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#059669" stopOpacity={1} />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity={0.4} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                                            dy={10}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                                            tickFormatter={(value) => `$${value > 1000 ? (value / 1000).toFixed(1) + 'k' : value}`}
                                        />
                                        <Tooltip
                                            cursor={{ fill: '#f8fafc' }}
                                            content={({ active, payload, label }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-xl">
                                                            <p className="text-slate-400 text-xs font-bold uppercase mb-2">{label} Performance</p>
                                                            <div className="space-y-1">
                                                                <p className="flex justify-between gap-8">
                                                                    <span className="text-slate-500">Return:</span>
                                                                    <span className="text-emerald-600 font-bold">+{payload[0].payload.return}%</span>
                                                                </p>
                                                                <p className="flex justify-between gap-8">
                                                                    <span className="text-slate-500">Balance:</span>
                                                                    <span className="text-slate-900 font-bold">${payload[0].value.toLocaleString()}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                        <Bar dataKey="balance" radius={[4, 4, 0, 0]}>
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
                    className="text-center text-slate-400 text-xs mt-12 max-w-2xl mx-auto"
                >
                    <Info className="w-3 h-3 inline mr-1 mb-0.5" />
                    Past performance does not guarantee future results. Trading involves risk.
                    Calculations are based on historical monthly returns of the Syncro Master account for 2025.
                </motion.p>
            </div>
        </section>
    );
}
