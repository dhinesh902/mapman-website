import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#0F172A', color: 'rgba(255,255,255,0.7)', padding: '8rem 0 4rem' }}>
            <div className="container">
                <div className="grid grid-3" style={{ gap: '4rem', marginBottom: '6rem' }}>

                    <div style={{ flex: 1 }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 800 }}>
                            Pafagel <span className="text-gradient">Software</span>
                        </h2>
                        <p style={{ maxWidth: '360px', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                            We refine ideas into intelligent digital experiences. Engineering excellence for fast-moving businesses.
                        </p>
                        <div style={{ display: 'flex', gap: '1.25rem' }}>
                            <a href="mailto:pafagel@gmail.com" className="icon-box" style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                                <Mail size={18} />
                            </a>
                            <a href="tel:+919342376760" className="icon-box" style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                                <Phone size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Navigation</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {['About', 'Services', 'Product', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'var(--transition)', fontSize: '1rem', fontWeight: 600 }}>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Phone size={18} style={{ color: 'var(--primary)' }} />
                                <span style={{ fontWeight: 600 }}>+91 9342376760</span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={18} style={{ color: 'var(--primary)' }} />
                                <span style={{ fontWeight: 600 }}>pafagel@gmail.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', textAlign: 'center', fontSize: '0.9rem', opacity: 0.5, fontWeight: 500 }}>
                    © {new Date().getFullYear()} Pafagel Software Solutions. Engineered for the future.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
