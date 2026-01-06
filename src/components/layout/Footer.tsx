export function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 0',
        borderTop: '1px solid #e6e9ef',
        background: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: '1.125rem' }}>Esha Shah</h3>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: '0.875rem',
              color: '#6b7280',
            }}
          >
            Front End / Shopify Developer
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#374151', textDecoration: 'none' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#374151', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#374151', textDecoration: 'none' }}
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#374151', textDecoration: 'none' }}
          >
            Instagram
          </a>
        </div>

        <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          © {new Date().getFullYear()} Esha Shah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
