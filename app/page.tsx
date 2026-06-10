"use client";
import { useState, useEffect } from "react";
import { Mail, ExternalLink, ChevronDown, Send, MessageCircle, MapPin } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

// ── DATA ──────────────────────────────────────────────────────────────────────

const SKILLS = {
  "Languages": ["Python", "TypeScript", "Java", "SQL", "C++", "Bash"],
  "GenAI & LLMs": ["LangChain", "LangGraph", "LlamaIndex", "OpenAI GPT-4", "RAG", "PEFT/LoRA", "Hugging Face", "RAGAS", "FAISS", "Qdrant"],
  "ML & Modeling": ["PyTorch", "TensorFlow", "Scikit-learn", "CNNs", "Transformers", "Flash Attention", "Reinforcement Learning", "Conformal Prediction", "XGBoost", "spaCy"],
  "Infrastructure": ["Docker", "Kubernetes", "AWS", "GCP", "MLflow", "Airflow", "Prometheus", "Grafana", "CI/CD", "FastAPI", "MongoDB", "PostgreSQL"],
};

const EXPERIENCE = [
  {
    role: "Research Assistant — GenAI & ML Infrastructure",
    company: "NC State University",
    period: "Jan 2025 – Present",
    location: "Raleigh, NC",
    bullets: [
      "Built production RAG Q&A system (LangChain, LangGraph, OpenAI GPT-4, MongoDB Atlas) serving 50+ researchers over 1,000+ documents at sub-3s latency",
      "Improved retrieval precision 12% via semantic chunking, embedding selection, and reranking evaluated with RAGAS metrics",
      "Deployed containerized inference on AWS ECS with Docker, Kubernetes HPA, Prometheus/Grafana; CI/CD cut deployment cycles 70%",
    ],
  },
  {
    role: "Software Engineer — AI & Distributed Systems",
    company: "Strand Life Sciences",
    period: "Jul 2023 – Jul 2024",
    location: "Bangalore, India",
    bullets: [
      "Engineered distributed REST APIs and ETL pipelines processing 8B+ genomic records; reduced execution time 30% via parallelized containerized microservices",
      "Developed NLP entity-extraction models (spaCy, Hugging Face) on clinical text; evaluated across 3 production ML services",
      "Automated reporting workflows eliminating 4+ hours/day of manual processing, unblocking model retraining cycles",
    ],
  },
  {
    role: "Undergraduate Researcher — ML Algorithms",
    company: "NIT Trichy",
    period: "Aug 2021 – May 2023",
    location: "Trichy, India",
    bullets: [
      "Implemented Deep Q-Network agents for network optimization, improving throughput 15%",
      "Proposed Fitness Dependent Optimizer — awarded Best Presentation among 45 teams at Pragyan Tech Fest",
      "Presented research at IC@MACE 2023",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Strand Life Sciences",
    period: "May 2022 – Jul 2022",
    location: "Bangalore, India",
    bullets: [
      "Delivered SSO server (CAS + Google OAuth) securing 7+ internal tools",
      "Deployed ELK Stack observability, reducing incident MTTR by 20%",
    ],
  },
];

const PROJECTS = [
  {
    title: "Uncertainty Quantification Framework",
    stack: ["PyTorch", "Scikit-learn", "Conformal Prediction", "MC Dropout"],
    desc: "Calibration framework using conformal prediction and MC Dropout across regression and classification tasks; achieved 90–95% empirical coverage; benchmarked ECE across 5+ architectures.",
    link: "https://github.com/ishwarya0103",
  },
  {
    title: "Scalable ML Infrastructure on Kubernetes",
    stack: ["FastAPI", "Kubernetes", "Docker", "MLflow", "Airflow", "Prometheus", "AWS"],
    desc: "Production ML serving layer with HPA autoscaling and full observability. Orchestrated 10+ experiment runs via MLflow and Airflow; CI/CD cut redeployment steps 80%.",
    link: "https://github.com/ishwarya0103",
  },
  {
    title: "Clinical NLP Transformer with Flash Attention",
    stack: ["PyTorch", "Flash Attention", "Hugging Face", "FastAPI"],
    desc: "Decoder-style transformer with Flash Attention achieving 2× throughput over standard attention. Built NLP evaluation harness achieving 0.75 F1 on Portuguese medical text.",
    link: "https://github.com/ishwarya0103",
  },
  {
    title: "Hybrid Time Series Forecasting",
    stack: ["Python", "ARIMA", "XGBoost", "LSTM", "Pandas"],
    desc: "Ensemble forecasting pipeline (ARIMA + XGBoost + LSTM) on 15M+ rows of Bitcoin price data. Reduced RMSE 9% over standalone ARIMA via hyperparameter tuning.",
    link: "https://github.com/ishwarya0103",
  },
];

const EDUCATION = [
  {
    degree: "M.S., Computer Science",
    school: "NC State University",
    period: "Aug 2024 – May 2026",
    gpa: "3.7 / 4.0",
    courses: "Deep Learning · Neural Networks · NLP · Data Science · HCI · Algorithms",
  },
  {
    degree: "B.Tech., Computer Science & Engineering",
    school: "National Institute of Technology Trichy",
    period: "Jul 2019 – May 2023",
    gpa: "8.5 / 10.0",
    courses: "Data Structures · ML · OS · Networks · DBMS",
  },
];

// ── CHAT SYSTEM PROMPT ────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an AI assistant representing Ishwarya Anandakrishnan, an AI/ML engineer actively seeking full-time roles. Answer questions about her background accurately and enthusiastically based on the following:

ABOUT:
MS Computer Science @ NC State (May 2026, GPA 3.7/4.0), B.Tech CSE from NIT Trichy (GPA 8.5/10). Open to relocation. Located in Raleigh, NC. Email: ishwaryaanandakrishnan@gmail.com. LinkedIn: linkedin.com/in/ishwarya-anand. GitHub: github.com/ishwarya0103.

SUMMARY: 2+ years in ML infrastructure, model evaluation, and GenAI — spanning model deployment, data processing, optimization, and reinforcement learning. Production experience implementing GenAI features, designing experimentation frameworks, and applying NLP at scale.

SKILLS:
- Languages: Python, TypeScript, Java, SQL, C++, Bash
- GenAI/LLMs: LangChain, LangGraph, LlamaIndex, OpenAI GPT-4, RAG, PEFT/LoRA/QLoRA, RAGAS, FAISS, Qdrant, MongoDB Atlas, Hugging Face
- ML: PyTorch, TensorFlow, Scikit-learn, CNNs, Transformers, Flash Attention, Reinforcement Learning, Conformal Prediction, MC Dropout, XGBoost, spaCy
- Infrastructure: Docker, Kubernetes (HPA), AWS, GCP, MLflow, Airflow, Prometheus, Grafana, CI/CD, FastAPI, MongoDB, PostgreSQL

EXPERIENCE:
1. Research Assistant (GenAI/ML Infra) @ NC State (Jan 2025–Present): Built production RAG system with LangChain, GPT-4, MongoDB Atlas — 50+ researchers, 1000+ docs, sub-3s latency. Improved precision 12% via semantic chunking/reranking (RAGAS eval). Deployed on AWS ECS with Kubernetes HPA, Prometheus/Grafana; CI/CD cut cycles 70%.
2. Software Engineer @ Strand Life Sciences (Jul 2023–Jul 2024): ETL pipelines processing 8B+ genomic records, 30% faster. NLP entity-extraction (spaCy, Hugging Face) across 3 production ML services. Eliminated 4+ hrs/day manual work.
3. Undergrad Researcher @ NIT Trichy (Aug 2021–May 2023): DQN agents for network optimization (+15% throughput). Best Presentation at Pragyan Tech Fest. Presented at IC@MACE 2023.
4. SWE Intern @ Strand Life Sciences (May–Jul 2022): SSO server (CAS + Google OAuth). ELK Stack deployment, 20% MTTR reduction.

PROJECTS:
- Uncertainty Quantification Framework: conformal prediction + MC Dropout, 90–95% empirical coverage, 5+ architectures
- Scalable ML Infra on Kubernetes: HPA autoscaling, MLflow/Airflow orchestration, 80% faster redeployment
- Clinical NLP Transformer with Flash Attention: 2× throughput, 0.75 F1 on medical text
- Hybrid Time Series Forecasting: ARIMA+XGBoost+LSTM ensemble, 9% RMSE improvement on 15M+ rows

OPEN TO: Full-time roles in AI/ML Engineering, GenAI, MLOps, ML Infrastructure. Available May 2026 (or earlier for the right role). Open to relocation anywhere in the US.

Be concise, warm, and direct. If asked something you don't know, say so honestly. Always encourage the visitor to reach out via email or LinkedIn.`;

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#e8e6e1] shadow-sm" : ""}`}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-tight text-[#111110]">Ishwarya A.</span>
        <div className="flex items-center gap-6 text-sm text-[#6f6e69]">
          {["About","Experience","Projects","Chat"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-[#111110] transition-colors hidden sm:block">{s}</a>
          ))}
          <a href="mailto:ishwaryaanandakrishnan@gmail.com" className="flex items-center gap-1.5 bg-[#2563eb] text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors">
            <Mail size={12}/> Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-14 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="fade-in-up" style={{animationDelay:"0ms"}}>
          <div className="flex items-center gap-2 text-xs text-[#6f6e69] mb-6 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to full-time roles · Available May 2026
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111110] leading-tight mb-4">
            Ishwarya<br/>
            <span className="text-[#2563eb]">Anandakrishnan</span>
          </h1>
          <p className="text-lg text-[#6f6e69] mb-2 font-light">
            AI/ML Engineer · GenAI · RAG Pipelines · MLOps
          </p>
          <div className="flex items-center gap-1.5 text-sm text-[#6f6e69] mb-8">
            <MapPin size={13}/> Raleigh, NC · Open to Relocation
          </div>
          <p className="text-base text-[#3d3d3a] max-w-xl leading-relaxed mb-10">
            MS Computer Science @ NC State (May 2026) with 2+ years building production-grade GenAI systems,
            RAG pipelines, and ML infrastructure. I've shipped systems that serve real researchers,
            process billions of records, and cut deployment cycles by 70%.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#chat" className="flex items-center gap-2 bg-[#2563eb] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              <MessageCircle size={15}/> Ask me anything
            </a>
            <a href="https://github.com/ishwarya0103" target="_blank" className="flex items-center gap-2 border border-[#e8e6e1] text-[#111110] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#f5f4f0] transition-colors">
              <GithubIcon size={15}/> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ishwarya-anand/" target="_blank" className="flex items-center gap-2 border border-[#e8e6e1] text-[#111110] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#f5f4f0] transition-colors">
              <LinkedinIcon size={15}/> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 fade-in-up" style={{animationDelay:"150ms"}}>
          {[
            { n: "2+", l: "Years experience" },
            { n: "8B+", l: "Records processed" },
            { n: "50+", l: "Researchers served" },
            { n: "3.7", l: "GPA @ NC State" },
          ].map(({n,l}) => (
            <div key={l} className="bg-white border border-[#e8e6e1] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#111110]">{n}</div>
              <div className="text-xs text-[#6f6e69] mt-0.5">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 fade-in-up" style={{animationDelay:"250ms"}}>
          <p className="text-xs text-[#6f6e69] uppercase tracking-widest mb-5 font-medium">Core skills</p>
          <div className="space-y-4">
            {Object.entries(SKILLS).map(([cat, tags]) => (
              <div key={cat} className="flex flex-wrap gap-2 items-start">
                <span className="text-xs text-[#6f6e69] w-32 pt-1 shrink-0 font-medium">{cat}</span>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="text-xs bg-white border border-[#e8e6e1] text-[#3d3d3a] px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center fade-in-up" style={{animationDelay:"350ms"}}>
          <a href="#experience" className="flex flex-col items-center gap-1 text-[#6f6e69] hover:text-[#111110] transition-colors text-xs">
            <span>See experience</span>
            <ChevronDown size={16} className="animate-bounce"/>
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-[#6f6e69] uppercase tracking-widest mb-2 font-medium">Career</p>
        <h2 className="text-3xl font-bold text-[#111110] mb-12">Experience & Education</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e8e6e1]"></div>
          <div className="space-y-10 pl-8">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-[#2563eb] ring-4 ring-[#fafaf8]"></div>
                <div className="bg-white border border-[#e8e6e1] rounded-xl p-5 hover:shadow-sm transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-[#111110] text-sm">{e.role}</h3>
                      <p className="text-[#2563eb] text-sm font-medium">{e.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-[#6f6e69]">{e.period}</p>
                      <p className="text-xs text-[#6f6e69]">{e.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-[#3d3d3a] leading-relaxed flex gap-2">
                        <span className="text-[#2563eb] mt-1.5 shrink-0">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs text-[#6f6e69] uppercase tracking-widest mb-6 font-medium">Education</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {EDUCATION.map((e, i) => (
              <div key={i} className="bg-white border border-[#e8e6e1] rounded-xl p-5">
                <div className="text-xs text-[#2563eb] font-medium mb-1">{e.period}</div>
                <h3 className="font-semibold text-[#111110] text-sm">{e.degree}</h3>
                <p className="text-sm text-[#6f6e69]">{e.school}</p>
                <p className="text-xs text-[#3d3d3a] mt-1 font-medium">GPA {e.gpa}</p>
                <p className="text-xs text-[#6f6e69] mt-2 leading-relaxed">{e.courses}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs text-[#6f6e69] uppercase tracking-widest mb-2 font-medium">Work</p>
        <h2 className="text-3xl font-bold text-[#111110] mb-12">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <div key={i} className="bg-[#fafaf8] border border-[#e8e6e1] rounded-xl p-5 hover:shadow-sm transition-shadow group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[#111110] text-sm leading-snug pr-2">{p.title}</h3>
                <a href={p.link} target="_blank" className="shrink-0 text-[#6f6e69] hover:text-[#2563eb] transition-colors">
                  <ExternalLink size={14}/>
                </a>
              </div>
              <p className="text-sm text-[#3d3d3a] leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(t => (
                  <span key={t} className="text-xs bg-[#eff6ff] text-[#2563eb] px-2 py-0.5 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://github.com/ishwarya0103" target="_blank" className="inline-flex items-center gap-2 text-sm text-[#2563eb] hover:underline">
            <GithubIcon size={14}/> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

type Message = { role: "user" | "assistant"; content: string };

function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm an AI that knows everything about Ishwarya. Ask me about her experience, skills, projects, or why she'd be a great hire! 👋" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Sorry, something went wrong. Please try again!" }]);
    }
    setLoading(false);
  }

  const SUGGESTIONS = [
    "What's her GenAI experience?",
    "Is she available for hire?",
    "What projects has she built?",
    "What's her tech stack?",
  ];

  return (
    <section id="chat" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs text-[#6f6e69] uppercase tracking-widest mb-2 font-medium">AI Chat</p>
        <h2 className="text-3xl font-bold text-[#111110] mb-2">Ask Me Anything</h2>
        <p className="text-sm text-[#6f6e69] mb-8">Powered by Claude · Ask about Ishwarya&apos;s experience, skills, or availability</p>

        <div className="bg-white border border-[#e8e6e1] rounded-2xl overflow-hidden">
          <div className="h-96 overflow-y-auto p-5 space-y-4" id="chat-scroll">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-[#2563eb] text-white rounded-br-sm"
                    : "bg-[#f5f4f0] text-[#111110] rounded-bl-sm"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#f5f4f0] px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    {[0,1,2].map(j => (
                      <span key={j} className="w-1.5 h-1.5 bg-[#6f6e69] rounded-full animate-bounce" style={{animationDelay:`${j*100}ms`}}/>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => { setInput(s); }}
                  className="text-xs border border-[#e8e6e1] text-[#3d3d3a] px-3 py-1.5 rounded-full hover:bg-[#f5f4f0] transition-colors">
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="border-t border-[#e8e6e1] p-4 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask about Ishwarya…"
              className="flex-1 text-sm bg-[#f5f4f0] rounded-xl px-4 py-2.5 outline-none placeholder-[#6f6e69] focus:ring-2 focus:ring-[#2563eb]/20"
            />
            <button onClick={send} disabled={loading || !input.trim()}
              className="bg-[#2563eb] text-white p-2.5 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-40">
              <Send size={16}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#e8e6e1] py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-sm text-[#111110]">Ishwarya Anandakrishnan</p>
          <p className="text-xs text-[#6f6e69] mt-0.5">AI/ML Engineer · Open to full-time roles</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ishwarya0103" target="_blank" className="text-[#6f6e69] hover:text-[#111110] transition-colors"><GithubIcon size={18}/></a>
          <a href="https://www.linkedin.com/in/ishwarya-anand/" target="_blank" className="text-[#6f6e69] hover:text-[#111110] transition-colors"><LinkedinIcon size={18}/></a>
          <a href="mailto:ishwaryaanandakrishnan@gmail.com" className="text-[#6f6e69] hover:text-[#111110] transition-colors"><Mail size={18}/></a>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Experience/>
      <Projects/>
      <Chat/>
      <Footer/>
    </main>
  );
}
