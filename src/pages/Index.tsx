import { ScrollArea } from "@/components/ui/scroll-area";
import { FilmStripGallery } from "@/components/FilmStripGallery";

const Index = () => {
  const images = [
    {
      src: "https://cdn.poehali.dev/files/c15926cf-59c8-42c4-aad2-c5fadf0b3c63.png",
      alt: "Выпуск 2025"
    },
    {
      src: "https://cdn.poehali.dev/files/c3cf702a-3b6f-46ee-9c96-c50ba0472b85.png",
      alt: "Под алыми парусами"
    },
    {
      src: "https://cdn.poehali.dev/files/44173f14-199d-40d6-91dd-409695d8a0fa.png",
      alt: "Фотоколлаж выпускников"
    },
    {
      src: "https://cdn.poehali.dev/files/ff7a158d-984c-4b0f-8242-ded586586a18.png",
      alt: "Коллаж выпускников 2025"
    }
  ];

  return (
    <ScrollArea className="h-screen w-full bg-black">
      <FilmStripGallery images={images} />
    </ScrollArea>
  );
};

export default Index;
