import { useEffect, useRef } from "react";

interface ScrollGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export const ScrollGallery = ({ images }: ScrollGalleryProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Эффект появления при скролле для элементов
    const handleScroll = () => {
      if (!galleryRef.current) return;
      
      const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
      
      galleryItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isInView = (
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight
        );
        
        if (isInView) {
          item.classList.add('in-view');
        }
      });
    };
    
    // Начальная проверка видимости
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={galleryRef} className="gallery-container min-h-screen bg-white p-4 md:p-8">
      {/* Заголовок галереи */}
      <div className="text-center mb-12 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-black">
          ВЫПУСК <span className="text-gradual-red">2025</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Фотоальбом выпускников
        </p>
      </div>
      
      {/* Галерея изображений */}
      <div className="gallery-items space-y-24 md:space-y-32 max-w-4xl mx-auto">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-item opacity-0 transform translate-y-10 transition-all duration-1000 ease-out`}
          >
            <div className="overflow-hidden rounded-lg shadow-lg mb-4">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Разделитель между изображениями */}
            {index < images.length - 1 && (
              <div className="flex justify-center py-8">
                <div className="w-24 h-1 bg-gray-200 rounded"></div>
              </div>
            )}
          </div>
        ))}
        
        {/* Финальный элемент */}
        <div className="text-center py-16">
          <p className="text-gradual-red font-medium text-lg">
            В ДОБРЫЙ ПУТЬ, ВЫПУСКНИКИ!
          </p>
        </div>
      </div>
    </div>
  );
};
