import Navbar from "../components/Navbar";

const SKILLS = {
  "Languages": ["Python", "TypeScript", "Java", "SQL", "C++", "Bash"],
  "GenAI & LLMs": ["LangChain", "LangGraph", "LlamaIndex", "OpenAI GPT-4", "RAG", "PEFT/LoRA", "Hugging Face", "RAGAS", "FAISS", "Qdrant", "MongoDB Atlas"],
  "ML & Deep Learning": ["PyTorch", "TensorFlow", "Scikit-learn", "CNNs", "Transformers", "Flash Attention", "Reinforcement Learning", "Conformal Prediction", "MC Dropout", "XGBoost", "spaCy"],
  "Infrastructure & MLOps": ["Docker", "Kubernetes (HPA)", "AWS", "GCP", "MLflow", "Airflow", "Prometheus", "Grafana", "CI/CD", "FastAPI", "MongoDB", "PostgreSQL"],
};

const CERTS = [
  "Getting Started with Deep Learning — NVIDIA",
  "Generative AI in Healthcare — LinkedIn Learning",
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-14">
        <div className="max-w-5xl mx-auto px-6 py-16">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-xs text-[#888] uppercase tracking-widest mb-3 font-medium">About me</p>
            <h1 className="text-4xl font-bold text-white mb-6">Background & Skills</h1>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">Who I am</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  I&apos;m an AI/ML Engineer with 2+ years of experience building production-grade GenAI systems,
                  RAG pipelines, and scalable ML infrastructure. Currently completing my MS in Computer Science
                  at NC State (May 2026, GPA 3.7/4.0), graduating with hands-on experience across the full ML stack.
                </p>
              </div>
              <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">What I&apos;m looking for</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  Actively seeking <span className="text-[#60a5fa]">full-time roles</span> in AI/ML Engineering, GenAI, MLOps, or ML Infrastructure.
                  Available from May 2026 (or earlier for the right opportunity). Open to relocation anywhere in the US.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { n: "2+", l: "Years experience" },
              { n: "8B+", l: "Records processed" },
              { n: "50+", l: "Researchers served" },
              { n: "3.7", l: "GPA @ NC State" },
            ].map(({ n, l }) => (
              <div key={l} className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#3b82f6]">{n}</div>
                <div className="text-xs text-[#888] mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-16">
            <p className="text-xs text-[#888] uppercase tracking-widest mb-6 font-medium">Technical Skills</p>
            <div className="space-y-5">
              {Object.entries(SKILLS).map(([cat, tags]) => (
                <div key={cat} className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-5">
                  <h3 className="text-white text-sm font-semibold mb-3">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="text-xs border border-[#2a2a2a] text-[#888] px-3 py-1 rounded-full hover:border-[#3b82f6]/40 hover:text-[#60a5fa] transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <p className="text-xs text-[#888] uppercase tracking-widest mb-6 font-medium">Certifications</p>
            <div className="space-y-3">
              {CERTS.map(c => (
                <div key={c} className="bg-[#111111] border border-[#2a2a2a] rounded-xl px-5 py-3 flex items-center gap-3">
                  <span className="text-[#3b82f6]">🏅</span>
                  <span className="text-sm text-[#888]">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Get in touch</h3>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:ishwaryaanandakrishnan@gmail.com"
                className="text-sm text-[#60a5fa] hover:underline">
                ishwaryaanandakrishnan@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ishwarya-anand/" target="_blank"
                className="text-sm text-[#60a5fa] hover:underline">
                linkedin.com/in/ishwarya-anand
              </a>
              <a href="https://github.com/ishwarya0103" target="_blank"
                className="text-sm text-[#60a5fa] hover:underline">
                github.com/ishwarya0103
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
