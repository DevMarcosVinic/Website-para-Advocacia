import { Scale, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#07111f" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-sm"
                style={{ background: "linear-gradient(135deg, #C9A55A, #a07d3a)" }}
              >
                <Scale size={18} color="#0C1C35" strokeWidth={2.5} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F7F5F0",
                    fontSize: "1rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Nogueira & Associados
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(247,245,240,0.35)",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                maxWidth: "320px",
                marginBottom: "20px",
              }}
            >
              Advocacia de alto padrão com foco em resultados reais. Defendemos seus direitos com estratégia, ética e comprometimento.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(247,245,240,0.2)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
              }}
            >
              OAB/SP 234.567 — CNPJ 00.000.000/0001-00
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(247,245,240,0.06)",
                    border: "1px solid rgba(247,245,240,0.1)",
                    borderRadius: "50%",
                    color: "rgba(247,245,240,0.4)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(201,165,90,0.15)";
                    el.style.borderColor = "rgba(201,165,90,0.4)";
                    el.style.color = "#C9A55A";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(247,245,240,0.06)";
                    el.style.borderColor = "rgba(247,245,240,0.1)";
                    el.style.color = "rgba(247,245,240,0.4)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#C9A55A",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Navegação
            </p>
            {[
              { label: "Início", href: "#hero" },
              { label: "Sobre o Escritório", href: "#sobre" },
              { label: "Áreas de Atuação", href: "#atuacao" },
              { label: "Perguntas Frequentes", href: "#faq" },
              { label: "Agendamento", href: "#contato" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block mb-2.5 transition-colors duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(247,245,240,0.35)",
                  fontSize: "0.82rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F7F5F0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(247,245,240,0.35)")}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#C9A55A",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Jurídico
            </p>
            {[
              "Política de Privacidade",
              "Termos de Uso",
              "Política de Cookies",
              "LGPD — Seus Direitos",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="block mb-2.5 transition-colors duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(247,245,240,0.35)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F7F5F0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(247,245,240,0.35)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(247,245,240,0.06)" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(247,245,240,0.2)",
              fontSize: "0.72rem",
              letterSpacing: "0.04em",
            }}
          >
            © 2026 Nogueira & Associados Advocacia. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(247,245,240,0.15)",
              fontSize: "0.68rem",
            }}
          >
            Este site não constitui aconselhamento jurídico. Consulte um advogado.
          </p>
          <button
            onClick={() => scrollTo("#hero")}
            className="w-8 h-8 flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(201,165,90,0.1)",
              border: "1px solid rgba(201,165,90,0.2)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,165,90,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,165,90,0.1)";
            }}
          >
            <ArrowUp size={13} style={{ color: "#C9A55A" }} />
          </button>
        </div>
      </div>
    </footer>
  );
}
