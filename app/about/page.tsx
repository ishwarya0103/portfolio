import Navbar from "../components/Navbar";

const SKILLS: Record<string, string[]> = {
  "Languages": ["Python","TypeScript","Java","SQL","C++","Bash"],
  "GenAI & LLMs": ["LangChain","LangGraph","LlamaIndex","OpenAI GPT-4","RAG","PEFT/LoRA","Hugging Face","RAGAS","FAISS","Qdrant","MongoDB Atlas"],
  "ML & Deep Learning": ["PyTorch","TensorFlow","Scikit-learn","CNNs","Transformers","Flash Attention","Reinforcement Learning","Conformal Prediction","MC Dropout","XGBoost","spaCy"],
  "Infrastructure & MLOps": ["Docker","Kubernetes","AWS","GCP","MLflow","Airflow","Prometheus","Grafana","CI/CD","FastAPI","MongoDB","PostgreSQL"],
};

const card: React.CSSProperties = { background:"#111", border:"1px solid #1f1f1f", borderRadius:"14px", padding:"24px" };

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{minHeight:"100vh", paddingTop:"56px", background:"#0a0a0a"}}>
        <div style={{maxWidth:"860px", margin:"0 auto", padding:"60px 32px 80px"}}>

          <p style={{fontSize:"11px",color:"#888",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,marginBottom:"12px"}}>About</p>
          <h1 style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:700,color:"#fff",marginBottom:"40px",letterSpacing:"-0.5px"}}>Background & Skills</h1>

          {/* Intro cards */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px",marginBottom:"40px"}}>
            <div style={card}>
              <h3 style={{fontSize:"15px",fontWeight:600,color:"#fff",marginBottom:"12px"}}>Who I am</h3>
              <p style={{fontSize:"14px",color:"#888",lineHeight:1.75}}>
                AI/ML Engineer with 2+ years building production GenAI systems, RAG pipelines, and ML infrastructure.
                MS in Computer Science @ NC State (May 2026, GPA 3.7/4.0), B.Tech CSE from NIT Trichy (GPA 8.5/10).
              </p>
            </div>
            <div style={card}>
              <h3 style={{fontSize:"15px",fontWeight:600,color:"#fff",marginBottom:"12px"}}>What I&apos;m looking for</h3>
              <p style={{fontSize:"14px",color:"#888",lineHeight:1.75}}>
                Seeking <span style={{color:"#60a5fa"}}>full-time roles</span> in AI/ML Engineering, GenAI, MLOps, or ML Infrastructure.
                Available from May 2026 (or earlier). Open to relocation anywhere in the US.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px",marginBottom:"48px"}}>
            {[["2+","Years exp"],["8B+","Records"],["50+","Researchers"],["3.7","GPA"]].map(([n,l])=>(
              <div key={l} style={{...card, textAlign:"center" as const, padding:"20px 12px"}}>
                <div style={{fontSize:"24px",fontWeight:700,color:"#3b82f6"}}>{n}</div>
                <div style={{fontSize:"12px",color:"#888",marginTop:"4px"}}>{l}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <p style={{fontSize:"11px",color:"#888",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,marginBottom:"20px"}}>Technical Skills</p>
          <div style={{display:"flex",flexDirection:"column",gap:"14px",marginBottom:"48px"}}>
            {Object.entries(SKILLS).map(([cat, tags]) => (
              <div key={cat} style={card}>
                <h3 style={{fontSize:"14px",fontWeight:600,color:"#fff",marginBottom:"14px"}}>{cat}</h3>
                <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                  {tags.map(t => (
                    <span key={t} style={{fontSize:"13px",color:"#888",border:"1px solid #222",borderRadius:"20px",padding:"4px 12px"}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <p style={{fontSize:"11px",color:"#888",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,marginBottom:"20px"}}>Certifications</p>
          <div style={{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"48px"}}>
            {["Getting Started with Deep Learning — NVIDIA","Generative AI in Healthcare — LinkedIn Learning"].map(c=>(
              <div key={c} style={{...card, padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px"}}>
                <span>🏅</span>
                <span style={{fontSize:"14px",color:"#888"}}>{c}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={card}>
            <h3 style={{fontSize:"15px",fontWeight:600,color:"#fff",marginBottom:"16px"}}>Get in touch</h3>
            <div style={{display:"flex",flexWrap:"wrap",gap:"16px"}}>
              {[
                {label:"ishwaryaanandakrishnan@gmail.com", href:"mailto:ishwaryaanandakrishnan@gmail.com"},
                {label:"linkedin.com/in/ishwarya-anand", href:"https://www.linkedin.com/in/ishwarya-anand/"},
                {label:"github.com/ishwarya0103", href:"https://github.com/ishwarya0103"},
              ].map(l=>(
                <a key={l.href} href={l.href} target="_blank" style={{fontSize:"14px",color:"#60a5fa",textDecoration:"none"}}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
