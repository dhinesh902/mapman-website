import React from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Bell, ArrowRight } from "lucide-react";

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
          style={{ alignItems: "center", gap: "clamp(4rem, 8vw, 10rem)" }}
        >
          {/* Left Side: Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-visual-root"
            style={{
              display: "flex",
              justifyContent: "center",
              order: 1,
              perspective: "1000px",
            }}
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.mapman.mapman&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-float"
              style={{
                display: "block",
                position: "relative",
                maxWidth: "420px",
                cursor: "pointer",
              }}
            >
              <img
                src="src/assets/mapman-mockup.jpeg"
                alt="Mapman App Interface"
                style={{
                  width: "100%",
                  height: "auto",
                  filter: "drop-shadow(0 40px 80px rgba(0, 4, 31, 0.15))",
                  borderRadius: "2rem",
                  transition: "var(--transition)",
                  border: "8px solid white",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform =
                    "scale(1.03) translateY(-10px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1) translateY(0)")
                }
              />
              {/* Specialized Dynamic Blur */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "140%",
                  height: "140%",
                  background:
                    "radial-gradient(circle, var(--primary-soft) 0%, transparent 65%)",
                  zIndex: -1,
                  opacity: 0.4,
                }}
              ></div>
            </a>
          </motion.div>

          {/* Right Side: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ order: 0 }}
          >
            <span className="badge">Featured Ecosystem</span>

            <h2
              className="section-title"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              The <span className="text-gradient">Mapman</span> experience.
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 25,
                margin: "2rem 0 3rem",
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: "1rem",
                  borderRadius: "15px",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border-color)",
                  transition: "var(--transition)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="src/assets/mapman.png"
                  alt="mapman-logo"
                  height={60}
                  width={70}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    background: "linear-gradient(90deg, #0f0e47, #00bfff)", 
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom:"10px"
                  }}
                >
                  Mapman Ecosystem
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                  }}
                >
                  Available on  Play Store
                </p>
              </div>
            </div>

            <p
              className="hero-description"
              style={{
                marginBottom: "3rem",
                fontSize: "1.1rem",
                maxWidth: "100%",
              }}
            >
              The ultimate discovery bridge. Mapman empowers local businesses to
              manifest their presence digitally and connect with high-intent
              customers nearby in real-time with zero friction.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "4rem",
              }}
            >
              {pills.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "0.6rem 1.25rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    background: "var(--bg-main)",
                    border: "1px solid var(--border-color)",
                    color: "var(--primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="grid" style={{ gap: "2.5rem" }}>
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  style={{
                    display: "flex",
                    gap: "1.75rem",
                    alignItems: "start",
                  }}
                >
                  <div
                    className="icon-box"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      flexShrink: 0,
                      background: "var(--primary-soft)",
                      color: "var(--primary)",
                      border: "1px solid rgba(33, 99, 246, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        marginBottom: "0.65rem",
                        fontWeight: 800,
                        color: "var(--text-main)",
                      }}
                    >
                      {h.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--text-muted)",
                        lineHeight: "1.7",
                      }}
                    >
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "5rem" }}>
              <button
                className="btn btn-primary"
                style={{ padding: "1.15rem 2.5rem" }}
              >
                Launch Ecosystem <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Product;
