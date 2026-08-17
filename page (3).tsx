import { ThemeSection } from '@/components/theme/theme-section'
import { FloatingTicket } from '@/components/ui/floating-ticket'
import { HeroSection } from '@/components/sections/hero-section'
import { ProcessSection } from '@/components/sections/process-section'
import { InteractiveShowcase } from '@/components/sections/interactive-showcase'
import { FeaturesGrid } from '@/components/sections/features-grid'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <main>
      <FloatingTicket />

      <ThemeSection theme="dark" id="hero">
        <HeroSection />
      </ThemeSection>

      <ThemeSection theme="light" id="proceso">
        <ProcessSection />
      </ThemeSection>

      <ThemeSection theme="dark" id="showcase">
        <InteractiveShowcase />
      </ThemeSection>

      <ThemeSection theme="light" id="features">
        <FeaturesGrid />
      </ThemeSection>

      <ThemeSection theme="dark" id="cta">
        <CTASection />
      </ThemeSection>
    </main>
  )
}
