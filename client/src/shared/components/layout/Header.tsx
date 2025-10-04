"use client";

import { useState, useEffect, useRef } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface HeaderProps {
  showFullNav?: boolean;
}

export default function Header({ showFullNav = true }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Zarin Logo" className="w-30" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="font-family-montserrat-regular text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Koleksiyonlar
            </Link>
            {showFullNav && (
              <>
                <button
                  onClick={() => scrollToSection("about")}
                  className="font-family-montserrat-regular text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Hakkımızda
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="font-family-montserrat-regular text-sm text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  İletişim
                </button>
              </>
            )}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 cursor-pointer"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? (
              <CloseOutlined className="text-xl" />
            ) : (
              <MenuOutlined className="text-xl" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="font-family-montserrat-regular text-sm text-gray-700 hover:text-gray-900 transition-colors py-2 cursor-pointer"
              >
                Koleksiyonlar
              </Link>
              {showFullNav && (
                <>
                  <button
                    onClick={() => {
                      scrollToSection("about");
                      setMobileMenuOpen(false);
                    }}
                    className="font-family-montserrat-regular text-sm text-gray-700 hover:text-gray-900 transition-colors py-2 text-left cursor-pointer"
                  >
                    Hakkımızda
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setMobileMenuOpen(false);
                    }}
                    className="font-family-montserrat-regular text-sm text-gray-700 hover:text-gray-900 transition-colors py-2 text-left cursor-pointer"
                  >
                    İletişim
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
