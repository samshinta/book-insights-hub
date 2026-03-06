import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { diversos } from "@/data/diversos";

const Diversos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Diversos | MelhoresPrecos"
        description="Confira nossa seleção de produtos diversos com as melhores análises e preços na Amazon."
        keywords="produtos diversos, melhores preços, amazon afiliados"
        canonicalUrl="/diversos"
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-secondary/30 border-b border-border">
          <div className="container text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Produtos Diversos
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Seleção de produtos com análises e os melhores preços na Amazon.
            </p>
          </div>
        </section>

        {/* Listagem */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid gap-8">
              {diversos.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/diversos/${item.id}`}
                  className="card-book group block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.badge && (
                    <span className="badge-bestseller mb-4 inline-block">
                      {item.badge}
                    </span>
                  )}

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-48 md:w-40 md:h-56 bg-secondary rounded-lg overflow-hidden shadow-md mx-auto md:mx-0">
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
                            target.parentElement!.innerHTML = `<span class="font-serif text-center text-sm text-muted-foreground px-2">${item.title}</span>`;
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">por {item.author}</p>
                      <p className="mt-4 text-foreground/80 line-clamp-3">
                        {item.shortDescription}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-primary font-medium">
                        <span>Ver detalhes</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Diversos;
