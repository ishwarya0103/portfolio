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
  sectionLabel: { fontSize: "11px", color: "#888", letterSpacing: "0.12em", textTransform: "uppercase" as const, fontWeight: 500, marginBottom: "8px" },
  sectionTitle: { fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "28px" },
  section: { marginBottom: "64px" },

  // Experience — left/right split
  expWrap: { position: "relative" as const },
  expLine: { position: "absolute" as const, left: "50%", top: 0, bottom: 0, width: "1px", background: "#1f1f1f", transform: "translateX(-50%)" },
  expItems: { display: "flex", flexDirection: "column" as const, gap: "20px" },
  expRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", position: "relative" as const },
  expDot: (color: string) => ({
    position: "absolute" as const, top: "20px", left: "50%", transform: "translateX(-50%)",
    width: "12px", height: "12px", borderRadius: "50%",
    background: "#0a0a0a", border: `2px solid ${color}`, zIndex: 1,
  }),
  expLabel: (color: string) => ({ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color, marginBottom: "8px" }),

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

  // Education — simple list
  eduList: { display: "flex", flexDirection: "column" as const, gap: "12px" },

  // Contact form
  form: { display: "flex", flexDirection: "column" as const, gap: "16px" },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
  formGroup: { display: "flex", flexDirection: "column" as const, gap: "6px" },
  label: { fontSize: "12px", color: "#888", letterSpacing: "0.02em" },
  input: {
    background: "#0a0a0a", border: "1px solid #222", borderRadius: "10px",
    padding: "10px 14px", fontSize: "13px", color: "#fff", outline: "none", fontFamily: "inherit",
  },
  textarea: {
    background: "#0a0a0a", border: "1px solid #222", borderRadius: "10px",
    padding: "10px 14px", fontSize: "13px", color: "#fff", outline: "none", fontFamily: "inherit",
    resize: "vertical" as const,
  },
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

const RESEARCH = "#a78bfa";
const INDUSTRY = "#3b82f6";

const EXPERIENCE = [
  { type: "industry", role: "AI/ML Engineer", org: "Cloud Pharmaceuticals", period: "Jun 2026 – Present", location: "Durham, NC (Remote)",
    desc: "Engineering a modular AI platform integrating unstructured EMR, genomic, and wearable data using NLP, LLMs, and time-series ML — cutting multimodal patient data prep from 45 minutes to under 6. Architecting a GenAI fusion framework synthesizing clinical, genomic, and physiological signals for explainable drug discovery.",
    tags: ["NLP", "LLMs", "Time-Series ML", "GenAI"] },
  { type: "research", role: "Research Assistant — GenAI & ML Infrastructure", org: "NC State University", period: "Jan 2026 – May 2026", location: "Raleigh, NC",
    desc: "Built a production RAG Q&A platform (LangChain, LangGraph, GPT-4, MongoDB Atlas) serving 50+ researchers over 1,000+ docs at sub-3s latency. Improved retrieval precision 12% via a RAGAS eval framework and preference optimization. CI/CD on AWS ECS cut deployment cycles 70%.",
    tags: ["LangChain", "RAG", "GPT-4", "AWS", "Docker", "Kubernetes"] },
  { type: "industry", role: "Software Engineer — AI & Distributed Systems", org: "Strand Life Sciences", period: "Jul 2023 – Jul 2024", location: "Bangalore, India",
    desc: "Engineered distributed REST APIs and ETL pipelines (Python, Java, Terraform, AWS) processing 8B+ genomic records, cutting runtime from 10 to 7 hours via parallelized microservices. NLP entity-extraction (spaCy, Hugging Face) across 3 production ML services.",
    tags: ["Python", "Java", "Terraform", "spaCy", "Hugging Face", "AWS"] },
  { type: "research", role: "Undergraduate Researcher — ML Algorithms", org: "NIT Trichy", period: "Aug 2021 – May 2023", location: "Trichy, India",
    desc: "Implemented DQN reinforcement-learning agents for dynamic network optimization (+15% throughput). Built a non-contact body measurement system with OpenCV and 3D-scanned datasets. Best Presentation among 70 teams at Pragyan; presented at IC@MACE 2023.",
    tags: ["PyTorch", "DQN", "Reinforcement Learning", "OpenCV"] },
  { type: "industry", role: "Software Engineering Intern", org: "Strand Life Sciences", period: "May 2022 – Jul 2022", location: "Bangalore, India",
    desc: "Delivered a CAS-based SSO server with Google OAuth securing 7+ internal tools. ELK Stack logging and observability reduced incident MTTR 20%.",
    tags: ["SSO", "ELK Stack", "Grafana"] },
] as const;

