"use client";

import { useLang } from "./LangProvider";
import { SectionHeader } from "./SectionHeader";
import { skills, languagesSpoken } from "@/data/profile";

const categoryOrder: ("frontend" | "backend" | "languages" | "database" | "tools")[] = [
  "frontend",
  "backend",
  "languages",
  "database",
  "tools",
];

export function Skills() {
  const { t, lang } = useLang();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-terminal-surface/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader command={t.skills.command} title={t.skills.title} index="02" />

        <div className="grid md:grid-cols-2 gap-6">
          {categoryOrder.map((cat) => {
            const items = skills.filter((s) => s.category === cat);
            if (items.length === 0) return null;
            return (
              <div
                key={cat}
                className="bg-terminal-surface border border-terminal-border rounded-lg p-6 card-glow"
              >
                <h3 className="text-terminal-cyan font-bold mb-4 text-sm flex items-center gap-2">
                  <span className="text-terminal-green">▸</span>
                  {t.skills.categories[cat]}
                  <span className="text-terminal-dim text-xs ml-auto">
                    {items.length} {items.length > 1 ? "items" : "item"}
                  </span>
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-terminal-text group-hover:text-terminal-heading transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-terminal-dim">{skill.level}/5</span>
                      </div>
                      <div className="h-1.5 bg-terminal-bg rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${(skill.level / 5) * 100}%`,
                            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                            boxShadow: `0 0 8px ${skill.color}55`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Languages spoken */}
        <div className="mt-8 bg-terminal-surface border border-terminal-border rounded-lg p-6">
          <h3 className="text-terminal-cyan font-bold mb-4 text-sm flex items-center gap-2">
            <span className="text-terminal-green">▸</span>
            {lang === "fr" ? "Langues parlées" : "Spoken languages"}
          </h3>
          <div className="flex flex-wrap gap-4">
            {languagesSpoken.map((l) => (
              <div
                key={l.code}
                className="flex items-center gap-3 px-3 py-2 bg-terminal-bg border border-terminal-border rounded"
              >
                <span className="text-xs font-bold text-terminal-cyan border border-terminal-border rounded px-2 py-1 bg-terminal-surface">
                  {l.code}
                </span>
                <div>
                  <div className="text-sm text-terminal-text">{lang === "fr" ? l.name : l.nameEn}</div>
                  <div className="text-xs text-terminal-dim">
                    {lang === "fr" ? l.level : l.levelEn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
