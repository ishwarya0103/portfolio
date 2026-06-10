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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-white hover:text-[#60a5fa] transition-colors">
          Ishwarya A.
        </Link>
        <div className="flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                path === l.href
                  ? "text-white bg-[#1a1a1a]"
                  : "text-[#888] hover:text-white"
              }`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
