import React, { useState } from 'react';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simple placeholder behavior: you can wire this to your API later
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    alert('Message sent (placeholder)');
  };

  return (
    <section
      id="contact"
      style={{ padding: '3rem 1rem', background: '#f8fafc' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div
          style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(2,6,23,0.08)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.75rem', margin: 0 }}>
              Let's work together
            </h2>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'grid', gap: '0.75rem' }}
          >
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <input
                name="name"
                placeholder="Your name"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: 8,
                  border: '1px solid #e6e9ef',
                }}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: 8,
                  border: '1px solid #e6e9ef',
                }}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              style={{
                padding: '0.75rem',
                borderRadius: 8,
                border: '1px solid #e6e9ef',
              }}
              required
            />

            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: 10,
                background: '#111827',
                color: '#fff',
                border: 'none',
                cursor: submitting ? 'default' : 'pointer',
              }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
