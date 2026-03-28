"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-3 transition-transform hover:scale-105">
            <img src="/logo.png" alt="Harit Chetna Logo" className="h-12 w-auto object-contain drop-shadow-sm" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Harit Chetna
              </span>
              <span 
                className={
                  isHomePage 
                    ? "text-lg font-semibold text-primary/90 mt-0.5" 
                    : "text-sm font-medium text-muted-foreground mt-0.5"
                }
              >
                हरित चेतना
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/editorial-board" className="text-sm font-medium transition-colors hover:text-primary">
              Editorial Board
            </Link>
            <Link href="/author-guidelines" className="text-sm font-medium transition-colors hover:text-primary">
              Author Guidelines
            </Link>
            <Link href="/archives" className="text-sm font-medium transition-colors hover:text-primary">
              Archives
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/submit-contact">
            <Button className="hover:scale-105 transition-transform bg-primary text-primary-foreground">
              Submit Article
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
