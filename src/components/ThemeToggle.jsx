import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '50px',
                width: '60px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
            }}
            aria-label="Toggle Theme"
        >
            <motion.div
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--gradient-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    x: theme === 'light' ? 0 : 28
                }}
            >
                {theme === 'light' ? <Sun size={14} /> : <Moon size={14} />}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
