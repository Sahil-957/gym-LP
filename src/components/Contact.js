import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Visit Us</h4>
                        <h2 className="section-title mb-8">Contact <span className="text-primary">Info</span></h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#111] rounded text-primary"><MapPin /></div>
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Our Location</h5>
                                    <p className="text-gray-400">123 Fitness Street, Gym Sector<br />New Delhi, India 110001</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#111] rounded text-primary"><Phone /></div>
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Phone Number</h5>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#111] rounded text-primary"><Clock /></div>
                                <div>
                                    <h5 className="font-bold text-lg mb-1">Opening Hours</h5>
                                    <p className="text-gray-400">Mon - Sat: 5:00 AM - 11:00 PM<br />Sunday: 8:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <button className="flex-1 btn-primary py-3 text-sm">Call Now</button>
                            <button className="flex-1 border border-green-500 text-green-500 py-3 rounded font-bold uppercase hover:bg-green-500 hover:text-black transition-colors">WhatsApp</button>
                        </div>
                    </div>

                    <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14332.990234375!2d77.0!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Gym Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
