"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Profil", 
      href: "#",
      subItems: [
        { name: "Tentang Kami", href: "/profil/tentang-kami" },
        { name: "Profil Pendiri", href: "/profil/profil-pendiri" },
        { name: "Portofolio", href: "/portfolio" },
        { name: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
        { name: "Legalitas Perusahaan", href: "/profil/legalitas-perusahaan" }
      ]
    },
    { name: "Project", href: "/project" },
    { name: "Artikel", href: "/artikel" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/assets/logo.png" alt="TRICIPTA LAND Logo" className="h-12 w-12 sm:h-14 sm:w-14 object-cover bg-white rounded-full shadow-sm group-hover:scale-105 transition-transform" />
              <span className="text-primary font-heading font-bold text-xl sm:text-2xl tracking-wide hidden sm:block">
                TRICIPTA LAND
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.subItems) {
                const isParentActive = link.subItems.some(sub => pathname === sub.href || pathname.startsWith(sub.href));

                return (
                  <div key={link.name} className="relative group">
                    <button className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors relative py-6",
                      isParentActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                    )}>
                      {link.name} <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      {/* Active indicator bar for parent */}
                      {isParentActive && (
                        <span className="absolute bottom-4 left-0 w-full h-0.5 bg-accent rounded-full" />
                      )}
                    </button>
                    <div className="absolute top-[90%] left-0 w-56 bg-white border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                      <div className="py-2">
                        {link.subItems.map(subItem => (
                          <Link 
                            key={subItem.name} 
                            href={subItem.href} 
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:bg-neutral-50 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-6",
                    isActive 
                      ? "text-primary font-bold" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  {/* Active indicator bar */}
                  {isActive && (
                    <span className="absolute bottom-4 left-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/kontak" className={cn(buttonVariants(), "bg-primary text-primary-foreground hover:bg-primary/90")}>
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Buka menu utama</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg absolute w-full top-20 left-0 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              if (link.subItems) {
                const isExpanded = activeMobileDropdown === link.name;
                const isParentActive = link.subItems.some(sub => pathname === sub.href || pathname.startsWith(sub.href));
                
                return (
                  <div key={link.name} className="border-b border-border/50">
                    <button 
                      onClick={() => toggleMobileDropdown(link.name)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-4 text-base font-medium hover:bg-neutral-50 transition-colors",
                        isParentActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isExpanded && "rotate-180")} />
                    </button>
                    {isExpanded && (
                      <div className="pl-6 pr-3 py-2 space-y-2 border-l-2 border-border ml-3 mt-1 animate-in slide-in-from-top-2 fade-in duration-200">
                        {link.subItems.map(subItem => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActiveMobileDropdown(null);
                            }}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium border-b border-border/50",
                    isActive 
                      ? "text-primary font-bold" 
                      : "text-muted-foreground hover:text-primary hover:bg-neutral-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-6 pb-2 px-3">
              <Link 
                href="/kontak" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(buttonVariants({ size: "lg" }), "w-full bg-primary text-primary-foreground hover:bg-primary/90")}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
