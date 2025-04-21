import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onScrollToGallery: () => void;
}

const Hero = ({ onScrollToGallery }: HeroProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "https://cdn.poehali.dev/files/9ef214cd-b769-4da0-a32e-86977bb9f52f.png",
    "https://cdn.poehali.dev/files/286ae721-6820-44dd-bb01-553970649aff.png",
    "https://cdn.poehali.dev/files/3022b1db-e845-49ec-a383-37a465a75212.png",
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black/20"></div>
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Выпуск ${index + 1}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="mb-2 font-bold text-6xl tracking-tighter text-white drop-shadow-lg">
          ВЫПУСК<span className="text-gradual-red"> 2025</span>
        </h1>
        <p className="max-w-xl text-xl text-white drop-shadow-md">
          Особенный день, особенные воспоминания
        </p>
      </div>

      <button
        onClick={onScrollToGallery}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer rounded-full bg-white/20 p-2 transition-colors hover:bg-white/40"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Hero;
