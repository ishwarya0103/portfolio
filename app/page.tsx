"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";

const s = {
  page: { minHeight: "100vh", paddingTop: "56px", background: "#0a0a0a" },
  container: { maxWidth: "860px", margin: "0 auto", padding: "60px 32px 80px" },
  badge: { display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#888", marginBottom: "28px", fontFamily: "monospace" },
  dot: { width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" },
  h1: { fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, color: "#fff", marginBottom: "16px", letterSpacing: "-1px" },
  blue: { color: "#3b82f6" },
  terminal: {
    marginTop: "28px", marginBottom: "32px",
    background: "#111", border: "1px solid #222", borderRadius: "14px",
    padding: "20px 24px", maxWidth: "640px", fontFamily: "monospace", fontSize: "14px", lineHeight: 1.8,
  },
  termDots: { display: "flex", gap: "6px", marginBottom: "16px" },
  termLine: { color: "#ccc", marginBottom: "4px" },
  btnRow: { display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "64px" },
  btnPrimary: {
    display: "flex", alignItems: "center", gap: "8px",
    background: "#3b82f6", color: "#fff",
    padding: "10px 20px", borderRadius: "10px", fontSize: "14px", fontWeight: 500,
    textDecoration: "none", border: "none", cursor: "pointer",
  },
  btnSecondary: {
    display: "flex", alignItems: "center", gap: "8px",
    background: "transparent", color: "#ccc",
    padding: "10px 20px", borderRadius: "10px", fontSize: "14px",
    textDecoration: "none", border: "1px solid #2a2a2a", cursor: "pointer",
  },
  btnIcon: {
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "transparent", color: "#888",
    padding: "10px 14px", borderRadius: "10px", fontSize: "14px",
    textDecoration: "none", border: "1px solid #2a2a2a",
  },
  sectionLabel: { fontSize: "11px", color: "#888", letterSpacing: "0.12em", textTransform: "uppercase" as const, fontWeight: 500, marginBottom: "32px" },
  timeline: { position: "relative" as const },
  timelineLine: { position: "absolute" as const, left: "18px", top: 0, bottom: 0, width: "1px", background: "#1f1f1f" },
  timelineItems: { paddingLeft: "52px", display: "flex", flexDirection: "column" as const, gap: "16px" },
  timelineIcon: (isWork: boolean) => ({
    position: "absolute" as const, left: "-52px", top: "18px",
    width: "36px", height: "36px", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px",
    background: "#111", border: `1px solid ${isWork ? "#3b82f6" : "#2a2a2a"}`,
  }),
  card: {
    background: "#111", border: "1px solid #1f1f1f", borderRadius: "14px",
    padding: "20px 24px",
  },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", gap: "16px" },
  cardTitle: { fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "2px" },
  cardOrg: { fontSize: "14px", color: "#3b82f6" },
  cardMeta: { textAlign: "right" as const, fontSize: "12px", color: "#666", flexShrink: 0, lineHeight: 1.6 },
  cardDesc: { fontSize: "13px", color: "#888", lineHeight: 1.7, marginBottom: "12px" },
  tags: { display: "flex", flexWrap: "wrap" as const, gap: "6px" },
  tag: { fontSize: "12px", color: "#666", border: "1px solid #222", borderRadius: "20px", padding: "2px 10px" },
};

function GithubIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>;
}
function LinkedinIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}
function MailIcon() {
  return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function DownloadIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}

