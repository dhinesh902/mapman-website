import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Handshake } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Zap size={24} />,
            title: "Scalable Infrastructure",
            desc: "We build systems that grow with your business, ensuring performance never compromises."
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Security by Design",
            desc: "Integrity and safety are baked into every line of code we write for our partners."
        },
        {
            icon: <Handshake size={24} />,
            title: "Strategic Partnership",
            desc: "We don't just build software; we align with your goals to drive long-term success."
        }
    ];

    return (
        <section id="about" style={{ padding: '10rem 0', background: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Digital Excellence Philosophy</span>
                    <h2 className="section-title">Driven by <span className="text-gradient">innovation</span></h2>
                    <p className="section-subtitle">
                        Pafagel Software Solutions is where engineering meets creativity. We transform complex problems into elegant, user-centric digital experiences.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '2.5rem' }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            style={{ textAlign: 'center', padding: '3.5rem 2.5rem' }}
                        >
                            <div className="icon-box" style={{ margin: '0 auto 2rem', width: '56px', height: '56px', borderRadius: '14px' }}>
                                {f.icon}
                            </div>
                            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 800 }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
