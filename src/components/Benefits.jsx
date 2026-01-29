import React from 'react';
import { motion } from 'framer-motion';
import '../styles/benefits.css';

const Benefits = () => {
    const benefits = [
        {
            label: "01",
            title: "Mais Clientes",
            desc: "Com um sistema online, você não depende de atender o telefone. Seu cliente agenda ou compra a qualquer hora do dia ou da noite."
        },
        {
            label: "02",
            title: "Profissionalismo",
            desc: "Saia do amadorismo. Uma presença digital forte transmite confiança e autoridade para quem procura seu serviço."
        },
        {
            label: "03",
            title: "Organização Total",
            desc: "Fim da papelada e das planilhas confusas. Tenha controle financeiro e de agenda na palma da sua mão."
        },
        {
            label: "04",
            title: "Fidelização",
            desc: "Sistemas de lembretes e experiência de uso fluida fazem com que o cliente volte sempre."
        }
    ];

    return (
        <section className="benefits-section" id="benefits">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Por que investir?</span>
                    <h2 className="section-title">Resultados Reais</h2>
                </div>

                <div className="benefits-grid">
                    {benefits.map((item, index) => (
                        <motion.div
                            className="benefit-item"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="benefit-number" data-label={item.label}>
                                {item.label}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
