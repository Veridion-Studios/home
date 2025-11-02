"use client";

import React from "react";
import NextLink from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import  ThemeToggle  from "@/components/theme-toggle";
import { Logo } from "@/components/icons";

import {
  ChevronDown,
  BookOpenText,
  Search,
  Users,
  ScrollText,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import mainNavbarRaw from "@/config/main-navbar.json";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // track which tagged dropdown is open (null = none)
  const [openTag, setOpenTag] = React.useState<string | null>(null);

  const icons = {
    chevron: <ChevronDown className="size-4" />,
    scroll: <ScrollText className="text-[#8722EA] size-4" />,
    users: <Users className="text-[#8722EA] size-4" />,
    book: <BookOpenText className="text-[#8722EA] size-4" />,
    search: <Search className="text-[#8722EA] size-4" />,
  };

  const dropdownPrograms = Array.isArray(mainNavbarRaw)
    ? mainNavbarRaw
    : [];

  type ProgramItem = {
    key: string;
    tag?: string;
    title: string;
    description: string;
    startContent?: string;
    [key: string]: unknown;
  };
  const grouped = dropdownPrograms.reduce<Record<string, ProgramItem[]>>(
    (acc, item: ProgramItem) => {
      const tag = (item?.tag as string) || "Other";
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(item);
      return acc;
    },
    {}
  );

  const capitalize = (s: string) =>
    s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  return (
    <nav className="sticky top-0 z-40 bg-transparent backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <NextLink href="/" className="flex items-center gap-2">
              <Logo />
              <span
                aria-hidden="true"
                className="inline-block h-6 w-px bg-default-200 rounded mx-1"
              />
              <p className="font-bold text-xl text-inherit">Veridion Studios</p>
            </NextLink>
          </div>

          {/* Center: Desktop nav */}
          <div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1 gap-4">
            {/* render one DropdownMenu per tag from the JSON */}
            {Object.entries(grouped).map(([tag, items]) => (
              <DropdownMenu
                key={tag}
                onOpenChange={(open: boolean) => setOpenTag(open ? tag : null)}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-0 bg-transparent hover:bg-transparent flex items-center gap-2"
                    aria-label={`Open ${tag} programs`}
                  >
                    <span>{capitalize(tag)}</span>
                    {/* animated chevron that rotates when this tag's dropdown is open */}
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${openTag === tag ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-80 p-2">
                  <DropdownMenuLabel>{capitalize(tag)}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="flex flex-col gap-1">
                    {items.map((item: ProgramItem) => (
                      <DropdownMenuItem
                        key={item.key}
                        className="flex items-start gap-3 py-2"
                      >
                        <div className="mt-0.5">
                          {/* Only show icon if valid key */}
                          {icons[item.startContent as keyof typeof icons] ?? null}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {item.description}
                          </span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <ThemeToggle />
            </div>

            <div className="hidden md:flex items-center gap-2">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button variant="purple" className="rounded-xl text-white">
                    Sign Up
                  </Button>
                </SignUpButton>
                <div className="mx-0.5" />
                <SignInButton mode="modal">
                  <Button variant="outline" className="rounded-xl">Sign In</Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Mobile Toggle */}
            <div className="sm:hidden flex items-center">
              <ThemeToggle />
              <button
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((s) => !s)}
                className="ml-2 inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
              >
                {mobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;