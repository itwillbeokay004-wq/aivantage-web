import { HomeBuilderPage } from "@/components/sections/home-builder-page";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title:
      locale === "es"
        ? "Crea agentes de IA para tu negocio"
        : "Build AI agents for your business",
    description:
      locale === "es"
        ? "Describe lo que quieres automatizar y AiVantage te muestra una idea clara de agente de IA, proceso y próximos pasos para tu negocio."
        : "Describe what you want to automate and AiVantage will show a clear AI agent concept, workflow, and next steps for your business.",
    path: "/",
    locale,
  });
}

export default function HomePage() {
  return <HomeBuilderPage />;
}
