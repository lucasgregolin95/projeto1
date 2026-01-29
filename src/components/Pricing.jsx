import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/pricing.css';

const Pricing = () => {
    const plans = [
        {
            name: "Básico",
            price: "R$ 1.500",
            period: "/projeto",
            features: [
                "Landing Page Responsiva",
                "Design Moderno",
                "Botão WhatsApp",
                "SEO Básico",
                "Hospedagem Grátis (1 ano)"
            ],
            featured: false
        },
        {
            name: "Profissional",
            price: "R$ 3.800",
            period: "/projeto",
            features: [
                "Site Completo (Multipáginas)",
                "Sistema de Blog/Notícias",
                "Integração CRM",
                "Painel Administrativo",
                "Otimização de Performance",
                "Suporte Prioritário"
            ],
            featured: true
        },
        {
            name: "Business",
            price: "Sob Consulta",
            period: "",
            features: [
                "Sistemas Web Personalizados",
                "Apps (Android & iOS)",
                "Integração com APIs",
                "Área de Membros",
                "Automação Completa",
                "Consultoria de Negócios"
            ],
            featured: false
        }
    ];

    return (
        <section className="pricing-section" id="plans">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Investimento</span>
                    <h2 className="section-title">Escolha seu Plano</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Soluções escaláveis para cada fase do seu negócio</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            {plan.featured && <div className="featured-badge">Mais Popular</div>}

                            <div className="price-header">
                                <h3>{plan.name}</h3>
                                <div className="price">
                                    {plan.price}
                                    <span className="period">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="price-features">
                                {plan.features.map((feat, i) => (
                                    <li key={i}>
                                        <Check className="check-icon-price" size={18} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-glass'}`} style={{ width: '100%' }}>
                                Começar Agora
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
