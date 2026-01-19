import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-medium text-foreground">
              MelhoresPrecos
            </span>
          </Link>
          
          <p className="text-sm text-muted-foreground text-center md:text-right max-w-md">
            Como associado da Amazon, ganho comissões em compras qualificadas. 
            Os links para a Amazon são links de afiliados.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MelhoresPrecos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
