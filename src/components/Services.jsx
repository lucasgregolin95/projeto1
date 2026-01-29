import React from 'react';
import { Check, Smartphone, UtensilsCrossed, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/services.css';

const Services = () => {
    const services = [
        {
            icon: <Smartphone size={32} />,
            title: "App Barbearia & Beleza",
            desc: "Sistema completo de agendamento, gestão de clientes e pagamentos. Seu cliente agenda sozinho em 30 segundos.",
            features: ["Agenda Automática", "Lembretes WhatsApp", "Gestão Financeira"],
            gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
        },
        {
            icon: <UtensilsCrossed size={32} />,
            title: "Cardápio Digital",
            desc: "QR Code e pedidos online sem taxas de marketplace. Ideal para delivery e atendimento no local.",
            features: ["Pedidos no WhatsApp", "Painel Administrativo", "Sem Taxas"],
            gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)"
        },
        {
            icon: <Globe size={32} />,
            title: "Landing Pages Premium",
            desc: "Páginas de alta conversão como esta, projetadas para vender seu serviço ou produto 24h por dia.",
            features: ["Design Exclusivo", "SEO Otimizado", "Alta Conversão"],
            gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Nossas Soluções</span>
                    <h2 className="section-title">Tecnologia Sob Medida</h2>
                </div>

                <div className="services-grid">
                    {services.map((item, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="service-icon-container" style={{ background: item.gradient }}>
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>

                            <ul className="service-features">
                                {item.features.map((feat, i) => (
                                    <li key={i}><Check className="check-icon" /> {feat}</li>
                                ))}
                            </ul>

                            <a href="#contact" className="service-link">
                                Saiba Mais <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
