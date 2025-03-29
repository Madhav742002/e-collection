import { primaryKey } from "drizzle-orm/gel-core";
import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";

export const usermessage = pgTable("usermessage", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
});

export const memberlist = pgTable("memberlist",{
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  post: varchar("post", { length: 255 }).notNull(),
}
)