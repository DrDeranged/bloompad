import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTokenSchema, insertChatMessageSchema } from "@shared/schema";
import { generateTokenSuggestions } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all tokens
  app.get("/api/tokens", async (req, res) => {
    try {
      const tokens = await storage.getTokens();
      res.json(tokens);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tokens" });
    }
  });

  // Get single token
  app.get("/api/tokens/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const token = await storage.getToken(id);
      if (!token) {
        return res.status(404).json({ message: "Token not found" });
      }
      res.json(token);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch token" });
    }
  });

  // Create new token
  app.post("/api/tokens", async (req, res) => {
    try {
      const validatedData = insertTokenSchema.parse(req.body);
      const token = await storage.createToken(validatedData);
      res.status(201).json(token);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create token" });
      }
    }
  });

  // Chat with BloomBot
  app.post("/api/chat", async (req, res) => {
    try {
      const { userMessage, sessionId } = req.body;
      
      if (!userMessage || !sessionId) {
        return res.status(400).json({ message: "User message and session ID are required" });
      }

      // Generate AI response
      const aiResult = await generateTokenSuggestions(userMessage);
      
      // Store chat message
      await storage.createChatMessage({
        userMessage,
        botResponse: aiResult.response,
        sessionId
      });

      res.json({
        response: aiResult.response,
        suggestions: aiResult.suggestions
      });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        message: "Failed to process chat message",
        response: "I'm having trouble right now. Please try again!"
      });
    }
  });

  // Get chat history
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
