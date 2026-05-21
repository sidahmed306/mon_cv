"use client";

import { useLang } from "./LangProvider";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-terminal-border no-print">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-terminal-dim">
          <span className="text-terminal-green">$</span> echo &quot;© {new Date().getFullYear()}{" "}
          <span className="text-terminal-cyan">{profile.name}</span> — {t.footer.rights}&quot;
        </p>
        <p className="text-terminal-dim text-xs">
          {t.footer.built} <span className="text-terminal-cyan">Next.js</span> {t.footer.and}{" "}
          <span className="text-terminal-cyan">Tailwind</span> {t.footer.by}{" "}
          <span className="text-terminal-heading">{profile.name}</span>
        </p>
      </div>
    </footer>
  );
}
