import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, ChevronRight } from "lucide-react";

interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
}

const QUICK_REPLIES = [
  "Quero agendar uma consulta",
  "Tenho um processo trabalhista",
  "Preciso de assessoria empresarial",
  "Consulta sobre divórcio",
];

const botFlow: Record<string, { reply: string; next?: string[] }> = {
  default: {
    reply: "Olá! 👋 Sou o assistente virtual do Escritório Nogueira & Associados. Como posso ajudar você hoje?",
    next: QUICK_REPLIES,
  },
  "Quero agendar uma consulta": {
    reply: "Ótimo! Nossa avaliação inicial é 100% gratuita e dura 30 minutos. Você prefere atendimento presencial em São Paulo ou por videochamada?",
    next: ["Presencial — São Paulo", "Videochamada / Online"],
  },
  "Presencial — São Paulo": {
    reply: "Perfeito. Temos disponibilidade esta semana. Para confirmar seu agendamento, preencha o formulário na seção Contato — é rápido e seguro! Posso te direcionar agora?",
    next: ["Sim, ir para o formulário", "Tenho outra dúvida"],
  },
  "Videochamada / Online": {
    reply: "Excelente! Atendemos clientes de todo o Brasil por videochamada. Acesse o formulário na seção Contato e selecione seu melhor horário. Retornamos em até 2h úteis.",
    next: ["Sim, ir para o formulário", "Tenho outra dúvida"],
  },
  "Sim, ir para o formulário": {
    reply: "Te redirecionando... Role até a seção 'Agendamento' ou clique no botão abaixo! 🗓️",
  },
  "Tenho um processo trabalhista": {
    reply: "Entendemos — processos trabalhistas podem ser estressantes. Nossa equipe tem ampla experiência tanto na defesa de empresas quanto de trabalhadores. Você é empregador ou empregado?",
    next: ["Sou empregador", "Sou empregado"],
  },
  "Sou empregador": {
    reply: "Para empresas, oferecemos desde a defesa em ações individuais até a implementação de compliance trabalhista preventivo. Agende uma consulta gratuita para analisarmos sua situação.",
    next: ["Quero agendar uma consulta"],
  },
  "Sou empregado": {
    reply: "Seus direitos são nossa prioridade. Atuamos em verbas rescisórias, assédio moral, horas extras e mais. A primeira consulta é gratuita e sigilosa.",
    next: ["Quero agendar uma consulta"],
  },
  "Preciso de assessoria empresarial": {
    reply: "Perfeito! Atendemos empresas de todos os portes com contratos, societário, compliance e litígios. Qual a necessidade mais urgente?",
    next: ["Contratos e negociações", "Questão societária", "Compliance / LGPD"],
  },
  "Contratos e negociações": {
    reply: "Elaboramos, revisamos e negociamos contratos complexos com foco em proteção total. Agende uma avaliação gratuita com um dos nossos especialistas.",
    next: ["Quero agendar uma consulta"],
  },
  "Questão societária": {
    reply: "Desde a constituição até fusões e dissolução, cuidamos de toda a vida jurídica da sua empresa. Agende agora — sem custo inicial.",
    next: ["Quero agendar uma consulta"],
  },
  "Compliance / LGPD": {
    reply: "Ajudamos empresas a se adequarem à LGPD e a implementar políticas de compliance robustas. Vamos marcar uma conversa estratégica?",
    next: ["Quero agendar uma consulta"],
  },
  "Consulta sobre divórcio": {
    reply: "Tratamos casos de família com toda a sensibilidade que o momento exige. Divórcios consensuais e litigiosos, guarda de filhos e partilha de bens. Posso agendar sua avaliação gratuita?",
    next: ["Quero agendar uma consulta", "Tenho outra dúvida"],
  },
  "Tenho outra dúvida": {
    reply: "Claro! Pode me perguntar. Para questões mais específicas, nosso time jurídico está disponível pelo WhatsApp ou pelo formulário de contato.",
    next: QUICK_REPLIES,
  },
};

