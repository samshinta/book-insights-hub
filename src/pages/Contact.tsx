import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xykkdwyb", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contato | MelhoresPrecos"
        description="Entre em contato conosco com dúvidas, sugestões ou parcerias. Estamos aqui para ajudar!"
        canonicalUrl="/contato"
      />
      <Header />
      
      <main className="flex-1 container py-12 max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Entre em Contato</h1>
        <p className="text-muted-foreground mb-12 text-lg">
          Tem dúvidas, sugestões ou gostaria de uma parceria? Envie-nos uma mensagem e responderemos assim que possível.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Assunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  rows={6}
                  className="w-full"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                  ✓ Mensagem enviada com sucesso! Responderemos em breve.
                </div>
              )}
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@melhoresprecos.shop</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Tempo de Resposta</h3>
              <p className="text-sm text-muted-foreground">
                Recebemos muitas mensagens todos os dias. Tentaremos responder sua mensagem dentro de 24-48 horas úteis.
              </p>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-3">Parcerias</h3>
              <p className="text-sm text-muted-foreground">
                Interessado em uma parceria ou colaboração? Envie-nos um email com detalhes sobre sua proposta.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
