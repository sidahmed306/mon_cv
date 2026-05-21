"use client";

import { useLang } from "./LangProvider";
import { SectionHeader } from "./SectionHeader";
import { profile, projects } from "@/data/profile";

export function About() {
  const { t } = useLang();

  const stats = [
    { value: projects.length.toString(), label: t.about.stats.projects, color: "text-terminal-cyan" },
    { value: "2+", label: t.about.stats.experience, color: "text-terminal-green" },
    { value: "∞", label: t.about.stats.coffee, color: "text-terminal-yellow" },
    { value: "24/7", label: t.about.stats.learning, color: "text-terminal-purple" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader command={t.about.command} title={t.about.title} index="01" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2">
            <div className="bg-terminal-surface border border-terminal-border rounded-lg p-6 card-glow">
              <pre className="text-terminal-text leading-relaxed whitespace-pre-wrap font-mono text-sm sm:text-base">
                {t.about.bio}
              </pre>

              <div className="mt-6 pt-6 border-t border-terminal-border space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="text-terminal-purple">name:</span>
                  <span className="text-terminal-heading">{profile.name}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-terminal-purple">role:</span>
                  <span className="text-terminal-cyan">{profile.role}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-terminal-purple">location:</span>
                  <span className="text-terminal-text">{profile.location}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-terminal-purple">status:</span>
                  <span className="text-terminal-green flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                    available_for_hire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-terminal-surface border border-terminal-border rounded-lg p-4 card-glow text-center"
              >
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-terminal-dim mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
