import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919342376760"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact on WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/1384/1384095.png"
        alt="whatsapp"
        height={32}
        style={{filter: "brightness(0) invert(1)"}}
      />
    </a>
  );
};

export default WhatsAppButton;
