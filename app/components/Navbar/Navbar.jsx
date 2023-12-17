"use client";
import React from "react";
import { Crown, Search, Bookmark, CircleUserRound } from "lucide-react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: "popular",
    },
    {
      name: "popular",
    },
    {
      name: "popular",
    },
    {
      name: "popular",
    },
  ];

  return (

      <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="max-w-7xl mx-auto"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Anime Hub</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            {" "}
            <p className="font-bold text-inherit text-2xl font-dancing">
              Anime Hub
            </p>
          </Link>
        </NavbarBrand>
        <NavbarItem>Browse</NavbarItem>
        <NavbarItem isActive>Games</NavbarItem>
        <NavbarItem>News</NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Crown />
        <Search />
        <Bookmark />
        <CircleUserRound />
        <ThemeSwitcher />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>

  );
}
