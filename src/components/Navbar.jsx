import React, { useState } from 'react';
import { Menu, Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <div className="logo-icon">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <span style={{ fontWeight: 800, letterSpacing: '-0.5px' }}>TechSolutions</span>
                </a>

                <div className="desktop-menu">
                    <div className="nav-links">
                        <a href="#services" className="nav-link">Serviços</a>
                        <a href="#benefits" className="nav-link">Benefícios</a>
                        <a href="#portfolio" className="nav-link">Portfólio</a>
                        <a href="#plans" className="nav-link">Planos</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <ThemeToggle />
                        <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>

                <div className="mobile-actions">
                    <ThemeToggle />
                    <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Serviços</a>
                            <a href="#benefits" className="nav-link" onClick={() => setIsOpen(false)}>Benefícios</a>
                            <a href="#portfolio" className="nav-link" onClick={() => setIsOpen(false)}>Portfólio</a>
                            <a href="#plans" className="nav-link" onClick={() => setIsOpen(false)}>Planos</a>
                            <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                                Falar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
