"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  Clock3,
  Loader2,
  Plug,
  Radio,
  RotateCcw,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/cta-button";
import { Textarea } from "@/components/ui/textarea";
import type { AgentRecommendation } from "@/lib/agent-recommendation";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const content = {
  es: {
    title: "¿Qué quieres crear con IA?",
    subtitle: "Escribe una idea y recibe una propuesta clara de agente, canales e integraciones.",
    placeholder:
      "Ejemplo: Quiero un asistente que responda llamadas y capte clientes potenciales…",
    button: "Generar idea",
    loading: "Creando una propuesta",
    error:
      "No pudimos generar la propuesta en este momento. Prueba de nuevo o reserva una demo.",
    emptyError: "Cuéntanos brevemente qué quieres automatizar.",
    hint: "Pulsa ⌘/Ctrl + Enter para generar",
    labels: {
      agent: "Agente recomendado",
      does: "Qué haría",
      workflow: "Proceso sugerido",
      channels: "Canales",
      integrations: "Integraciones recomendadas",
      setup: "Tiempo estimado",
      nextStep: "Próximo paso",
    },
    chips: [
      "Quiero un chatbot para mi web",
      "Necesito responder llamadas perdidas",
      "Quiero cualificar clientes potenciales",
      "Quiero automatizar reservas de citas",
    ],
    demoCta: "Reservar una demo",
    tryAgain: "Probar otra idea",
    fallbackNote: "Modo demostración: usamos una recomendación segura mientras se configura IA real.",
    liveBadge: "Propuesta generada",
  },
  en: {
    title: "What do you want to build with AI?",
    subtitle: "Type an idea and get a clear agent concept, channels, and integrations.",
    placeholder: "Example: I want an assistant that answers calls and captures leads…",
    button: "Generate idea",
    loading: "Creating your recommendation",
    error: "We couldn’t generate the recommendation right now. Try again or book a demo.",
    emptyError: "Briefly describe what you want to automate.",
    hint: "Press ⌘/Ctrl + Enter to generate",
    labels: {
      agent: "Recommended agent",
      does: "What it would do",
      workflow: "Suggested workflow",
      channels: "Channels",
      integrations: "Recommended integrations",
      setup: "Estimated setup",
      nextStep: "Next step",
    },
    chips: [
      "I want a website chatbot",
      "I need to answer missed calls",
      "I want to qualify leads",
      "I want to automate appointment booking",
    ],
    demoCta: "Book a demo",
    tryAgain: "Try another idea",
    fallbackNote: "Demo mode: using a safe recommendation while real AI is configured.",
    liveBadge: "Generated recommendation",
  },
} as const;

type GenerateAgentResponse = {
  ok?: boolean;
  source?: "openai" | "fallback";
  recommendation?: AgentRecommendation;
  error?: string;
};

