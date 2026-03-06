import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2 } from "lucide-react";

const AREAS = [
  "Direito Empresarial",
  "Litígio / Processo",
  "Direito Trabalhista",
  "Direito de Família",
  "Contratos & Compliance",
  "Assessoria Imobiliária",
  "Outro",
];

const TIMES = ["Manhã (8h–12h)", "Tarde (13h–17h)", "Noite (18h–20h)"];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(247,245,240,0.05)",
    border: "1px solid rgba(247,245,240,0.12)",
    borderRadius: "2px",
    padding: "14px 16px",
    color: "#F7F5F0",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.88rem",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    color: "rgba(247,245,240,0.5)",
    fontSize: "0.72rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 500,
    display: "block",
    marginBottom: "6px",
  };

  return (
    <section
      id="contato"
      className="py-28 overflow-hidden"
      style={{ background: "#F7F5F0" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
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
              Agendamento
            </span>
            <div className="h-px w-8" style={{ background: "#C9A55A" }} />
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
            Agende Sua Avaliação{" "}
            <em style={{ color: "#C9A55A", fontStyle: "italic" }}>Gratuita.</em>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(12,28,53,0.55)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
            }}
          >
            Preencha o formulário e nossa equipe retorna em até 2 horas úteis para confirmar seu horário.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: "Telefone / WhatsApp",
                value: "+55 (11) 99999-0000",
                sub: "Resposta em até 2h úteis",
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "contato@nogueira.adv.br",
                sub: "Atendimento confidencial",
              },
              {
                icon: MapPin,
                label: "Endereço",
                value: "Av. Paulista, 1636 — Bela Vista",
                sub: "São Paulo — SP, 01310-200",
              },
              {
                icon: Clock,
                label: "Horário",
                value: "Seg–Sex: 08h às 19h",
                sub: "Sáb: 09h–13h mediante agendamento",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-5 transition-all duration-300"
                style={{
                  background: "#0C1C35",
                  borderRadius: "4px",
                  border: "1px solid rgba(201,165,90,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,165,90,0.12)",
                    borderRadius: "2px",
                    border: "1px solid rgba(201,165,90,0.2)",
                  }}
                >
                  <item.icon size={16} style={{ color: "#C9A55A" }} />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(247,245,240,0.4)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#F7F5F0",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(247,245,240,0.35)",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Calendar hint */}
            <div
              className="p-5 flex items-center gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(201,165,90,0.12), rgba(201,165,90,0.05))",
                border: "1px solid rgba(201,165,90,0.25)",
                borderRadius: "4px",
              }}
            >
              <Calendar size={20} style={{ color: "#C9A55A", flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(12,28,53,0.7)",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                }}
              >
                Após o envio, você receberá um <strong style={{ color: "#0C1C35" }}>link de confirmação</strong> com as opções de horário disponíveis.
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 lg:p-10"
              style={{
                background: "#0C1C35",
                borderRadius: "4px",
                border: "1px solid rgba(201,165,90,0.12)",
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full"
                    style={{ background: "rgba(201,165,90,0.15)", border: "1px solid rgba(201,165,90,0.3)" }}
                  >
                    <CheckCircle2 size={28} style={{ color: "#C9A55A" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#F7F5F0",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    }}
                  >
                    Solicitação Recebida!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(247,245,240,0.55)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      maxWidth: "340px",
                    }}
                  >
                    Nossa equipe entrará em contato em até <strong style={{ color: "#C9A55A" }}>2 horas úteis</strong> para confirmar seu horário de avaliação gratuita.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Nome completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        style={inputStyle}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,165,90,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(247,245,240,0.12)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-0000"
                        style={inputStyle}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,165,90,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(247,245,240,0.12)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com.br"
                      style={inputStyle}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,165,90,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(247,245,240,0.12)")}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Área de interesse *</label>
                      <select
                        required
                        style={{ ...inputStyle, cursor: "pointer" }}
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,165,90,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(247,245,240,0.12)")}
                      >
                        <option value="" style={{ background: "#0C1C35" }}>Selecione...</option>
                        {AREAS.map((a) => (
                          <option key={a} value={a} style={{ background: "#0C1C35" }}>{a}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Melhor horário</label>
                      <select
                        style={{ ...inputStyle, cursor: "pointer" }}
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,165,90,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(247,245,240,0.12)")}
                      >
                        <option value="" style={{ background: "#0C1C35" }}>Selecione...</option>
                        {TIMES.map((t) => (
                          <option key={t} value={t} style={{ background: "#0C1C35" }}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Descreva brevemente seu caso</label>
                    <textarea
                      rows={4}
                      placeholder="Conte-nos o que está acontecendo. Quanto mais detalhes, melhor podemos ajudar."
                      style={{ ...inputStyle, resize: "none" }}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,165,90,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(247,245,240,0.12)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #C9A55A, #a07d3a)",
                      color: "#0C1C35",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      borderRadius: "2px",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(201,165,90,0.35)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    Solicitar Avaliação Gratuita →
                  </button>

                  <p
                    className="text-center"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(247,245,240,0.25)",
                      fontSize: "0.7rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Seus dados são tratados com sigilo absoluto, conforme a LGPD. Sem spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
