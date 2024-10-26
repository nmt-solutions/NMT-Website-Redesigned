import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  customType,
  integer,
} from "drizzle-orm/pg-core";

const bytea = (name: string) =>
  customType<{
    data: Buffer;
    driverData: Buffer;
  }>({
    dataType() {
      return "bytea";
    },
    toDriver(value: Buffer) {
      return value;
    },
    fromDriver(value: Buffer) {
      return value;
    },
  })(name);

export const Subscriptions = pgTable("subscriptions", {
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

export const Files = pgTable("files", {
  fileId: uuid("fileId").defaultRandom().primaryKey(),
  filename: varchar("filename", { length: 255 }).notNull(),
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  data: bytea("data").notNull(),
  size: integer("size").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const Products = pgTable("products", {
  productId: uuid("productId").defaultRandom().primaryKey(),
  productName: varchar("productName", { length: 255 }).notNull(),
  productType: varchar("productType", { length: 255 }).notNull(),
  icon: varchar("icon", { length: 255 }).notNull(),
  description: text("description").notNull(),
  readmeMarkup: text("readmeMarkup").notNull(),
  repositoryLink: text("repositoryLink").notNull(),
  technologies: varchar("technologies", { length: 255 }).notNull(),
  apkLink: varchar("apkLink", { length: 255 }),
  websiteLink: varchar("websiteLink", { length: 255 }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