export function AiBuilder({ className }: { className?: string }) {
  const { locale } = useLocale();
  const copy = content[locale];
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [source, setSource] = useState<"openai" | "fallback" | null>(null);
  const [recommendation, setRecommendation] = useState<AgentRecommendation | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  async function generate(input: string) {
    const trimmed = input.trim();

    if (!trimmed) {
      setError(copy.emptyError);
      setRecommendation(null);
      return;
    }

    setValue(trimmed);
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, userIdea: trimmed }),
      });
      const payload = (await response.json().catch(() => null)) as GenerateAgentResponse | null;

      if (!response.ok || !payload?.recommendation) {
        setError(payload?.error ?? copy.error);
        return;
      }

      setRecommendation(payload.recommendation);
      setSource(payload.source ?? null);
      window.requestAnimationFrame(() => {
        resultRef.current?.scrollIntoView({
          block: "nearest",
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      });
    } catch {
      setError(copy.error);
    } finally {
      setIsLoading(false);
    }
  }

  function resetIdea() {
    setValue("");
    setError("");
    setSource(null);
    setSelectedChip(null);
    setRecommendation(null);
  }

  function handleChipClick(chip: string) {
    setSelectedChip(chip);
    void generate(chip);
  }

  const demoHref = buildDemoHref(recommendation, value, locale);

  return (
    <div id="ai-builder" className={cn("container relative py-8 sm:py-12", className)}>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_62%)] blur-3xl" />
        <div className="animated-builder-border relative rounded-[2rem] p-px shadow-[0_32px_110px_rgba(0,0,0,0.42)]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040a14]/95 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
            <div className="absolute inset-0 hero-mesh opacity-45" />
            <div className="absolute inset-0 signal-grid opacity-10" />
            <div className="absolute right-8 top-8 hidden h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl sm:block" />

            <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                      <Sparkles className="size-3.5" aria-hidden="true" />
                      Agent Builder
                    </p>
                    <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                      {copy.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                      {copy.subtitle}
                    </p>
                  </div>
                </div>

                <form
                  className="mt-6 rounded-[1.45rem] border border-white/10 bg-slate-950/70 p-3 text-left shadow-inner shadow-black/30 sm:p-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    void generate(value);
                  }}
                >
                  <label htmlFor="builder-prompt" className="sr-only">
                    {copy.title}
                  </label>
                  <Textarea
                    id="builder-prompt"
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value);
                      setSelectedChip(null);
                    }}
                    onKeyDown={(event) => {
                      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                        event.preventDefault();
                        void generate(value);
                      }
                    }}
                    placeholder={copy.placeholder}
                    className="min-h-32 resize-none rounded-[1.15rem] border-white/10 bg-white/[0.045] p-4 text-base leading-7 shadow-none"
                    disabled={isLoading}
                  />
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">{copy.hint}</p>
                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      ) : (
                        <Zap className="size-4" aria-hidden="true" />
                      )}
                      {isLoading ? <LoadingLabel label={copy.loading} /> : copy.button}
                    </Button>
                  </div>
                  {error ? (
                    <p className="mt-3 flex items-start gap-2 rounded-2xl border border-rose-300/15 bg-rose-500/10 px-3 py-2 text-sm text-rose-100" role="alert">
                      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      {error}
                    </p>
                  ) : null}
                </form>

                <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {copy.chips.map((chip) => {
                    const isSelected = selectedChip === chip;

                    return (
                      <button
                        key={chip}
                        type="button"
                        disabled={isLoading}
                        onClick={() => handleChipClick(chip)}
                        className={cn(
                          "rounded-full border px-3 py-2 text-xs font-medium transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60",
                          isSelected
                            ? "border-cyan-200/45 bg-cyan-300/14 text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                            : "border-white/10 bg-white/[0.06] text-slate-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white",
                        )}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="hidden rounded-[1.45rem] border border-white/10 bg-white/[0.045] p-4 lg:block">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  <span>Signal</span>
                  <span className="text-cyan-100">Live</span>
                </div>
                <div className="mt-5 space-y-3">
                  <MiniSignal label="Intent" value="92%" />
                  <MiniSignal label="Channel" value="Chat + Voice" />
                  <MiniSignal label="Next" value="Demo" />
                </div>
                <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-cyan-300/10 p-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-50">
                    <Bot className="size-4" aria-hidden="true" />
                    Agent preview
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="h-2 flex-1 rounded-full bg-cyan-200/60" />
                    <span className="h-2 flex-1 rounded-full bg-blue-300/40" />
                    <span className="h-2 flex-1 rounded-full bg-violet-300/40" />
                  </div>
                </div>
              </div>
            </div>

            <div ref={resultRef} aria-live="polite" className="relative">
              {recommendation ? (
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.42, ease: "easeOut" }}
                  className="mt-8"
                >
                  <RecommendationCard
                    recommendation={recommendation}
                    source={source}
                    copy={copy}
                    demoHref={demoHref}
                    onReset={resetIdea}
                  />
                </motion.div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({
  recommendation,
  source,
  copy,
  demoHref,
  onReset,
}: {
  recommendation: AgentRecommendation;
  source: "openai" | "fallback" | null;
  copy: (typeof content)[Locale];
  demoHref: string;
  onReset: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.65rem] border border-cyan-200/20 bg-[#06101e] p-5 shadow-[0_30px_90px_rgba(8,47,73,0.32)] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
            <CheckCircle2 className="size-3.5" aria-hidden="true" />
            {copy.liveBadge}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            {copy.labels.agent}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {recommendation.agentName}
          </h3>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Sparkles className="size-4 text-cyan-100" aria-hidden="true" />
              {copy.labels.does}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{recommendation.summary}</p>
          </div>
          {source === "fallback" ? (
            <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-5 text-slate-400">
              {copy.fallbackNote}
            </p>
          ) : null}
        </div>

        <div className="space-y-4">
          <ResultPanel icon={Workflow} label={copy.labels.workflow}>
            <div className="relative space-y-3">
              {recommendation.workflow.map((step, index) => (
                <div
                  key={`${step}-${index}`}
                  className="workflow-step-reveal relative flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </ResultPanel>

          <div className="grid gap-4 md:grid-cols-2">
            <ResultPanel icon={Radio} label={copy.labels.channels} compact>
              <PillList items={recommendation.channels} />
            </ResultPanel>
            <ResultPanel icon={Plug} label={copy.labels.integrations} compact>
              <PillList items={recommendation.recommendedIntegrations} variant="violet" />
            </ResultPanel>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ResultPanel icon={Clock3} label={copy.labels.setup} compact>
              <p className="text-sm leading-6 text-slate-200">{recommendation.estimatedSetup}</p>
            </ResultPanel>
            <ResultPanel icon={Bot} label={copy.labels.nextStep} compact>
              <p className="text-sm leading-6 text-slate-200">{recommendation.nextStep}</p>
            </ResultPanel>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <CtaButton href={demoHref} size="lg" className="w-full sm:w-auto">
              {recommendation.ctaLabel || copy.demoCta}
            </CtaButton>
            <Button type="button" variant="secondary" size="lg" onClick={onReset} className="w-full sm:w-auto">
              {copy.tryAgain}
              <RotateCcw className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultPanel({
  icon: Icon,
  label,
  children,
  compact = false,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={cn("rounded-2xl border border-white/10 bg-white/[0.045] p-4", compact && "min-h-32")}>
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        <Icon className="size-4 text-cyan-100" aria-hidden="true" />
        {label}
      </div>
      {children}
    </section>
  );
}

function PillList({ items, variant = "cyan" }: { items: string[]; variant?: "cyan" | "violet" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "rounded-full border px-2.5 py-1.5 text-xs font-medium",
            variant === "cyan"
              ? "border-cyan-200/20 bg-cyan-300/10 text-cyan-50"
              : "border-violet-200/20 bg-violet-300/10 text-violet-50",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function LoadingLabel({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      {label}
      <span className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    </span>
  );
}

function MiniSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function buildDemoHref(
  recommendation: AgentRecommendation | null,
  sourceIdea: string,
  locale: Locale,
) {
  if (!recommendation) {
    return locale === "es" ? "/reservar-demo" : "/en/book-demo";
  }

  const params = new URLSearchParams({
    idea: sourceIdea,
    agent: recommendation.agentName,
  });

  return `${recommendation.ctaHref || (locale === "es" ? "/reservar-demo" : "/en/book-demo")}?${params.toString()}`;
}
