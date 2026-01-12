import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


export function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    const getNavLink = (id) => isHomePage ? `#${id}` : `/#${id}`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-950">

            <header
                className={`z-50 transition-all duration-500 ${isScrolled || !isHomePage
                    ? 'sticky top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-b border-white/5 h-20 shadow-lg'
                    : 'absolute left-0 right-0 bg-transparent border-b border-transparent h-24'
                    }`}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    <Link to="/" className="text-3xl font-bold font-manrope tracking-tight text-white transition-transform hover:scale-105">
                        Syncro<span className="text-blue-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                        <a href={getNavLink("how-it-works")} className="hover:text-white transition-colors">How it Works</a>
                        <Link to="/features" className="relative group hover:text-white transition-colors">
                            Features
                            <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-blue-600 text-white rounded font-bold uppercase tracking-wider">New</span>
                        </Link>
                        <a href={getNavLink("results")} className="hover:text-white transition-colors">Results</a>
                        <a href={getNavLink("profit-share")} className="hover:text-white transition-colors">Profit Share</a>

                        <button
                            disabled
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 cursor-not-allowed text-sm font-bold"
                        >
                            <svg className="w-5 h-5 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 3.49 3.49 0 0 0-.64 1.326 18.3 18.3 0 0 0-5.736 0 3.51 3.51 0 0 0-.649-1.326.082.082 0 0 0-.08-.037 19.742 19.742 0 0 0-4.88 1.515.056.056 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-2.002.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 2.002a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419z" />
                            </svg>
                            Discord Coming Soon
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
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
                        className="fixed inset-0 z-40 bg-slate-950 pt-32 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium text-slate-300">
                            <a href={getNavLink("how-it-works")} onClick={() => setIsMenuOpen(false)}>How it Works</a>
                            <Link to="/features" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between">
                                Features
                                <span className="px-1.5 py-0.5 text-[10px] bg-blue-600 text-white rounded font-bold uppercase tracking-wider">New</span>
                            </Link>
                            <a href={getNavLink("results")} onClick={() => setIsMenuOpen(false)}>Results</a>
                            <a href={getNavLink("profit-share")} onClick={() => setIsMenuOpen(false)}>Profit Share</a>
                            <button
                                disabled
                                className="bg-white/5 border border-white/10 text-slate-400 py-3 rounded-lg w-full font-bold text-center cursor-not-allowed"
                            >
                                Discord Coming Soon
                            </button>
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

