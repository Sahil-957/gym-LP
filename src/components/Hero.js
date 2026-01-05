import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center text-center px-4 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pt-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-6 leading-[0.9] tracking-tighter shadow-black drop-shadow-lg">
                    Transform Your <span className="text-primary block md:inline">Body.</span><br />
                    Build Your <span className="text-primary block md:inline">Strength.</span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 font-light tracking-wide">
                    A fully equipped fitness gym with expert trainers and flexible membership plans designed for your ultimate transformation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <a href="#membership" className="btn-primary flex items-center justify-center gap-2 group">
                        View Membership Plans <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="btn-outline flex items-center justify-center gap-2">
                        Visit the Gym <MapPin size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
