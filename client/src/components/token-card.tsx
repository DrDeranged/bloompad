import { Button } from '@/components/ui/button';
import { useWallet } from '@/hooks/use-wallet';
import { useToast } from '@/hooks/use-toast';
import { Token } from '@shared/schema';
import { ExternalLink, Twitter, Globe, MessageCircle } from 'lucide-react';

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {
  const { isConnected, buyToken, tokenBalances } = useWallet();
  const { toast } = useToast();

  const handlePurchase = async () => {
    if (!isConnected) {
      toast({
        title: 'Wallet Not Connected',
        description: 'Please connect your wallet first',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Purchase Initiated',
      description: `Purchasing 10 $${token.symbol} tokens...`,
    });

    try {
      const success = await buyToken(token.symbol, 10);
      if (success) {
        toast({
          title: 'Purchase Successful! 🎉',
          description: `Successfully purchased 10 $${token.symbol} tokens!`,
        });
      } else {
        throw new Error('Purchase failed');
      }
    } catch (error) {
      toast({
        title: 'Purchase Failed',
        description: 'Transaction failed. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const priceChange = parseFloat(token.priceChange || '0');
  const isPositive = priceChange >= 0;

  return (
    <div className="glassmorphism rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{token.name}</h3>
          <p className="text-[var(--electric)] font-medium">${token.symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[var(--neon)]">{token.price} ETH</p>
          <p className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{token.priceChange}%
          </p>
        </div>
      </div>
      
      {/* Stream preview */}
      <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
        {token.streamUrl ? (
          <img 
            src={token.streamUrl} 
            alt={`${token.name} stream preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
                <ExternalLink size={24} />
              </div>
              <p className="text-sm">Stream Coming Soon</p>
            </div>
          </div>
        )}
        
        {/* Live indicator overlay */}
        {token.streamUrl && (
          <div className="absolute top-3 right-3">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
              LIVE
            </div>
          </div>
        )}
      </div>
      
      <p className="text-gray-300 text-sm mb-4">{token.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-3">
          {token.twitter && (
            <a 
              href={token.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--electric)] transition-colors"
            >
              <Twitter size={16} />
            </a>
          )}
          {token.website && (
            <a 
              href={token.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--electric)] transition-colors"
            >
              <Globe size={16} />
            </a>
          )}
          {token.discord && (
            <a 
              href={token.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--electric)] transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          )}
        </div>
        <span className="text-xs text-gray-500">{token.holders?.toLocaleString()} holders</span>
      </div>

      {/* Show owned balance if connected */}
      {isConnected && tokenBalances[token.symbol] && (
        <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
          <p className="text-sm text-green-400">
            You own: {tokenBalances[token.symbol]} ${token.symbol}
          </p>
        </div>
      )}
      
      <Button 
        onClick={handlePurchase}
        className="w-full bg-gradient-to-r from-[var(--electric)] to-[var(--purple)] py-3 rounded-lg font-medium group-hover:opacity-90 transition-opacity"
      >
        Buy ${token.symbol}
      </Button>
    </div>
  );
}
