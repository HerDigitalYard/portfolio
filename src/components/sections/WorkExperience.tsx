export function WorkExperience() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Selected Work
        </h2>
        <p>A journey through my professional experience.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Company 1 */}
        <div
          style={{
            padding: "2rem",
            border: "1px solid #333",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Swaky</h3>
          <p>Led the frontend development of e-commerce solutions.</p>
          <p>Role: Senior Frontend Developer</p>
          <p>Tech: React, Shopify</p>
        </div>

        {/* Clients */}
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
          <div
            style={{
              minWidth: "300px",
              padding: "1rem",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project"
              style={{ width: "100%", height: "auto" }}
            />
            <h4>Arch Studio</h4>
            <p>Portfolio Website • 2023</p>
          </div>
          <div
            style={{
              minWidth: "300px",
              padding: "1rem",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project"
              style={{ width: "100%", height: "auto" }}
            />
            <h4>VOGUE Mode</h4>
            <p>Shopify Store • 2023</p>
          </div>
          <div
            style={{
              minWidth: "300px",
              padding: "1rem",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project"
              style={{ width: "100%", height: "auto" }}
            />
            <h4>Bean & Brew</h4>
            <p>Brand Experience • 2022</p>
          </div>
        </div>

        {/* Company 2 */}
        <div
          style={{
            padding: "2rem",
            border: "1px solid #333",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>TechFlow</h3>
          <p>Collaborated with cross-functional teams.</p>
          <p>Role: Frontend Developer</p>
          <p>Tech: Vue.js, Nuxt</p>
        </div>
      </div>
    </section>
  );
}
