"use client";

import { useState, type ReactNode } from "react";
import { useLang } from "./LangProvider";
import { SectionHeader } from "./SectionHeader";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "success" | "error";

const iconClass = "w-5 h-5";

const EmailIcon = (
  <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PhoneIcon = (
  <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsappIcon = (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.05 4.91A10 10 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91a9.9 9.9 0 0 0 1.34 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.84 9.84 0 0 0-2.91-7.02zm-7 15.24h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42l-.48-.01a.92.92 0 0 0-.67.31 2.79 2.79 0 0 0-.87 2.07c0 1.22.89 2.4 1.02 2.57.12.16 1.76 2.69 4.27 3.77a14.6 14.6 0 0 0 1.42.53c.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.14-1.17-.06-.1-.22-.16-.47-.29z" />
  </svg>
);

const LinkedinIcon = (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const GithubIcon = (
  <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.11v3.13c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing (NEXT_PUBLIC_EMAILJS_*)");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            time: new Date().toLocaleString("fr-FR", { timeZone: "Africa/Nouakchott" }),
          },
        }),
      });
      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`EmailJS ${res.status}: ${errorBody}`);
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("📧 EmailJS error:", err);
      setStatus("error");
    }
  };

  const contacts: { icon: ReactNode; label: string; value: string; href: string }[] = [
    { icon: EmailIcon, label: "email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: PhoneIcon, label: "phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    {
      icon: WhatsappIcon,
      label: "whatsapp",
      value: profile.phone,
      href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`,
    },
    { icon: LinkedinIcon, label: "linkedin", value: "sidahmed-dev", href: profile.linkedin },
    { icon: GithubIcon, label: "github", value: profile.githubUser, href: profile.github },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader command={t.contact.command} title={t.contact.title} index="05" />

        <p className="text-terminal-text mb-8 text-lg">
          <span className="text-terminal-green">$</span> {t.contact.intro}
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="md:col-span-3 bg-terminal-surface border border-terminal-border rounded-lg p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label={t.contact.name}
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label={t.contact.email}
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
            <Field
              label={t.contact.subject}
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
              required
            />
            <div>
              <label className="block text-xs text-terminal-comment mb-1">
                <span className="text-terminal-purple">const</span> {t.contact.message.toLowerCase()} ={" "}
                <span className="text-terminal-yellow">`</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-terminal-bg border border-terminal-border rounded p-3 text-sm text-terminal-text focus:outline-none focus:border-terminal-cyan transition-colors resize-y"
              />
              <div className="text-xs text-terminal-yellow mt-0.5">`;</div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto px-6 py-2.5 bg-terminal-cyan text-terminal-bg font-bold rounded hover:bg-terminal-cyan/90 transition-colors text-sm disabled:opacity-50"
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>

            {status === "success" && (
              <p className="text-terminal-green text-sm animate-fade-in">{t.contact.success}</p>
            )}
            {status === "error" && (
              <p className="text-terminal-red text-sm animate-fade-in">{t.contact.error}</p>
            )}
          </form>

          {/* Direct contact */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm text-terminal-comment">{t.contact.direct}</p>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-terminal-surface border border-terminal-border rounded-lg hover:border-terminal-cyan transition-colors group"
              >
                <span className="w-9 h-9 flex items-center justify-center bg-terminal-bg rounded text-terminal-cyan shrink-0">
                  {c.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-terminal-dim">{c.label}</div>
                  <div className="text-sm text-terminal-text group-hover:text-terminal-cyan transition-colors truncate">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-terminal-comment mb-1">
        <span className="text-terminal-purple">const</span> {label.toLowerCase()} ={" "}
        <span className="text-terminal-yellow">&quot;</span>
      </label>
      <div className="flex items-center bg-terminal-bg border border-terminal-border rounded focus-within:border-terminal-cyan transition-colors">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="flex-1 bg-transparent p-2.5 text-sm text-terminal-text focus:outline-none"
        />
      </div>
      <div className="text-xs text-terminal-yellow mt-0.5">&quot;;</div>
    </div>
  );
}
