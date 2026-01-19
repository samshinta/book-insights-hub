import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AmazonButtonProps {
  href: string;
  className?: string;
}

const AmazonButton = ({ href, className = "" }: AmazonButtonProps) => {
  return (
    <Button
      asChild
      size="lg"
      className={`bg-primary hover:bg-amber-hover text-primary-foreground font-semibold shadow-button transition-all hover:scale-105 ${className}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <span>Comprar na Amazon</span>
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </Button>
  );
};

export default AmazonButton;
