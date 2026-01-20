import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Política de Privacidade | MelhoresPrecos"
        description="Conheça como coletamos, usamos e protegemos seus dados pessoais no MelhoresPrecos."
        canonicalUrl="/politica-privacidade"
      />
      <Header />
      
      <main className="flex-1 container py-12 max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg text-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introdução</h2>
            <p>
              A MelhoresPrecos ("nós", "nosso" ou "nos") opera o site melhoresprecos.shop. Esta página informa você de nossas políticas 
              sobre a coleta, uso e divulgação de dados pessoais quando você usa nosso website e as escolhas que você tem associadas com aqueles dados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Informações Coletadas</h2>
            <p>Podemos coletar as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dados de navegação através de cookies e tecnologias similares</li>
              <li>Endereço de IP</li>
              <li>Tipo de navegador e sistema operacional</li>
              <li>Páginas visitadas e tempo gasto no site</li>
              <li>Informações enviadas através de formulários de contato</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Uso das Informações</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhorar a experiência do usuário no site</li>
              <li>Analisar tendências de uso</li>
              <li>Responder a consultas e solicitações</li>
              <li>Enviar atualizações e comunicações</li>
              <li>Cumprir com obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência. Os cookies são pequenos arquivos armazenados no seu dispositivo 
              que ajudam a personalizar seu acesso ao site. Você pode controlar os cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Links de Afiliados Amazon</h2>
            <p>
              MelhoresPrecos é participante do Programa de Associados da Amazon Services LLC, um programa de publicidade de afiliação 
              projetado para fornecer meios para sites ganharem comissões de publicidade através de links para a Amazon.
            </p>
            <p>
              Como afiliado da Amazon, recebemos comissões em compras qualificadas feitas através dos nossos links. 
              Isso não afeta o preço que você paga.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Segurança</h2>
            <p>
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, 
              alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Direitos do Usuário</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:
            </p>
            <p className="font-semibold">Email: contato@melhoresprecos.shop</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Alterações nesta Política</h2>
            <p>
              Reservamos o direito de atualizar esta Política de Privacidade a qualquer momento. 
              As alterações serão efetivas imediatamente após a publicação no website.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
