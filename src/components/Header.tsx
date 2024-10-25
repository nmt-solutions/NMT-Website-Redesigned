import NMTLogo from "@/assets/svgs/nmt-logo.svg";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useAdmin from "@/hooks/useAdmin";
import routes, { Routes } from "@/routes/routes";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import NMTTextLogo from "./NMTTextLogo";
import { Button } from "./ui/button";

const Header = () => {
  const isAdmin = useAdmin();

  const navRoutes = routes.filter(
    (route) => route.isNav && (route.isAdminRoute ? isAdmin : true),
  );

  return (
    <header className="fixed top-0 left-0 right-0 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6 z-50">
      <nav className="hidden text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 bg-transparent">
        <Link href={Routes.LandingPage}>
          <Image src={NMTLogo} alt="NMT Logo" className="h-8 w-8" />
        </Link>
        {navRoutes.map((route) => (
          <NavLink key={route.path} route={route} />
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href={Routes.LandingPage}
              className="flex items-center gap-2 w-44"
            >
              <Image src={NMTLogo} alt="NMT Logo" className="h-8 w-8" />
              <NMTTextLogo />
            </Link>
            {navRoutes.map((route) => (
              <NavLink key={route.path} route={route} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full md:w-auto items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 bg-transparent">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
