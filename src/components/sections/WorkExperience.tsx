import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function WorkExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;

      if (!container || !wrapper) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const scrollWidth = container.scrollWidth;
        const windowWidth = window.innerWidth;

        if (scrollWidth <= windowWidth) return;

        gsap.to(container, {
          x: -(scrollWidth - windowWidth),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            start: "top top",
            end: `+=${scrollWidth - windowWidth}`,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-foreground text-background"
    >
      {/* Wrapper */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {/* Heading */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-foreground">
          <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Selected Experience
            </h2>
            <p className="text-white/60 max-w-xl">
              A snapshot of my journey across frontend, Shopify, and
              e-commerce-driven products.
            </p>
          </div>
        </div>

        {/* Horizontal container */}
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row h-full pt-40 md:pt-0"
        >
          {/* PANEL 1 — CURRENT ROLE */}
          <div className="w-full md:w-[60vw] h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-12 border-b md:border-b-0 md:border-r border-white/10">
            <div className="max-w-xl">
              <span className="text-white/40 text-sm font-mono mb-4 block">
                CURRENT ROLE
              </span>
              <h3 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Swanky
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Leading frontend development for high-growth Shopify brands,
                focusing on performance, conversion optimisation, and scalable
                UI systems.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2">Role</h4>
                  <p className="text-white/60">Frontend / Shopify Developer</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Tech</h4>
                  <p className="text-white/60">
                    React, Shopify, Tailwind, GSAP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PANEL 2 — PROJECT */}
          <div className="w-full md:w-[40vw] h-screen flex-shrink-0 px-6 md:px-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-8 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200"
                alt="Ecommerce project"
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-3xl font-display font-bold mb-2">
              High-Conversion Shopify Build
            </h4>
            <p className="text-white/60">
              Custom storefront • CRO-focused • 2024
            </p>
          </div>

          {/* PANEL 3 — PROJECT */}
          <div className="w-full md:w-[40vw] h-screen flex-shrink-0 px-6 md:px-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-8 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1200"
                alt="Brand experience"
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-3xl font-display font-bold mb-2">
              Brand Experience Platform
            </h4>
            <p className="text-white/60">Frontend system • Performance-first</p>
          </div>

          {/* PANEL 4 — PREVIOUS ROLE */}
          <div className="w-full md:w-[60vw] h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-12 bg-background text-foreground">
            <div className="max-w-xl">
              <span className="text-muted-foreground text-sm font-mono mb-4 block">
                PREVIOUS ROLE
              </span>
              <h3 className="text-5xl md:text-7xl font-display font-bold mb-6">
                TechFlow
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Worked across multiple frontend applications, collaborating with
                designers and backend teams to ship accessible, scalable web
                products.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2">Role</h4>
                  <p className="text-muted-foreground">Frontend Developer</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Tech</h4>
                  <p className="text-muted-foreground">Vue, Nuxt, Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
