import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
                        Fit<span className="text-primary">Zone</span>
                    </h2>
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} FitZone Gym. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors"><Youtube size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
