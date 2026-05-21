"use client";

import { useLang } from "./LangProvider";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-terminal-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader command={t.education.command} title={t.education.title} index="04" />

        <div className="bg-terminal-surface border border-terminal-border rounded-lg p-6 sm:p-8 card-glow">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-terminal-heading mb-1">{t.education.degree}</h3>
              <p className="text-terminal-cyan">{t.education.school}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 text-terminal-green text-xs rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                {t.education.current}
              </span>
              <span className="text-xs text-terminal-dim">{t.education.year}</span>
            </div>
          </div>

          <p className="text-terminal-text text-sm leading-relaxed mt-4 pt-4 border-t border-terminal-border">
            {t.education.description}
          </p>
        </div>
      </div>
    </section>
  );
}
