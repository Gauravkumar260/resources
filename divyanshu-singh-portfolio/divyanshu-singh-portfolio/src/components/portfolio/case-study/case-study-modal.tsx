"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useCaseStudy } from "@/lib/case-studies/store";
import { getCaseStudy, CASE_STUDY_ORDER } from "@/lib/case-studies";
import { BlockRenderer, renderLead } from "./blocks";
import type { CaseStudy, Section } from "@/lib/case-studies/types";

/* ------------------------------------------------------------------ */

function ChromeBar({ study, onClose }: { study: CaseStudy; onClose: () => void }) {
  const blueprint = study.theme.chrome === "blueprint";
  return (
    <div
      className={`sticky top-0 z-30 flex items-center justify-between gap-4 border-b px-4 md:px-8 py-3 backdrop-blur-xl ${
        blueprint
          ? "border-[rgba(217,83,79,0.25)] bg-[#F5F3EF]/90"
          : "border-[rgba(26,115,232,0.18)] bg-[#F9FAFB]/90"
      }`}
    >
      <p
        className={`font-mono-x text-[9.5px] md:text-[10.5px] font-bold tracking-[0.24em] uppercase truncate ${
          blueprint ? "text-[#D9534F]" : "text-[#1A73E8]"
        }`}
      >
        {blueprint ? "UX DESIGN ARCHITECTURE SYSTEM LOGS" : "UX RESEARCH · FIELD STUDY · PAYMENTS LAB"}
      </p>
      <button
        onClick={onClose}
        className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-ink/15 bg-white px-4 py-2 font-mono-x text-[10px] md:text-[11px] font-bold tracking-[0.14em] uppercase text-ink transition-all hover:border-ink/40 hover:shadow-[0_8px_20px_-10px_rgba(30,32,34,0.4)]"
        aria-label="Close case study"
      >
        [ {blueprint ? "Close Blueprint" : "Close Report"} ]
        <X className="size-3.5 transition-transform duration-300 group-hover:rotate-90" />
      </button>
    </div>
  );
}

