import Navbar from "../components/Navbar";

const PROJECTS = [
  { title:"Production RAG Q&A System", highlight:"50+ users · sub-3s latency",
    stack:["LangChain","LangGraph","GPT-4","MongoDB Atlas","FastAPI","Docker","AWS ECS"],
    desc:"End-to-end GenAI Q&A system with multi-step reasoning serving 50+ researchers over 1,000+ documents. Improved precision 12% via semantic chunking and reranking evaluated with RAGAS metrics.",
    link:"https://github.com/ishwarya0103" },
  { title:"Uncertainty Quantification Framework", highlight:"90–95% empirical coverage",
    stack:["PyTorch","Scikit-learn","Conformal Prediction","MC Dropout","NumPy"],
    desc:"Calibration framework using conformal prediction and MC Dropout across regression and classification tasks. Benchmarked ECE, calibration curves, and reliability diagrams over 5+ architectures.",
    link:"https://github.com/ishwarya0103" },
  { title:"Scalable ML Infrastructure on Kubernetes", highlight:"80% faster redeployment",
    stack:["FastAPI","Kubernetes","Docker","MLflow","Airflow","Prometheus","AWS"],
    desc:"Production ML serving layer with HPA autoscaling and full observability. Orchestrated 10+ experiment runs via MLflow and Airflow; CI/CD cut redeployment steps by 80%.",
    link:"https://github.com/ishwarya0103" },
  { title:"Clinical NLP Transformer with Flash Attention", highlight:"2× throughput · 0.75 F1",
    stack:["PyTorch","Flash Attention","Hugging Face","FastAPI"],
    desc:"Decoder-style transformer with Flash Attention achieving 2× throughput over standard attention. Evaluation harness achieved 0.75 F1 on Portuguese medical text classification.",
    link:"https://github.com/ishwarya0103" },
  { title:"Hybrid Time Series Forecasting", highlight:"9% RMSE improvement on 15M+ rows",
    stack:["Python","ARIMA","XGBoost","LSTM","Pandas"],
    desc:"Ensemble pipeline combining ARIMA, XGBoost, and LSTM on 15M+ rows of Bitcoin price data. Reduced RMSE 9% over standalone ARIMA through systematic hyperparameter tuning.",
    link:"https://github.com/ishwarya0103" },
  { title:"Deep RL for IoV MAC Protocol", highlight:"15% throughput improvement",
    stack:["Python","PyTorch","Deep Q-Network","CI/CD"],
    desc:"DQN agents to dynamically optimize contention windows in simulated vehicular networks. Best Presentation at Pragyan Tech Fest among 45 teams. Presented at IC@MACE 2023.",
    link:"https://github.com/ishwarya0103" },
];

const card: React.CSSProperties = {
  background:"#111", border:"1px solid #1f1f1f", borderRadius:"14px",
  padding:"24px", display:"block", textDecoration:"none", transition:"border-color 0.2s",
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <main style={{minHeight:"100vh", paddingTop:"56px", background:"#0a0a0a"}}>
        <div style={{maxWidth:"860px", margin:"0 auto", padding:"60px 32px 80px"}}>

          <p style={{fontSize:"11px",color:"#888",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,marginBottom:"12px"}}>Work</p>
          <h1 style={{fontSize:"clamp(28px,5vw,48px)",fontWeight:700,color:"#fff",marginBottom:"8px",letterSpacing:"-0.5px"}}>Selected Projects</h1>
          <p style={{fontSize:"14px",color:"#888",marginBottom:"40px"}}>
            All on{" "}
            <a href="https://github.com/ishwarya0103" target="_blank" style={{color:"#60a5fa",textDecoration:"none"}}>
              github.com/ishwarya0103
            </a>
          </p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(360px,1fr))",gap:"16px"}}>
            {PROJECTS.map((p,i) => (
              <a key={i} href={p.link} target="_blank" style={card}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"10px",gap:"12px"}}>
                  <h3 style={{fontSize:"15px",fontWeight:600,color:"#fff",lineHeight:1.4}}>{p.title}</h3>
                  <svg style={{flexShrink:0,color:"#555"}} width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
                <span style={{fontSize:"12px",color:"#3b82f6",background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)",borderRadius:"20px",padding:"2px 10px",display:"inline-block",marginBottom:"12px"}}>
                  {p.highlight}
                </span>
                <p style={{fontSize:"13px",color:"#888",lineHeight:1.75,marginBottom:"16px"}}>{p.desc}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                  {p.stack.map(t=>(
                    <span key={t} style={{fontSize:"12px",color:"#666",border:"1px solid #222",borderRadius:"20px",padding:"2px 10px"}}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
