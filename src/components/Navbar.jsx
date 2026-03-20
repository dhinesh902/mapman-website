import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Product', href: '#product' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <motion.a
          href="#"
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div className="logo-dot" style={{
              width: '10px',
              height: '10px',
              background: 'var(--primary)',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}></div>
            <span style={{ fontWeight: 800 }}>Pafagel Software Solutions</span>
            {/* <span style={{ opacity: 0.5, fontWeight: 400 }}>Website</span> */}
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          <LayoutGroup id="nav">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="nav-item-wrapper"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.a
                  href={link.href}
                  className="nav-link-item"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </LayoutGroup>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.75rem',
              fontSize: '0.8rem',
              marginLeft: '0.5rem',
              borderRadius: '30px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Start Project
            <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="toggle-icon-wrapper" style={{
            background: 'var(--primary-light)',
            padding: '0.5rem',
            borderRadius: '4px',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="mobile-menu"
          >
            <div className="mobile-nav-links" style={{ padding: '2rem' }}>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="mobile-link-item"
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 0',
                    borderBottom: index === navLinks.length - 1 ? 'none' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {link.name}
                  <ArrowRight size={18} style={{ opacity: 0.3 }} />
                </motion.a>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ width: '100%', borderRadius: '4px', padding: '1.25rem' }}
                >
                  Start Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

