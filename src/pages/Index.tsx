import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollGallery } from "@/components/ScrollGallery";

const Index = () => {
  const images = [
    {
      src: "https://cdn.poehali.dev/files/1e2e00ff-6404-4ff0-b061-f0f0f8343b0b.png",
      alt: "Выпуск 2025"
    },
    {
      src: "https://cdn.poehali.dev/files/1e836932-7422-4b53-a920-6feb84123527.png",
      alt: "Под алыми парусами"
    },
    {
      src: "https://cdn.poehali.dev/files/11bbebef-78f1-4085-bfde-e5675ee36bac.png",
      alt: "Фотоколлаж выпускников"
    },
    {
      src: "https://cdn.poehali.dev/files/46f8f5dc-2777-4390-80fc-3367e471a2d1.png",
      alt: "Коллаж выпускников 2025"
    }
  ];

  return (
    <ScrollArea className="h-screen w-full bg-white">
      <ScrollGallery images={images} />
    </ScrollArea>
  );
};

export default Index;
