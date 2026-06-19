import { useEffect } from "react";
import {
  Navbar,
  BrandCard,
  WorkReel,
  CaseStudyModal,
  AboutModal,
  ContactModal,
  ScrollReveal,
  brands,
  openContact,
  ORANGE,
  DARK,
} from "./home";

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: DARK, minHeight: "100vh" }}>
      <Navbar tone="dark" />

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 pb-12 md:pb-16">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: ORANGE }}>
            Selected Work
          </span>
        </ScrollReveal>
        <ScrollReveal>
          <h1
            className="font-black lowercase tracking-tight leading-[0.95] mt-6"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)", color: "#fff" }}
          >
            work we're proud of.
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed">
            From newsletter campaigns to ecommerce overhauls to packaging design and content
            creation, we listen to our partner's needs and meet them where they're at.
          </p>
        </ScrollReveal>
      </div>

      {/* Brand grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {brands.map((b, i) => (
            <BrandCard key={i} brand={b} index={i} />
          ))}
        </div>
      </div>

      {/* Work reel */}
      <div className="mt-8">
        <WorkReel />
      </div>

      {/* Closing CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-24 border-t border-white/10 pt-16 mt-8">
        <ScrollReveal>
          <button
            onClick={() => openContact()}
            className="text-sm font-bold uppercase tracking-widest inline-flex items-center gap-3 hover:opacity-60 transition-opacity cursor-pointer"
            style={{ background: "none", border: "none", color: "#fff" }}
          >
            Let's work together →
          </button>
        </ScrollReveal>
      </div>

      <CaseStudyModal />
      <AboutModal />
      <ContactModal />
    </div>
  );
}
