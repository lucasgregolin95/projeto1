import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/portfolio.css';

const Portfolio = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const projects = [
        {
            category: "Barbearia",
            title: "Barber King App",
            desc: "Sistema completo com agendamento e clube de assinatura.",
            color: "#f59e0b"
        },
        {
            category: "Delivery",
            title: "Burger House",
            desc: "Cardápio digital com integração direta ao WhatsApp.",
            color: "#ef4444"
        },
        {
            category: "Institucional",
            title: "Advocacia Silva",
            desc: "Site corporativo com blog e área de clientes.",
            color: "#3b82f6"
        },
        {
            category: "Beleza",
            title: "Studio Glamour",
            desc: "Site com galeria de fotos e agendamento p/ maquiagem.",
            color: "#ec4899"
        }
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', textAlign: 'left' }}>
                    <div>
                        <span className="section-tag">Portfólio</span>
                        <h2 className="section-title">Projetos Recentes</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={() => scroll('left')} className="btn btn-glass" style={{ padding: '10px' }}>
                            <ArrowLeft />
                        </button>
                        <button onClick={() => scroll('right')} className="btn btn-glass" style={{ padding: '10px' }}>
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                <motion.div
                    className="portfolio-slider"
                    ref={scrollRef}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {projects.map((item, index) => (
                        <motion.div
                            className="portfolio-card"
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="portfolio-image" style={{ borderBottom: `2px solid ${item.color}` }}>
                                {/* Placeholder for image */}
                                [Imagem do Projeto: {item.title}]
                            </div>
                            <div className="portfolio-content">
                                <span className="portfolio-tag" style={{ color: item.color }}>{item.category}</span>
                                <h3>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
