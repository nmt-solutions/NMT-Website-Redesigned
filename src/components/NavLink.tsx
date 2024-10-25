"use client";

import { cn } from "@/lib/utils";
import { Route } from "@/routes/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ route }: { route: Route }) => {
  const pathname = usePathname();

  const isActive = route.path !== "/" && pathname.includes(route.path);

  return (
    <Link
      key={route.path}
      href={route.path}
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        { "text-foreground": isActive },
      )}
    >
      {route.name}
    </Link>
  );
};

export default NavLink;
