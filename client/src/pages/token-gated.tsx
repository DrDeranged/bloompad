import { Navigation } from '@/components/navigation';
import { TokenGatedContent } from '@/components/token-gated-content';
import { Footer } from '@/components/footer';
import { BloomBotChat } from '@/components/bloombot-chat';

export default function TokenGated() {
  return (
    <div className="min-h-screen bg-[var(--dark)] text-white">
      <Navigation />
      <div className="pt-16">
        <TokenGatedContent />
      </div>
      <Footer />
      <BloomBotChat />
    </div>
  );
}
