import WebIcon from "@/assets/svgs/web.svg";
import PhoneIcon from "@/assets/svgs/phone.svg";
import ServerIcon from "@/assets/svgs/server.svg";
import MaintenanceIcon from "@/assets/svgs/maintenance.svg";
import ReactIcon from "@/assets/svgs/react.svg";
import AngularIcon from "@/assets/svgs/angular.svg";
import ReactNativeIcon from "@/assets/svgs/react-native.svg";
import ExpoIcon from "@/assets/svgs/expo.svg";
import FlutterIcon from "@/assets/svgs/flutter.svg";
import NodeJSIcon from "@/assets/svgs/node-js.svg";
import PythonIcon from "@/assets/svgs/python.svg";
import NextJSIcon from "@/assets/svgs/next-js.svg";
import PostgreSQLIcon from "@/assets/svgs/postgresql.svg";
import MongoDBIcon from "@/assets/svgs/mongo-db.svg";
import MySQLIcon from "@/assets/svgs/my-sql.svg";
import OracleIcon from "@/assets/svgs/oracle.svg";
import FirebaseIcon from "@/assets/svgs/firebase.svg";
import CSS3Icon from "@/assets/svgs/css.svg";
import TailwindIcon from "@/assets/svgs/tailwind.svg";
import MUIIcon from "@/assets/svgs/mui.svg";
import SASSIcon from "@/assets/svgs/sass.svg";
import StyledComponentsIcon from "@/assets/svgs/styled-components.svg";

export const technologiesOptions = [
  { label: "React JS", value: "react-js" },
  { label: "React Native", value: "react-native" },
  { label: "Angular JS", value: "angular-js" },
  { label: "Flutter", value: "flutter" },
  { label: "Python", value: "python" },
  { label: "Python", value: "python" },
  { label: "Python", value: "python" },
  { label: "Python", value: "python" },
];

export const expertises = [
  {
    icon: WebIcon,
    heading: "Web & Mobile App Development",
    description:
      "Our team of experienced developers specializes in creating custom web applications using cutting-edge technologies, ensuring high-performance, scalability, and security for your business needs.We offer native mobile app development services for both iOS and Android platforms.",
  },
  {
    icon: PhoneIcon,
    heading: "Internet of Things / CPS",
    description:
      "We specialize in providing state-of-the-art IoT and CPS (Cyber-Physical Systems) solutions to enhance connectivity, efficiency, and data-driven decision-making for your business. Explore our offerings and discover how we can help you harness the power of smart technology.",
  },
  {
    icon: ServerIcon,
    heading: "Server Integration",
    description:
      "Our team has extensive experience in server integration, enabling seamless data exchange, enhanced security, and improved scalability for your apps. We use the latest technologies and industry best practices to deliver the highest level of server integration for our clients.",
  },
  {
    icon: MaintenanceIcon,
    heading: "24X7 Maintenance & Support",
    description:
      "Our maintenance and support services ensure that your app remains up-to-date, secure, and optimized for peak performance. We offer flexible maintenance plans to meet the unique needs of your business, providing ongoing support to help you stay ahead of the competition.",
  },
];

export const policies = [
  {
    name: "Privacy Policy",
    content1: `NMT Solutions is committed to protect your personal information
                provided or collected on this site. We want our services to be
                secure and constant for you.Processing such data assist NMT
                Solutions to process private data fairly and appropriately,
                disclosing it and/or transferring it only under appropriate
                circumstances. The following privacy policy pertains to our use
                of any private information we collect from you.`,
    content2: `Please Note: This privacy policy practices are for this site
                only. If there are external hyperlinks to different websites,
                please evaluate those privacy policies too, which may vary from
                those of NMT Solutions.`,
  },
  {
    name: "Distribution of Information",
    content1: `NMT Solutions does not share, sell, rent, or trade personal data
          gathered via our website, with third parties for any purpose apart
          from that mentioned in this Privacy policy.
          We can share private data with governmental agencies or
          organizations assisting us in fraud investigation. We might also
          additionally do so when:`,
    content2: [
      "Permitted or required with the aid of using law; or",
      `Seeking to protect against or prevent real or potential fraud or
            unauthorized transactions; or`,
      `Investigating fraud that has already taken place. The information is
            not provided to those organizations for advertising purposes.`,
    ],
  },
  {
    name: "Consent and Control",
    content1: `Consent
          
          NMT Solutions only collects and uses the data when user allows the
          consent for the same.
          
          Control
          
          NMT Solutions also allows users to control their data if users want to
          modify, delete or access it. Users can request to review, update,
          delete, correct their data via our email provided for the same.`,
  },
  {
    name: "Retention",
    content1: `  We do not keep your data longer than necessary.The span of time we
          retain you data depends on the purpose for which we have collected
          your private data.`,
  },
  {
    name: "What are your rights?",
    content1: `If you want to modify, or delete your personal data, you are
          encouraged to do so through the settings in your profile in the
          applicable platform or if you wish to raise a complaint /question on
          how we have handled your personal data, you can contact at support@nmt-solutions.in .`,
  },
];

