export const site = {
  name: "NMT Solutions",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://nmt-solutions.in").replace(
    /\/$/,
    "",
  ),
  email: "support@nmt-solutions.in",
  description:
    "NMT Solutions builds custom web and mobile applications, IoT systems, business automation, and connected cloud services. Explore our expertise, technology stack, and upcoming products.",
};

export const services = [
  {
    id: "web",
    number: "01",
    name: "Web applications",
    short: "Web",
    headline: "Your business, beautifully connected.",
    description:
      "Fast, accessible websites and custom web applications that turn complex workflows into straightforward experiences.",
    detail:
      "From the first wireframe to a responsive interface, we build around the people who will actually use your software.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "mobile",
    number: "02",
    name: "Mobile experiences",
    short: "Mobile",
    headline: "Useful things. Right at your fingertips.",
    description:
      "Thoughtful mobile applications for iOS and Android, with shared foundations and an experience that feels at home on each device.",
    detail:
      "We connect mobile interfaces to the services and devices behind them, so your app is part of a bigger, working system.",
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    id: "iot",
    number: "03",
    name: "IoT & connected systems",
    short: "IoT",
    headline: "Bring the physical and digital together.",
    description:
      "Connected devices, intelligent controls, and practical automation that let software make a difference in the real world.",
    detail:
      "We join hardware, controller software, and clear interfaces into a system you can understand and operate.",
    tags: ["Raspberry Pi", "Python", "Device control"],
  },
  {
    id: "cloud",
    number: "04",
    name: "Cloud & automation",
    short: "Cloud",
    headline: "All the moving parts, working as one.",
    description:
      "APIs, server integrations, and business automation that connect your tools and keep everyday work moving.",
    detail:
      "Reliable services and background workflows handle the work behind the interface, with ongoing maintenance and support.",
    tags: ["Node.js", "Python", "Cloudflare"],
  },
] as const;
export type ServiceId = (typeof services)[number]["id"];

export const stackGroups = [
  {
    id: "interface",
    number: "01",
    name: "The interface",
    title: "Make the complex feel simple.",
    description:
      "Responsive, accessible interfaces for the web. We use component-based tools to keep the experience consistent as an application grows.",
    technologies: [
      {
        name: "React",
        mark: "⚛",
        purpose: "Component-based interfaces",
        url: "https://react.dev",
      },
      {
        name: "Next.js",
        mark: "N",
        purpose: "Web applications & server rendering",
        url: "https://nextjs.org",
      },
      {
        name: "TypeScript",
        mark: "TS",
        purpose: "Typed application code",
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Tailwind CSS",
        mark: "≈",
        purpose: "Responsive design systems",
        url: "https://tailwindcss.com",
      },
    ],
  },
  {
    id: "mobile",
    number: "02",
    name: "The mobile layer",
    title: "A little closer to your users.",
    description:
      "Shared mobile foundations help us bring thoughtful experiences to phones and tablets while connecting to the same services as the web.",
    technologies: [
      {
        name: "React Native",
        mark: "⚛",
        purpose: "Native mobile interfaces",
        url: "https://reactnative.dev",
      },
      {
        name: "Expo",
        mark: "Λ",
        purpose: "Mobile development & delivery",
        url: "https://expo.dev",
      },
      {
        name: "Flutter",
        mark: "F",
        purpose: "Cross-platform applications",
        url: "https://flutter.dev",
      },
    ],
  },
  {
    id: "services",
    number: "03",
    name: "The engine",
    title: "The thinking behind the screen.",
    description:
      "APIs and background services connect your interface to business rules, integrations, and dependable workflows.",
    technologies: [
      {
        name: "Node.js",
        mark: "JS",
        purpose: "APIs & server-side applications",
        url: "https://nodejs.org",
      },
      {
        name: "Python",
        mark: "Py",
        purpose: "Automation & device controllers",
        url: "https://www.python.org",
      },
      {
        name: "FastAPI",
        mark: "ϟ",
        purpose: "Typed Python APIs",
        url: "https://fastapi.tiangolo.com",
      },
    ],
  },
  {
    id: "infrastructure",
    number: "04",
    name: "The foundation",
    title: "Built on something dependable.",
    description:
      "We choose storage and infrastructure around the needs of each client application, from structured records to connected hardware.",
    technologies: [
      {
        name: "PostgreSQL",
        mark: "Pg",
        purpose: "Relational application data",
        url: "https://www.postgresql.org",
      },
      {
        name: "Cloudflare",
        mark: "☁",
        purpose: "Cloud services & connectivity",
        url: "https://www.cloudflare.com",
      },
      {
        name: "Raspberry Pi",
        mark: "Pi",
        purpose: "Connected hardware",
        url: "https://www.raspberrypi.com",
      },
    ],
  },
] as const;

