import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1400, suffix: "+", label: "Casos Encerrados", sub: "com êxito comprovado" },
  { value: 98, suffix: "%", label: "Taxa de Satisfação", sub: "avaliações verificadas" },
  { value: 18, suffix: " anos", label: "de Experiência", sub: "em litigância estratégica" },
  { value: 3, suffix: "x", label: "Premiações OAB", sub: "excelência jurídica" },
];

const testimonials = [
  {
    name: "Ricardo M.",
    role: "Empresário",
    text: "Solucionaram um processo trabalhista complexo em tempo recorde. Profissionalismo impecável do início ao fim.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    role: "Profissional Liberal",
    text: "Fui tratada com respeito e transparência em cada etapa. Recomendo sem hesitar.",
    stars: 5,
  },
  {
    name: "Carlos A.",
    role: "Empreendedor",
    text: "Assessoria jurídica que realmente entende o mundo dos negócios. Parceria de longo prazo.",
    stars: 5,
  },
];

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prova" style={{ background: "#F7F5F0" }} className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="text-center group"
            >
              <div
                className="mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  color: "#0C1C35",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#C9A55A",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(12,28,53,0.45)",
                  fontSize: "0.72rem",
                }}
              >
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px" style={{ background: "rgba(12,28,53,0.1)" }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(12,28,53,0.35)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            O que dizem nossos clientes
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(12,28,53,0.1)" }} />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.7 }}
              className="p-8 transition-all duration-300"
              style={{
                background: "#fff",
                border: "1px solid rgba(12,28,53,0.08)",
                borderRadius: "4px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,165,90,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(12,28,53,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(12,28,53,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} size={13} fill="#C9A55A" style={{ color: "#C9A55A" }} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0C1C35",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "20px",
                }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{ background: "linear-gradient(135deg, #C9A55A, #a07d3a)", color: "#0C1C35" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#0C1C35",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(12,28,53,0.45)",
                      fontSize: "0.72rem",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
