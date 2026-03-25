import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <CollectionsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
