import React from 'react';
import { Zap, Instagram, Linkedin, Facebook } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2><Zap fill="currentColor" size={24} style={{ color: 'var(--primary)' }} /> TechSolutions</h2>
                        <p>
                            Transformando negócios físicos com tecnologia de ponta.
                            Sua empresa merece o digital.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <Instagram size={20} className="social-icon" />
                            <Linkedin size={20} className="social-icon" />
                            <Facebook size={20} className="social-icon" />
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#portfolio">Portfólio</a></li>
                            <li><a href="#plans">Planos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Privacidade</a></li>
                            <li><a href="#">Política de Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Lucas Gregolin. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
