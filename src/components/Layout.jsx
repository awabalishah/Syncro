import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function StickyBanner() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 text-center text-sm font-medium">
            <p className="flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4" />
                We are not charging any fees for the first 100 users!
                <span className="bg-white/20 px-2 py-0.5 rounded text-xs">Limited Time</span>
            </p>
        </div>
    );
}

export function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <StickyBanner />

            <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold font-manrope tracking-tight text-slate-900">
                        Syncro<span className="text-blue-600">.</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
                        <a href="#results" className="hover:text-blue-600 transition-colors">Results</a>
                        <a href="#profit-share" className="hover:text-blue-600 transition-colors">Profit Share</a>

                        <a
                            href="https://discord.gg/syncro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5865F2] text-white hover:bg-[#4752C4] transition-all shadow-lg shadow-[#5865F2]/20 text-sm font-bold"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 3.49 3.49 0 0 0-.64 1.326 18.3 18.3 0 0 0-5.736 0 3.51 3.51 0 0 0-.649-1.326.082.082 0 0 0-.08-.037 19.742 19.742 0 0 0-4.88 1.515.056.056 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-2.002.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 2.002a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419z" />
                            </svg>
                            Discord Server
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium text-slate-600">
                            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How it Works</a>
                            <a href="#results" onClick={() => setIsMenuOpen(false)}>Results</a>
                            <a href="#profit-share" onClick={() => setIsMenuOpen(false)}>Profit Share</a>
                            <a
                                href="https://discord.gg/syncro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#5865F2] text-white py-3 rounded-lg w-full font-bold text-center shadow-lg shadow-[#5865F2]/20"
                            >
                                Discord Server
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-slate-50 border-t border-gray-200 py-12">
                <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
                    <div className="text-xs text-slate-400 space-y-2 max-w-4xl mx-auto mb-8">
                        <p>
                            Trading CFDs, forex, and other leveraged financial products carries a high level of risk and may not be suitable for all investors.
                            The use of automated trading systems does not eliminate risk. Performance can vary based on market conditions, broker execution, and user-controlled parameters.
                        </p>
                        <p>
                            Past performance, historical data, and any examples shown do not guarantee future results.
                            All performance/management fees charged by Syncro apply only to new profits above the previous best balance.
                            Nothing provided by Syncro or any representative constitutes financial advice, investment advice, or a recommendation to trade.
                            By proceeding, you acknowledge that you understand these risks and accept full responsibility for any financial decisions and outcomes.
                        </p>
                    </div>
                    <p>© {new Date().getFullYear()} Syncro Automation. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
