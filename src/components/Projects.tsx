"use client";

import { useLang } from "./LangProvider";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/data/profile";

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader command={t.projects.command} title={t.projects.title} index="03" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const cardContent = (
              <>
                <div className="px-4 py-3 bg-terminal-bg/60 border-b border-terminal-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-terminal-dim">~/projects/</span>
                    <span className="text-terminal-cyan font-bold">{project.slug}</span>
                  </div>
                  <span className="text-xs text-terminal-dim">{project.year}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="text-lg font-bold text-terminal-text group-hover:text-terminal-cyan transition-colors">
                      {String(idx + 1).padStart(2, "0")}. {project.name}
                    </h3>
                  </div>

                  <p className="text-sm text-terminal-text leading-relaxed mb-4">
                    {project.description[lang]}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs text-terminal-comment mb-2">
                      // {t.projects.tech}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-terminal-cyan"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-terminal-border">
                    {project.liveUrl && (
                      <span className="text-sm text-terminal-green group-hover:text-terminal-cyan transition-colors flex items-center gap-1">
                        <span>↗</span> {t.projects.view_live}
                      </span>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-terminal-purple hover:text-terminal-cyan transition-colors flex items-center gap-1"
                      >
                        <span>⚡</span> {t.projects.view_code}
                      </a>
                    )}
                  </div>
                </div>
              </>
            );

            const baseClasses =
              "block bg-terminal-surface border border-terminal-border rounded-lg overflow-hidden card-glow group";

            if (project.liveUrl) {
              return (
                <a
                  key={project.slug}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} — ${t.projects.view_live}`}
                  className={`${baseClasses} cursor-pointer focus:outline-none focus:ring-2 focus:ring-terminal-cyan`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <article key={project.slug} className={baseClasses}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
