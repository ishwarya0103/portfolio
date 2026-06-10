"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/chat", label: "Chat" },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      borderBottom: "1px solid #1f1f1f",
      background: "rgba(10,10,10,0.92)",
      backdropFilter: "blur(12px)",
      height: "56px",
      display: "flex", alignItems: "center",
    }}>
      <div style={{
        maxWidth: "960px", margin: "0 auto", padding: "0 24px",
        width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ fontSize: "15px", fontWeight: 600, color: "#fff", textDecoration: "none" }}>
          Ishwarya A.
        </Link>
        <div style={{ display: "flex", gap: "4px" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "6px 14px",
              borderRadius: "8px",
              fontSize: "14px",
              textDecoration: "none",
              color: path === l.href ? "#fff" : "#888",
              background: path === l.href ? "#1a1a1a" : "transparent",
              transition: "all 0.15s",
            }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
