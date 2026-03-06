import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Building2,
  Gavel,
  Users,
  HeartHandshake,
  FileText,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, contratos societários, fusões, aquisições e blindagem patrimonial. Proteja sua empresa com estratégia.",
    highlight: "Mais solicitado",
  },
  {
    icon: Gavel,
    title: "Litígio Estratégico",
    description:
      "Representação em processos civis e comerciais de alto valor. Atuação em tribunais superiores com foco em resultados.",
    highlight: null,
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description:
      "Defesa de empregadores e empregados em ações trabalhistas. Acordos, recursos e consultoria preventiva.",
    highlight: null,
  },
  {
    icon: HeartHandshake,
    title: "Direito de Família",
    description:
      "Divórcios, inventários e guarda de filhos tratados com sensibilidade e eficiência. Menos conflito, mais solução.",
    highlight: null,
  },
  {
    icon: FileText,
    title: "Contratos & Compliance",
    description:
      "Elaboração, revisão e negociação de contratos complexos. Políticas de compliance para empresas de todos os portes.",
    highlight: null,
  },
  {
    icon: ShieldCheck,
    title: "Assessoria Imobiliária",
    description:
      "Due diligence, compra, venda, locação e regularização de imóveis. Segurança jurídica em cada transação.",
    highlight: null,
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="atuacao"
      className="py-28 overflow-hidden"
      style={{ background: "#F7F5F0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
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
              Áreas de Atuação
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#0C1C35",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              lineHeight: 1.2,
              fontWeight: 600,
            }}
          >
            Especialidades que Protegem
            <br />
            <em style={{ color: "#C9A55A", fontStyle: "italic" }}>
              o que Mais Importa para Você.
            </em>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative group p-8 cursor-pointer transition-all duration-400"
              style={{
                background: "#fff",
                border: "1px solid rgba(12,28,53,0.08)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,165,90,0.5)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 50px rgba(12,28,53,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(12,28,53,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {service.highlight && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1"
                  style={{
                    background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                    borderRadius: "2px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#0C1C35",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.highlight}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(12,28,53,0.05), rgba(12,28,53,0.02))",
                  border: "1px solid rgba(201,165,90,0.2)",
                  borderRadius: "3px",
                }}
              >
                <service.icon size={18} style={{ color: "#C9A55A" }} />
              </div>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0C1C35",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(12,28,53,0.55)",
                  fontSize: "0.85rem",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                {service.description}
              </p>

              <div className="flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#C9A55A",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Saiba mais
                </span>
                <ArrowUpRight size={13} style={{ color: "#C9A55A" }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-14 text-center"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(12,28,53,0.45)",
              fontSize: "0.85rem",
              marginBottom: "16px",
            }}
          >
            Não encontrou sua área? Agende uma avaliação — analisamos cada caso individualmente.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 transition-all duration-300"
            style={{
              background: "#0C1C35",
              color: "#F7F5F0",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1a2f50";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(12,28,53,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0C1C35";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Consulta Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
}
