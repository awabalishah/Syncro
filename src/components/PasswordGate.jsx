import React, { useState, useEffect } from 'react';

const PASSWORD_KEY = 'site_access_granted';
const CORRECT_PASSWORD = 'Syncro2026'; // Requested password

export const PasswordGate = ({ children }) => {
    const [password, setPassword] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authorized = localStorage.getItem(PASSWORD_KEY);
        if (authorized === 'true') {
            setIsAuthorized(true);
        }
        setIsLoading(false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            localStorage.setItem(PASSWORD_KEY, 'true');
            setIsAuthorized(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (isAuthorized) {
        return children;
    }

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4 selection:bg-blue-500/30">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-md relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

                <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-4">
                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Protected Access</h1>
                        <p className="text-slate-400">Please enter the password to view the website.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password..."
                                className="w-full bg-[#1e293b]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                autoFocus
                            />
                            {error && (
                                <p className="mt-2 text-red-400 text-sm font-medium animate-pulse">{error}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                        >
                            Enter Site
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-white/5 pt-6">
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold text-center">
                            Syncro AI Secure Access
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
