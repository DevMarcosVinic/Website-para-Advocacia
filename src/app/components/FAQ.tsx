import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "A primeira consulta é realmente gratuita?",
    a: "Sim. Oferecemos uma avaliação inicial de 30 minutos sem qualquer custo ou compromisso. Nesse encontro, analisamos seu caso, respondemos suas principais dúvidas e apresentamos um diagnóstico jurídico preliminar. Só avançamos juntos se você se sentir seguro.",
  },
  {
    q: "Quanto tempo leva um processo jurídico?",
    a: "A duração varia conforme a complexidade do caso e a esfera judicial. Processos extrajudiciais (acordos e negociações) podem ser resolvidos em semanas. Ações judiciais, em média, levam de 1 a 3 anos. Sempre fornecemos um cronograma realista na primeira consulta.",
  },
  {
    q: "Como são cobrados os honorários advocatícios?",
    a: "Trabalhamos com diferentes modelos: honorários fixos (valores pré-acordados), êxito (percentual sobre o valor ganho) ou mensalidade para assessoria contínua. A forma de cobrança é sempre discutida com transparência antes do início do trabalho.",
  },
  {
    q: "Vocês atendem clientes de outras cidades ou estados?",
    a: "Sim. Grande parte das nossas consultas e acompanhamentos é feita de forma remota — por videochamada, e-mail e plataformas seguras. Para audiências e atos presenciais, contamos com correspondentes jurídicos em todo o Brasil.",
  },
  {
    q: "Tenho um prazo urgente. Vocês conseguem atender?",
    a: "Casos urgentes têm prioridade no nosso fluxo de atendimento. Entre em contato pelo WhatsApp ou pelo formulário e informe a urgência. Nossa equipe retorna em até 2 horas em dias úteis.",
  },
  {
    q: "Como funciona o sigilo das informações que compartilho?",
    a: "Todo o conteúdo compartilhado com o escritório é protegido pelo sigilo profissional previsto no Estatuto da OAB e pela Lei Geral de Proteção de Dados (LGPD). Suas informações nunca são compartilhadas com terceiros sem sua autorização expressa.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="border-b"
      style={{ borderColor: "rgba(247,245,240,0.1)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: open ? "#C9A55A" : "#F7F5F0",
            fontSize: "1rem",
            fontWeight: open ? 600 : 400,
            lineHeight: 1.4,
            transition: "color 0.3s",
            paddingRight: "24px",
          }}
        >
          {faq.q}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "linear-gradient(135deg, #C9A55A, #a07d3a)" : "rgba(247,245,240,0.08)",
            borderRadius: "50%",
          }}
        >
          {open ? (
            <Minus size={14} style={{ color: "#0C1C35" }} />
          ) : (
            <Plus size={14} style={{ color: "#C9A55A" }} />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(247,245,240,0.55)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: "680px",
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="py-28 overflow-hidden"
      style={{ background: "#0C1C35" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left label */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
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
                Perguntas Frequentes
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F7F5F0",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                lineHeight: 1.2,
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Suas Dúvidas,
              <br />
              <em style={{ color: "#C9A55A" }}>Respondidas.</em>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(247,245,240,0.45)",
                fontSize: "0.88rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Ainda tem perguntas? Nossa equipe está disponível para esclarecer qualquer dúvida antes mesmo de você agendar.
            </p>

            <button
              onClick={() => {
                const el = document.querySelector("#contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 px-6 py-3 transition-all duration-300"
              style={{
                background: "transparent",
                border: "1px solid rgba(201,165,90,0.4)",
                color: "#C9A55A",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                borderRadius: "2px",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,165,90,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Falar agora
            </button>
          </motion.div>

          {/* FAQ list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
