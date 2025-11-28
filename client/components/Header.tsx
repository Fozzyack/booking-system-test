"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
    { label: "Features", href: "#features" },
    { label: "Mentors", href: "#mentors" },
    { label: "Pricing", href: "#pricing" },
];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky right-0 top-0 bg-white z-50 transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                    ? "bg-white/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-bloom-orbit flex items-center justify-center text-white">
                            <Sparkles size={18} fill="currentColor" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-primary">
                            Bloom
                        </span>
                    </div>

                    <nav className="hidden md:flex gap-8 items-end">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm group font-medium text-primary/70"
                            >
                                {item.label}
                                <div className="w-0 h-0.5 group-hover:w-full bg-black transition-all ease-in-out duration-300" />
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-4 text-sm">
                        <a
                            href="#"
                            className=" rounded-xl px-3 py-2 border border-primary bg-bloom-blue hover:bg-bloom-blue-light transition-all duration-300 ease-in-out"
                        >
                            Find Booking
                        </a>
                        <a
                            href="#"
                            className=" rounded-xl px-3 py-2 border border-primary bg-slate-200 hover:bg-bloom-yellow transition-all duration-300 ease-in-out"
                        >
                            Login
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-bloom-gray animate-in slide-in-from-top-5">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block text-base font-medium text-primary hover:text-bloom-orbit"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-bloom-gray flex flex-col justify-start gap-3">
                            <button className="w-full py-4 bg-bloom-blue border border-black rounded-xl">
                                Find My Booking
                            </button>
                            <button className="w-full py-4 bg-bloom-yellow border border-black rounded-xl">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
