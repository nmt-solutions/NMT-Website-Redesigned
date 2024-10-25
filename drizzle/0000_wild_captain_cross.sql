CREATE TABLE IF NOT EXISTS "subscriptions" (
	"subscriptionId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fullname" varchar(255) NOT NULL,
	"businessEmail" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"requirement" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