export const techOfferings = [
  {
    name: "Frontend Frameworks",
    offerings: [
      {
        id: "react",
        name: "React",
        icon: ReactIcon,
        animation: "spin",
        externalLink: "https://reactjs.org/",
        description:
          "We use React to create high-performance web applications that are scalable and easy to maintain, leveraging its ability to efficiently update and render UI components.",
      },
      {
        id: "angular",
        name: "Angular",
        icon: AngularIcon,
        animation: "scale",
        externalLink: "https://angular.io/",
        description:
          "Angular allows us to create robust web applications with its powerful features such as dependency injection, two-way data binding, and component-based architecture, making it easy to develop complex applications.",
      },
    ],
  },
  {
    name: "Native Frameworks",
    offerings: [
      {
        id: "react-native",
        name: "React Native",
        icon: ReactNativeIcon,
        animation: "spin",
        externalLink: "https://reactnative.dev/",
        description:
          "React Native helps us build high-quality, custom mobile apps for both iOS and Android platforms, with the added benefit of code reusability and faster development time.",
      },
      {
        id: "expo",
        name: "Expo",
        icon: ExpoIcon,
        animation: "scale",
        externalLink: "https://docs.expo.dev/",
        description:
          "Expo is a framework that makes developing Android and iOS apps easier. Our framework provides file-based routing, a standard library of native modules, and much more",
      },
      {
        id: "flutter",
        name: "Flutter",
        icon: FlutterIcon,
        animation: "scale",
        externalLink: "https://flutter.dev/",
        description:
          "Flutter allows us to build beautiful, fast, and natively compiled mobile apps for both iOS and Android platforms, providing a seamless and consistent experience across multiple devices.",
      },
    ],
  },
  {
    name: "Backend Frameworks",
    offerings: [
      {
        id: "node-js",
        name: "Node JS",
        icon: NodeJSIcon,
        animation: "spin",
        externalLink: "https://nodejs.org/",
        description:
          "Node JS is a powerful tool for building scalable, high-performance backend applications, allowing us to build fast and efficient server-side applications.",
      },
      {
        id: "python",
        name: "Python",
        icon: PythonIcon,
        animation: "spin",
        externalLink: "https://www.python.org/",
        description:
          "Python is our preferred language for developing complex algorithms and machine learning models, allowing us to deliver intelligent solutions for our clients.",
      },
    ],
  },
  {
    name: "Fullstack Frameworks",
    offerings: [
      {
        id: "next-js",
        name: "Next JS",
        icon: NextJSIcon,
        animation: "spin",
        externalLink: "https://nextjs.org/",
        description:
          "With Next JS, we build performant and SEO-friendly web applications with advanced features such as server-side rendering, static site generation, and API routes. We also leverage Next JS's built-in support for TypeScript and modern front-end technologies to build high-quality web applications.",
      },
    ],
  },
  {
    name: "Database",
    offerings: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: PostgreSQLIcon,
        animation: "scale",
        externalLink: "https://www.postgresql.org/",
        description:
          "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
      },
      {
        id: "mongo-db",
        name: "Mongo DB",
        icon: MongoDBIcon,
        animation: "scale",
        externalLink: "https://www.mongodb.com/",
        description:
          "Mongo DB is our preferred NoSQL database for building scalable and flexible applications. We leverage its document-oriented data model and indexing capabilities to create efficient and performant applications.",
      },
      {
        id: "my-sql",
        name: "MySQL",
        icon: MySQLIcon,
        animation: "scale",
        externalLink: "https://www.mysql.com/",
        description:
          "MySQL is a powerful relational database management system that we use to build scalable and secure web applications. Its support for transactions, indexing, and clustering makes it ideal for mission-critical applications.",
      },
      {
        id: "oracle",
        name: "Oracle",
        icon: OracleIcon,
        animation: "scale",
        externalLink: "https://www.oracle.com/",
        description:
          "Oracle is an enterprise-level database management system that we use to build complex and scalable applications. We leverage its features such as partitioning, clustering, and high availability to create highly performant applications for our clients.",
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: FirebaseIcon,
        animation: "scale",
        externalLink: "https://firebase.google.com/",
        description:
          "Firebase is a powerful mobile and web application development platform that we use to build scalable and performant applications with features like real-time database, cloud messaging, and authentication. We leverage its serverless architecture to create highly scalable and flexible applications for our clients.",
      },
    ],
  },
  {
    name: "UI Frameworks (Web)",
    offerings: [
      {
        id: "css",
        name: "CSS 3",
        icon: CSS3Icon,
        animation: "scale",
        externalLink: "https://www.css3.com/",
        description:
          "CSS 3 provides us with advanced styling options, allowing us to create visually stunning websites and web applications with advanced animations and transitions.",
      },
      {
        id: "tailwind",
        name: "Tailwind",
        icon: TailwindIcon,
        animation: "scale",
        externalLink: "https://tailwindcss.com/",
        description:
          "Tailwind is a utility-first CSS framework that helps us create responsive and customizable web designs faster and more efficiently.",
      },
      {
        id: "mui",
        name: "MUI",
        icon: MUIIcon,
        animation: "scale",
        externalLink: "https://mui.com/",
        description:
          "Material UI provides us with pre-designed React components that allow us to build beautiful, responsive, and accessible web applications with ease.",
      },
      {
        id: "sass",
        name: "SASS",
        icon: SASSIcon,
        animation: "scale",
        externalLink: "https://sass-lang.com/",
        description:
          "Sass is a powerful CSS extension language that allows us to write clean and efficient stylesheets, with features like variables, mixins, and nesting, making it easy to maintain and scale our styles.",
      },
      {
        id: "styled-components",
        name: "Styled Components",
        icon: StyledComponentsIcon,
        animation: "scale",
        externalLink: "https://styled-components.com/",
        description:
          "Styled Components allows us to create reusable UI components with scoped styles, making it easy to maintain and update the styles across our application.",
      },
    ],
  },
];

