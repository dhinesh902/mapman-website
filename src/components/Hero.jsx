import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Smartphone,
  Cloud,
  UserCheck,
  ArrowRight,
  Zap,
} from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="hero-section" style={{ position: 'relative' }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle at top right, var(--bg-surface), transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.6
        }}
      />
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <div className="container">
        <div
          className="grid grid-2"
          style={{ alignItems: "center", minHeight: "80vh" }}
        >
          {/* Left Side: Impactful Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="badge">CUSTOMIZED SOFTWARE SOLUTIONS</span>
            </motion.div>

            <h3 className="hero-title">
              Crafting intelligent{" "}
              <span className="text-gradient">software</span> for fast-moving
              businesses.
            </h3>

            <p className="hero-description">
              We build resilient, data-driven software ecosystems that help
              visionary organizations lead their market. From strategy to
              production-grade deployment.
            </p>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="#services" className="btn btn-primary">
                Launch Your Project <ArrowRight size={20} />
              </a>
              <a href="#product" className="hero-text-link">
                Explorer Mapman Ecosystem &rarr;
              </a>
            </div>

            {/* Social Proof Placeholder - Subtle */}
            <div
              style={{
                marginTop: "4rem",
                opacity: 0.5,
                fontSize: "0.85rem",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Trusted by innovators at
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  fontWeight: 800,
                  fontSize: "1rem",
                  fontStyle: "italic",
                }}
              >
                <span>TECHCORP</span>
                <span>SOLARIS</span>
                <span>INFITECH</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Sophisticated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="hero-visual-root"
          >
            {/* Main Image Layer */}
            <div className="hero-image-wrapper animate-float" style={{ maxWidth: '480px' }}>
              <img
                src="/assets/hero-visual.png"
                alt="Abstract Digital Ecosystem"
                className="hero-main-img"
              />

              {/* Overlay Glass Card 1: Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="glass-card hero-overlay-card card-top-right"
              >
                <div className="overlay-icon-box">
                  <Zap size={18} />
                </div>
                <div className="overlay-text">
                  <div className="label">Performance</div>
                  <div className="value">99.9% Uptime</div>
                </div>
              </motion.div>

              {/* Overlay Glass Card 2: Security */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="glass-card hero-overlay-card card-bottom-left"
              >
                <div className="overlay-icon-box">
                  <Cloud size={18} />
                </div>
                <div className="overlay-text">
                  <div className="label">Cloud Safe</div>
                  <div className="value">Military Grade Encryption</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="hero-bg-decoration"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
