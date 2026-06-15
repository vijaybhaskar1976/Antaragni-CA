import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SpiritSection } from "@/components/sections/SpiritSection";
import { IncentivesSection } from "@/components/sections/IncentivesSection";
import { ExpectationsSection } from "@/components/sections/ExpectationsSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <HeroSection />
      <SpiritSection />
      <IncentivesSection />
      <ExpectationsSection />
      <FAQSection />
    </main>
  );
}
