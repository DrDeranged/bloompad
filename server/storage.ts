import { users, tokens, chatMessages, type User, type InsertUser, type Token, type InsertToken, type ChatMessage, type InsertChatMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createToken(token: InsertToken): Promise<Token>;
  getTokens(): Promise<Token[]>;
  getToken(id: number): Promise<Token | undefined>;
  
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(sessionId: string): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private tokens: Map<number, Token>;
  private chatMessages: Map<number, ChatMessage>;
  private currentUserId: number;
  private currentTokenId: number;
  private currentChatId: number;

  constructor() {
    this.users = new Map();
    this.tokens = new Map();
    this.chatMessages = new Map();
    this.currentUserId = 1;
    this.currentTokenId = 1;
    this.currentChatId = 1;

    // Seed with some mock tokens
    this.seedMockTokens();
  }

  private seedMockTokens() {
    const mockTokens: Omit<Token, 'id'>[] = [
      {
        name: "Brew & Bloom Café",
        symbol: "BREW",
        supply: 100000,
        price: "0.012",
        description: "Community-owned café in downtown Portland. Token holders get 10% off all drinks, exclusive coffee tastings, and voting rights on new menu items.",
        creatorAddress: "0x1234567890123456789012345678901234567890",
        contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
        twitter: "https://twitter.com/brewbloomcafe",
        website: "https://brewbloomcafe.com",
        discord: "https://discord.gg/brewbloom",
        streamUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=200&fit=crop&auto=format",
        holders: 342,
        priceChange: "18.5",
        createdAt: new Date()
      },
      {
        name: "Maya's Art Studio",
        symbol: "MAYA",
        supply: 50000,
        price: "0.025",
        description: "Digital artist and NFT creator with 100K+ followers. Token unlocks early access to drops, 1-on-1 mentorship sessions, and exclusive art tutorials.",
        creatorAddress: "0x2345678901234567890123456789012345678901",
        contractAddress: "0xbcdef12345678901bcdef12345678901bcdef123",
        twitter: "https://twitter.com/mayasartstudio",
        website: "https://mayasart.io",
        discord: "https://discord.gg/mayasart",
        streamUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=200&fit=crop&auto=format",
        holders: 1240,
        priceChange: "32.1",
        createdAt: new Date()
      },
      {
        name: "Sunset Skate Community",
        symbol: "SKATE",
        supply: 25000,
        price: "0.008",
        description: "Local skateboarding community in Venice Beach. Token grants access to private skate sessions, gear discounts, and exclusive events with pro skaters.",
        creatorAddress: "0x3456789012345678901234567890123456789012",
        contractAddress: "0xcdef123456789012cdef123456789012cdef1234",
        twitter: "https://twitter.com/sunsetskate",
        website: "https://sunsetskate.com",
        discord: "https://discord.gg/sunsetskate",
        streamUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop&auto=format",
        holders: 680,
        priceChange: "7.3",
        createdAt: new Date()
      },
      {
        name: "The Greenhouse Collective",
        symbol: "PLANT",
        supply: 75000,
        price: "0.015",
        description: "Urban gardening collective teaching sustainable growing. Token holders get free seeds, workshop access, and profit-sharing from harvest sales.",
        creatorAddress: "0x4567890123456789012345678901234567890123",
        contractAddress: "0xdef1234567890123def1234567890123def12345",
        twitter: "https://twitter.com/greenhouse_co",
        website: "https://greenhousecollective.org",
        discord: "https://discord.gg/greenhouse",
        streamUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop&auto=format",
        holders: 890,
        priceChange: "14.2",
        createdAt: new Date()
      },
      {
        name: "Neon Nights Gaming",
        symbol: "NEON",
        supply: 200000,
        price: "0.006",
        description: "Indie game studio creating retro-futuristic games. Token unlocks beta access, exclusive skins, and governance voting on game features.",
        creatorAddress: "0x5678901234567890123456789012345678901234",
        contractAddress: "0xef123456789012ef123456789012ef123456789",
        twitter: "https://twitter.com/neonnightsgame",
        website: "https://neonnightsgaming.com",
        discord: "https://discord.gg/neonnights",
        streamUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop&auto=format",
        holders: 2150,
        priceChange: "28.9",
        createdAt: new Date()
      },
      {
        name: "Coastal Cleanup Crew",
        symbol: "OCEAN",
        supply: 150000,
        price: "0.004",
        description: "Environmental group organizing beach cleanups across California. Token rewards volunteers and funds equipment for larger cleanup events.",
        creatorAddress: "0x6789012345678901234567890123456789012345",
        contractAddress: "0xf123456789012f123456789012f123456789012",
        twitter: "https://twitter.com/coastalcleanup",
        website: "https://coastalcleanup.org",
        discord: "https://discord.gg/coastalcleanup",
        streamUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop&auto=format",
        holders: 1560,
        priceChange: "11.7",
        createdAt: new Date()
      }
    ];

    mockTokens.forEach(tokenData => {
      const id = this.currentTokenId++;
      const token: Token = { ...tokenData, id };
      this.tokens.set(id, token);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createToken(insertToken: InsertToken): Promise<Token> {
    const id = this.currentTokenId++;
    const token: Token = { 
      ...insertToken, 
      id,
      contractAddress: `0x${Math.random().toString(16).substring(2, 42)}`,
      holders: 0,
      priceChange: "0",
      createdAt: new Date(),
      twitter: insertToken.twitter || null,
      website: insertToken.website || null,
      discord: insertToken.discord || null,
      streamUrl: insertToken.streamUrl || null
    };
    this.tokens.set(id, token);
    return token;
  }

  async getTokens(): Promise<Token[]> {
    return Array.from(this.tokens.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getToken(id: number): Promise<Token | undefined> {
    return this.tokens.get(id);
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatId++;
    const message: ChatMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(msg => msg.sessionId === sessionId)
      .sort((a, b) => new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime());
  }
}

export const storage = new MemStorage();
