import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Shield, Star, Award } from "lucide-react";

const OFFICE_IMG =
  "https://images.unsplash.com/photo-1758833502047-8f1c7dc5edd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMGRhcmslMjBlbGVnYW50fGVufDF8fHx8MTc3MjgyNDMxMHww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0C1C35" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={OFFICE_IMG}
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0C1C35 0%, rgba(12,28,53,0.85) 50%, rgba(12,28,53,0.95) 100%)",
          }}
        />
      </div>

      {/* Decorative gold lines */}
      <div
        className="absolute top-0 right-0 w-px h-full"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(201,165,90,0.3), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,165,90,0.3), transparent)" }}
      />

      {/* Animated gold orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-5%] top-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(201,165,90,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10" style={{ background: "#C9A55A" }} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#C9A55A",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Advocacia de Alto Padrão
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F7F5F0",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              fontWeight: 600,
            }}
          >
            Quando Seus Direitos
            <br />
            Estão em Jogo,{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#C9A55A",
                display: "block",
              }}
            >
              Você Merece o Melhor.
            </em>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(247,245,240,0.65)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Defendo seus interesses com estratégia, precisão e décadas de expertise. Da triagem ao veredicto — presença total em cada etapa do processo.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#contato")}
              className="group flex items-center gap-3 px-7 py-4 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                color: "#0C1C35",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(201,165,90,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Agendar Avaliação Gratuita
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("#sobre")}
              className="flex items-center gap-2 px-7 py-4 transition-all duration-300"
              style={{
                background: "transparent",
                color: "#F7F5F0",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                border: "1px solid rgba(247,245,240,0.2)",
                borderRadius: "2px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,165,90,0.6)";
                (e.currentTarget as HTMLElement).style.color = "#C9A55A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,245,240,0.2)";
                (e.currentTarget as HTMLElement).style.color = "#F7F5F0";
              }}
            >
              Conhecer o Escritório
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, text: "OAB Certificado" },
              { icon: Star, text: "4.9 no Google" },
              { icon: Award, text: "+18 Anos de Atuação" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={14} style={{ color: "#C9A55A" }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(247,245,240,0.5)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo("#prova")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(247,245,240,0.3)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Explorar
        </span>
        <ChevronDown size={16} style={{ color: "rgba(201,165,90,0.5)" }} />
      </motion.button>
    </section>
  );
}
