import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: Image[] = [
    {
      src: "https://cdn.poehali.dev/files/3022b1db-e845-49ec-a383-37a465a75212.png",
      alt: "Групповое фото выпускников",
      size: "large",
    },
    {
      src: "https://cdn.poehali.dev/files/286ae721-6820-44dd-bb01-553970649aff.png",
      alt: "Под алыми парусами",
      size: "medium",
    },
    {
      src: "https://cdn.poehali.dev/files/9ef214cd-b769-4da0-a32e-86977bb9f52f.png",
      alt: "Выпуск 2025",
      size: "medium",
    },
    // Другие фотографии из галереи
    {
      src: "https://cdn.poehali.dev/files/5fa11ee6-d5a6-4f4f-b2a6-077b21aac804.png",
      alt: "Коллаж с фотографиями",
      size: "large",
    },
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Фотогалерея <span className="text-gradual-red">выпускников</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02] shadow-md hover:shadow-xl", 
                image.size === "large" && "md:col-span-2",
                image.size === "small" && "aspect-square",
                image.size === "medium" && "aspect-[4/3]",
                image.size === "large" && "aspect-[16/9]"
              )}
              onClick={() => handleImageClick(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">
          <img 
            src={selectedImage || ''} 
            alt="Увеличенное изображение" 
            className="w-full h-auto max-h-[80vh] object-contain" 
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
