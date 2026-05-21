import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Sidahmed Berraye — Full-Stack Developer",
  description:
    "Portfolio de Sidahmed Berraye, développeur full-stack basé à Nouakchott, Mauritanie. Spécialisé en Next.js, React, Laravel et Supabase.",
  keywords: [
    "Sidahmed Berraye",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "Nouakchott",
    "Mauritanie",
    "Portfolio",
  ],
  authors: [{ name: "Sidahmed Berraye" }],
  openGraph: {
    title: "Sidahmed Berraye — Full-Stack Developer",
    description: "Portfolio développeur full-stack — Nouakchott, Mauritanie.",
    type: "website",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var c=document.documentElement.classList;c.remove('dark','light');c.add(t==='light'?'light':'dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-terminal-bg text-terminal-text antialiased">
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