export const techOptions = techOfferings
  .flatMap((group) => group.offerings)
  .map((offering) => ({
    label: offering.name,
    value: offering.name.toLowerCase().split(" ").join("-"),
  }));

export const termsData = [
  {
    title: "Last updated on : 01/03/2023",
    content: "",
  },
  {
    title: "Terms & Conditions",
    content: `Welcome to NMT Solutions (“Company”, “we”, “our”, “we”)!

These Terms of Service (“Terms”, “Terms of Service”) govern your use of the website available at NMT Solutions (together with each “Service”) used by NMT Solutions.

Our Privacy Policy also governs your use of our Service and describes how we collect, protect and disclose information from your use of our web pages. You acknowledge that you have read and understood the Conventions, and acknowledge that you are committed to them.

If you do not agree to (or cannot comply with) Agreements, then you may not use the Service, but please let us know by sending an email to support@nmt-solutions.in to try and find a solution.`,
  },
  {
    title: "Communication",
    content: `By using our Service, you agree to subscribe to our newsletters, marketing or promotional materials and other information we may send to you. However, you can unsubscribe to these services by writing to us on support@nmt-solutions.in.`,
  },
  {
    title: "Shopping",
    content: `If you wish to purchase any product or service available (“Buy”), you may be required to provide certain information related to your Purchase, but not limited to, your credit or bank card number, the expiry date of your card, your billing address, and your shipping information. You represent and accept that:

(i) you have the legal right to use any cards or other payment methods in connection with any Purchase; and

(ii) the information you give us is true, correct and complete.

We may also use third-party services to facilitate payment and termination of purchases. By submitting your information, you give us the right to provide information to these third parties under our Privacy Policy.

We reserve the right to reject or cancel your order at any time for reasons that include but are not limited to:

- Availability of the product or service.

We reserve the right to reject or cancel your order on suspicion of fraud or unauthorized transactions.`,
  },
  {
    title: "Competitions and Promotions",
    content: `Any contests or other promotion (inclusive, “Promotions”) made available by the Service may be governed by the rules contrary to these Terms of Service. If you are participating in any of the promotions or contests, please review the applicable laws and our Privacy Policy.`,
  },
  {
    title: "Refunds",
    content: `Please go through the refund policy section.`,
  },
  {
    title: "Content",
    content: `The content found on this service or through this service is the property of NMT Solutions and should be used with permission. You agree that you will not exchange, transfer, reuse, distribute, copy, share, or otherwise use the said content, in whole or part of content, for commercial or personal gain, without our consent.`,
  },
  {
    title: "Prohibited Use",
    content: `You agree to use the Service only as per the Terms (current or modified).

You agree not to use:

- In a way that is against any applicable national or international law or regulation.
- Transfer, or gain postage, of any promotion or promotional material, including any junk email, newsletter, spam, or any other similar request.
- In any way that violates or copies or duplicates the rights and content of others, or in any way illegal, fraudulent, intimidating, or harmful, or in connection with any fraudulent, unlawful, illegal, or harmful activity or purpose.
- In a way that may be harmful or offensive to the Company or the Service Providers or expose them to credit.

Additionally, you agree to:

- Not use the Service in any way that may disable, overload, or damage the Service or interfere with any other use of the Service, including their ability to participate in real-time activities with the Service.
- Not use any process to monitor or copy any material which is illegal or unlawful or not accepted by us for any other unauthorized purpose without our prior written consent.
- Not use any machine (electronic or mechanical or any), software, or system that interferes with the operation of the Service.
- Not introduce any viruses, trojan horses, worms, intelligent bombs, or any other dangerous or harmful technology.
- Not attempt to obtain unauthorized access to, disrupt, harm, or interfere with any parts of the Service, server stored by the Service, and any server, computer, or website connected to the Service.
- Not service attack on service blocking attacks or distributed denial of service denials.
- Not take any action that may damage or mislead the Company's rating.
- Not try to interrupt the operation of the Service.`,
  },
  {
    title: "Statistics",
    content: `We may also use third-party Service Providers to monitor and evaluate the use of our Services.`,
  },
  {
    title: "Intellectual Property",
    content: `The service is protected by copyright, trademark, or other laws and regulations. Our trademarks may not be used in connection with any product or service without the prior written consent of NMT Solutions.`,
  },
  {
    title: "Copyright Policy",
    content: `We respect the rights of everyone. It is our responsibility to solve and provide you satisfactory results about any claim regarding content posted on the service or website violates the copyright or any other intellectual property rights of others.

If you are the copyright owner, or have been authorized by someone else, and believe that your work was copied in a way that included copyright infringement, please email your claim to support@nmt-solutions.in, with the title: “Copyright infringement” and file a detailed description of the alleged infringement as described below, under "DMCA Notice and the Copyright Infringement Claim Process".

You may be liable for damages (including costs and attorneys' fees) for distorting the facts or claims of misconduct for violating any of the content found and/or for your copyright service.`,
  },
  {
    title: "DMCA Notice and Copyright Claims Procedure",
    content: `You may submit a notice in accordance with the Digital Millennium Copyright Act (DMCA) by providing our copyright agent with the following information in writing:

- Signature (digital or electronic) of copyright holder or owner or authorized personnel to act on behalf of the owner;
- Description of the copyrighted work, including screenshots or videos or the URL (web address) of the location where the copyrighted work is located;
- Identifying a URL or other location in a service where significant infringement claims are found;
- Your detailed address, active phone number, and email address;
- Your statement with legal or governing officials' authorization, that the information that you provided regarding copyrighted work is accurate and that you are the owner or authorized personnel to act on behalf of the owner.

You can contact our copyright agent by email at support@nmt-solutions.in.`,
  },
  {
    title: "Error Reporting and Feedback",
    content: `You may provide it directly to support@nmt-solutions.in or by using third-party sites and tools for information and feedback regarding errors, suggestions, issues, complaints, and other issues related to our Service (“Response”). You acknowledge and agree that:

(i) You will not retain, obtain, or infringe any copyright or other right, title, or interest in the response;

(ii) The Company may have development ideas such as Feedback;

(iii) The response does not contain confidential or proprietary information from you or any other person; and

(iv) The Company is not under any obligation to maintain confidentiality regarding the Response. In the event that the transfer of ownership to Feedback is not possible due to applicable binding rules, you grant the Company and its subsidiaries the exclusive, transferable, non-refundable, free, licensed, and unlimited use of rights (including copying, modifying, creating based works, publishing, distributing, and selling) Response method and for any purpose.`,
  },
  {
    title: "Links To Other Websites",
    content: `Our service may also contain links to third-party websites or services that do not belong to NMT Solutions or that are not controlled by NMT Solutions.

NMT Solutions has no control over, and is not responsible for, the content, privacy policies, or procedures of any third-party websites or services. We do not authorize the distribution of any of these organizations/individuals or their websites.

**WE ADVISE YOU VERY MUCH TO READ THE SERVICE PRINCIPLES AND PRIVACY POLICIES OF ANY THIRD WEBSITE OR SERVICES YOU VISIT.**`,
  },
  {
    title: "Disclaimer Terms of Use",
    content: `**THESE SERVICES ARE PROVIDED BY THE COMPANY BASED ONLY "AS IS" AND "AS AVAILABLE". THE COMPANY DOES NOT REPRESENT ANY WARRANTIES OF ANY KIND, EXCLUSIVE PERIOD, ABOUT THE USE OF ITS SERVICES, OR INFORMATION, CONTENTS OR ITEMS AVAILABLE THERE. YOU PERMITTALLY ACCEPT THAT YOUR USE OF THESE SERVICES, CONTENTS, AND ANY SERVICES OR ITEMS AVAILABLE TO YOU IS AT YOUR OWN RISK.**`,
  },
  {
    title: "Termination",
    content: `We may block or terminate your account and restrict access to the Service immediately, without prior notice or charge, under our discretion, for any reason and without limitation, including but not limited to Terms of Service violations.`,
  },
  {
    title: "Governing Law",
    content: `These Terms will be governed by and will strictly follow the laws of India (or any other governing organization's law of the territory or state or nation where you are using our services depending on your location), the supreme law applicable to the agreement without regard to any conflict of law provisions.

Our failure to enforce any right or grant of these Terms shall not be construed as a waiver of those rights. If any provision of these Terms is deemed to be invalid or unenforceable by a court, the remaining provisions of these Terms shall remain in force.`,
  },
  {
    title: "Changes to the Service",
    content: `We have every right to change, remove, or amend our service, and any service or services we offer, at our sole discretion without notice. From time to time, we may limit access to certain portions of the Service, or the entire Service, to users, including registered users.`,
  },
  {
    title: "Conditions Amendments",
    content: `We may amend the Terms at any time by posting the modified terms on this site. It is your responsibility to review these Terms from time to time. You are required to review this page regularly to be aware of any changes, as they are binding on you. By continuing to access or use our Service after any updates are enabled, you agree to be bound by the updated terms. If you do not agree to any term or condition (current or modified or changed), then you are no longer permitted to use any of our Service.`,
  },
  {
    title: "Acknowledgment",
    content: `**BY USING ANY SERVICE OR OTHER PRODUCT PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND ACCEPT YOUR RESPONSIBILITY TO THEM.**`,
  },
  {
    title: "Contact Us",
    content: `Please send your feedback, comments, requests for technical assistance by email: support@nmt-solutions.in`,
  },
];
