import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/video.css';

const VideoSection = () => {
    return (
        <section className="video-section">
            <div className="container">
                <span className="section-tag">Veja na Prática</span>
                <h2 className="section-title">Como transformamos negócios</h2>

                <motion.div
                    className="video-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="video-overlay"></div>
                    {/* Placeholder for iframe or video tag */}
                    <motion.div
                        className="play-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play fill="currentColor" size={32} />
                    </motion.div>
                    <p style={{ position: 'absolute', bottom: '20px', width: '100%', color: 'white', opacity: 0.8 }}>
                        Assista ao vídeo de apresentação (1:30)
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoSection;
