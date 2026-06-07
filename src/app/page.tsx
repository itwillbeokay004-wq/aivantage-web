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

export const metadata = pageMetadata({
  title: "AI Agents for Support, Sales, and Operations",
  description:
    "AiVantage designs and deploys custom AI agents for website chat, voice calls, lead capture, appointment booking, support automation, and business workflows.",
  path: "/",
});

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
