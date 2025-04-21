import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onScrollToSection: (section: string) => void;
}

const Navbar = ({ onScrollToSection }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${scrolled ? "text-gradual-red" : "text-white"}`}>
              Выпуск 2025
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Главная", section: "hero" },
              { label: "Галерея", section: "gallery" },
              { label: "Приглашение", section: "invitation" },
              { label: "Контакты", section: "contact" },
            ].map((item) => (
              <button
                key={item.section}
                onClick={() => onScrollToSection(item.section)}
                className={`font-medium transition-colors hover:text-gradual-red ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button 
            onClick={() => onScrollToSection("invitation")} 
            className={`${
              scrolled 
                ? "bg-gradual-red text-white hover:bg-red-900" 
                : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            }`}
          >
            Участвовать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
