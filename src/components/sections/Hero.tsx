import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main text animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from('.hero-line', {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      })
        .from(
          '.hero-subtitle',
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .from(
          '.hero-cta',
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .from(
          '.scroll-indicator',
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          '-=0.5'
        );

      // Continuous floating animation for circles
      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          gsap.to(circle, {
            y: index % 2 === 0 ? -40 : -60,
            x: index % 2 === 0 ? 30 : -20,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });

          gsap.to(circle, {
            scale: 1.1,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      // Mouse move parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;

        gsap.to('.floating-circle', {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="hero-section">
      <div
        ref={(el) => {
          if (el) circlesRef.current[0] = el;
        }}
        className="floating-circle circle-1"
      ></div>
      <div
        ref={(el) => {
          if (el) circlesRef.current[1] = el;
        }}
        className="floating-circle circle-2"
      ></div>
      <div
        ref={(el) => {
          if (el) circlesRef.current[2] = el;
        }}
        className="floating-circle circle-3"
      ></div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-line-wrapper">
            <h1 className="hero-line">Hi, I'm Esha</h1>
          </div>
          <div className="hero-line-wrapper">
            <h1 className="hero-line gradient-text">Full-Stack Developer</h1>
          </div>
          <div className="hero-line-wrapper">
            <h1 className="hero-line">Building Digital Excellence</h1>
          </div>
        </div>

        <p className="hero-subtitle">
          Specializing in e-commerce solutions and modern web applications.
          <br />
          Transforming ideas into powerful, scalable digital experiences.
        </p>

        <div className="hero-cta">
          <button onClick={scrollToContact} className="cta-primary">
            Let's Work Together
          </button>
          <a href="#work" onClick={scrollToWork} className="cta-secondary">
            View My Work
          </a>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
          padding: 2rem;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          will-change: transform;
        }

        .circle-1 {
          width: 600px;
          height: 600px;
          top: -200px;
          right: -100px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        }

        .circle-2 {
          width: 450px;
          height: 450px;
          bottom: -150px;
          left: -150px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
        }

        .circle-3 {
          width: 350px;
          height: 350px;
          top: 40%;
          left: 30%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          text-align: center;
          z-index: 1;
          position: relative;
        }

        .hero-text {
          margin-bottom: 2rem;
        }

        .hero-line-wrapper {
          overflow: hidden;
          line-height: 1.2;
        }

        .hero-line {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          color: #fff;
          margin: 0;
          letter-spacing: -0.02em;
          will-change: transform;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary {
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .cta-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
        }

        .cta-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .cta-primary:hover::before {
          left: 100%;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .cta-secondary:hover {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
          animation: floatUpDown 2s ease-in-out infinite;
        }

        .scroll-line {
          width: 2px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(99, 102, 241, 0.5), transparent);
          position: relative;
          overflow: hidden;
        }

        .scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(to bottom, #6366f1, transparent);
          animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes scrollDown {
          0% { transform: translateY(-30px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(50px); opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 1rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
          }

          .scroll-indicator {
            bottom: 2rem;
          }

          .circle-1, .circle-2, .circle-3 {
            filter: blur(60px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
