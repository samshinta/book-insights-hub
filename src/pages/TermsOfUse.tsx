import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Termos de Uso | MelhoresPrecos"
        description="Leia os termos e condições de uso do site MelhoresPrecos antes de acessar nossos conteúdos."
        canonicalUrl="/termos-uso"
      />
      <Header />
      
      <main className="flex-1 container py-12 max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-lg text-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o website melhoresprecos.shop, você aceita estar legalmente vinculado por estes Termos de Uso. 
              Se você não concorda com qualquer parte destes termos, por favor, não use este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Uso Licenciado</h2>
            <p>
              É concedida a permissão para visualizar e imprimir páginas do melhoresprecos.shop para uso pessoal, não comercial e privado, 
              desde que você retenha todos os avisos de direitos autorais e proprietários. A reprodução, duplicação, cópia, venda, 
              revenda ou exploração de qualquer parte do site para fins comerciais é estritamente proibida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Isenção de Responsabilidade</h2>
            <p>
              O conteúdo deste website é fornecido "como está" e sem garantias de qualquer tipo. 
              A MelhoresPrecos não garante a precisão, integridade ou utilidade das informações fornecidas.
            </p>
            <p>
              As recomendações de livros e análises são baseadas em nossas pesquisas e opiniões. 
              Cada compra deve ser uma decisão pessoal baseada em suas necessidades e preferências.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Links de Afiliados</h2>
            <p>
              Este website contém links de afiliados para a Amazon. Quando você clica em um desses links e faz uma compra, 
              a MelhoresPrecos recebe uma comissão. Isso não afeta o preço que você paga.
            </p>
            <p>
              Você está ciente de que os preços e disponibilidade de produtos podem mudar. 
              Sempre verifique as informações atuais no site da Amazon antes de fazer sua compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a MelhoresPrecos será responsável por quaisquer danos diretos, indiretos, incidentais, 
              especiais ou consequentes resultantes do uso ou incapacidade de usar o website ou o conteúdo, 
              mesmo que a MelhoresPrecos tenha sido informada da possibilidade de tais danos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do website, incluindo texto, gráficos, logos, imagens e software, é propriedade da MelhoresPrecos 
              ou de seus fornecedores de conteúdo e está protegido por leis internacionais de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Condutas Proibidas</h2>
            <p>Você concorda em não:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usar o site de forma ilegal ou não autorizada</li>
              <li>Violar qualquer lei aplicável</li>
              <li>Fazer scraping ou monitorar dados do site</li>
              <li>Interferir com a segurança ou funcionalidade do site</li>
              <li>Transmitir conteúdo abusivo, obsceno ou ofensivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Modificação dos Termos</h2>
            <p>
              A MelhoresPrecos se reserva o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações serão efetivas imediatamente após a publicação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso serão regidos por e construídos de acordo com as leis do Brasil, 
              e você se submete irrevogavelmente à jurisdição dos tribunais nesse local.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em:
            </p>
            <p className="font-semibold">Email: contato@melhoresprecos.shop</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
