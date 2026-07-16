"use client";

import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import WaitlistForm from "@/components/WaitlistForm";
import { getTranslations, type Lang } from "@/lib/translations";

export default function LandingClient({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = getTranslations(lang);

  return (
    <main className="flex-1">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-bold tracking-tight">
          ad<span className="text-brand">fiets</span>
        </span>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          <a href="#how" className="hidden hover:text-brand sm:inline">
            {t.nav.howItWorks}
          </a>
          <a href="#advertise" className="hidden hover:text-brand sm:inline">
            {t.nav.advertise}
          </a>
          <LanguageToggle lang={lang} onChange={setLang} />
          <a
            href="#waitlist"
            className="rounded-lg bg-brand px-4 py-2 font-semibold text-white transition hover:bg-brand-dark"
          >
            {t.nav.joinWaitlist}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-brand">{t.hero.titleLine2}</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-foreground/70">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#waitlist"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              {t.hero.ctaRider}
            </a>
            <a
              href="#advertise"
              className="rounded-lg border border-foreground/20 px-6 py-3 font-semibold transition hover:border-brand hover:text-brand"
            >
              {t.hero.ctaAdvertiser}
            </a>
          </div>
        </div>
        {/* Simple illustrative bike card */}
        <div className="rounded-2xl border border-foreground/10 bg-white p-8 shadow-sm">
          <svg
            viewBox="0 0 400 260"
            role="img"
            aria-label={t.hero.svgLabel}
            className="w-full"
          >
            <rect x="30" y="70" width="150" height="90" rx="10" fill="#16a34a" />
            <rect x="45" y="85" width="120" height="60" rx="6" fill="#fafaf7" />
            <text x="105" y="112" textAnchor="middle" fontSize="13" fontWeight="700" fill="#14532d">
              {t.hero.svgAdLine1}
            </text>
            <text x="105" y="130" textAnchor="middle" fontSize="10" fill="#16211c" opacity="0.6">
              {t.hero.svgAdLine2}
            </text>
            <circle cx="80" cy="205" r="34" fill="none" stroke="#16211c" strokeWidth="7" />
            <circle cx="310" cy="205" r="34" fill="none" stroke="#16211c" strokeWidth="7" />
            <path
              d="M114 200 L200 200 L240 130 L265 130 M240 130 L255 200 M200 200 L180 160 L114 160"
              fill="none"
              stroke="#16211c"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M255 200 L310 205" stroke="#16211c" strokeWidth="7" strokeLinecap="round" />
            <path d="M258 122 L282 122" stroke="#16211c" strokeWidth="7" strokeLinecap="round" />
            <rect x="236" y="196" width="42" height="9" rx="4" fill="#f59e0b" />
          </svg>
          <p className="mt-4 text-center text-sm text-foreground/60">{t.hero.caption}</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-foreground/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">{t.how.title}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.how.steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price breakdown */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">{t.pricing.title}</h2>
        <p className="mt-3 max-w-xl text-foreground/70">{t.pricing.note}</p>
        <div className="mt-10 rounded-2xl border border-foreground/10 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-foreground/70">
                {t.pricing.costLabel}
                <span className="block text-sm text-foreground/50">{t.pricing.costSub}</span>
              </p>
              <p className="text-2xl font-bold whitespace-nowrap">
                €40
                <span className="text-sm font-medium text-foreground/50">{t.pricing.perDay}</span>
              </p>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-foreground/70">
                {t.pricing.coveredLabel}
                <span className="block text-sm text-foreground/50">{t.pricing.coveredSub}</span>
              </p>
              <p className="text-2xl font-bold whitespace-nowrap text-brand">
                −€25
                <span className="text-sm font-medium text-brand/60">{t.pricing.perDay}</span>
              </p>
            </div>
            <div className="border-t border-dashed border-foreground/20 pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-lg font-semibold">{t.pricing.youPay}</p>
                <p className="text-5xl font-bold text-brand-dark">
                  €15
                  <span className="text-lg font-medium text-brand-dark/60">{t.pricing.perDay}</span>
                </p>
              </div>
            </div>
          </div>
          {/* Split bar */}
          <div className="mt-8">
            <div className="flex h-4 w-full overflow-hidden rounded-full">
              <div className="w-[62.5%] bg-brand" />
              <div className="w-[37.5%] bg-accent" />
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="font-medium text-brand-dark">● {t.pricing.barAdvertiser}</span>
              <span className="font-medium text-accent">{t.pricing.barRider} ●</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlists */}
      <section id="waitlist" className="border-y border-foreground/10 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-foreground/10 p-8">
            <h2 className="text-2xl font-bold">{t.waitlist.ridersTitle}</h2>
            <p className="mb-6 mt-2 text-sm text-foreground/70">{t.waitlist.ridersSub}</p>
            <WaitlistForm audience="rider" lang={lang} />
          </div>
          <div id="advertise" className="rounded-2xl border border-foreground/10 p-8">
            <h2 className="text-2xl font-bold">{t.waitlist.advertisersTitle}</h2>
            <p className="mb-6 mt-2 text-sm text-foreground/70">{t.waitlist.advertisersSub}</p>
            <WaitlistForm audience="advertiser" lang={lang} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">{t.faq.title}</h2>
        <div className="mt-8 divide-y divide-foreground/10">
          {t.faq.items.map((faq) => (
            <details key={faq.q} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="mr-2 inline-block text-brand transition group-open:rotate-90">
                  ›
                </span>
                {faq.q}
              </summary>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-foreground/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 text-sm text-foreground/60">
          <span>
            © {new Date().getFullYear()} adfiets — {t.footer.tagline}
          </span>
          <a href="#waitlist" className="font-semibold text-brand hover:text-brand-dark">
            {t.footer.join}
          </a>
        </div>
      </footer>
    </main>
  );
}
