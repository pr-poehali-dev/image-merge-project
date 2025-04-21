import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InvitationSection = () => {
  return (
    <section id="invitation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradual-red">11А</span> приглашает Вас посетить
            </h2>
            <p className="text-2xl mb-8">последнее школьное плавание</p>
            <p className="text-lg mb-6">
              Приглашаем вас на незабываемый выпускной вечер класса 11А, который пройдет под девизом "Под алыми парусами". Это будет вечер, наполненный воспоминаниями, музыкой и радостными моментами.
            </p>
            <Button className="bg-gradual-red hover:bg-red-900 text-white">
              Подтвердить участие
            </Button>
          </div>
          
          <Card className="md:w-1/2 overflow-hidden border-none shadow-xl">
            <CardContent className="p-0">
              <img 
                src="https://cdn.poehali.dev/files/286ae721-6820-44dd-bb01-553970649aff.png" 
                alt="Под алыми парусами" 
                className="w-full h-auto object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
