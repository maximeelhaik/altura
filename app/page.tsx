import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Negative margin pulls Story section up so it emerges beneath the fading hero with no dead zone */}
      <div style={{ marginTop: "-70vh", paddingTop: "0vh", position: "relative", zIndex: 5 }}>
        <StorySection />
      </div>
      <CollectionsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
