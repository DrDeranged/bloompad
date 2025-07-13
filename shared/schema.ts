import { pgTable, text, serial, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const tokens = pgTable("tokens", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  symbol: text("symbol").notNull(),
  supply: integer("supply").notNull(),
  price: decimal("price", { precision: 18, scale: 8 }).notNull(),
  description: text("description").notNull(),
  creatorAddress: text("creator_address").notNull(),
  contractAddress: text("contract_address"),
  twitter: text("twitter"),
  website: text("website"),
  discord: text("discord"),
  streamUrl: text("stream_url"),
  holders: integer("holders").default(0),
  priceChange: decimal("price_change", { precision: 5, scale: 2 }).default("0"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  userMessage: text("user_message").notNull(),
  botResponse: text("bot_response").notNull(),
  sessionId: text("session_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTokenSchema = createInsertSchema(tokens).omit({
  id: true,
  contractAddress: true,
  holders: true,
  priceChange: true,
  createdAt: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Token = typeof tokens.$inferSelect;
export type InsertToken = z.infer<typeof insertTokenSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
