import { ScrollArea } from "@/components/ui/scroll-area";
import { PhotoCarousel } from "@/components/PhotoCarousel";

const Index = () => {
  const images = [
    {
      src: "https://cdn.poehali.dev/files/39d40f40-66d5-4730-b9f7-106c2d826d4d.png",
      alt: "Выпуск 2025"
    },
    {
      src: "https://cdn.poehali.dev/files/b9fd58e8-e55c-45f8-a28c-75b045cb574b.png",
      alt: "Под алыми парусами"
    },
    {
      src: "https://cdn.poehali.dev/files/7feb8edd-b83c-43d6-9a7b-b12d6266d371.png",
      alt: "Фотоколлаж выпускников"
    },
    {
      src: "https://cdn.poehali.dev/files/d5bd4a17-4470-47b4-8857-3168d53f5425.png",
      alt: "Коллаж выпускников 2025"
    }
  ];

  return (
    <ScrollArea className="h-screen w-full">
      <PhotoCarousel images={images} />
    </ScrollArea>
  );
};

export default Index;
