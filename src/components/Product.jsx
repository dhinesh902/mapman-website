import React from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Bell, CheckCircle, ArrowRight } from "lucide-react";

const Product = () => {
  const highlights = [
    {
      icon: <MapPin size={22} />,
      title: "Hyper-local Discovery",
      desc: "Connect with high-intent customers in their immediate vicinity.",
    },
    {
      icon: <Bell size={22} />,
      title: "Real-time Engagement",
      desc: "Push instant promotions with measurable impact.",
    },
    {
      icon: <Zap size={22} />,
      title: "Seamless Integration",
      desc: "One-tap business setup with intuitive workflows.",
    },
  ];

  const pills = [
    "Real-time",
    "Proximity-based",
    "One-tap setup",
    "Interactive Maps",
  ];

  return (
    <section
      id="product"
      style={{ background: "var(--bg-surface)", padding: "10rem 0" }}
    >
      <div className="container">
        <div
          className="grid grid-2"
          style={{ alignItems: "center", gap: "8rem" }}
        >
          {/* Left Side: Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="animate-float"
            style={{ display: "flex", justifyContent: "center", order: 1 }}
          >
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                position: "relative",
                maxWidth: "400px",
                cursor: "pointer",
              }}
            >
              <img
                src="src/assets/mapman-mockup.jpeg"
                alt="Mapman App Interface"
                style={{
                  width: "100%",
                  height: "auto",
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15))",
                  borderRadius: "24px",
                  transition: "transform 0.4s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              {/* Decorative Blur behind phone */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background:
                    "radial-gradient(circle, var(--neutral-gray) 0%, transparent 70%)",
                  zIndex: -1,
                  opacity: 0.2,
                }}
              ></div>
            </a>
          </motion.div>

          {/* Right Side: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ order: 0 }}
          >
            <span className="badge">Featured Product</span>

            <h2 className="section-title">
              The <span className="text-gradient">Mapman</span> ecosystem.
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: "20px",
              }}
            >
              <img
                src="src/assets/mapman.png"
                alt="mapman-logo"
                height={90}
                width={100}
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  cursor: "pointer",
                  borderRadius: 15,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
              <h2 style={{ color: "var(--secondary)" }}>Mapman</h2>
            </div>
            <p className="hero-description" style={{ marginBottom: "2.5rem" }}>
              The ultimate discovery bridge. Mapman empowers local businesses to
              manifest their presence digitally and connect with high-intent
              customers nearby in real-time.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              {pills.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    background: "white",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-main)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="grid" style={{ gap: "2rem" }}>
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "start",
                  }}
                >
                  <div
                    className="icon-box"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "4px",
                      flexShrink: 0,
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      boxShadow: "var(--shadow-sm)",
                      color: "var(--secondary)",
                    }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        marginBottom: "0.5rem",
                        fontWeight: 700,
                      }}
                    >
                      {h.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.6",
                      }}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3.5rem" }}>
              <button
                className="btn btn-primary"
                style={{ padding: "1rem 2rem" }}
              >
                Explore Ecosystem <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
