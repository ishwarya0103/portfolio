"use client";
import Link from "next/link";
import Navbar from "./components/Navbar";

function GithubIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>;
}
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}
function MailIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
function DownloadIcon({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}

const TIMELINE = [
  {
    type: "work",
    role: "Research Assistant — GenAI & ML Infrastructure",
    org: "NC State University",
    period: "Jan 2025 – Present",
    location: "Raleigh, NC",
    desc: "Built production RAG Q&A system (LangChain, GPT-4, MongoDB Atlas) serving 50+ researchers over 1,000+ docs at sub-3s latency. Improved retrieval precision 12% via semantic chunking + RAGAS eval. CI/CD cut deployment cycles 70%.",
    tags: ["LangChain", "RAG", "GPT-4", "AWS", "Docker", "Kubernetes"],
  },
  {
    type: "edu",
    role: "M.S., Computer Science",
    org: "NC State University",
    period: "Aug 2024 – May 2026",
    location: "Raleigh, NC",
    desc: "GPA: 3.7/4.0 · Deep Learning, Neural Networks, NLP, Data Science, HCI, Algorithms",
    tags: ["GPA 3.7/4.0"],
  },
  {
    type: "work",
    role: "Software Engineer — AI & Distributed Systems",
    org: "Strand Life Sciences",
    period: "Jul 2023 – Jul 2024",
    location: "Bangalore, India",
    desc: "ETL pipelines processing 8B+ genomic records; 30% faster via containerized microservices. NLP entity-extraction models (spaCy, Hugging Face) across 3 production ML services. Eliminated 4+ hrs/day of manual work.",
    tags: ["Python", "spaCy", "Hugging Face", "AWS", "Docker"],
  },
  {
    type: "work",
    role: "Software Engineering Intern",
    org: "Strand Life Sciences",
    period: "May 2022 – Jul 2022",
    location: "Bangalore, India",
    desc: "Delivered SSO server (CAS + Google OAuth) securing 7+ internal tools. ELK Stack deployment reduced MTTR 20%.",
    tags: ["SSO", "ELK Stack", "Grafana"],
  },
  {
    type: "work",
    role: "Undergraduate Researcher — ML Algorithms",
    org: "NIT Trichy",
    period: "Aug 2021 – May 2023",
    location: "Trichy, India",
    desc: "DQN agents for network optimization (+15% throughput). Best Presentation at Pragyan Tech Fest among 45 teams. Presented at IC@MACE 2023.",
    tags: ["PyTorch", "DQN", "Reinforcement Learning"],
  },
  {
    type: "edu",
    role: "B.Tech., Computer Science & Engineering",
    org: "NIT Trichy",
    period: "Jul 2019 – May 2023",
    location: "Trichy, India",
    desc: "GPA: 8.5/10.0 · Data Structures, Algorithms, ML, OS, Networks, DBMS",
    tags: ["GPA 8.5/10"],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-14">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
          <div className="fade-up">
            <div className="flex items-center gap-2 text-xs text-[#888] mb-6 font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
              Open to full-time roles · Available May 2026
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight mb-4">
              Hi! I&apos;m Ishwarya<br/>
              <span className="text-[#3b82f6]">Anandakrishnan</span>
            </h1>

            {/* Terminal-style bio like Dhruv */}
            <div className="mt-8 mb-10 bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 max-w-2xl font-mono text-sm leading-relaxed">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <p className="text-[#ededed] mb-2">I&apos;m an <span className="text-[#60a5fa]">AI/ML Engineer</span> with 2+ years building production GenAI systems and ML infrastructure.</p>
              <p className="text-[#ededed] mb-2">Currently pursuing my <span className="text-[#60a5fa]">MS in Computer Science at NC State</span>, graduating May 2026.</p>
              <p className="text-[#ededed] mb-2">I&apos;ve built RAG pipelines serving <span className="text-[#60a5fa]">50+ researchers</span>, ETL systems processing <span className="text-[#60a5fa]">8B+ records</span>, and ML infra cutting deployment cycles by <span className="text-[#60a5fa]">70%</span>.</p>
              <p className="text-[#ededed]">Fluent in Python, PyTorch, LangChain — and love building scalable AI systems end-to-end.<span className="blink text-[#3b82f6]">█</span></p>
            </div>

            <div className="flex flex-wrap gap-3 mb-16">
              <a href="/Ishwarya_Resume.pdf" download
                className="flex items-center gap-2 bg-[#3b82f6] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors">
                <DownloadIcon size={15}/> Download Resume
              </a>
              <Link href="/chat"
                className="flex items-center gap-2 border border-[#2a2a2a] text-[#ededed] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1a1a1a] transition-colors">
                💬 Ask me anything
              </Link>
              <a href="https://github.com/ishwarya0103" target="_blank"
                className="flex items-center gap-2 border border-[#2a2a2a] text-[#888] px-4 py-2.5 rounded-lg text-sm hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <GithubIcon size={15}/>
              </a>
              <a href="https://www.linkedin.com/in/ishwarya-anand/" target="_blank"
                className="flex items-center gap-2 border border-[#2a2a2a] text-[#888] px-4 py-2.5 rounded-lg text-sm hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <LinkedinIcon size={15}/>
              </a>
              <a href="mailto:ishwaryaanandakrishnan@gmail.com"
                className="flex items-center gap-2 border border-[#2a2a2a] text-[#888] px-4 py-2.5 rounded-lg text-sm hover:text-white hover:bg-[#1a1a1a] transition-colors">
                <MailIcon size={15}/>
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="fade-up" style={{animationDelay:"150ms"}}>
            <h2 className="text-xs text-[#888] uppercase tracking-widest mb-8 font-medium">Experience & Education</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2a2a2a]"></div>
              <div className="space-y-6 pl-12">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className={`absolute -left-12 top-4 w-8 h-8 rounded-full flex items-center justify-center text-xs border ${
                      item.type === "work"
                        ? "bg-[#1a1a1a] border-[#3b82f6] text-[#3b82f6]"
                        : "bg-[#1a1a1a] border-[#2a2a2a] text-[#888]"
                    }`}>
                      {item.type === "work" ? "💼" : "🎓"}
                    </div>
                    <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3b82f6]/40 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-white text-sm">{item.role}</h3>
                          <p className="text-[#3b82f6] text-sm">{item.org}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-[#888]">{item.period}</p>
                          <p className="text-xs text-[#888]">{item.location}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#888] leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(t => (
                          <span key={t} className="text-xs bg-[#1a1a1a] border border-[#2a2a2a] text-[#888] px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
