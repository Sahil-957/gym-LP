"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Facilities', href: '#facilities' },
        { name: 'Plans', href: '#membership' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-2xl font-black uppercase tracking-tighter">
                    <Dumbbell className="text-primary" size={32} />
                    Fit<span className="text-primary">Zone</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors text-gray-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#membership" className="bg-primary text-black font-bold uppercase text-xs px-6 py-3 rounded hover:bg-white transition-colors">
                        Join Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 py-8 px-4 flex flex-col gap-6 shadow-2xl h-screen">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-bold uppercase hover:text-primary border-b border-white/5 pb-4"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#membership" className="bg-primary text-black text-center font-bold uppercase py-4 rounded mt-4" onClick={() => setIsOpen(false)}>
                        Join Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
