import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./Icons";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "عني" },
  { href: "#skills", label: "المهارات" },
  { href: "#projects", label: "المشاريع" },
  { href: "#experience", label: "الخبرات" },
  { href: "#contact", label: "تواصل" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-emerald-400">
          محمود<span className="text-white">.dev</span>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-300 hover:text-emerald-400 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-gray-950 border-b border-gray-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-emerald-400 transition block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}