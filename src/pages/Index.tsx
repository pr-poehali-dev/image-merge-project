import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import InvitationSection from "@/components/InvitationSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const invitationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    if (section === "hero" && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "gallery" && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "invitation" && invitationRef.current) {
      invitationRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollArea className="h-screen w-full">
      <Navbar onScrollToSection={scrollToSection} />
      
      <div ref={heroRef}>
        <Hero onScrollToGallery={scrollToGallery} />
      </div>
      
      <div ref={galleryRef}>
        <GallerySection />
      </div>
      
      <div ref={invitationRef}>
        <InvitationSection />
      </div>
      
      <div ref={contactRef} className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-lg mb-4">
            Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами.
          </p>
          <p className="text-xl font-semibold text-gradual-red">
            выпуск2025@школа.рф
          </p>
        </div>
      </div>
      
      <footer className="py-6 bg-gradual-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© Выпуск 2025. Все права защищены.</p>
        </div>
      </footer>
    </ScrollArea>
  );
};

export default Index;
