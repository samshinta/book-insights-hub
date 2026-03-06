import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteCard from "@/components/QuoteCard";
import AmazonButton from "@/components/AmazonButton";
import SEO from "@/components/SEO";
import { getDiversoById } from "@/data/diversos";

const DiversoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = getDiversoById(id || "");

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO
          title="Produto não encontrado | MelhoresPrecos"
          description="O produto que você procura não foi encontrado."
        />
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl text-foreground mb-4">
              Produto não encontrado
            </h1>
            <Link to="/diversos" className="text-primary hover:underline">
              Voltar para Diversos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const seoTitle = `${item.title} vale a pena? Análise e Preço | MelhoresPrecos`;
  const seoDescription = `${item.title} vale a pena comprar? Confira nossa análise completa e encontre o melhor preço na Amazon.`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={`/diversos/${item.id}`}
        ogType="article"
        author={item.author}
      />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-6">
          <Link
            to="/diversos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Diversos
          </Link>
        </div>

        {/* Header do produto */}
        <section className="container pb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-48 h-72 md:w-56 md:h-80 bg-secondary rounded-xl overflow-hidden shadow-card-hover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add(
                      "flex",
                      "items-center",
                      "justify-center"
                    );
                    target.parentElement!.innerHTML = `<span class="font-serif text-center text-lg text-muted-foreground px-4">${item.title}</span>`;
                  }}
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              {item.badge && (
                <span className="badge-bestseller mb-4 inline-block">{item.badge}</span>
              )}

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                {item.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">Análise completa</p>
              <p className="mt-1 text-foreground/80">
                Por <span className="font-medium">{item.author}</span>
              </p>

              <div className="mt-8">
                <AmazonButton href={item.amazonLink} />
              </div>
            </div>
          </div>
        </section>

        {/* Vale a pena? */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-7 w-7 text-primary" />
                <h2 className="section-title">Vale a pena comprar?</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                {item.worthIt.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <AmazonButton href={item.amazonLink} />
              </div>
            </div>
          </div>
        </section>

        {/* Descrição */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">Descrição do produto</h2>

              <div className="prose prose-lg max-w-none">
                {item.summary.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Frases (se houver) */}
        {item.quotes.length > 0 && (
          <section className="py-12 bg-secondary/30">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8">Destaques</h2>
                <div className="space-y-6">
                  {item.quotes.map((quote, index) => (
                    <QuoteCard
                      key={index}
                      text={quote.text}
                      author={quote.author}
                      book={quote.book}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="py-12 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AmazonButton href={item.amazonLink} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DiversoDetail;
