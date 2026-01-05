import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-primary text-black">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">
                    Ready to Start Your <br />Fitness Journey?
                </h2>

                <button className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-2xl mt-8">
                    Join FitZone Today <ArrowRight />
                </button>
            </div>
        </section>
    );
};

export default CTA;