function Hero({ study }: { study: CaseStudy }) {
  const t = study.theme;
  const words = study.hero.gradientWords?.split(",") ?? [];
  const titleLines = study.hero.title.split("\n");
  return (
    <div className="relative overflow-hidden rounded-[20px] p-7 md:p-12" style={{ background: t.heroBg, color: t.heroText }}>
      {/* bokeh */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 size-[420px] rounded-full opacity-[0.22] blur-[90px]" style={{ background: t.accent }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 size-[380px] rounded-full opacity-[0.14] blur-[100px]" style={{ background: t.accent }} />
      <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
        <div>
          <p className="font-mono-x text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: t.accent }}>
            {study.hero.label}
          </p>
          <h2 className="mt-5 font-display font-semibold leading-[1.02] tracking-[-0.015em] text-[clamp(2.3rem,5.4vw,4rem)]">
            {titleLines.map((line, li) => (
              <span key={li} className="block">
                {line.split(" ").map((w, wi) =>
                  words.includes(w.replace(/[^A-Za-z]/g, "")) ? (
                    <span
                      key={wi}
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(94deg, #EA4335, #FBBC05 30%, #34A853 62%, #1A73E8 92%)",
                      }}
                    >
                      {w}{" "}
                    </span>
                  ) : (
                    <span key={wi}>{w} </span>
                  ),
                )}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[560px] text-[14px] md:text-[15px] leading-[1.7] opacity-80">{study.hero.paragraph}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {study.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3.5 py-1.5 text-[11.5px] font-medium tracking-[0.02em]"
                style={{ borderColor: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.08)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3.5 content-start">
          {study.hero.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[14px] border p-4 md:p-5"
              style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}
            >
              <p className="font-display font-semibold text-[clamp(1.25rem,2.2vw,1.7rem)] leading-none" style={{ color: s.tone ? undefined : t.accent }}>
                {s.value}
              </p>
              <p className="mt-2 font-mono-x text-[9px] md:text-[9.5px] tracking-[0.14em] uppercase opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionView({ section, study, index }: { section: Section; study: CaseStudy; index: number }) {
  const t = study.theme;
  return (
    <section id={`cs-${section.id}`} data-cs-section={index} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <p
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono-x text-[10px] md:text-[10.5px] font-bold tracking-[0.18em] uppercase"
          style={{ color: t.accent, borderColor: `${t.accent}55`, background: t.accentSoft }}
        >
          {section.label}
        </p>
        <h3 className="mt-5 max-w-[820px] font-display font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(1.55rem,3.2vw,2.35rem)] text-ink">
          {section.heading}
          {section.headingAccent && (
            <>
              {" "}
              <span style={{ color: t.accent }}>{section.headingAccent}</span>
            </>
          )}
        </h3>
      </motion.div>
      <div className="mt-8 flex flex-col gap-7">
        {section.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} theme={study.theme} />
        ))}
      </div>
    </section>
  );
}

function Closing({ study, onReturn }: { study: CaseStudy; onReturn: () => void }) {
  const t = study.theme;
  return (
    <div className="relative overflow-hidden rounded-[20px] p-7 md:p-12" style={{ background: t.closingBg, color: t.heroText }}>
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 size-[320px] rounded-full opacity-20 blur-[90px]" style={{ background: t.accent }} />
      <p className="font-mono-x text-[10px] md:text-[10.5px] font-bold tracking-[0.22em] uppercase" style={{ color: t.accent }}>
        {study.closing.label}
      </p>
      <h3 className="mt-4 max-w-[720px] font-display font-semibold text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.06]">
        {study.closing.heading}
      </h3>
      {study.closing.text && <p className="mt-5 max-w-[680px] text-[14.5px] leading-[1.7] opacity-80">{study.closing.text}</p>}
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {study.closing.cards.map((c) => (
          <div key={c.title} className="rounded-[14px] border p-6" style={{ borderColor: "rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2.5">
              <span className="size-2.5 rounded-[2px]" style={{ background: t.accent }} aria-hidden="true" />
              <p className="font-display font-semibold text-[15.5px]">{c.title}</p>
            </div>
            <p className="mt-2.5 text-[13px] leading-[1.6] opacity-75">{c.body}</p>
          </div>
        ))}
      </div>
      {/* footer strip */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
        <p className="font-mono-x text-[9px] md:text-[10px] tracking-[0.3em] uppercase opacity-50">
          CASE · DATASET RECOVERY TERMINATED · VERIFICATION
        </p>
        <button
          onClick={onReturn}
          className="group inline-flex items-center gap-2 font-mono-x text-[11px] font-bold tracking-[0.14em] uppercase transition-opacity hover:opacity-80"
          style={{ color: t.accent }}
        >
          Return to index
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}

function NextProject({ next, onOpen }: { next: CaseStudy; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group flex w-full items-center justify-between gap-6 rounded-[18px] border border-ink/10 bg-white p-6 md:p-7 text-left shadow-[0_14px_36px_-24px_rgba(15,23,42,0.35)] transition-all hover:border-ink/25 hover:shadow-[0_20px_48px_-24px_rgba(15,23,42,0.45)]"
    >
      <div className="flex items-center gap-5 min-w-0">
        <span className="relative hidden sm:block size-16 md:size-20 shrink-0 overflow-hidden rounded-[12px]">
          <Image src={next.cover} alt={next.coverAlt} fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </span>
        <div className="min-w-0">
          <p className="font-mono-x text-[10px] font-bold tracking-[0.18em] uppercase text-ink-faint">Next case study · {next.index}</p>
          <p className="mt-1.5 font-display font-semibold text-[18px] md:text-[21px] text-ink truncate group-hover:text-terra transition-colors">
            {next.title}
          </p>
          <p className="mt-0.5 text-[13px] text-ink-soft truncate">{next.subtitle}</p>
        </div>
      </div>
      <span className="inline-flex size-11 md:size-12 shrink-0 items-center justify-center rounded-full bg-night text-white transition-all duration-300 group-hover:bg-terra group-hover:rotate-0">
        <ArrowRight className="size-5" />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */

export function CaseStudyModal() {
  const { openId, open, close } = useCaseStudy();
  const study = openId ? getCaseStudy(openId) : null;

  const next = useMemo(() => {
    if (!openId) return null;
    const i = CASE_STUDY_ORDER.indexOf(openId);
    return getCaseStudy(CASE_STUDY_ORDER[(i + 1) % CASE_STUDY_ORDER.length]);
  }, [openId]);

  /* body scroll lock + esc */
  useEffect(() => {
    if (!study) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [study, close]);

  return (
    <AnimatePresence>
      {study && (
        <CaseStudyDialog
          key={study.id}
          study={study}
          next={next}
          onOpen={(id) => open(id)}
          onClose={close}
        />
      )}
    </AnimatePresence>
  );
}

function CaseStudyDialog({
  study,
  next,
  onOpen,
  onClose,
}: {
  study: CaseStudy;
  next: CaseStudy | null;
  onOpen: (id: CaseStudy["id"]) => void;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    /* scroll spy */
    const sections = el.querySelectorAll<HTMLElement>("[data-cs-section]");
    let active = 0;
    sections.forEach((s, i) => {
      if (s.getBoundingClientRect().top <= el.getBoundingClientRect().top + 140) active = i;
    });
    setActiveSection(active);
  }, []);

  const scrollToSection = (idx: number) => {
    const el = scrollRef.current;
    const target = el?.querySelector<HTMLElement>(`[data-cs-section="${idx}"]`);
    if (el && target) {
      el.scrollTo({ top: el.scrollTop + (target.getBoundingClientRect().top - el.getBoundingClientRect().top) - 16, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${study.title} case study`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] bg-night/45 backdrop-blur-[6px]"
    >
          <motion.div
            ref={scrollRef}
            onScroll={onScroll}
            initial={{ y: 48, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-x-0 bottom-0 top-0 mx-auto max-w-[1240px] overflow-y-auto scrollbar-thin rounded-none md:top-4 md:bottom-4 md:max-w-[1200px] md:rounded-[24px] bg-[#F9F7F3] shadow-[0_40px_120px_-30px_rgba(15,23,42,0.6)]"
          >
            {/* progress bar */}
            <div
              aria-hidden="true"
              className="sticky top-0 z-40 h-[3px] w-full origin-left"
              style={{ background: study.theme.accent, transform: `scaleX(${progress})`, transformOrigin: "left", position: "sticky", transition: "transform 80ms linear" }}
            />
            <ChromeBar study={study} onClose={onClose} />

            <div className="relative px-4 md:px-10 pb-16 pt-8 md:pt-12">
              {/* side nav */}
              <nav
                aria-label="Case study sections"
                className="hidden xl:block absolute right-10 top-40 bottom-24 w-[172px] z-20"
              >
                <ul className="sticky top-40 space-y-1">
                  {study.sections.map((s, i) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollToSection(i)}
                        className={`flex w-full items-baseline gap-2 rounded-lg px-3 py-1.5 text-left transition-colors ${
                          activeSection === i ? "bg-ink/5" : "hover:bg-ink/5"
                        }`}
                      >
                        <span
                          className="font-mono-x text-[10px] font-bold tracking-wide"
                          style={{ color: activeSection === i ? study.theme.accent : "#8F949E" }}
                        >
                          {s.label.split("·")[0].trim()}
                        </span>
                        <span
                          className={`truncate text-[11px] leading-snug ${
                            activeSection === i ? "text-ink font-medium" : "text-ink-faint"
                          }`}
                        >
                          {s.label.split("·").slice(1).join("·").trim()}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mx-auto max-w-[880px] xl:max-w-[900px] xl:pr-[120px]">
                <Hero study={study} />

                {/* meta bar */}
                <dl className="mt-5 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                  {study.meta.map((m) => (
                    <div key={m.label} className="rounded-[12px] border border-ink/10 bg-white px-4 py-3.5">
                      <dt className="font-mono-x text-[9px] tracking-[0.16em] uppercase text-ink-faint">{m.label}</dt>
                      <dd className="mt-1 text-[12.5px] font-semibold text-ink leading-snug">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-16 md:mt-20 flex flex-col gap-16 md:gap-24 pb-4">
                  {study.sections.map((section, i) => (
                    <SectionView key={section.id} section={section} study={study} index={i} />
                  ))}
                </div>

                <div className="mt-4">
                  <Closing study={study} onReturn={onClose} />
                </div>

                {next && (
                  <div className="mt-10">
                    <NextProject next={next} onOpen={() => onOpen(next.id)} />
                  </div>
                )}

                {/* mini footer */}
                <p className="mt-10 text-center font-mono-x text-[9.5px] tracking-[0.22em] uppercase text-ink-faint">
                  © 2026 Divyanshu Singh — {study.title} Case File
                </p>
              </div>
            </div>
          </motion.div>
    </motion.div>
  );
}