const TIMELINE = [
  { type:"work", role:"Research Assistant — GenAI & ML Infrastructure", org:"NC State University", period:"Jan 2025 – Present", location:"Raleigh, NC",
    desc:"Built production RAG Q&A system (LangChain, GPT-4, MongoDB Atlas) serving 50+ researchers over 1,000+ docs at sub-3s latency. Improved retrieval precision 12% via semantic chunking + RAGAS eval. CI/CD cut deployment cycles 70%.",
    tags:["LangChain","RAG","GPT-4","AWS","Docker","Kubernetes"] },
  { type:"edu", role:"M.S., Computer Science", org:"NC State University", period:"Aug 2024 – May 2026", location:"Raleigh, NC",
    desc:"GPA: 3.7/4.0 · Deep Learning, Neural Networks, NLP, Data Science, HCI, Algorithms", tags:["GPA 3.7/4.0"] },
  { type:"work", role:"Software Engineer — AI & Distributed Systems", org:"Strand Life Sciences", period:"Jul 2023 – Jul 2024", location:"Bangalore, India",
    desc:"ETL pipelines processing 8B+ genomic records; 30% faster via containerized microservices. NLP entity-extraction (spaCy, Hugging Face) across 3 production ML services. Eliminated 4+ hrs/day manual work.",
    tags:["Python","spaCy","Hugging Face","AWS","Docker"] },
  { type:"work", role:"Software Engineering Intern", org:"Strand Life Sciences", period:"May 2022 – Jul 2022", location:"Bangalore, India",
    desc:"Delivered SSO server (CAS + Google OAuth) securing 7+ internal tools. ELK Stack deployment reduced MTTR 20%.",
    tags:["SSO","ELK Stack","Grafana"] },
  { type:"work", role:"Undergraduate Researcher — ML Algorithms", org:"NIT Trichy", period:"Aug 2021 – May 2023", location:"Trichy, India",
    desc:"DQN agents for network optimization (+15% throughput). Best Presentation at Pragyan Tech Fest among 45 teams. Presented at IC@MACE 2023.",
    tags:["PyTorch","DQN","Reinforcement Learning"] },
  { type:"edu", role:"B.Tech., Computer Science & Engineering", org:"NIT Trichy", period:"Jul 2019 – May 2023", location:"Trichy, India",
    desc:"GPA: 8.5/10.0 · Data Structures, Algorithms, ML, OS, Networks, DBMS", tags:["GPA 8.5/10"] },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={s.page}>
        <div style={s.container}>

          {/* Hero */}
          <div style={s.badge}>
            <span style={s.dot}></span>
            Open to full-time roles · Available May 2026
          </div>

          <h1 style={s.h1}>
            Hi! I&apos;m Ishwarya<br />
            <span style={s.blue}>Anandakrishnan</span>
          </h1>

          {/* Terminal bio */}
          <div style={s.terminal}>
            <div style={s.termDots}>
              <span style={{width:12,height:12,borderRadius:"50%",background:"#ef4444",display:"inline-block"}}></span>
              <span style={{width:12,height:12,borderRadius:"50%",background:"#f59e0b",display:"inline-block"}}></span>
              <span style={{width:12,height:12,borderRadius:"50%",background:"#22c55e",display:"inline-block"}}></span>
            </div>
            <div style={s.termLine}>I&apos;m an <span style={{color:"#60a5fa"}}>AI/ML Engineer</span> with 2+ years building production GenAI systems and ML infrastructure.</div>
            <div style={s.termLine}>Currently pursuing my <span style={{color:"#60a5fa"}}>MS in Computer Science at NC State</span>, graduating May 2026.</div>
            <div style={s.termLine}>I&apos;ve built RAG pipelines serving <span style={{color:"#60a5fa"}}>50+ researchers</span>, ETL systems processing <span style={{color:"#60a5fa"}}>8B+ records</span>, and ML infra cutting deployment cycles by <span style={{color:"#60a5fa"}}>70%</span>.</div>
            <div style={s.termLine}>Fluent in Python, PyTorch, LangChain — and love building scalable AI systems end-to-end.<span style={{color:"#3b82f6",animation:"blink 1s step-end infinite"}}>█</span></div>
          </div>

          {/* Buttons */}
          <div style={s.btnRow}>
            <a href="/Ishwarya_Resume.pdf" target="_blank" rel="noreferrer" style={s.btnPrimary}><DownloadIcon /> Download Resume</a>
            <Link href="/chat" style={s.btnSecondary}>💬 Ask me anything</Link>
            <a href="https://github.com/ishwarya0103" target="_blank" style={s.btnIcon}><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/ishwarya-anand/" target="_blank" style={s.btnIcon}><LinkedinIcon /></a>
            <a href="mailto:ishwaryaanandakrishnan@gmail.com" style={s.btnIcon}><MailIcon /></a>
          </div>

          {/* Timeline */}
          <div style={s.sectionLabel}>Experience & Education</div>
          <div style={s.timeline}>
            <div style={s.timelineLine}></div>
            <div style={s.timelineItems}>
              {TIMELINE.map((item, i) => (
                <div key={i} style={{position:"relative"}}>
                  <div style={s.timelineIcon(item.type==="work")}>{item.type==="work"?"💼":"🎓"}</div>
                  <div style={s.card}>
                    <div style={s.cardHeader}>
                      <div>
                        <div style={s.cardTitle}>{item.role}</div>
                        <div style={s.cardOrg}>{item.org}</div>
                      </div>
                      <div style={s.cardMeta}>{item.period}<br/>{item.location}</div>
                    </div>
                    <div style={s.cardDesc}>{item.desc}</div>
                    <div style={s.tags}>
                      {item.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
