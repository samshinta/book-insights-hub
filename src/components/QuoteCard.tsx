import { Quote } from "lucide-react";

interface QuoteCardProps {
  text: string;
  author: string;
  book: string;
}

const QuoteCard = ({ text, author, book }: QuoteCardProps) => {
  return (
    <blockquote className="quote-card">
      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
      <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
        "{text}"
      </p>
      <footer className="mt-4 not-italic">
        <cite className="font-medium text-foreground">{author}</cite>
        <span className="block text-sm text-muted-foreground">em {book}</span>
      </footer>
    </blockquote>
  );
};

export default QuoteCard;
