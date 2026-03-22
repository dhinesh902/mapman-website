import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Monitor,
  Phone,
  FileCode,
  Server,
  Lightbulb,
  ChevronRight,
  X,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Layers size={22} />,
      title: "Custom Software Engineering",
      blurb:
        "Secure, scalable solutions tailored to your unique business needs.",
      detail:
        "Our custom software engineering approach focuses on architectural integrity and scalability. We utilize modern stacks to build robust systems that solve complex organizational challenges.",
    },
    {
      id: 2,
      icon: <Monitor size={22} />,
      title: "Web Platform Development",
      blurb:
        "Fast, responsive, and SEO-friendly experiences for every platform.",
      detail:
        "We specialize in building next-generation web applications using React, Vite, and high-performance backend systems. Our builds prioritize performance and SEO.",
    },
    {
      id: 3,
      icon: <Phone size={22} />,
      title: "Mobile App Development",
      blurb:
        "High-performance Android and iOS apps designed for deep engagement.",
      detail:
        "Transform your mobile strategy with native or cross-platform applications that deliver smooth, intuitive experiences across all mobile ecosystems.",
    },
    {
      id: 4,
      icon: <Lightbulb size={22} />,
      title: "UI/UX Strategy",
      blurb:
        "Clean interfaces and intuitive navigation that drive user conversion.",
      detail:
        "Our design philosophy is rooted in user empathy. We create minimalist, high-fidelity interfaces that guide users effortlessly through complex workflows.",
    },
    {
      id: 5,
      icon: <FileCode size={22} />,
      title: "API & Integration",
      blurb:
        "Secure third-party integrations and robust communication bridges.",
      detail:
        "We engineer secure, RESTful and GraphQL APIs that serve as the backbone for your digital ecosystem, ensuring seamless data flow between systems.",
    },
    {
      id: 6,
      icon: <Server size={22} />,
      title: "IT Infrastructure",
      blurb:
        "Expert guidance on enterprise architecture and digital transformation.",
      detail:
        "Navigate the complex landscape of digital transformation with our senior consultants. We provide actionable roadmaps for cloud migration and scaling.",
    },
  ];

  return (
    <section
      id="services"
      style={{ background: "var(--bg-main)", padding: "10rem 0" }}
    >
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
            We combine precision engineering with visionary design to build
            digital products that move markets.
          </motion.p>
        </div>

        <div className="grid grid-3" style={{ gap: "2rem" }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{ perspective: "1000px", height: "400px" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                }}
                animate={{ rotateY: selectedService === service.id ? 180 : 0 }}
              >
                {/* Front Side */}
                <div
                  className="card service-card"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    padding: "3.5rem 2.5rem",
                    margin: 0,
                    overflow: "hidden"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "var(--primary-gradient)",
                    }}
                  ></div>

                  <div
                    className="icon-box"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "4px",
                      marginBottom: "2rem",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      marginBottom: "1.25rem",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      lineHeight: "1.7",
                      fontSize: "1rem",
                    }}
                  >
                    {service.blurb}
                  </p>

                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontWeight: 800,
                      color: "var(--primary)",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Learn more <ChevronRight size={14} />
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="card"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "var(--primary-gradient)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "3rem",
                    border: "none",
                    margin: 0,
                    boxShadow: "0 20px 40px rgba(33, 99, 246, 0.2)"
                  }}
                >
                  <h3 style={{
                    color: "white",
                    marginBottom: "1.5rem",
                    fontSize: "1.5rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: "1.8",
                    fontSize: "1.05rem",
                    fontFamily: "var(--font-main)"
                  }}>
                    {service.detail}
                  </p>
                  <div style={{
                    marginTop: "2.5rem",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.7
                  }}>
                    Click to flip back &larr;
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
