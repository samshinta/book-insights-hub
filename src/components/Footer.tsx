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
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MelhoresPrecos. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/politica-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/termos-uso" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Email: contato@melhoresprecos.shop
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
