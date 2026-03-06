import "../styles/fonts.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}
