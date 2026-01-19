import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import { books } from "@/data/books";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
