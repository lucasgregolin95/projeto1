import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg"></div>

            <div className="container hero-grid">
                <div className="hero-content">
                    <motion.span
                        className="hero-tag"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Inovação Disponível Agora
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Transforme Seu Negócio com <span className="gradient-text">Tecnologia de Ponta</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Sites, Apps e Sistemas de Agendamento que multiplicam suas vendas.
                        A solução completa para barbearias, salões e comércio que buscam o próximo nível de profissionalismo.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            Solicitar Orçamento <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#portfolio" className="btn btn-glass">
                            Ver Projetos
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="hero-card">
                        <div className="stat-row">
                            <div className="stat-icon">
                                <TrendingUp size={24} />
                            </div>
                            <div className="stat-info">
                                <h4>+45% Receita</h4>
                                <p>Média de crescimento</p>
                            </div>
                        </div>

                        <div className="stat-row">
                            <div className="stat-icon" style={{ color: 'var(--primary)' }}>
                                <Users size={24} />
                            </div>
                            <div className="stat-info">
                                <h4>Agendamento Auto</h4>
                                <p>24/7 sem atendente</p>
                            </div>
                        </div>

                        <div className="stat-row">
                            <div className="stat-icon" style={{ color: '#10b981' }}>
                                <CheckCircle size={24} />
                            </div>
                            <div className="stat-info">
                                <h4>Fidelização</h4>
                                <p>Clientes recorrentes</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
