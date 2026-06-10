"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's her GenAI experience?",
  "Is she open to relocation?",
  "What's her tech stack?",
  "Tell me about her RAG project",
  "When is she available?",
  "What makes her a strong hire?",
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm an AI trained on Ishwarya's resume and background. Ask me anything about her experience, skills, projects, or availability — I'll give you straight answers. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text?: string) {
    const content = (text || input).trim();
    if (!content || loading) return;
    const userMsg: Message = { role: "user", content };
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
      setMessages([...next, { role: "assistant", content: "Something went wrong. Please try again!" }]);
    }
    setLoading(false);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-14 flex flex-col">
        <div className="max-w-3xl mx-auto w-full px-6 py-10 flex flex-col flex-1">
          <p className="text-xs text-[#888] uppercase tracking-widest mb-2 font-medium">AI Chat</p>
          <h1 className="text-3xl font-bold text-white mb-1">Ask Me Anything</h1>
          <p className="text-sm text-[#888] mb-8">Powered by Claude · Knows everything about Ishwarya</p>

          {/* Chat window */}
          <div className="flex-1 bg-[#111111] border border-[#2a2a2a] rounded-2xl flex flex-col overflow-hidden" style={{minHeight: "500px"}}>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-[#3b82f6] flex items-center justify-center text-xs mr-2 shrink-0 mt-0.5">
                      AI
                    </div>
                  )}
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#3b82f6] text-white rounded-br-sm"
                      : "bg-[#1a1a1a] border border-[#2a2a2a] text-[#ededed] rounded-bl-sm"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-[#3b82f6] flex items-center justify-center text-xs mr-2 shrink-0">AI</div>
                  <div className="bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(j => (
                        <span key={j} className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce"
                          style={{ animationDelay: `${j * 100}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-5 pb-3 flex flex-wrap gap-2">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => send(s)}
                    className="text-xs border border-[#2a2a2a] text-[#888] px-3 py-1.5 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-[#2a2a2a] p-4 flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Ask about Ishwarya…"
                className="flex-1 text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2.5 outline-none text-white placeholder-[#888] focus:border-[#3b82f6]/50 transition-colors"
              />
              <button onClick={() => send()} disabled={loading || !input.trim()}
                className="bg-[#3b82f6] text-white p-2.5 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-[#888] mt-4">
            Want to connect directly?{" "}
            <a href="mailto:ishwaryaanandakrishnan@gmail.com" className="text-[#60a5fa] hover:underline">
              ishwaryaanandakrishnan@gmail.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
