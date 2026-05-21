"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangProvider";
import { profile, projects, skills, languagesSpoken } from "@/data/profile";

type Line = { type: "input" | "output" | "system"; content: React.ReactNode; id: number };

let lineId = 0;
const nextId = () => ++lineId;

export function InteractiveTerminal() {
  const { t, lang } = useLang();
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState(-1);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && history.length === 0) {
      setHistory([
        { type: "system", content: t.terminal.welcome, id: nextId() },
      ]);
    }
  }, [open, history.length, t.terminal.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const inputLine: Line = {
      type: "input",
      content: (
        <span>
          <span className="text-terminal-green">{t.terminal.prompt}</span>{" "}
          <span className="text-terminal-text">{raw}</span>
        </span>
      ),
      id: nextId(),
    };

    if (cmd === "clear" || cmd === "cls") {
      setHistory([]);
      return;
    }

    let output: React.ReactNode;
    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <div className="text-terminal-cyan">{t.terminal.help_intro}</div>
            {Object.entries(t.terminal.commands).map(([cmd, desc]) => (
              <div key={cmd} className="flex gap-4">
                <span className="text-terminal-green w-20">{cmd}</span>
                <span className="text-terminal-dim">{desc}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "about":
        output = (
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-terminal-purple">name:</span>{" "}
              <span className="text-terminal-heading">{profile.name}</span>
            </div>
            <div>
              <span className="text-terminal-purple">role:</span>{" "}
              <span className="text-terminal-cyan">{profile.role}</span>
            </div>
            <div>
              <span className="text-terminal-purple">location:</span> {profile.location}
            </div>
            <div className="mt-2 text-terminal-text">{t.about.bio}</div>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-1">
            {skills.map((s) => (
              <div key={s.name} className="flex justify-between text-sm">
                <span style={{ color: s.color }}>● {s.name}</span>
                <span className="text-terminal-dim">{"★".repeat(s.level)}{"☆".repeat(5 - s.level)}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "projects":
      case "ls":
        output = (
          <div className="space-y-2">
            {projects.map((p, i) => (
              <div key={p.slug}>
                <div className="text-terminal-cyan font-bold">
                  {i + 1}. {p.name}{" "}
                  <span className="text-terminal-dim text-xs">({p.year})</span>
                </div>
                <div className="text-xs text-terminal-text ml-4">{p.description[lang]}</div>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-terminal-green hover:underline ml-4"
                  >
                    → {p.liveUrl}
                  </a>
                )}
              </div>
            ))}
          </div>
        );
        break;
      case "education":
        output = (
          <div className="text-sm space-y-1">
            <div className="text-terminal-cyan font-bold">{t.education.degree}</div>
            <div className="text-terminal-text">{t.education.school}</div>
            <div className="text-terminal-dim">{t.education.year} — {t.education.current}</div>
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-terminal-purple">email:</span>{" "}
              <a href={`mailto:${profile.email}`} className="text-terminal-cyan hover:underline">
                {profile.email}
              </a>
            </div>
            <div>
              <span className="text-terminal-purple">phone:</span> {profile.phone}
            </div>
            <div>
              <span className="text-terminal-purple">linkedin:</span>{" "}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                {profile.linkedin}
              </a>
            </div>
            <div>
              <span className="text-terminal-purple">github:</span>{" "}
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                {profile.github}
              </a>
            </div>
          </div>
        );
        break;
      case "socials":
        output = (
          <div className="space-y-1 text-sm">
            <div>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                → LinkedIn
              </a>
            </div>
            <div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                → GitHub
              </a>
            </div>
            <div>
              <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-terminal-cyan hover:underline">
                → WhatsApp
              </a>
            </div>
          </div>
        );
        break;
      case "whoami":
        output = (
          <div className="text-terminal-cyan">
            {profile.username}
            <div className="text-xs text-terminal-dim mt-1">
              {profile.role} @ {profile.location}
            </div>
          </div>
        );
        break;
      case "cv":
      case "download":
        if (typeof window !== "undefined") {
          const a = document.createElement("a");
          a.href = profile.cvUrl;
          a.download = profile.cvFileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
        output = (
          <span className="text-terminal-green">
            ✓ {lang === "fr" ? "Téléchargement du CV..." : "Downloading CV..."}{" "}
            <a href={profile.cvUrl} download={profile.cvFileName} className="text-terminal-cyan hover:underline">
              {profile.cvFileName}
            </a>
          </span>
        );
        break;
      case "lang":
        output = (
          <span className="text-terminal-text">
            {lang === "fr" ? "Langue actuelle :" : "Current language:"}{" "}
            <span className="text-terminal-cyan">{lang.toUpperCase()}</span>
          </span>
        );
        break;
      case "langs":
        output = (
          <div className="space-y-1 text-sm">
            {languagesSpoken.map((l) => (
              <div key={l.code}>
                <span className="text-terminal-cyan">[{l.code}]</span> {lang === "fr" ? l.name : l.nameEn} —{" "}
                <span className="text-terminal-dim">{lang === "fr" ? l.level : l.levelEn}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "":
        output = null;
        break;
      default:
        output = (
          <div>
            <span className="text-terminal-red">{t.terminal.not_found}</span>{" "}
            <span className="text-terminal-yellow">{raw}</span>
            <div className="text-terminal-dim text-xs mt-1">{t.terminal.try_help}</div>
          </div>
        );
    }

    const newLines: Line[] = [inputLine];
    if (output !== null) {
      newLines.push({ type: "output", content: output, id: nextId() });
    }
    setHistory((h) => [...h, ...newLines]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        setCmdHistory((h) => [...h, input]);
        setCmdHistoryIdx(-1);
      }
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const newIdx =
        cmdHistoryIdx === -1 ? cmdHistory.length - 1 : Math.max(0, cmdHistoryIdx - 1);
      setCmdHistoryIdx(newIdx);
      setInput(cmdHistory[newIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistoryIdx === -1) return;
      const newIdx = cmdHistoryIdx + 1;
      if (newIdx >= cmdHistory.length) {
        setCmdHistoryIdx(-1);
        setInput("");
      } else {
        setCmdHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx] || "");
      }
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-terminal-cyan text-terminal-bg px-4 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform font-bold text-sm flex items-center gap-2 no-print"
        aria-label="Toggle interactive terminal"
      >
        {open ? "✕" : "▸_"}
        <span className="hidden sm:inline">{open ? "close" : "terminal"}</span>
      </button>

      {/* Terminal panel */}
      {open && (
        <div className="fixed bottom-24 right-6 left-6 sm:left-auto sm:w-[480px] md:w-[560px] z-40 bg-terminal-surface border border-terminal-cyan rounded-lg shadow-2xl overflow-hidden animate-slide-up no-print">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-terminal-bg border-b border-terminal-border">
            <span className="w-3 h-3 rounded-full bg-terminal-red" />
            <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
            <span className="w-3 h-3 rounded-full bg-terminal-green" />
            <span className="ml-2 text-xs text-terminal-dim">
              {profile.username}@portfolio: ~ — bash
            </span>
          </div>

          {/* History */}
          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="h-80 overflow-y-auto p-4 text-sm font-mono cursor-text bg-terminal-bg/60"
          >
            {history.map((line) => (
              <div
                key={line.id}
                className={`mb-2 ${line.type === "system" ? "text-terminal-comment italic" : ""}`}
              >
                {line.content}
              </div>
            ))}

            {/* Prompt */}
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">{t.terminal.prompt}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent outline-none text-terminal-text"
                autoFocus
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
