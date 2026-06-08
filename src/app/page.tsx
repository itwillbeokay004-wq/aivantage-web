import { HomeAgentDemo } from "@/components/sections/home-agent-demo";
import { HomeFinalCta } from "@/components/sections/home-final-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeOmnichannel } from "@/components/sections/home-omnichannel";
import { HomePlatformOverview } from "@/components/sections/home-platform-overview";
import { HomeProblemSolution } from "@/components/sections/home-problem-solution";
import { HomeSecurityTrust } from "@/components/sections/home-security-trust";
import { HomeTrustStrip } from "@/components/sections/home-trust-strip";
import { HomeUseCasesPreview } from "@/components/sections/home-use-cases-preview";
import { pageMetadata } from "@/lib/seo";
import { getRequestLocale } from "@/lib/server-locale";

export async function generateMetadata() {
  const locale = await getRequestLocale();

  return pageMetadata({
    title:
      locale === "es"
        ? "Agentes de IA para atención al cliente, ventas y operaciones"
        : "AI agents for support, sales, and operations",
    description:
      locale === "es"
        ? "AiVantage diseña y despliega agentes de IA personalizados para chat web, llamadas de voz, captación de clientes potenciales, reservas, atención al cliente y automatización de procesos."
        : "AiVantage designs and deploys custom AI agents for website chat, voice calls, lead capture, booking, support, and business workflows.",
    path: "/",
    locale,
  });
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <HomeProblemSolution />
      <HomePlatformOverview />
      <HomeOmnichannel />
      <HomeUseCasesPreview />
      <HomeAgentDemo />
      <HomeSecurityTrust />
      <HomeFinalCta />
    </>
  );
}
