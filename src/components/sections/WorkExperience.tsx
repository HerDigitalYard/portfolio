import { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

interface Project {
  id: number;
  clientName: string;
  projectType: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

interface Company {
  name: string;
  role: string;
  period: string;
  website?: string;
  projects: Project[];
}

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeCompany, setActiveCompany] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  // Sample data - replace with your actual data
  const companies: Company[] = [
    {
      name: 'Digital Agency Name',
      role: 'Senior Shopify Developer',
      period: '2022 - Present',
      website: 'https://agency.com',
      projects: [
        {
          id: 1,
          clientName: 'Luxury Fashion Brand',
          projectType: 'Full Shopify Store Development',
          description:
            'Built a custom Shopify store with advanced filtering, wishlist functionality, and seamless checkout experience.',
          technologies: ['Shopify', 'Liquid', 'JavaScript', 'Custom Theme'],
          link: 'https://client1.com',
        },
        {
          id: 2,
          clientName: 'Beauty E-commerce',
          projectType: 'Store Migration & Optimization',
          description:
            'Migrated from WooCommerce to Shopify Plus, implemented custom subscription model and improved page speed by 60%.',
          technologies: [
            'Shopify Plus',
            'React',
            'Subscription API',
            'Performance Optimization',
          ],
          link: 'https://client2.com',
        },
        {
          id: 3,
          clientName: 'Tech Accessories Store',
          projectType: 'Custom App Development',
          description:
            'Developed custom Shopify app for inventory management and real-time sync with warehouse system.',
          technologies: [
            'Shopify App',
            'Node.js',
            'GraphQL',
            'API Integration',
          ],
        },
      ],
    },
    {
      name: 'Previous Agency',
      role: 'Shopify Developer',
      period: '2020 - 2022',
      website: 'https://agency2.com',
      projects: [
        {
          id: 4,
          clientName: 'Home Decor Brand',
          projectType: 'Theme Customization',
          description:
            'Customized Dawn theme with unique product builder, 3D preview, and AR features.',
          technologies: [
            'Shopify',
            'JavaScript',
            'Three.js',
            'Custom Sections',
          ],
        },
        {
          id: 5,
          clientName: 'Food & Beverage',
          projectType: 'Multi-store Setup',
          description:
            'Created multi-currency, multi-language store setup with centralized inventory management.',
          technologies: ['Shopify Markets', 'Liquid', 'Translation API'],
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Companies list animation
      gsap.from('.company-card', {
        scrollTrigger: {
          trigger: companiesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Projects animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate project change
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          x: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, [activeProject]);

  const handleCompanyClick = (index: number) => {
    setActiveCompany(index);
    setActiveProject(0);

    // Animate company switch
    gsap.fromTo(
      '.companies-list .company-card',
      { x: -20, opacity: 0.5 },
      { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
    );
  };

  const nextProject = () => {
    if (activeProject < companies[activeCompany].projects.length - 1) {
      gsap.to('.project-card', {
        x: -50,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setActiveProject(activeProject + 1);
        },
      });
    }
  };

  const prevProject = () => {
    if (activeProject > 0) {
      gsap.to('.project-card', {
        x: 50,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setActiveProject(activeProject - 1);
        },
      });
    }
  };

  return (
    <section ref={sectionRef} id="work" className="work-section">
      <div className="work-container">
        <div className="section-header" ref={titleRef}>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Trusted by agencies and brands to deliver exceptional e-commerce
            solutions
          </p>
        </div>

        <div className="work-content">
          {/* Left Side - Companies */}
          <div ref={companiesRef} className="companies-list">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`company-card ${activeCompany === index ? 'active' : ''}`}
                onClick={() => handleCompanyClick(index)}
              >
                <div className="company-header">
                  <h3>{company.name}</h3>
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className="company-role">{company.role}</p>
                <p className="company-period">{company.period}</p>
                <div className="project-count">
                  {company.projects.length} Projects
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Projects */}
          <div ref={projectsRef} className="projects-container">
            <div className="project-card">
              <div className="project-header">
                <h3>
                  {companies[activeCompany].projects[activeProject].clientName}
                </h3>
                {companies[activeCompany].projects[activeProject].link && (
                  <a
                    href={companies[activeCompany].projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live ↗
                  </a>
                )}
              </div>
              <p className="project-type">
                {companies[activeCompany].projects[activeProject].projectType}
              </p>
              <p className="project-description">
                {companies[activeCompany].projects[activeProject].description}
              </p>
              <div className="tech-stack">
                {companies[activeCompany].projects[
                  activeProject
                ].technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="carousel-controls">
              <button
                onClick={prevProject}
                disabled={activeProject === 0}
                className="carousel-btn"
              >
                ← Previous
              </button>
              <div className="carousel-dots">
                {companies[activeCompany].projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      gsap.to('.project-card', {
                        x: index > activeProject ? -50 : 50,
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => setActiveProject(index),
                      });
                    }}
                    className={`dot ${activeProject === index ? 'active' : ''}`}
                  />
                ))}
              </div>
              <button
                onClick={nextProject}
                disabled={
                  activeProject === companies[activeCompany].projects.length - 1
                }
                className="carousel-btn"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .work-section {
          min-height: 100vh;
          background: #0f0f0f;
          padding: 6rem 2rem;
          color: white;
          position: relative;
        }

        .work-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .work-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 3rem;
          align-items: start;
        }

        .companies-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: sticky;
          top: 2rem;
        }

        .company-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .company-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s;
        }

        .company-card:hover::before {
          left: 100%;
        }

        .company-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateX(8px);
        }

        .company-card.active {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);
        }

        .company-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 0.5rem;
        }

        .company-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
        }

        .company-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .company-link:hover {
          color: #6366f1;
          transform: scale(1.2);
        }

        .company-role {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.938rem;
          margin-bottom: 0.25rem;
        }

        .company-period {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .project-count {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 20px;
          font-size: 0.813rem;
          color: #a5b4fc;
        }

        .projects-container {
          position: relative;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          min-height: 400px;
        }

        .project-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 0.75rem;
        }

        .project-header h3 {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
        }

        .project-link {
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .project-link:hover {
          background: rgba(99, 102, 241, 0.3);
          color: #c7d2fe;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
        }

        .project-type {
          color: #6366f1;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1.063rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        .carousel-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding: 0 1rem;
        }

        .carousel-btn {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .carousel-btn:hover:not(:disabled) {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }

        .carousel-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .carousel-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(99, 102, 241, 0.5);
        }

        .dot.active {
          background: #6366f1;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }

        @media (max-width: 1024px) {
          .work-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .companies-list {
            position: relative;
            top: 0;
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 1rem;
          }

          .company-card {
            min-width: 280px;
          }
        }

        @media (max-width: 768px) {
          .work-section {
            padding: 4rem 1rem;
          }

          .project-card {
            padding: 1.5rem;
            min-height: auto;
          }

          .project-header {
            flex-direction: column;
            gap: 1rem;
          }

          .project-link {
            align-self: flex-start;
          }

          .carousel-controls {
            flex-direction: column;
            gap: 1rem;
          }

          .carousel-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;
