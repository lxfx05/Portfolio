import { memo } from "react";
import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Luca Finaldi — UI/UX Designer & Web App Developer";
const DESCRIPTION =
  "Portfolio di Luca Finaldi, UI/UX designer e web app developer italiano: siti sicuri e responsive per desktop e smartphone, machine learning e full stack.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const expert = [
  "Python",
  "React",
  "PHP",
  "Go",
  "Scala",
  "HTML",
  "CSS",
  "JavaScript",
  "Bash",
  "Next.js",
  "Vite",
  "Vim",
];

const skilled = [
  "Assembly",
  "C",
  "Tailwind CSS",
  "Java",
  "Kotlin",
  "Django",
  "MongoDB",
  "Docker",
  "Arch Linux",
  "NixOS",
  "Red Hat",
  "FreeBSD",
];

const now = [
  {
    icon: "🔭",
    title: "Su cosa lavoro",
    text: "Offline Automation: flussi automatizzati che funzionano anche senza connessione.",
  },
  {
    icon: "🌱",
    title: "Cosa sto imparando",
    text: "Assembly e C, per capire davvero cosa succede sotto il cofano.",
  },
  {
    icon: "🤝",
    title: "Cerco confronto su",
    text: "Come migliorare i workflow senza aggiungere complessità superflua.",
  },
  {
    icon: "💬",
    title: "Chiedimi di",
    text: "Python, React, PHP, Go e Scala.",
  },
  {
    icon: "⚡",
    title: "Fun fact",
    text: "Consumo più acqua al giorno di ChatGPT.",
  },
];

const nav = [
  { label: "Chi sono", id: "about" },
  { label: "Servizi", id: "services" },
  { label: "Progetti", id: "projects" },
  { label: "Competenze", id: "skills" },
  { label: "Adesso", id: "learning" },
  { label: "Contatti", id: "contact" },
];

const services = [
  {
    title: "UI/UX Design",
    text: "Wireframe, design system e prototipi ad alta fedeltà pensati per la chiarezza e la conversione.",
  },
  {
    title: "Web app responsive",
    text: "Interfacce fluide da desktop a smartphone, ottimizzate per performance e accessibilità.",
  },
  {
    title: "Sviluppo full stack",
    text: "Dal front-end al server: API, database e deploy con architetture semplici e mantenibili.",
  },
  {
    title: "Sicurezza & performance",
    text: "Best practice di sicurezza, audit delle dipendenze e ottimizzazione dei tempi di caricamento.",
  },
];

const projects = [
  {
    title: "Audify",
    category: "Audio · Web app",
    description: "Lettore multimediale locale con playlist, preferiti e equalizzatore.",
    href: "https://github.com/lxfx05/Audify",
  },
  {
    title: "Universal Modding Center",
    category: "Android · iOS",
    description: "Centro di risorse e guide per strumenti Android e procedure iOS supportate.",
    href: "https://github.com/lxfx05/Modding-Universal-",
  },
  {
    title: "Nova Studio",
    category: "Design · Editor",
    description: "Editor visuale per creare layout, pagine e prototipi esportabili.",
    href: "https://github.com/lxfx05/Nova-Studio",
  },
  {
    title: "File Share 98",
    category: "WebRTC · Sharing",
    description: "Esperimento di trasferimento file tra dispositivi tramite collegamento temporaneo.",
    href: "https://github.com/lxfx05/file-share",
  },
];

const sectionIds = nav.map((n) => n.id);

const process = [
  {
    step: "01",
    title: "Ascolto & analisi",
    text: "Capisco obiettivi, utenti e vincoli prima di disegnare qualsiasi schermata.",
  },
  {
    step: "02",
    title: "Design & prototipo",
    text: "Wireframe rapidi, poi UI ad alta fedeltà testabile su desktop e mobile.",
  },
  {
    step: "03",
    title: "Sviluppo",
    text: "Codice pulito, componenti riutilizzabili, attenzione a performance e sicurezza.",
  },
  {
    step: "04",
    title: "Rilascio & cura",
    text: "Deploy, misurazione e iterazioni continue sui dettagli che contano.",
  },
];

const aboutStats = [
  ["5", "Linguaggi principali"],
  ["UI/UX", "Design end-to-end"],
  ["Web+Mobile", "Responsive"],
  ["Offline", "Automation"],
];

const contactLinks = [
  { label: "Email", value: "lucafinaldi3@gmail.com", href: "mailto:lucafinaldi3@gmail.com" },
  {
    label: "LinkedIn",
    value: "Luca Finaldi",
    href: "https://www.linkedin.com/in/luca-finaldi-840a44309/",
  },
  {
    label: "Instagram",
    value: "@luke_romanov_05",
    href: "https://www.instagram.com/luke_romanov_05?evlk=b2F1N242NHQybGNs",
  },
  { label: "WhatsApp", value: "+39 352 2266056", href: "https://wa.me/393522266056" },
];

/** Etichetta numerata sopra ai titoli di sezione. */
const Eyebrow = memo(function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="reveal mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase">
      <span>{index}</span>
      <span>{label}</span>
    </p>
  );
});

function Index() {
  return (
    <main data-sections={sectionIds.join(",")}>
      <nav aria-label="Navigazione principale">
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </main>
  );
}
