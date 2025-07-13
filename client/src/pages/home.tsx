import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { TokenCreationForm } from '@/components/token-creation-form';
import { TokenMarketplace } from '@/components/token-marketplace';
import { TokenGatedContent } from '@/components/token-gated-content';
import { BloomBotChat } from '@/components/bloombot-chat';
import { Footer } from '@/components/footer';
import { LandingPage } from '@/components/landing-page';
import { DemoGuide } from '@/components/demo-guide';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [showDemoGuide, setShowDemoGuide] = useState(false);

  const handleStartDemo = () => {
    setShowLanding(false);
    setShowDemoGuide(true);
  };

  const handleDemoComplete = () => {
    setShowDemoGuide(false);
  };

  if (showLanding) {
    return <LandingPage onStartDemo={handleStartDemo} />;
  }

  return (
    <div className="min-h-screen bg-[var(--dark)] text-white">
      <Navigation />
      <HeroSection />
      <TokenCreationForm />
      <TokenMarketplace />
      <TokenGatedContent />
      <Footer />
      <BloomBotChat />
      {showDemoGuide && <DemoGuide onComplete={handleDemoComplete} />}
    </div>
  );
}
