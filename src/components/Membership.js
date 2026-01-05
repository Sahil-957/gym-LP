import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

const PlanCard = ({ name, duration, price, features, isPopular }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${isPopular ? 'bg-[#151515] border-2 border-primary scale-100 md:scale-105 shadow-xl shadow-primary/10 z-10' : 'bg-[#0f0f0f] border border-white/5 hover:border-white/20'}`}>
        {isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold uppercase text-xs px-4 py-1 rounded-full">
                Most Popular
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-xl font-bold uppercase text-gray-400 mb-2 tracking-widest">{name}</h3>
            <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white">{price}</span>
                <span className="text-sm text-gray-500 mb-1">/ {duration}</span>
            </div>
        </div>

        <ul className="flex-1 space-y-4 mb-8">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    {feat}
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${isPopular ? 'bg-primary text-black hover:bg-white' : 'bg-[#222] text-white hover:bg-white hover:text-black'}`}>
            <MessageCircle size={20} /> Enquire Now
        </button>
    </div>
);

const Membership = () => {
    const plans = [
        {
            name: 'Starter',
            duration: '1 Month',
            price: '₹1,500',
            features: ['Access to Gym Floor', 'General Trainer Support', 'Locker Facility', '1 Free PT Session'],
            isPopular: false
        },
        {
            name: 'Pro',
            duration: '6 Months',
            price: '₹7,500',
            features: ['All Starter Features', 'Diet Consultation', 'Steam Bath Access', 'Priority Support', 'Freeze Membership (15 days)'],
            isPopular: true
        },
        {
            name: 'Elite',
            duration: '12 Months',
            price: '₹13,000',
            features: ['All Pro Features', 'Personal Trainer (12 Sessions)', 'Unlimited Steam/Sauna', 'Nutritional Planning', 'FitZone Merchandise Kit'],
            isPopular: false
        }
    ];

    return (
        <section id="membership" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Pricing</h4>
                    <h2 className="section-title">Membership <span className="text-primary">Plans</span></h2>
                    <p className="text-gray-400">Choose the plan that suits your fitness journey. Transparent pricing, no hidden costs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((p, i) => <PlanCard key={i} {...p} />)}
                </div>
            </div>
        </section>
    );
};

export default Membership;
