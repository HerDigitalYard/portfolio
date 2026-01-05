import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#0b1020",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 800, textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Code × Commerce
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#cbd5e1",
            marginBottom: "1.5rem",
          }}
        >
          Frontend & Shopify developer crafting high-performance digital
          experiences.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            borderRadius: 12,
            background: "#2563eb",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Work with me
        </a>
      </div>
    </section>
  );
}
