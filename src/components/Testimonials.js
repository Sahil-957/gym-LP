import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Rahul Sharma',
            role: 'Member',
            text: 'Best gym in the area! The trainers are very supportive and the equipment is top-notch.',
            rating: 5
        },
        {
            name: 'Priya Patel',
            role: 'Athlete',
            text: 'Clean, spacious, and the crowd is very decent. Highly recommended for women.',
            rating: 5
        },
        {
            name: 'Amit Verma',
            role: 'Pro Bodybuilder',
            text: 'Great facility for serious lifting. Heavy dumbbells and plenty of racks.',
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-[#080808]">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center mb-16">Success <span className="text-primary">Stories</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-[#111] p-8 rounded-xl border border-[#222] relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(r.rating)].map((_, idx) => (
                                    <Star key={idx} size={16} className="fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-6">"{r.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                                    {r.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{r.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase">{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
