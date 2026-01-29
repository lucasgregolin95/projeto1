import React from 'react';
import { X, AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/problems.css';

const Problems = () => {
    const problems = [
        {
            icon: <Clock size={24} />,
            title: "Perda de Tempo",
            desc: "Horas gastas respondendo WhatsApp e agendando manualmente.",
            color: "#ef4444"
        },
        {
            icon: <X size={24} />,
            title: "Desorganização",
            desc: "Conflitos de horário e esquecimentos que geram prejuízo.",
            color: "#f97316"
        },
        {
            icon: <TrendingDown size={24} />,
            title: "Perda de Clientes",
            desc: "Clientes desistem por demora no atendimento e falta de profissionalismo.",
            color: "#eab308"
        },
        {
            icon: <AlertTriangle size={24} />,
            title: "Invisibilidade",
            desc: "Sem presença digital, você perde para concorrentes mais modernos.",
            color: "#ef4444"
        }
    ];

    return (
        <section className="problems-section">
            <div className="container problems-grid">
                <div className="problems-content">
                    <span className="section-tag">O Cenário Atual</span>
                    <h2 className="section-title">Seu negócio está perdendo dinheiro?</h2>
                    <p className="hero-description">
                        Sem as ferramentas certas, o dia a dia vira um caos. Identifique se você sofre com esses sintomas:
                    </p>

                    <div className="problem-list">
                        {problems.map((item, index) => (
                            <motion.div
                                className="problem-card"
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ borderLeftColor: item.color }}
                            >
                                <div className="problem-icon" style={{ color: item.color, background: `${item.color}20` }}>
                                    {item.icon}
                                </div>
                                <div className="problem-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="solution-preview"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="solution-inner">
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>A Solução?</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Automatização completa e design premium.
                        </p>
                        <div className="btn btn-primary" style={{ pointerEvents: 'none' }}>
                            Virar o Jogo Agora
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problems;