// Summarized from project documentation located through T3 Code.
// Public stages follow the owner's requested legacy/upcoming positioning.
export const projects = [
  {
    slug: "lead-follow-up-and-booking-automation",
    name: "Lead Follow-up & Booking Automation",
    category: "BUSINESS AUTOMATION",
    status: "Upcoming",
    mark: "workflow",
    description:
      "Helping businesses discover relevant prospects and move inquiries through follow-ups, qualification, and booking or quotation workflows.",
    overview:
      "An upcoming configurable product bringing prospect discovery and sales conversations into one workflow. The direction includes evidence-backed prospect research, a shared sales inbox, business-specific qualification, follow-ups, and human takeover.",
    highlights: [
      "Prospect discovery with supporting sources",
      "Inquiry qualification and follow-up workflows",
      "Booking and quotation-request pipelines",
    ],
    technologies: ["Sales automation", "Prospect research", "Human oversight"],
    note: "In development. This describes the product direction, not a generally available service.",
  },
  {
    slug: "supplier-catalog-cleaner",
    name: "Supplier Catalog Cleaner",
    category: "DOCUMENT INTELLIGENCE",
    status: "Upcoming",
    mark: "catalog",
    description:
      "Turning supplier PDFs, images, and text into structured catalog data, with source evidence and a human review step before acceptance.",
    overview:
      "An upcoming catalog extraction and cleanup application. Customers define an extraction schema, process source documents, review proposed changes beside their evidence, and build an accumulating master dataset.",
    highlights: [
      "Customer-defined extraction schemas",
      "Source-linked review and duplicate resolution",
      "Planned JSON, CSV, and Excel exports",
    ],
    technologies: [
      "Document extraction",
      "Structured data",
      "Review workflows",
    ],
    note: "In development. Planned workflows and export formats may evolve before launch.",
  },
  {
    slug: "control-nest-v2",
    name: "Control Nest v2",
    category: "CONNECTED LIVING",
    status: "Upcoming",
    mark: "home",
    description:
      "The next generation of our home automation system, connecting mobile device controls, room management, and schedules to Raspberry Pi controllers.",
    overview:
      "Control Nest v2 brings a React Native and Expo mobile application, a hosted website and API, and the AutoPiHub Raspberry Pi controller together. Its architecture supports device control, rooms, houses, and controller-run schedules.",
    highlights: [
      "Mobile controls for relay-connected devices",
      "Rooms, houses, and device schedules",
      "Python-powered Raspberry Pi controllers",
    ],
    technologies: ["React Native", "Expo", "Next.js", "Python", "Raspberry Pi"],
    note: "Upcoming generation. The architecture described here comes from the active project documentation.",
  },
  {
    slug: "control-nest",
    name: "Control Nest",
    category: "WHERE IT STARTED",
    status: "Legacy",
    mark: "home",
    description:
      "The original generation of Control Nest. A chapter in our connected-home journey, with the next generation now taking shape in Control Nest v2.",
    overview:
      "Control Nest is the legacy generation of our home automation work. We keep it here as part of the product’s history; the next generation is Control Nest v2.",
    highlights: [
      "Original Control Nest generation",
      "Part of our connected-home engineering journey",
      "Succeeded by the upcoming Control Nest v2",
    ],
    technologies: ["Home automation", "Connected systems"],
    note: "Legacy project. This listing is historical and does not imply current availability or ongoing support.",
  },
] as const;

export const faqs = [
  {
    question: "What does NMT Solutions do?",
    answer:
      "We design and build custom web and mobile applications, connected IoT systems, cloud integrations, and business automation. We also provide ongoing maintenance and support.",
  },
  {
    question: "Can you connect an app to physical devices?",
    answer:
      "Yes. Our IoT work connects mobile or web interfaces with controller software and hardware such as Raspberry Pi. Control Nest is part of our work in home automation.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our stack includes React, Next.js, TypeScript, React Native, Expo, Flutter, Node.js, Python, FastAPI, PostgreSQL, Cloudflare, and Raspberry Pi. We select tools to fit the application rather than using every tool on every project.",
  },
  {
    question: "Are the upcoming products available now?",
    answer:
      "The products marked Upcoming are in development. Their descriptions explain the current direction and do not represent a promise of general availability, a launch date, or a final feature set. Control Nest is listed separately as a legacy project.",
  },
  {
    question: "How do we start a conversation?",
    answer:
      "Email support@nmt-solutions.in with the problem you want to solve, who the software is for, and any existing systems it should connect to. We can discuss the scope and a practical way forward.",
  },
] as const;
