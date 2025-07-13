import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, ArrowRight, Sparkles, Users, Zap, Globe } from 'lucide-react';

interface LandingPageProps {
  onStartDemo: () => void;
}

export function LandingPage({ onStartDemo }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--dark)] via-[var(--dark-secondary)] to-[var(--dark)]">
      {/* Header */}
      <div className="glassmorphism border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] rounded-xl flex items-center justify-center">
                <Sprout className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold">Bloompad</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-gray-600 hover:bg-gray-800"
                onClick={() => window.open('mailto:hello@bloompad.com')}
              >
                Contact
              </Button>
              <Button
                onClick={onStartDemo}
                className="bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] hover:opacity-90"
              >
                Launch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-6">
                <Sparkles className="text-[var(--electric)] mr-2" size={16} />
                <span className="text-sm text-gray-300">Powered by Base • Built for Communities</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[var(--electric)] via-[var(--neon)] to-[var(--purple)] bg-clip-text text-transparent">
                  Plant Your Idea.
                </span>
                <br />
                <span className="text-white">Bloom Your Brand.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                The first creator token launchpad designed for real communities. 
                Coffee shops, artists, local businesses — launch your token in minutes, 
                not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={onStartDemo}
                className="bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Launch Interactive Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 px-8 py-4 text-lg font-semibold hover:bg-gray-800"
                onClick={() => window.open('https://calendly.com/bloompad/demo', '_blank')}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--electric)] rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[var(--neon)] rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[var(--purple)] rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-[var(--dark)] to-[var(--dark-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="text-[var(--electric)]">Real Communities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stop thinking meme coins. Start thinking community ownership, customer loyalty, and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glassmorphism border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Launch in Minutes</h3>
                <p className="text-gray-400">
                  No coding required. Our intuitive interface lets you deploy your community token with just a few clicks.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--neon)] to-[var(--electric)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community First</h3>
                <p className="text-gray-400">
                  Built for cafés, artists, local businesses, and creators who want to reward their most loyal supporters.
                </p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--purple)] to-[var(--neon)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Base Powered</h3>
                <p className="text-gray-400">
                  Built on Coinbase's Base network for fast, affordable transactions that won't break the bank.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for <span className="text-[var(--neon)]">Every Creator</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Businesses",
                description: "Coffee shops, restaurants, retail stores creating customer loyalty programs",
                example: "Brew & Bloom Café gives 10% off to $BREW holders"
              },
              {
                title: "Artists & Creators",
                description: "Digital artists, musicians, content creators monetizing their community",
                example: "Maya's Art Studio offers exclusive NFT drops to $MAYA holders"
              },
              {
                title: "Communities",
                description: "Hobby groups, sports teams, local organizations building engagement",
                example: "Sunset Skate gives gear discounts to $SKATE token holders"
              }
            ].map((useCase, index) => (
              <Card key={index} className="glassmorphism border-gray-700 hover:border-gray-600 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-sm text-[var(--electric)]">Example: {useCase.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-[var(--dark-secondary)] to-[var(--dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Community Token?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the creators, businesses, and communities already building on Bloompad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onStartDemo}
              className="bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] px-8 py-4 text-lg font-semibold hover:opacity-90"
            >
              Try the Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 px-8 py-4 text-lg font-semibold hover:bg-gray-800"
              onClick={() => window.open('mailto:hello@bloompad.com')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] rounded-lg flex items-center justify-center">
                <Sprout className="text-white" size={16} />
              </div>
              <span className="text-lg font-semibold">Bloompad</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:hello@bloompad.com" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}