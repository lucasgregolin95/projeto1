import React from 'react';
import { Scissors, Coffee, ShoppingBag, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/target-audience.css';

const TargetAudience = () => {
    const audiences = [
        {
            icon: <Scissors size={32} />,
            title: "Barbearias & Salões",
            desc: "Agendamento online automático que preenche sua agenda enquanto você trabalha."
        },
        {
            icon: <Coffee size={32} />,
            title: "Restaurantes",
            desc: "Cardápios digitais interativos e sistemas de pedidos rápidos e sem taxas."
        },
        {
            icon: <Store size={32} />,
            title: "Comércio Local",
            desc: "Leve sua loja para o digital e venda para clientes da sua região 24h por dia."
        },
        {
            icon: <ShoppingBag size={32} />,
            title: "Prestadores de Serviço",
            desc: "Portfólio profissional e orçamento automático via WhatsApp."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="target-section" id="target">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Público Alvo</span>
                    <h2 className="section-title">Para quem é essa solução?</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Desenvolvemos tecnologias específicas para alavancar negócios físicos e serviços.
                    </p>
                </div>

                <motion.div
                    className="target-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {audiences.map((audi, index) => (
                        <motion.div className="target-card" key={index} variants={item}>
                            <div className="target-overlay"></div>
                            <div className="target-icon">
                                {audi.icon}
                            </div>
                            <h3>{audi.title}</h3>
                            <p>{audi.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TargetAudience;
