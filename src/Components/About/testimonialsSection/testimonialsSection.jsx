import React, { useState } from 'react';
import './TestimonialSection.css';

const testimonials = [
    { id: 1, img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes.jpg?v=1714730064", name: "Eshan B", role: "CEO", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-2.jpg?v=1714719644", name: "KPindia", role: "Designer", text: "Curabitur non mattis dui, sit amet hendrerit nibh." },
    { id: 3, img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-1.jpg?v=1715670691", name: "Pradnya P", role: "CEO & Founder", text: "Duis congue volutpat urna ut accumsan." },
    { id: 4, img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/tes-3.jpg?v=1715670792", name: "Rahul S", role: "Manager", text: "Duis congue volutpat urna ut accumsan." }
];

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1 >= testimonials.length - 2 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 < 0 ? testimonials.length - 3 : prev - 1));
    };

    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="header-row">
                    <div className="title-box">
                        <span className="subtitle">Testimonial</span>
                        <h2>Ice Cream Shop</h2>
                    </div>
                    <div className="controls">
                        <button onClick={prevSlide}>&lt;</button>
                        <button onClick={nextSlide}>&gt;</button>
                    </div>
                </div>

                <div className="testimonial-grid">
                    {testimonials.slice(index, index + 3).map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="avatar">
                                {/* item.img use karein, img nahi */}
                                <img src={item.img} alt={item.name} />
                            </div>
                            <h3>{item.name}</h3>
                            <p className="role">{item.role}</p>
                            <p className="text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;