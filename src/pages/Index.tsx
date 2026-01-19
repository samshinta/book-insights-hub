import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { books } from "@/data/books";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Melhores Livros de Desenvolvimento Pessoal | Resumos e Análises 2024"
        description="Descubra os melhores livros de desenvolvimento pessoal com resumos completos, análises detalhadas e melhores frases. Hábitos Atômicos, Mindset, O Poder do Hábito e mais."
        keywords="melhores livros desenvolvimento pessoal, livros que valem a pena, resumo de livros, livros autoajuda, livros produtividade, hábitos atômicos vale a pena, mindset vale a pena"
        canonicalUrl="/"
      />
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid gap-8">
              {books.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
