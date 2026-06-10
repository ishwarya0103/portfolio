"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";

type Message = { role:"user"|"assistant"; content:string };

const SUGGESTIONS = [
  "What's her GenAI experience?","Is she open to relocation?",
  "What's her tech stack?","Tell me about her RAG project",
  "When is she available?","What makes her a strong hire?",
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role:"assistant", content:"Hi! I'm an AI trained on Ishwarya's resume and background. Ask me anything about her experience, skills, projects, or availability — I'll give you straight answers. 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({behavior:"smooth"}); }, [messages, loading]);

  async function send(text?: string) {
    const content = (text || input).trim();
    if (!content || loading) return;
    const userMsg: Message = { role:"user", content };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({messages: next}),
      });
      const data = await res.json();
      setMessages([...next, {role:"assistant", content: data.content}]);
    } catch {
      setMessages([...next, {role:"assistant", content:"Something went wrong. Please try again!"}]);
    }
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <main style={{minHeight:"100vh",paddingTop:"56px",background:"#0a0a0a",display:"flex",flexDirection:"column"}}>
        <div style={{maxWidth:"720px",margin:"0 auto",width:"100%",padding:"48px 24px 32px",display:"flex",flexDirection:"column",flex:1}}>

          <p style={{fontSize:"11px",color:"#888",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,marginBottom:"8px"}}>AI Chat</p>
          <h1 style={{fontSize:"32px",fontWeight:700,color:"#fff",marginBottom:"4px"}}>Ask Me Anything</h1>
          <p style={{fontSize:"14px",color:"#888",marginBottom:"28px"}}>Powered by Claude · Knows everything about Ishwarya</p>

          <div style={{background:"#111",border:"1px solid #1f1f1f",borderRadius:"16px",display:"flex",flexDirection:"column",overflow:"hidden",minHeight:"520px"}}>
            {/* Messages */}
            <div style={{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"16px"}}>
              {messages.map((m,i)=>(
                <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",alignItems:"flex-start",gap:"10px"}}>
                  {m.role==="assistant" && (
                    <div style={{width:"30px",height:"30px",borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,flexShrink:0,marginTop:"2px"}}>AI</div>
                  )}
                  <div style={{
                    maxWidth:"75%", padding:"12px 16px", borderRadius:"14px", fontSize:"14px", lineHeight:1.7,
                    background: m.role==="user" ? "#3b82f6" : "#1a1a1a",
                    color: m.role==="user" ? "#fff" : "#ddd",
                    border: m.role==="assistant" ? "1px solid #222" : "none",
                    borderBottomRightRadius: m.role==="user" ? "4px" : "14px",
                    borderBottomLeftRadius: m.role==="assistant" ? "4px" : "14px",
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{display:"flex",alignItems:"flex-start",gap:"10px"}}>
                  <div style={{width:"30px",height:"30px",borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,flexShrink:0}}>AI</div>
                  <div style={{background:"#1a1a1a",border:"1px solid #222",padding:"14px 18px",borderRadius:"14px",borderBottomLeftRadius:"4px",display:"flex",gap:"5px",alignItems:"center"}}>
                    {[0,1,2].map(j=>(
                      <span key={j} style={{width:"6px",height:"6px",borderRadius:"50%",background:"#888",display:"inline-block",animation:"bounce 1s infinite",animationDelay:`${j*150}ms`}}/>
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef}/>
            </div>

            {/* Suggestion chips */}
            {messages.length===1 && (
              <div style={{padding:"0 20px 16px",display:"flex",flexWrap:"wrap",gap:"8px"}}>
                {SUGGESTIONS.map(s=>(
                  <button key={s} onClick={()=>send(s)} style={{fontSize:"12px",color:"#888",border:"1px solid #222",borderRadius:"20px",padding:"6px 14px",background:"transparent",cursor:"pointer"}}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <div style={{borderTop:"1px solid #1f1f1f",padding:"16px 20px",display:"flex",gap:"10px"}}>
              <input
                value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&send()}
                placeholder="Ask about Ishwarya…"
                style={{flex:1,fontSize:"14px",background:"#1a1a1a",border:"1px solid #222",borderRadius:"10px",padding:"10px 16px",color:"#fff",outline:"none"}}
              />
              <button onClick={()=>send()} disabled={loading||!input.trim()} style={{
                background:"#3b82f6",color:"#fff",border:"none",borderRadius:"10px",
                padding:"10px 16px",cursor:"pointer",opacity:loading||!input.trim()?0.4:1,
              }}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>

          <p style={{textAlign:"center",fontSize:"13px",color:"#888",marginTop:"20px"}}>
            Want to connect?{" "}
            <a href="mailto:ishwaryaanandakrishnan@gmail.com" style={{color:"#60a5fa",textDecoration:"none"}}>
              ishwaryaanandakrishnan@gmail.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
