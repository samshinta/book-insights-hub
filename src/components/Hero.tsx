import booksImage from "@/assets/books-hero.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={booksImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-tight max-w-4xl mx-auto animate-fade-in">
          Livros que transformam sua vida
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Explore as lições mais profundas e encontre os melhores preços dos títulos que estão moldando o futuro.
        </p>
      </div>
    </section>
  );
};

export default Hero;
