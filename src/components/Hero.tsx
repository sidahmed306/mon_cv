"use client";

import { useLang } from "./LangProvider";
import { Typewriter } from "./Typewriter";
import { profile } from "@/data/profile";

function ProfileAvatar() {
  const src = profile.photoUrl ?? "/profile-placeholder.svg";

  return (
    <div className="relative">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terminal-cyan via-terminal-purple to-terminal-green blur-2xl opacity-40 animate-pulse" />

      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-br from-terminal-cyan via-terminal-purple to-terminal-green">
        <div className="w-full h-full rounded-full overflow-hidden bg-terminal-bg border-2 border-terminal-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Status badge */}
      <div className="absolute -bottom-1 right-2 sm:right-4 bg-terminal-bg border-2 border-terminal-green rounded-full px-2 py-0.5 text-xs flex items-center gap-1.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
        <span className="text-terminal-green font-bold">online</span>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 grid-bg"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Terminal window */}
        <div className="bg-terminal-surface border border-terminal-border rounded-lg shadow-2xl overflow-hidden animate-slide-up">
          {/* Window title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg/80 border-b border-terminal-border">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-terminal-red" />
              <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
              <span className="w-3 h-3 rounded-full bg-terminal-green" />
            </div>
            <span className="ml-2 text-xs text-terminal-dim">
              sidahmed@portfolio: ~/about
            </span>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-terminal-comment text-sm mb-2">{t.hero.greeting}</p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight">
                <span className="text-terminal-heading">{profile.name}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-terminal-cyan font-semibold mb-6 glow-cyan">
                {"> "}
                {t.hero.role}
              </p>

              <div className="text-base sm:text-lg text-terminal-text mb-8 min-h-[1.75rem]">
                <span className="text-terminal-green">$</span>{" "}
                <Typewriter texts={t.hero.tagline} />
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-terminal-dim mb-8">
                <span>
                  <span className="text-terminal-purple">@</span>
                  {profile.location}
                </span>
                <span>
                  <span className="text-terminal-purple">$</span> 20 ans
                </span>
                <span>
                  <span className="text-terminal-purple">~</span> Informatique de Gestion
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-terminal-cyan text-terminal-bg font-bold rounded hover:bg-terminal-cyan/90 transition-colors text-sm"
                >
                  {t.hero.cta_projects}
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 border border-terminal-cyan text-terminal-cyan rounded hover:bg-terminal-cyan/10 transition-colors text-sm"
                >
                  {t.hero.cta_contact}
                </a>
                <a
                  href={profile.cvUrl}
                  download={profile.cvFileName}
                  className="px-5 py-2.5 border border-terminal-green text-terminal-green rounded hover:bg-terminal-green/10 transition-colors text-sm inline-flex items-center gap-1"
                >
                  {t.hero.cta_cv} ↓
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="order-first md:order-last flex justify-center">
              <ProfileAvatar />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-10 text-terminal-dim text-sm animate-pulse">
          <span className="text-terminal-purple">↓</span> scroll
        </div>
      </div>
    </section>
  );
}
