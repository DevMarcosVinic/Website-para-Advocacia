import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Scale } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(12, 28, 53, 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,165,90,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 flex items-center justify-center rounded-sm"
              style={{ background: "linear-gradient(135deg, #C9A55A, #a07d3a)" }}
            >
              <Scale size={18} color="#0C1C35" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p
                className="tracking-widest uppercase text-xs"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#C9A55A",
                  letterSpacing: "0.18em",
                  fontSize: "0.6rem",
                }}
              >
                Escritório de
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#F7F5F0",
                  fontSize: "1rem",
                  lineHeight: 1,
                  letterSpacing: "0.04em",
                }}
              >
                Advocacia
              </p>
            </div>
          </button>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative group"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(247,245,240,0.75)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C9A55A")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(247,245,240,0.75)")}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "#C9A55A" }}
                />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#contato")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                color: "#0C1C35",
                fontWeight: 600,
                letterSpacing: "0.05em",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
                fontSize: "0.82rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(201,165,90,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Agendar Consulta
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{ color: "#F7F5F0", background: "none", border: "none", cursor: "pointer" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: "rgba(12, 28, 53, 0.98)" }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F7F5F0",
                    fontSize: "1.6rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollTo("#contato")}
                className="mt-4 px-8 py-3"
                style={{
                  background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                  color: "#0C1C35",
                  fontWeight: 700,
                  fontFamily: "'Inter', sans-serif",
                  borderRadius: "2px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                }}
              >
                AGENDAR CONSULTA
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
