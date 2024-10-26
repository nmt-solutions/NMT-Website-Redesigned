CREATE TABLE IF NOT EXISTS "files" (
	"fileId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"filename" varchar(255) NOT NULL,
	"mimeType" varchar(100) NOT NULL,
	"data" "bytea" NOT NULL,
	"size" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"productId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"productName" varchar(255) NOT NULL,
	"productType" varchar(255) NOT NULL,
	"icon" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"readmeMarkup" text NOT NULL,
	"repositoryLink" text NOT NULL,
	"technologies" varchar(255) NOT NULL,
	"apkLink" varchar(255),
	"websiteLink" varchar(255),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
