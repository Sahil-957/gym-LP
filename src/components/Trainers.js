import React from 'react';

const TrainerCard = ({ name, exp, spec, image }) => (
    <div className="group relative overflow-hidden rounded-xl bg-[#111]">
        <div className="aspect-[3/4] overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

        <div className="absolute bottom-0 left-0 w-full p-6">
            <h3 className="text-2xl font-bold uppercase mb-1">{name}</h3>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{spec}</p>
            <p className="text-xs text-gray-400 border-l-2 border-primary pl-3">{exp}</p>
        </div>
    </div>
);

const Trainers = () => {
    const trainers = [
        {
            name: 'Alex Sterling',
            exp: '8+ Years Experience',
            spec: 'Strength & Conditioning',
            image: '/images/trainer1.png'
        },
        {
            name: 'Sarah Vance',
            exp: '6+ Years Experience',
            spec: 'Weight Loss & HIIT',
            image: '/images/trainer2.png'
        },
        {
            name: 'Marcus Steele',
            exp: '10+ Years Experience',
            spec: 'Bodybuilding & Nutrition',
            image: '/images/trainer3.png'
        }
    ];

    return (
        <section id="trainers" className="py-20 bg-[#050505]">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Team</h4>
                        <h2 className="section-title mb-0">Expert <span className="text-primary">Trainers</span></h2>
                    </div>
                    {/* Arrows or slider controls could go here */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((t, i) => <TrainerCard key={i} {...t} />)}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
