import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Send, Zap } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '10rem 0', background: 'var(--bg-surface)' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '6rem' }}>
                    <span className="badge">Connect With Us</span>
                    <h2 className="section-title">Let's build something <span className="text-gradient">remarkable</span>.</h2>
                    <p className="section-subtitle">
                        Ready to transform your digital presence? We're here to help you navigate the journey.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="card"
                        style={{ padding: '4rem', background: '#FFFFFF', boxShadow: 'var(--shadow-xl)' }}
                    >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-2" style={{ gap: '2rem' }}>
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="Jane" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" placeholder="jane@example.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Interested Service</label>
                                <select className="form-control" style={{ appearance: 'none' }}>
                                    <option>Select a service</option>
                                    <option>Web Platform Engineering</option>
                                    <option>Mobile Engineering</option>
                                    <option>Cloud Infrastructure</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ marginBottom: '3rem' }}>
                                <label className="form-label">Project Details</label>
                                <textarea className="form-control" rows="4" placeholder="Briefly describe your goals..."></textarea>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                                Send Inquiry <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        <motion.div
                            className="card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ padding: '4rem', background: 'var(--peach-gradient)', color: 'white', border: 'none', boxShadow: '0 20px 40px -10px rgba(255, 154, 139, 0.4)' }}
                        >
                            <div style={{ background: 'rgba(255,255,255,0.2)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
                                <Calendar size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', color: 'white', fontSize: '1.85rem' }}>Experience the demo</h3>
                            <p style={{ opacity: 0.95, marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                See how our products and services can accelerate your business growth. Book a personalized walkthrough today.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontWeight: 700 }}>
                                <Zap size={20} /> Response within 24 hours
                            </div>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '1rem' }}>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <div className="icon-box" style={{ width: '56px', height: '56px', borderRadius: '14px' }}>
                                    <Mail size={24} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                                    <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>pafagel@gmail.com</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                                <div className="icon-box" style={{ width: '56px', height: '56px', borderRadius: '14px' }}>
                                    <Phone size={24} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call / WhatsApp</div>
                                    <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>+91 9342376760</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
