import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import AmazonButton from "@/components/AmazonButton";
import SEO from "@/components/SEO";
import { getBookById } from "@/data/books";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id || "");

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO
          title="Livro não encontrado | Livros que Transformam"
          description="O livro que você procura não foi encontrado."
        />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl text-foreground mb-4">Livro não encontrado</h1>
            <Link to="/" className="text-primary hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // SEO otimizado para long tail keywords
  const seoTitle = `${book.title} vale a pena? Resumo + Melhores Frases | 2024`;
  const seoDescription = `${book.title} vale a pena comprar? Confira nossa análise completa, resumo detalhado e as melhores frases do livro de ${book.author}. Descubra se esse livro é para você!`;
  const seoKeywords = `${book.title} vale a pena, ${book.title} resumo, ${book.title} melhores frases, ${book.title} análise, ${book.title} resenha, livro ${book.title}, ${book.author} livros, comprar ${book.title}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={`/livro/${book.id}`}
        ogType="article"
        author={book.author}
        bookTitle={book.title}
      />
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para livros
          </Link>
        </div>

        {/* Book Header */}
        <section className="container pb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Book Cover */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-48 h-72 md:w-56 md:h-80 bg-secondary rounded-xl overflow-hidden shadow-card-hover">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                    target.parentElement!.innerHTML = `<span class="font-serif text-center text-lg text-muted-foreground px-4">${book.title}</span>`;
                  }}
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1 text-center lg:text-left">
              {book.badge && (
                <span className="badge-bestseller mb-4 inline-block">
                  {book.badge}
                </span>
              )}
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                {book.title}: Vale a pena?
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Análise completa + Melhores frases
              </p>
              <p className="mt-1 text-foreground/80">
                Por <span className="font-medium">{book.author}</span>
              </p>
              
              <div className="mt-8">
                <AmazonButton href={book.amazonLink} />
              </div>
            </div>
          </div>
        </section>

        {/* Worth It Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-7 w-7 text-primary" />
                <h2 className="section-title">Vale a pena comprar?</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {book.worthIt.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8">
                <AmazonButton href={book.amazonLink} />
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">Resumo do livro</h2>
              
              <div className="prose prose-lg max-w-none">
                {book.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-8">Melhores Frases</h2>
              
              <div className="space-y-6">
                {book.quotes.map((quote, index) => (
                  <QuoteCard
                    key={index}
                    text={quote.text}
                    author={quote.author}
                    book={quote.book}
                  />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <AmazonButton href={book.amazonLink} />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
