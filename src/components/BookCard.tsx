import { Link } from "react-router-dom";
import { Book } from "@/data/books";
import { ArrowRight } from "lucide-react";

interface BookCardProps {
  book: Book;
  index: number;
}

const BookCard = ({ book, index }: BookCardProps) => {
  return (
    <Link 
      to={`/livro/${book.id}`}
      className="card-book group block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {book.badge && (
        <span className="badge-bestseller mb-4 inline-block">
          {book.badge}
        </span>
      )}
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-32 h-48 md:w-40 md:h-56 bg-secondary rounded-lg overflow-hidden shadow-md mx-auto md:mx-0">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                target.parentElement!.innerHTML = `<span class="font-serif text-center text-sm text-muted-foreground px-2">${book.title}</span>`;
              }}
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="mt-1 text-muted-foreground">
            por {book.author}
          </p>
          <p className="mt-4 text-foreground/80 line-clamp-3">
            {book.shortDescription}
          </p>
          
          <div className="mt-6 flex items-center gap-2 text-primary font-medium">
            <span>Ver análise completa</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
