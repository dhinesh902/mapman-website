import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--secondary)",
        color: "rgba(255,255,255,0.7)",
        padding: "8rem 0 4rem",
      }}
    >
      <div className="container">
        <div
          className="grid grid-3"
          style={{ gap: "4rem", marginBottom: "6rem" }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                color: "white",
                fontSize: "1.75rem",
                marginBottom: "1.5rem",
                fontWeight: 800,
                fontFamily: "var(--font-heading)",
              }}
            >
              Pafagel Software <span style={{ opacity: 0.6 }}>Solutions</span>
            </h2>
            <p
              style={{
                maxWidth: "360px",
                marginBottom: "2.5rem",
                lineHeight: "1.8",
                fontFamily: "var(--font-main)",
              }}
            >
              We refine ideas into intelligent digital experiences. Engineering
              excellence for fast-moving businesses.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href="mailto:pafagel@gmail.com"
                className="icon-box"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "none",
                }}
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+919342376760"
                className="icon-box"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "none",
                }}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3
              style={{
                color: "white",
                fontSize: "0.9rem",
                marginBottom: "2rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-heading)",
              }}
            >
              Navigation
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {["About", "Services", "Product", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "var(--transition)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              style={{
                color: "white",
                fontSize: "0.9rem",
                marginBottom: "2rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-heading)",
              }}
            >
              Connect
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    width: "36px",
                    height: "36px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone size={14} style={{ color: "white" }} />
                </div>
                <span
                  style={{
                    fontWeight: 600,
                    color: "white",
                    fontSize: "0.95rem",
                  }}
                >
                  +91 9342376760
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    width: "36px",
                    height: "36px",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={14} style={{ color: "white" }} />
                </div>
                <span
                  style={{
                    fontWeight: 600,
                    color: "white",
                    fontSize: "0.95rem",
                  }}
                >
                  pafagelsoftwaresolutionspvtltd@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "3rem",
            textAlign: "center",
            fontSize: "0.85rem",
            opacity: 0.4,
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          © {new Date().getFullYear()} Pafagel Software Solutions Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
