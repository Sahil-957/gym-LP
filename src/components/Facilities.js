import React from 'react';
import { BicepsFlexed, HeartPulse, Activity, Shirt } from 'lucide-react';

const FacilityCard = ({ icon, title, image }) => (
    <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10">
        {/* Optional: Add image background if available, for now using dark gradient */}
        <div className="absolute inset-0 bg-[#151515] transition-transform duration-500 group-hover:scale-105">
            {image && <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity" style={{ backgroundImage: `url(${image})` }}></div>}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="w-12 h-12 bg-primary text-black rounded-lg flex items-center justify-center mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold uppercase italic transform group-hover:-translate-y-2 transition-transform duration-300">{title}</h3>
            <div className="h-0.5 w-12 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    </div>
);

const Facilities = () => {
    const facilities = [
        { title: 'Weight Area', icon: <BicepsFlexed />, image: '/images/gallery2.png' },
        { title: 'Cardio Zone', icon: <HeartPulse />, image: '/images/gallery1.png' },
        { title: 'Cross Training', icon: <Activity />, image: '/images/gallery3.png' },
        { title: 'Changing Rooms', icon: <Shirt />, image: null }, // Fallback for no image
    ];

    return (
        <section id="facilities" className="py-20 bg-[#080808]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Space</h4>
                        <h2 className="section-title mb-0">World Class <br />Facilities</h2>
                    </div>
                    <p className="max-w-md text-gray-400 text-right md:text-left">
                        Train in a facility designed for performance. From heavy lifting to endurance training, we have it all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((fac, i) => (
                        <FacilityCard key={i} {...fac} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
