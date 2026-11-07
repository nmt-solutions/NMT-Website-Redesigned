export enum Routes {
  LandingPage = "/",
  AboutUs = "/about-us",
  TechnologyStack = "/tech-stack",
  PrivacyPolicy = "/privacy-policy",
  TermsAndConditions = "/terms-and-conditions",
  CustomerSupport = "/customer-support",
  FAQ = "/faq",
}
export interface Route {
  name: string;
  path: Routes;
  isNav?: boolean;
}
const routes: Route[] = [
  { name: "Home", path: Routes.LandingPage, isNav: true },
  { name: "Our stack", path: Routes.TechnologyStack, isNav: true },
  { name: "About", path: Routes.AboutUs, isNav: true },
];
export default routes;
