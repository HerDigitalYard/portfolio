import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-item", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-background px-6"
    >
      <div className="max-w-3xl text-center">
        <h1 className="hero-item text-5xl md:text-7xl font-display font-bold mb-6">
          Code × Commerce
        </h1>
        <p className="hero-item text-lg md:text-xl text-muted-foreground mb-10">
          Frontend & Shopify developer crafting high-performance digital
          experiences.
        </p>

        <a
          href="#contact"
          className="hero-item inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:-translate-y-0.5 transition-all"
        >
          Work with me
        </a>
      </div>
    </section>
  );
}
