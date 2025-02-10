import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  amenities: text("amenities").array().notNull(),
  price: integer("price").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const insertRoomSchema = createInsertSchema(rooms).omit({ id: true });

export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Room = typeof rooms.$inferSelect;
