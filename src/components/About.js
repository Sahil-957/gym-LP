import React from 'react';
import { Medal, Dumbbell, Sparkles, Users } from 'lucide-react';

const FeatureCard = ({ icon, title, desc }) => (
    <div className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-all group hover:-translate-y-2">
        <div className="w-14 h-14 bg-[#222] rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
            {React.cloneElement(icon, { className: "text-primary group-hover:text-black transition-colors", size: 28 })}
        </div>
        <h3 className="text-xl font-bold uppercase mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
);

const About = () => {
    const features = [
        {
            icon: <Medal />,
            title: 'Certified Trainers',
            desc: 'Expert guidance from certified professionals to help you reach your goals safely.'
        },
        {
            icon: <Dumbbell />,
            title: 'Modern Equipment',
            desc: 'State-of-the-art machines and free weights for a complete workout experience.'
        },
        {
            icon: <Sparkles />,
            title: 'Clean & Hygienic',
            desc: 'We prioritize cleanliness with regular sanitization of all floors and equipment.'
        },
        {
            icon: <Users />,
            title: 'Friendly Environment',
            desc: 'A supportive community that acts as your second family and motivation.'
        }
    ];

    return (
        <section id="about" className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">About FitZone</h4>
                        <h2 className="section-title">Results Driven. <br />Beginner Friendly.</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                            FitZone Gym is more than just a place to lift weights. We focus on discipline, results, and creating a supportive environment for everyone—from beginners to pro athletes.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <h3 className="text-4xl font-black text-white">5+</h3>
                                <p className="text-gray-500 text-sm uppercase">Years</p>
                            </div>
                            <div className="w-px bg-gray-800 h-12"></div>
                            <div className="text-center">
                                <h3 className="text-4xl font-black text-white">1000+</h3>
                                <p className="text-gray-500 text-sm uppercase">Members</p>
                            </div>
                            <div className="w-px bg-gray-800 h-12"></div>
                            <div className="text-center">
                                <h3 className="text-4xl font-black text-white">15+</h3>
                                <p className="text-gray-500 text-sm uppercase">Trainers</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <FeatureCard key={i} {...f} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
