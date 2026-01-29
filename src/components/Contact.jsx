import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <motion.div
                    className="cta-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="cta-title">Pronto para escalar seu negócio?</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Não deixe dinheiro na mesa com processos manuais. Tenha uma estrutura digital profissional hoje mesmo.
                    </p>
                    <a href="#contact-form" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                        Quero meu Orçamento Gratuito
                    </a>
                </motion.div>

                <div className="contact-grid" id="contact-form">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3>Vamos conversar sobre seu projeto</h3>
                        <p>Fale diretamente com <strong>Lucas Gregolin</strong>. Preencha o formulário ou nos chame diretamente no WhatsApp. Respondemos em até 1 hora.</p>

                        <div className="contact-method">
                            <div className="method-icon"><MessageSquare /></div>
                            <div>
                                <h4>WhatsApp</h4>
                                <p style={{ margin: 0 }}>(11) 99999-9999</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="method-icon"><Mail /></div>
                            <div>
                                <h4>Email</h4>
                                <p style={{ margin: 0 }}>contatolucasgregolin@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="method-icon"><Phone /></div>
                            <div>
                                <h4>Telefone</h4>
                                <p style={{ margin: 0 }}>(11) 3333-3333</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input type="text" className="form-input" placeholder="Seu nome" />
                        </div>

                        <div className="form-group">
                            <label>WhatsApp</label>
                            <input type="tel" className="form-input" placeholder="(00) 00000-0000" />
                        </div>

                        <div className="form-group">
                            <label>Tipo de Negócio</label>
                            <select className="form-input">
                                <option>Barbearia / Salão</option>
                                <option>Restaurante / Delivery</option>
                                <option>Comércio / Loja</option>
                                <option>Prestador de Serviço</option>
                                <option>Outro</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea className="form-textarea" placeholder="Como podemos te ajudar?"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Enviar Solicitação
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