let msgId = 10;

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: "bot", text: botFlow.default.reply },
  ]);
  const [quickReplies, setQuickReplies] = useState<string[]>(QUICK_REPLIES);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Show badge after 5s
  const [showBadge, setShowBadge] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const sendMessage = (text: string) => {
    const userMsg: Message = { id: ++msgId, from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setQuickReplies([]);
    setTyping(true);

    setTimeout(() => {
      const flow = botFlow[text] || {
        reply: "Entendido! Para que possamos ajudar melhor, recomendo agendar uma avaliação gratuita com nossa equipe.",
        next: ["Quero agendar uma consulta"],
      };
      const botMsg: Message = { id: ++msgId, from: "bot", text: flow.reply };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
      if (flow.next) setQuickReplies(flow.next);
      if (text === "Sim, ir para o formulário") {
        setTimeout(() => {
          const el = document.querySelector("#contato");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 800);
      }
    }, 900 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Notification badge */}
        <AnimatePresence>
          {showBadge && !open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-3 px-4 py-2.5 whitespace-nowrap"
              style={{
                background: "#0C1C35",
                borderRadius: "8px 8px 0 8px",
                border: "1px solid rgba(201,165,90,0.3)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#F7F5F0",
                  fontSize: "0.78rem",
                }}
              >
                💬 Posso ajudar com seu caso?
              </p>
              <div
                className="absolute bottom-0 right-4 w-2 h-2 rotate-45"
                style={{ background: "#0C1C35", transform: "translateY(50%) rotate(45deg)", border: "1px solid rgba(201,165,90,0.3)", borderTop: "none", borderLeft: "none" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => { setOpen(!open); setShowBadge(false); }}
          className="w-14 h-14 flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "#0C1C35" : "linear-gradient(135deg, #C9A55A, #a07d3a)",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={22} color="#C9A55A" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageCircle size={22} color="#0C1C35" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 flex flex-col"
            style={{
              width: "min(380px, calc(100vw - 32px))",
              height: "500px",
              background: "#0C1C35",
              borderRadius: "12px",
              border: "1px solid rgba(201,165,90,0.2)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{
                background: "linear-gradient(135deg, rgba(201,165,90,0.15), rgba(201,165,90,0.05))",
                borderBottom: "1px solid rgba(201,165,90,0.15)",
              }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center rounded-full relative"
                style={{ background: "linear-gradient(135deg, #C9A55A, #a07d3a)" }}
              >
                <Bot size={16} color="#0C1C35" />
                <div
                  className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full"
                  style={{ background: "#4ade80", border: "2px solid #0C1C35" }}
                />
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#F7F5F0", fontSize: "0.85rem", fontWeight: 600 }}>
                  Assistente Jurídico
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#C9A55A", fontSize: "0.68rem", letterSpacing: "0.06em" }}>
                  Nogueira & Associados · Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(201,165,90,0.2) transparent" }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] px-4 py-2.5"
                    style={{
                      background: msg.from === "user"
                        ? "linear-gradient(135deg, #C9A55A, #a07d3a)"
                        : "rgba(247,245,240,0.07)",
                      color: msg.from === "user" ? "#0C1C35" : "#F7F5F0",
                      borderRadius: msg.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                      fontWeight: msg.from === "user" ? 500 : 300,
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-1.5 px-4 py-3"
                    style={{
                      background: "rgba(247,245,240,0.07)",
                      borderRadius: "12px 12px 12px 2px",
                      width: "fit-content",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#C9A55A" }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {quickReplies.length > 0 && (
              <div
                className="px-4 py-3 flex flex-wrap gap-2"
                style={{ borderTop: "1px solid rgba(247,245,240,0.06)" }}
              >
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="flex items-center gap-1 px-3 py-1.5 transition-all duration-200"
                    style={{
                      background: "rgba(201,165,90,0.1)",
                      border: "1px solid rgba(201,165,90,0.25)",
                      borderRadius: "20px",
                      color: "#C9A55A",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(201,165,90,0.2)";
                      (e.currentTarget as HTMLElement).style.borderColor = "#C9A55A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(201,165,90,0.1)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,165,90,0.25)";
                    }}
                  >
                    <ChevronRight size={10} />
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <div
              className="flex items-center gap-2 px-3 py-3"
              style={{ borderTop: "1px solid rgba(247,245,240,0.08)" }}
            >
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                style={{
                  flex: 1,
                  background: "rgba(247,245,240,0.05)",
                  border: "1px solid rgba(247,245,240,0.1)",
                  borderRadius: "20px",
                  padding: "8px 14px",
                  color: "#F7F5F0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  outline: "none",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.target as HTMLInputElement).value.trim()) {
                    sendMessage((e.target as HTMLInputElement).value.trim());
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
              <button
                className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Send size={13} color="#0C1C35" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
