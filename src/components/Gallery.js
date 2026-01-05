import React from 'react';

const Gallery = () => {
    const images = [
        '/images/gallery2.png',
        '/images/gallery1.png',
        '/images/gallery3.png',
        '/images/hero.png'
    ];

    return (
        <section id="gallery" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center mb-12">Gym <span className="text-primary">Gallery</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                    {/* Bento Grid Layout */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <img src={images[3]} alt="Gallery Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl">
                        <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                        <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
