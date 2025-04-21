import "./App.css";

const App = () => {
  const images = [
    {
      src: "https://cdn.poehali.dev/files/6d601194-cc59-43a4-8711-fbf670654cb9.png",
      alt: "Выпуск 2025"
    },
    {
      src: "https://cdn.poehali.dev/files/abdc0f86-7973-4b24-89eb-7e1ee11a9d71.png",
      alt: "Под алыми парусами"
    },
    {
      src: "https://cdn.poehali.dev/files/7173df42-cb76-40e0-bf01-e9d68fcbfdce.png",
      alt: "Фотоколлаж выпускников"
    },
    {
      src: "https://cdn.poehali.dev/files/14b0b814-575f-4cde-9323-e86cc0e1f016.png",
      alt: "Коллаж выпускников 2025"
    }
  ];

  return (
    <div className="image-scroll">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="full-image"
          />
        </div>
      ))}
    </div>
  );
};

export default App;
