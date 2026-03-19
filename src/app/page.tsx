import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ValueProposition from "@/components/sections/ValueProposition";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import CTASection from "@/components/sections/CTASection";
import Divider from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Divider />
      <ValueProposition />
      <Divider />
      <Features />
      <SocialProof />
      <Divider />
      <HowItWorks />
      <Divider />
      <CTASection />
    </>
  );
}
