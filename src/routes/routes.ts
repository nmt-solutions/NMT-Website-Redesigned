export enum Routes {
  LandingPage = "/",
  Dashboard = "/dashboard",
  OurProducts = "/our-products",
  Product = "/our-products/product/[productId]",
  AboutUs = "/about-us",
  NotAuthorized = "/not-authorized",
  NotFound = "/not-found",
}

export interface Route {
  name: string;
  path: Routes;
  isNav?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  isAdminRoute?: boolean;
}

const routes: Route[] = [
  {
    name: "Landing Page",
    path: Routes.LandingPage,
    showHeader: true,
    showFooter: true,
  },
  {
    name: "Dashboard",
    path: Routes.Dashboard,
    isNav: true,
    showHeader: true,
    showFooter: true,
    isAdminRoute: true,
  },
  {
    name: "Products",
    path: Routes.OurProducts,
    isNav: true,
    showHeader: true,
    showFooter: true,
  },
  {
    name: "Product Details",
    path: Routes.Product,
    showHeader: true,
    showFooter: true,
  },
  {
    name: "About us",
    path: Routes.AboutUs,
    isNav: true,
    showHeader: true,
    showFooter: true,
  },
  {
    name: "Not Authorized",
    path: Routes.NotAuthorized,
    showHeader: true,
    showFooter: true,
  },
  { name: "Not Found", path: Routes.NotFound },
];

export default routes;

export const matchRoute = (routePath: Routes, pathname: string) => {
  console.log("pathname", pathname);
  console.log("routePath", routePath);
  // Replace dynamic segments with a placeholder
  const routePathWithPlaceholders = routePath.replace(
    /\[.*?\]/g,
    "__DYNAMIC__",
  );

  // Escape special regex characters in the route path, except for our placeholder
  const escapedRoutePath = routePathWithPlaceholders.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );

  // Replace the placeholder with the regex pattern for dynamic segments
  const regexPath = escapedRoutePath.replace(/__DYNAMIC__/g, "[^/]+");

  // Create the regex pattern
  const regex = new RegExp(`^${regexPath}$`);

  console.log(regex.test(pathname));
  // Test if the pathname matches the regex
  return regex.test(pathname);
};