const EDUCATION = [
  { role: "M.S., Computer Science", org: "NC State University", period: "Aug 2024 – May 2026", location: "Raleigh, NC",
    desc: "GPA: 3.7/4.0 · Deep Learning, Neural Networks, NLP, Data Science, HCI, Algorithms" },
  { role: "B.Tech., Computer Science & Engineering", org: "NIT Trichy", period: "Jul 2019 – May 2023", location: "Trichy, India",
    desc: "GPA: 8.5/10.0 · Data Structures, Algorithms, ML, OS, Networks, DBMS" },
] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={s.page}>
        <div style={s.container}>

          {/* Hero */}
          <div style={s.badge}>
            <span style={s.dot}></span>
            AI/ML Engineer @ Cloud Pharmaceuticals
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
            <div style={s.termLine}>I&apos;m an <span style={{color:"#60a5fa"}}>AI/ML Engineer</span> at Cloud Pharmaceuticals, building GenAI platforms for drug discovery and precision medicine.</div>
            <div style={s.termLine}>I hold an <span style={{color:"#60a5fa"}}>MS in Computer Science from NC State</span> (GPA 3.7/4.0) and a B.Tech from NIT Trichy.</div>
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

          {/* Experience */}
          <div style={s.section}>
            <div style={s.sectionLabel}>Career</div>
            <div style={s.sectionTitle}>Experience</div>
            <div style={s.expWrap}>
              <div style={s.expLine}></div>
              <div style={s.expItems}>
                {EXPERIENCE.map((item, i) => {
                  const color = item.type === "research" ? RESEARCH : INDUSTRY;
                  const cardEl = (
                    <div style={s.card}>
                      <div style={s.expLabel(color)}>{item.type === "research" ? "Research" : "Industry"}</div>
                      <div style={s.cardHeader}>
                        <div>
                          <div style={s.cardTitle}>{item.role}</div>
                          <div style={{...s.cardOrg, color}}>{item.org}</div>
                        </div>
                        <div style={s.cardMeta}>{item.period}<br/>{item.location}</div>
                      </div>
                      <div style={s.cardDesc}>{item.desc}</div>
                      <div style={s.tags}>
                        {item.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
                      </div>
                    </div>
                  );
                  return (
                    <div key={i} style={s.expRow}>
                      <div style={s.expDot(color)}></div>
                      {item.type === "research" ? <>{cardEl}<div /></> : <><div />{cardEl}</>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Education */}
          <div style={s.section}>
            <div style={s.sectionLabel}>Academics</div>
            <div style={s.sectionTitle}>Education</div>
            <div style={s.eduList}>
              {EDUCATION.map((item, i) => (
                <div key={i} style={s.card}>
                  <div style={s.cardHeader}>
                    <div>
                      <div style={s.cardTitle}>{item.role}</div>
                      <div style={s.cardOrg}>{item.org}</div>
                    </div>
                    <div style={s.cardMeta}>{item.period}<br/>{item.location}</div>
                  </div>
                  <div style={{...s.cardDesc, marginBottom: 0}}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={s.section}>
            <div style={s.sectionLabel}>Get in touch</div>
            <div style={s.sectionTitle}>Contact</div>
            <div style={s.card}>
              <form style={s.form} action="https://formspree.io/f/xppwaqej" method="POST">
                <div style={s.formRow}>
                  <div style={s.formGroup}>
                    <label style={s.label} htmlFor="name">Name</label>
                    <input style={s.input} type="text" id="name" name="name" required />
                  </div>
                  <div style={s.formGroup}>
                    <label style={s.label} htmlFor="email">Email</label>
                    <input style={s.input} type="email" id="email" name="email" required />
                  </div>
                </div>
                <div style={s.formGroup}>
                  <label style={s.label} htmlFor="company">Company / Role</label>
                  <input style={s.input} type="text" id="company" name="company" />
                </div>
                <div style={s.formGroup}>
                  <label style={s.label} htmlFor="message">Message</label>
                  <textarea style={s.textarea} id="message" name="message" rows={5} required />
                </div>
                <button type="submit" style={{...s.btnPrimary, alignSelf: "flex-start"}}>Send message</button>
              </form>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
