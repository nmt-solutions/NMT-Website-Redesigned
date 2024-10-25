import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const subscriptions = pgTable("subscriptions", {
  subscriptionId: uuid("subscriptionId").defaultRandom().primaryKey(),
  fullname: varchar("fullname", { length: 255 }).notNull(),
  businessEmail: varchar("businessEmail", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  requirement: text("requirement").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
