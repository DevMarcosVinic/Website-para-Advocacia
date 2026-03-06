import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, GraduationCap, Briefcase, Users } from "lucide-react";

const LAWYER_IMG =
  "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMHN1aXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcyODI0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const credentials = [
  { icon: GraduationCap, text: "Mestre em Direito Civil — USP" },
  { icon: Briefcase, text: "18 anos de atuação em litígios de alto impacto" },
  { icon: Users, text: "Mais de 1.400 clientes representados" },
  { icon: CheckCircle2, text: "Membro da Comissão de Direito Empresarial — OAB/SP" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      className="py-28 overflow-hidden"
      style={{ background: "#0C1C35" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Gold frame accent */}
            <div
              className="absolute -top-4 -left-4 w-full h-full"
              style={{
                border: "1px solid rgba(201,165,90,0.25)",
                borderRadius: "2px",
              }}
            />
            <div className="relative overflow-hidden" style={{ borderRadius: "2px" }}>
              <img
                src={LAWYER_IMG}
                alt="Dr. Alexandre Nogueira"
                className="w-full object-cover"
                style={{ height: "520px", filter: "grayscale(15%)" }}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(12,28,53,0.7) 0%, transparent 60%)",
                }}
              />
              {/* Name badge */}
              <div
                className="absolute bottom-6 left-6 right-6"
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F7F5F0",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                  }}
                >
                  Dr. Alexandre Nogueira
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#C9A55A",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Sócio Fundador · OAB/SP 234.567
                </p>
              </div>
            </div>

            {/* Floating award badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-6 top-12 p-5"
              style={{
                background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                borderRadius: "2px",
                boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0C1C35",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                18
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(12,28,53,0.7)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Anos de
                <br />
                Excelência
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "#C9A55A" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#C9A55A",
                  fontSize: "0.7rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Quem Somos
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F7F5F0",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.2,
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Autoridade Jurídica.
              <br />
              <em style={{ color: "#C9A55A", fontStyle: "italic" }}>
                Resultado Real.
              </em>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(247,245,240,0.65)",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: "16px",
              }}
            >
              O <strong style={{ color: "#F7F5F0", fontWeight: 500 }}>Escritório Nogueira & Associados</strong> foi fundado com um único propósito: oferecer defesa jurídica de excelência para pessoas e empresas que não se conformam com resultados mediocres.
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(247,245,240,0.55)",
                fontSize: "0.92rem",
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: "36px",
              }}
            >
              Cada caso é tratado como único. Nossa equipe combina rigor técnico com visão estratégica — porque em Direito, a diferença entre ganhar e perder está nos detalhes que a maioria ignora.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-10">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,165,90,0.12)",
                      borderRadius: "2px",
                      border: "1px solid rgba(201,165,90,0.2)",
                    }}
                  >
                    <cred.icon size={14} style={{ color: "#C9A55A" }} />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(247,245,240,0.7)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {cred.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.querySelector("#contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 transition-all duration-300"
              style={{
                background: "transparent",
                border: "1px solid rgba(201,165,90,0.5)",
                color: "#C9A55A",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "2px",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,165,90,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "#C9A55A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,165,90,0.5)";
              }}
            >
              Falar com a equipe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
