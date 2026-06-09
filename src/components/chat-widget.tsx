"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  Loader2,
  MessageCircle,
  Mic2,
  Send,
  Sparkles,
  UserRoundCheck,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";
import { TrackedLink, analyticsEvents, trackCtaClick } from "@/components/analytics";
import type { Locale } from "@/lib/i18n";

type QuickAction = {
  label: string;
  response: string;
  icon: LucideIcon;
  href?: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  href?: string;
};

type ChatApiResponse = {
  ok?: boolean;
  mode?: "ai" | "fallback";
  reply?: string;
};

const MAX_CHAT_MESSAGE_LENGTH = 700;
const aiChatEnabled = process.env.NEXT_PUBLIC_AI_CHAT_ENABLED === "true";

const chatWidgetContent = {
  es: {
    title: "Asistente AiVantage",
    welcomeMessage:
      "Hola, soy el asistente de AiVantage. Puedo ayudarte a explorar agentes de IA, casos de uso y opciones para reservar una demo.",
    genericFallbackResponse:
      "Puedo orientarte sobre servicios de AiVantage, agentes de IA, automatización, precios y opciones de demo. Para una recomendación concreta, lo mejor es reservar una demo.",
    modeLabel: {
      ai: "Modo IA — generado en el servidor cuando está configurado.",
      demo: "Demostración — todavía no es un agente de IA en vivo.",
    },
    quickActionsLabel: "Acciones rápidas",
    closeAria: "Cerrar asistente de AiVantage",
    continueToDemo: "Continuar a la demo",
    typingAria: "El asistente está escribiendo",
    inputLabel: "Pregunta al asistente de AiVantage",
    inputAria: "Mensaje de chat",
    disabledInput: "Elige una acción rápida para ver una respuesta",
    placeholder: "Pregunta sobre agentes de IA, precios o demos",
    sendAria: "Enviar mensaje",
    aiFootnote:
      "El modo IA utiliza una ruta segura en el servidor. Es mejor tratar los detalles sensibles en la llamada de demo.",
    demoFootnote:
      "Configura NEXT_PUBLIC_AI_CHAT_ENABLED=true y OPENAI_API_KEY para activar respuestas reales con IA.",
    aiFallbackNotice: "El modo IA ha mostrado una respuesta segura de demostración.",
    aiUnavailableNotice:
      "El modo IA no está disponible, así que se mostró una respuesta segura.",
    triggerAria: "Abrir asistente de AiVantage",
    triggerLabel: "Preguntar a AiVantage",
    quickActions: [
      {
        label: "Necesito un chatbot para mi web",
        icon: MessageCircle,
        response:
          "Podemos crear un asistente para tu sitio web que responda preguntas frecuentes, capte clientes potenciales y derive conversaciones importantes a tu equipo.",
      },
      {
        label: "Quiero un asistente telefónico con IA",
        icon: Mic2,
        response:
          "Un asistente telefónico con IA puede ayudar a responder llamadas, recopilar información básica, resumir conversaciones y reducir oportunidades perdidas.",
      },
      {
        label: "Necesito cualificar clientes potenciales",
        icon: UserRoundCheck,
        response:
          "Podemos diseñar un agente que haga preguntas clave, identifique la intención del cliente y envíe la información organizada a tu equipo o CRM.",
      },
      {
        label: "Reservar una demo",
        icon: CalendarCheck,
        response:
          "Perfecto. Puedes reservar una demo y contarnos qué proceso quieres automatizar.",
        href: "/book-demo",
      },
    ],
  },
  en: {
    title: "AiVantage assistant",
    welcomeMessage:
      "Hi, I’m the AiVantage assistant. I can help you explore AI agents, use cases, and demo options.",
    genericFallbackResponse:
      "I can help with AiVantage services, AI agents, automation use cases, pricing direction, and demo options. For detailed recommendations, booking a demo is the best next step.",
    modeLabel: {
      ai: "AI assistant mode — generated server-side when configured.",
      demo: "Demo assistant — not a live AI agent yet.",
    },
    quickActionsLabel: "Quick actions",
    closeAria: "Close AiVantage assistant",
    continueToDemo: "Continue to demo",
    typingAria: "Assistant is typing",
    inputLabel: "Ask the AiVantage assistant",
    inputAria: "Chat message",
    disabledInput: "Choose a quick action to preview a response",
    placeholder: "Ask about AI agents, pricing, or demo options",
    sendAria: "Send chat message",
    aiFootnote:
      "AI mode uses a secure server route. Sensitive details should wait for the demo call.",
    demoFootnote:
      "Set NEXT_PUBLIC_AI_CHAT_ENABLED=true and OPENAI_API_KEY to enable real AI responses.",
    aiFallbackNotice: "AI mode fell back to a safe demo response.",
    aiUnavailableNotice:
      "AI mode is unavailable, so a safe fallback response was shown.",
    triggerAria: "Open AiVantage assistant",
    triggerLabel: "Ask AiVantage",
    quickActions: [
      {
        label: "I need a website chatbot",
        icon: MessageCircle,
        response:
          "A website chatbot can answer approved questions, capture lead details, route inquiries, and prepare clean handoffs for your team. A good first step is mapping your top visitor questions and desired conversion path.",
      },
      {
        label: "I want an AI phone assistant",
        icon: Mic2,
        response:
          "An AI phone assistant can help with call intake, missed-call follow-up, FAQs, appointment routing, and summaries. We would start by defining call types, escalation rules, and what the assistant should never handle alone.",
      },
      {
        label: "I need lead qualification",
        icon: UserRoundCheck,
        response:
          "A lead qualification agent can ask about needs, timeline, budget, location, and fit, then send a structured summary to your CRM or inbox so your team knows who to prioritize.",
      },
      {
        label: "Book a demo",
        icon: CalendarCheck,
        response:
          "Perfect — the demo page will collect your workflow goals, timeline, and team details so AiVantage can prepare a useful next step.",
        href: "/book-demo",
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string;
    welcomeMessage: string;
    genericFallbackResponse: string;
    modeLabel: Record<"ai" | "demo", string>;
    quickActionsLabel: string;
    closeAria: string;
    continueToDemo: string;
    typingAria: string;
    inputLabel: string;
    inputAria: string;
    disabledInput: string;
    placeholder: string;
    sendAria: string;
    aiFootnote: string;
    demoFootnote: string;
    aiFallbackNotice: string;
    aiUnavailableNotice: string;
    triggerAria: string;
    triggerLabel: string;
    quickActions: readonly QuickAction[];
  }
>;

export function ChatWidget() {
  const { locale } = useLocale();
  const content = chatWidgetContent[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const panelTitleId = useId();
  const panelDescriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasOpenRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      closeButtonRef.current?.focus();
      return;
    }

    if (wasOpenRef.current) {
      triggerButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, isSending]);

  function openWidget() {
    trackCtaClick(analyticsEvents.chatWidgetOpen, { location: "chat_widget" });
    setIsOpen(true);
  }

  function closeWidget() {
    setIsOpen(false);
  }

  async function selectAction(action: QuickAction) {
    setActivePrompt(action.label);
    await submitPrompt(action.label, action.response, action.href);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitPrompt(inputValue, content.genericFallbackResponse);
  }

  async function submitPrompt(prompt: string, fallbackResponse: string, href?: string) {
    const trimmedPrompt = prompt.trim().slice(0, MAX_CHAT_MESSAGE_LENGTH);

    if (!trimmedPrompt || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmedPrompt,
    };
    const previousMessages = messages.slice(-8).map((message) => ({
      role: message.role,
      content: message.content,
    }));

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInputValue("");
    setStatusMessage(null);

    if (!aiChatEnabled || href) {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createMessageId(),
          role: "assistant",
          content: fallbackResponse,
          href,
        },
      ]);
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          message: trimmedPrompt,
          history: previousMessages,
        }),
      });
      const data = (await response.json().catch(() => null)) as ChatApiResponse | null;

      if (!response.ok || !data?.reply) {
        throw new Error("Chat response unavailable.");
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createMessageId(),
          role: "assistant",
          content: data.reply ?? fallbackResponse,
        },
      ]);

      if (data.mode === "fallback") {
        setStatusMessage(content.aiFallbackNotice);
      }
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: createMessageId(),
          role: "assistant",
          content: fallbackResponse,
        },
      ]);
      setStatusMessage(content.aiUnavailableNotice);
    } finally {
      setIsSending(false);
    }
  }

  const modeLabel = aiChatEnabled
    ? content.modeLabel.ai
    : content.modeLabel.demo;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="chat-panel"
            role="dialog"
            aria-modal="false"
            aria-labelledby={panelTitleId}
            aria-describedby={panelDescriptionId}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="mb-4 flex max-h-[calc(100vh-7rem)] w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07101f]/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="border-b border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="grid size-11 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                    <Bot className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p id={panelTitleId} className="font-semibold text-white">
                      {content.title}
                    </p>
                    <p
                      id={panelDescriptionId}
                      className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200"
                    >
                      {modeLabel}
                    </p>
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeWidget}
                  className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.06] text-slate-400 transition hover:border-cyan-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={content.closeAria}
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-4">
              <div className="flex gap-3">
                <div className="grid size-8 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                  <Sparkles className="size-4" aria-hidden="true" />
                </div>
                <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-slate-100">
                  {content.welcomeMessage}
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {content.quickActionsLabel}
                </p>
                <div className="grid gap-2">
                  {content.quickActions.map((action) => {
                    const Icon = action.icon;
                    const isActive = activePrompt === action.label;

                    return (
                      <button
                        key={action.label}
                        type="button"
                        onClick={() => void selectAction(action)}
                        disabled={isSending}
                        className={cn(
                          "flex items-center gap-3 rounded-md border p-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60",
                          isActive
                            ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                            : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/40 hover:text-white",
                        )}
                        aria-pressed={isActive}
                      >
                        <Icon
                          className="size-4 shrink-0 text-cyan-200"
                          aria-hidden="true"
                        />
                        <span>{action.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 space-y-3" aria-live="polite">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                      className={cn(
                        "flex gap-3",
                        message.role === "user" ? "justify-end" : "justify-start",
                      )}
                    >
                      {message.role === "assistant" ? (
                        <div className="grid size-8 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                          <Bot className="size-4" aria-hidden="true" />
                        </div>
                      ) : null}
                      <div
                        className={cn(
                          "max-w-[88%] rounded-xl p-3 text-sm leading-6",
                          message.role === "user"
                            ? "bg-blue-600 text-white"
                            : "border border-cyan-300/20 bg-cyan-300/10 text-slate-100",
                        )}
                      >
                        <p>{message.content}</p>
                        {message.href ? (
                          <Button asChild size="sm" className="mt-4">
                            <TrackedLink
                              href={message.href}
                              eventProperties={{
                                location: "chat_widget",
                                label: "continue_to_demo",
                              }}
                              onClick={closeWidget}
                            >
                              {content.continueToDemo}
                            </TrackedLink>
                          </Button>
                        ) : null}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isSending ? (
                  <div className="flex gap-3">
                    <div className="grid size-8 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-200">
                      <Bot className="size-4" aria-hidden="true" />
                    </div>
                    <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3">
                      <div
                        className="flex h-6 items-center gap-1.5"
                        aria-label={content.typingAria}
                      >
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            className="size-2 rounded-full bg-cyan-300"
                            animate={
                              shouldReduceMotion
                                ? { opacity: 1, y: 0 }
                                : { opacity: [0.35, 1, 0.35], y: [0, -3, 0] }
                            }
                            transition={{
                              duration: shouldReduceMotion ? 0 : 0.75,
                              repeat: shouldReduceMotion ? 0 : Infinity,
                              delay: shouldReduceMotion ? 0 : dot * 0.12,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}

                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="border-t border-white/10 p-4">
              {statusMessage ? (
                <p className="mb-3 text-xs text-amber-200" aria-live="polite">
                  {statusMessage}
                </p>
              ) : null}
              <form
                onSubmit={(event) => void handleSubmit(event)}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-slate-950/55 p-3"
              >
                <label htmlFor="site-chat-message" className="sr-only">
                  {content.inputLabel}
                </label>
                <input
                  id="site-chat-message"
                  aria-label={content.inputAria}
                  disabled={!aiChatEnabled || isSending}
                  maxLength={MAX_CHAT_MESSAGE_LENGTH}
                  value={
                    aiChatEnabled
                      ? inputValue
                      : content.disabledInput
                  }
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder={content.placeholder}
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 disabled:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={!aiChatEnabled || isSending || !inputValue.trim()}
                  className="grid size-10 place-items-center rounded-md bg-blue-600 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                  aria-label={content.sendAria}
                >
                  {isSending ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="size-4" aria-hidden="true" />
                  )}
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-400">
                {aiChatEnabled
                  ? content.aiFootnote
                  : content.demoFootnote}
              </p>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        ref={triggerButtonRef}
        type="button"
        onClick={openWidget}
        className={cn(
          "ml-auto flex min-h-14 items-center gap-3 rounded-full border border-cyan-300/40 bg-blue-600 px-5 py-3 font-semibold text-white shadow-2xl shadow-blue-950/30 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isOpen ? "hidden" : "flex",
        )}
        aria-label={content.triggerAria}
        aria-expanded={isOpen}
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">{content.triggerLabel}</span>
      </button>
    </div>
  );
}

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
