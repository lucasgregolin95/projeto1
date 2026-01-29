import React from 'react';
import { motion } from 'framer-motion';
import '../styles/testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            name: "Carlos Mendes",
            role: "Dono da BarberShop King",
            text: "Meu faturamento aumentou 40% depois que implantamos o app de agendamento. Os clientes adoram a facilidade.",
            initial: "C"
        },
        {
            name: "Ana Souza",
            role: "Gerente do Sabor & Arte",
            text: "O cardápio digital é incrível. Acabou a confusão no WhatsApp e os pedidos chegam prontos para a cozinha.",
            initial: "A"
        },
        {
            name: "Ricardo Lima",
            role: "Advogado",
            text: "Profissionalismo define. O site ficou exatamente como eu queria, moderno e passa muita credibilidade.",
            initial: "R"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Depoimentos</span>
                    <h2 className="section-title">O que dizem os clientes</h2>
                </div>

                <div className="testimonials-grid">
                    {reviews.map((item, index) => (
                        <motion.div
                            className="testimonial-card"
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="quote-icon">“</span>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="client-info">
                                <div className="client-avatar">{item.initial}</div>
                                <div className="client-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
