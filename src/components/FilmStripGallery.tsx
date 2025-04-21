import { useEffect, useRef } from "react";

interface FilmStripGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export const FilmStripGallery = ({ images }: FilmStripGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Плавный скролл к следующему изображению при клике
  const handleImageClick = (index: number) => {
    if (!containerRef.current) return;
    
    const imageElements = containerRef.current.querySelectorAll('.film-frame');
    if (index < imageElements.length - 1) {
      imageElements[index + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Добавление эффекта параллакса при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const images = containerRef.current.querySelectorAll('.film-frame');
      
      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Проверяем, видно ли изображение в видимой области
        if (rect.top < viewportHeight && rect.bottom > 0) {
          // Вычисляем прогресс прокрутки для этого изображения (от 0 до 1)
          const progress = 1 - (rect.top / viewportHeight);
          
          // Применяем небольшую анимацию на основе прогресса
          (image as HTMLElement).style.transform = `scale(${0.95 + (progress * 0.05)})`;
          (image as HTMLElement).style.opacity = `${0.7 + (progress * 0.3)}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Вызываем обработчик один раз для инициализации эффектов
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-2 film-strip-container"
    >
      {/* Левая полоса перфорации */}
      <div className="absolute left-2 top-0 bottom-0 w-8 z-10 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={`left-${i}`}
            className="h-4 w-4 bg-black border-2 border-white/70 rounded-full my-8 mx-auto"
          />
        ))}
      </div>
      
      {/* Правая полоса перфорации */}
      <div className="absolute right-2 top-0 bottom-0 w-8 z-10 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={`right-${i}`}
            className="h-4 w-4 bg-black border-2 border-white/70 rounded-full my-8 mx-auto"
          />
        ))}
      </div>
      
      {/* Изображения */}
      <div className="mx-12 space-y-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="film-frame relative mx-auto cursor-pointer transition-all duration-300 hover:scale-[1.02] mb-20"
            onClick={() => handleImageClick(index)}
          >
            <div className="relative border-8 border-black shadow-xl rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              
              {/* Номер кадра */}
              <div className="absolute top-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
                Кадр {index + 1}
              </div>
            </div>

            {/* Разделитель в стиле пленки */}
            <div className="h-10 w-full flex items-center justify-center my-4">
              <div className="w-1/2 h-[1px] bg-white/30" />
            </div>
          </div>
        ))}
        
        {/* Конец пленки */}
        <div className="film-end h-32 flex items-center justify-center">
          <div className="text-gradual-red text-xl font-bold">КОНЕЦ ПЛЕНКИ</div>
        </div>
      </div>
    </div>
  );
};
