import Navbar from "../components/Navbar";

const PROJECTS = [
  {
    title: "Uncertainty Quantification Framework",
    stack: ["PyTorch", "Scikit-learn", "Conformal Prediction", "MC Dropout", "NumPy"],
    desc: "Calibration framework using conformal prediction and MC Dropout across regression and classification tasks. Achieved 90–95% empirical coverage; benchmarked ECE, calibration curves, and reliability diagrams over 5+ architectures.",
    link: "https://github.com/ishwarya0103",
    highlight: "90–95% empirical coverage",
  },
  {
    title: "Scalable ML Infrastructure on Kubernetes",
    stack: ["FastAPI", "Kubernetes", "Docker", "MLflow", "Airflow", "Prometheus", "Grafana", "AWS"],
    desc: "Production ML serving layer with HPA autoscaling and full Prometheus/Grafana observability. Orchestrated 10+ experiment runs via MLflow and Airflow; CI/CD pipeline cut redeployment steps by 80%.",
    link: "https://github.com/ishwarya0103",
    highlight: "80% faster redeployment",
  },
  {
    title: "Clinical NLP Transformer with Flash Attention",
    stack: ["PyTorch", "Flash Attention", "Hugging Face Transformers", "FastAPI"],
    desc: "Decoder-style transformer with custom tokenization and Flash Attention for long-sequence efficiency — achieving 2× throughput over standard attention. Built evaluation harness achieving 0.75 F1 on Portuguese medical text classification.",
    link: "https://github.com/ishwarya0103",
    highlight: "2× throughput · 0.75 F1",
  },
  {
    title: "Hybrid Time Series Forecasting",
    stack: ["Python", "ARIMA", "XGBoost", "LSTM", "Pandas"],
    desc: "Ensemble forecasting pipeline combining ARIMA, XGBoost, and LSTM on 15M+ rows of historical Bitcoin price data. Reduced RMSE 9% over standalone ARIMA through systematic hyperparameter tuning.",
    link: "https://github.com/ishwarya0103",
    highlight: "9% RMSE improvement on 15M+ rows",
  },
  {
    title: "Deep RL for IoV MAC Protocol",
    stack: ["Python", "PyTorch", "Deep Q-Network", "CI/CD"],
    desc: "Trained DQN agents to dynamically optimize contention windows in simulated vehicular networks, improving throughput and reducing communication delays by 15%. Automated model retraining and deployment via CI/CD pipelines.",
    link: "https://github.com/ishwarya0103",
    highlight: "15% throughput improvement",
  },
  {
    title: "Production RAG Q&A System",
    stack: ["LangChain", "LangGraph", "OpenAI GPT-4", "MongoDB Atlas", "FastAPI", "Docker", "AWS ECS"],
    desc: "End-to-end GenAI Q&A system with multi-step reasoning and REST API interfaces, serving 50+ researchers over 1,000+ documents at sub-3s latency. Improved precision 12% via semantic splitting and reranking, evaluated with RAGAS.",
    link: "https://github.com/ishwarya0103",
    highlight: "50+ users · sub-3s latency",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-14">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs text-[#888] uppercase tracking-widest mb-3 font-medium">Work</p>
          <h1 className="text-4xl font-bold text-white mb-3">Selected Projects</h1>
          <p className="text-[#888] text-sm mb-12">
            All projects on{" "}
            <a href="https://github.com/ishwarya0103" target="_blank" className="text-[#60a5fa] hover:underline">
              github.com/ishwarya0103
            </a>
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {PROJECTS.map((p, i) => (
              <a key={i} href={p.link} target="_blank"
                className="group bg-[#111111] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3b82f6]/40 transition-all hover:shadow-lg hover:shadow-blue-500/5 block">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white text-sm leading-snug pr-2 group-hover:text-[#60a5fa] transition-colors">
                    {p.title}
                  </h3>
                  <svg className="shrink-0 text-[#888] group-hover:text-[#3b82f6] transition-colors" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
                <div className="inline-block text-xs text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/20 px-2 py-0.5 rounded-full mb-3">
                  {p.highlight}
                </div>
                <p className="text-sm text-[#888] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(t => (
                    <span key={t} className="text-xs border border-[#2a2a2a] text-[#888] px-2 py-0.5 rounded-full">{t}</span>
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
