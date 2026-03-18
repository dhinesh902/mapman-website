import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Monitor, Phone, FileCode, Server, Lightbulb, ChevronRight, X } from 'lucide-react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            icon: <Layers size={22} />,
            title: "Custom Software Engineering",
            blurb: "Secure, scalable solutions tailored to your unique business needs.",
            detail: "Our custom software engineering approach focuses on architectural integrity and scalability. We utilize modern stacks to build robust systems that solve complex organizational challenges."
        },
        {
            id: 2,
            icon: <Monitor size={22} />,
            title: "Web Platform Development",
            blurb: "Fast, responsive, and SEO-friendly experiences for every platform.",
            detail: "We specialize in building next-generation web applications using React, Vite, and high-performance backend systems. Our builds prioritize performance and SEO."
        },
        {
            id: 3,
            icon: <Phone size={22} />,
            title: "Mobile App Development",
            blurb: "High-performance Android and iOS apps designed for deep engagement.",
            detail: "Transform your mobile strategy with native or cross-platform applications that deliver smooth, intuitive experiences across all mobile ecosystems."
        },
        {
            id: 4,
            icon: <Lightbulb size={22} />,
            title: "UI/UX Strategy",
            blurb: "Clean interfaces and intuitive navigation that drive user conversion.",
            detail: "Our design philosophy is rooted in user empathy. We create minimalist, high-fidelity interfaces that guide users effortlessly through complex workflows."
        },
        {
            id: 5,
            icon: <FileCode size={22} />,
            title: "API & Integration",
            blurb: "Secure third-party integrations and robust communication bridges.",
            detail: "We engineer secure, RESTful and GraphQL APIs that serve as the backbone for your digital ecosystem, ensuring seamless data flow between systems."
        },
        {
            id: 6,
            icon: <Server size={22} />,
            title: "IT Infrastructure",
            blurb: "Expert guidance on enterprise architecture and digital transformation.",
            detail: "Navigate the complex landscape of digital transformation with our senior consultants. We provide actionable roadmaps for cloud migration and scaling."
        }
    ];

    return (
        <section id="services" style={{ background: 'var(--surface-gradient)', padding: '10rem 0' }}>
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Our <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle"
                    >
                        We combine precision engineering with visionary design to build digital products that move markets.
                    </motion.p>
                </div>

                <div className="grid grid-3" style={{ gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedService(service)}
                            className="card service-card"
                            whileHover={{ y: -10 }}
                            style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', padding: '3.5rem 2.5rem' }}
                        >
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--peach-gradient)' }}></div>

                            <div className="icon-box" style={{ width: '48px', height: '48px', borderRadius: '12px', marginBottom: '2rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '1.25rem', fontSize: '1.4rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>{service.blurb}</p>

                            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Learn more <ChevronRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-overlay"
                        onClick={() => setSelectedService(null)}
                        style={{ backdropFilter: 'blur(10px)', zIndex: 3000 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            style={{ padding: '4rem', boxShadow: 'var(--shadow-xxl)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.5rem' }}
                            >
                                <X size={24} />
                            </button>

                            <div className="icon-box" style={{ width: '64px', height: '64px', borderRadius: '14px', marginBottom: '2.5rem' }}>
                                {selectedService.icon}
                            </div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>{selectedService.title}</h2>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '2.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                                {selectedService.blurb}
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                {selectedService.detail}
                            </p>

                            <button className="btn btn-primary" style={{ marginTop: '3rem', width: '100%', padding: '1.25rem' }}>
                                Start a Conversation
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
