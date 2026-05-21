"use client";

import { useState, useEffect } from "react";
import { useLang } from "./LangProvider";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-terminal-bg/90 backdrop-blur-md border-b border-terminal-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-terminal-cyan">
          <span className="text-terminal-green">$</span>
          <span className="glow-cyan">sidahmed.dev</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-terminal-dim hover:text-terminal-cyan transition-colors"
              >
                <span className="text-terminal-purple">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
            title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            className="w-9 h-9 flex items-center justify-center border border-terminal-border rounded text-terminal-cyan hover:bg-terminal-cyan/10 transition-colors"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Lang switcher */}
          <div className="flex items-center gap-1 border border-terminal-border rounded px-1 py-0.5 text-xs">
            <button
              onClick={() => setLang("fr")}
              className={`px-2 py-1 rounded transition-colors ${
                lang === "fr"
                  ? "bg-terminal-cyan text-terminal-bg font-bold"
                  : "text-terminal-dim hover:text-terminal-cyan"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 rounded transition-colors ${
                lang === "en"
                  ? "bg-terminal-cyan text-terminal-bg font-bold"
                  : "text-terminal-dim hover:text-terminal-cyan"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-terminal-cyan p-2"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-3 px-6 pb-4 border-t border-terminal-border bg-terminal-bg/95 backdrop-blur-md">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-terminal-dim hover:text-terminal-cyan transition-colors"
              >
                <span className="text-terminal-purple">./</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
