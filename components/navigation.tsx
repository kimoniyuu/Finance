"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";
const route = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/Categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];
export const Navigation = () => {
    const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-autoauto">
      {route.map((route) => (
        <NavButton key={route.href}
        href={route.href}
        label={route.label}
        isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
