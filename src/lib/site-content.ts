export const site = {
  name: "NMT Solutions",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://nmtsolutions.in").replace(
    /\/$/,
    "",
  ),
  email: "wafa.khan@nmtsolutions.in",
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
      "We build accessible websites and web applications for customer services, internal tools, and business workflows.",
    detail:
      "We design the interface, build the application, and connect it to your existing services.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "mobile",
    number: "02",
    name: "Mobile experiences",
    short: "Mobile",
    headline: "Useful things. Right at your fingertips.",
    description:
      "We build iOS and Android applications with React Native, Expo, or Flutter.",
    detail:
      "Our mobile apps connect to your APIs, business systems, and hardware.",
    tags: ["React Native", "Expo", "Flutter"],
  },
  {
    id: "iot",
    number: "03",
    name: "IoT & connected systems",
    short: "IoT",
    headline: "Bring the physical and digital together.",
    description:
      "We connect hardware to web and mobile apps for device control, monitoring, and automation.",
    detail:
      "We build controller software and interfaces for hardware such as Raspberry Pi.",
    tags: ["Raspberry Pi", "Python", "Device control"],
  },
  {
    id: "cloud",
    number: "04",
    name: "Cloud & automation",
    short: "Cloud",
    headline: "All the moving parts, working as one.",
    description:
      "We build APIs, connect third-party services, and automate recurring business tasks.",
    detail:
      "We develop server applications and background jobs, then maintain the integrations they use.",
    tags: ["Node.js", "Python", "Cloudflare"],
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const stackGroups = [
  {
    id: "interface",
    number: "01",
    name: "Web interface",
    title: "Build the web interface.",
    description:
      "React and Next.js provide reusable interface components and server rendering. TypeScript checks application code, and Tailwind CSS handles responsive styles.",
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
    name: "Mobile apps",
    title: "Build for iOS and Android.",
    description:
      "React Native, Expo, and Flutter support mobile development across iOS and Android. We choose the framework to suit the application.",
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
    name: "Server applications",
    title: "Run APIs and background jobs.",
    description:
      "Node.js and Python run application logic, integrations, and automation. FastAPI provides Python API endpoints.",
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
    name: "IoT",
    title: "Connect apps to physical devices.",
    description:
      "The app talks to an API. PostgreSQL stores application records. Device commands pass from the API through Cloudflare Tunnel to a Raspberry Pi controller.",
    technologies: [
      {
        name: "PostgreSQL",
        mark: "Pg",
        purpose: "Application records",
        url: "https://www.postgresql.org",
      },
      {
        name: "Cloudflare Tunnel",
        mark: "☁",
        purpose: "Remote controller access",
        url: "https://developers.cloudflare.com/tunnel/",
      },
      {
        name: "Raspberry Pi",
        mark: "Pi",
        purpose: "Device control & GPIO",
        url: "https://www.raspberrypi.com",
      },
    ],
  },
] as const;

export const projects = [
  {
    slug: "lead-follow-up-and-booking-automation",
    name: "Lead Follow-up & Booking Automation",
    category: "Business automation",
    status: "Upcoming",
    mark: "workflow",
    description:
      "Sales automation for prospect research, inquiry qualification, follow-ups, and booking or quotation requests.",
    overview:
      "We are developing a product that combines prospect research with a shared sales inbox. Businesses will configure qualification rules, follow-ups, booking requests, and quotation requests. Staff can take over conversations.",
    highlights: [
      "Prospect discovery with supporting sources",
      "Inquiry qualification and follow-up workflows",
      "Booking and quotation-request pipelines",
    ],
    technologies: ["Sales automation", "Prospect research", "Human oversight"],
    note: "In development.",
    websiteUrl: null,
  },
  {
    slug: "supplier-catalog-cleaner",
    name: "Supplier Catalog Cleaner",
    category: "Catalog data",
    status: "Upcoming",
    mark: "catalog",
    description:
      "Extract product data from supplier PDFs, images, and text. Review each proposed change beside its source before accepting it.",
    overview:
      "We are developing a catalog extraction application. Customers define the fields they need, upload source files, and review extracted values beside the source material. Accepted records enter a master dataset.",
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
    note: "In development.",
    websiteUrl: null,
  },
  {
    slug: "control-nest-v2",
    name: "Control Nest v2",
    category: "Home automation",
    status: "Upcoming",
    mark: "home",
    description:
      "Home automation for lights, fans, and other relay-connected devices. Use the mobile app to manage rooms, switch devices, and set controller-run schedules.",
    overview:
      "Control Nest v2 connects a React Native and Expo mobile app to AutoPiHub controllers on Raspberry Pi. A Next.js website manages houses and controller setup. Each house can have several controllers, and each device belongs to a room.",
    highlights: [
      "Mobile controls for relay-connected lights, fans, and other devices",
      "Several houses, rooms, controllers, and house members",
      "On and off schedules that run on the controller",
      "Local network discovery and remote access through Cloudflare Tunnel",
      "Activity history, energy estimates, and app and controller updates",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Cloudflare",
      "Raspberry Pi",
    ],
    note: "In development. The public website has setup instructions and app information.",
    websiteUrl: "https://controlnest.nmt-solutions.in/",
  },
  {
    slug: "control-nest",
    name: "Control Nest",
    category: "Home automation",
    status: "Legacy",
    mark: "home",
    description:
      "The original Control Nest home automation project. Control Nest v2 is the replacement under development.",
    overview:
      "Control Nest is our original home automation project. We list it as a legacy version. Control Nest v2 is the replacement under development and has a public website.",
    highlights: [
      "Original Control Nest version",
      "Home automation",
      "Replacement under development, Control Nest v2",
    ],
    technologies: ["Home automation", "Connected systems"],
    note: "Legacy version. See Control Nest v2 for current development.",
    websiteUrl: null,
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
    question: "Which products are available?",
    answer:
      "Lead Follow-up & Booking Automation, Supplier Catalog Cleaner, and Control Nest v2 are in development. Control Nest v2 has a public website at https://controlnest.nmt-solutions.in/ with setup instructions and app information. The original Control Nest is a legacy project.",
  },
  {
    question: "How do we start a conversation?",
    answer:
      "Email wafa.khan@nmtsolutions.in with the problem you need to solve, who will use the software, and the systems it needs to connect to.",
  },
] as const;

export const controlNestDetails = [
  {
    heading: "Device and room controls",
    body: "Add devices to rooms and select their controller and GPIO header pin. Use the mobile app to switch relay-connected devices. Each house can have several Raspberry Pi controllers, and house members use their own accounts.",
  },
  {
    heading: "Schedules",
    body: "Choose the days and on and off times in the app. AutoPiHub runs the schedule on the Raspberry Pi, so the app does not need to stay open.",
  },
  {
    heading: "Local and remote access",
    body: "The mobile app discovers nearby controllers during setup. Pair the phone and Pi on the same trusted local network. Cloudflare Tunnel provides remote HTTPS access without inbound router port forwarding.",
  },
  {
    heading: "Activity and energy estimates",
    body: "Review device changes and request history in the mobile app. Optional device power ratings support energy estimates. These estimates are not meter readings.",
  },
  {
    heading: "App and controller updates",
    body: "The app can check for compatible mobile updates. House admins can start controller firmware updates and follow their progress. Controller updates continue after the phone disconnects. Failed activation restores the previous working release and its data.",
  },
  {
    heading: "Hardware and setup",
    body: "Use a Raspberry Pi running Raspberry Pi OS, suitable relay hardware, and an Android phone for the published app. Install AutoPiHub, create a house and controller on the website, pair the Pi, then add rooms and devices. The setup guide explains the hardware requirements and installation steps.",
  },
] as const;
