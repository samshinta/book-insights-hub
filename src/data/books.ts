export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  badge?: string;
  shortDescription: string;
  worthIt: string;
  summary: string;
  quotes: {
    text: string;
    author: string;
    book: string;
  }[];
  amazonLink: string;
}
{
    id: "pilha-elgin-aa-2700mah",
    title: "Pilha Recarregável AA 2700mAh Elgin",
    author: "Elgin",
    cover: "https://i.imgur.com/XfeljY5.jpg",
    shortDescription: "Pilha recarregável AA 2700mAh Elgin com 4 unidades. Comum.",
    worthIt: `Pilha recarregável AA 2700mAh Elgin com 4 unidades. Comum.`,
    summary: `Pilha recarregável AA 2700mAh Elgin com 4 unidades. Comum.`,
    quotes: [],
    amazonLink: "https://amzn.to/4d3pbOe",
  },

export const books: Book[] = [
  {
    id: "habitos-atomicos",
    title: "Hábitos Atômicos",
    author: "James Clear",
    cover: "https://i.imgur.com/yDAQkM4.jpg",
    badge: "Best-seller do New York Times",
    shortDescription: "Transforme sua vida com pequenas mudanças que geram resultados extraordinários.",
    worthIt: `Vale a pena comprar Hábitos Atômicos? Sem dúvida. James Clear entrega um manual prático fundamentado em ciência comportamental que foge do clichê da motivação vazia. O grande diferencial da obra é o foco em sistemas em vez de metas: o autor demonstra que você não sobe ao nível dos seus objetivos, mas cai ao nível dos seus sistemas.

Para quem busca produtividade, saúde ou qualquer mudança de comportamento, o livro oferece ferramentas acionáveis, como o design de ambiente e a regra do 1%. Ao aplicar esses conceitos, torna-se mais fácil tornar os bons hábitos inevitáveis e os maus, impossíveis.

É um investimento de alto retorno para profissionais, estudantes e qualquer pessoa que deseje entender como pequenas mudanças, quando acumuladas, geram resultados extraordinários a longo prazo. A leitura é fluida, clara e extremamente aplicável à realidade cotidiana, justificando sua posição como um dos livros de desenvolvimento pessoal mais influentes da última década.`,
    summary: `Em Hábitos Atômicos, James Clear apresenta um método testado para transformar a rotina por meio de mudanças mínimas que geram resultados exponenciais. O autor argumenta que o sucesso é o produto de hábitos diários, agindo como os juros compostos do autoaperfeiçoamento.

A estrutura central do livro baseia-se nas Quatro Leis da Mudança de Comportamento: Tornar Óbvio, Tornar Atraente, Tornar Fácil e Tornar Satisfatório. Clear introduz conceitos revolucionários, como a mudança de identidade, onde o foco deixa de ser o resultado final (o que você quer alcançar) e passa a ser quem você deseja se tornar.

Ele desconstrói a ideia de que a força de vontade é o único motor da mudança, enfatizando o papel crucial do ambiente na moldagem de nossas escolhas. O livro também aborda o Planalto do Potencial Latente, explicando por que muitas vezes não vemos progresso imediato e como a persistência permite romper essa barreira.

Com exemplos práticos, o autor ensina como empilhar hábitos e como reduzir a fricção para comportamentos positivos, oferecendo um guia definitivo para a construção de sistemas que sustentam o crescimento contínuo e a excelência em qualquer área da vida.`,
    quotes: [
      {
        text: "Você não sobe ao nível de suas metas. Você cai ao nível de seus sistemas.",
        author: "James Clear",
        book: "Hábitos Atômicos",
      },
      {
        text: "Os hábitos são os juros compostos do autoaperfeiçoamento.",
        author: "James Clear",
        book: "Hábitos Atômicos",
      },
      {
        text: "Cada ação que você toma é um voto para o tipo de pessoa que você deseja se tornar.",
        author: "James Clear",
        book: "Hábitos Atômicos",
      },
      {
        text: "Se você quer resultados melhores, esqueça as metas. Concentre-se em seu sistema.",
        author: "James Clear",
        book: "Hábitos Atômicos",
      },
      {
        text: "O sucesso é o produto de hábitos diários, não de transformações únicas na vida.",
        author: "James Clear",
        book: "Hábitos Atômicos",
      },
    ],
    amazonLink: "https://www.amazon.com.br/dp/8550807567?tag=samshinta-20",
  },
  {
    id: "o-poder-do-habito",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    cover: "https://imgur.com/9vfD9CE.jpg",
    badge: "Mais de 1 milhão de exemplares vendidos",
    shortDescription: "Por que fazemos o que fazemos na vida e nos negócios.",
    worthIt: `O Poder do Hábito é uma obra essencial para quem deseja compreender os mecanismos por trás de nossos comportamentos automáticos. Charles Duhigg, jornalista investigativo do New York Times, mergulha na ciência dos hábitos com uma narrativa envolvente que combina pesquisa rigorosa e histórias fascinantes.

O livro apresenta o conceito do "loop do hábito" — deixa, rotina e recompensa — e demonstra como essa estrutura pode ser manipulada para criar mudanças duradouras. Vale muito a pena para gestores, empreendedores e qualquer pessoa interessada em entender como organizações e indivíduos podem se transformar.`,
    summary: `Charles Duhigg explora em O Poder do Hábito como os hábitos funcionam em três níveis: individual, organizacional e social. A obra é dividida em três partes que examinam respectivamente cada um desses níveis.

Na primeira parte, o autor apresenta o loop do hábito e explica como hábitos são formados no cérebro. Histórias como a de Eugene Pauly, um homem que perdeu a memória mas manteve seus hábitos intactos, ilustram o poder dessas rotinas automáticas.

A segunda parte examina como empresas como a Target e o Starbucks utilizam a ciência dos hábitos para transformar suas operações e cultura. O autor revela estratégias práticas para identificar e modificar hábitos-chave que podem desencadear mudanças em cascata.`,
    quotes: [
      {
        text: "Os hábitos são a base invisível da vida cotidiana.",
        author: "Charles Duhigg",
        book: "O Poder do Hábito",
      },
      {
        text: "A mudança pode não ser rápida e nem sempre é fácil. Mas com tempo e esforço, quase qualquer hábito pode ser remodelado.",
        author: "Charles Duhigg",
        book: "O Poder do Hábito",
      },
      {
        text: "Os hábitos-chave dizem que o sucesso não depende de acertar cada pequena coisa, mas de identificar algumas prioridades-chave.",
        author: "Charles Duhigg",
        book: "O Poder do Hábito",
      },
    ],
    amazonLink: "https://www.amazon.com.br/dp/8539004119?tag=samshinta-20",
  },
  {
    id: "mindset",
    title: "Mindset: A Nova Psicologia do Sucesso",
    author: "Carol S. Dweck",
    cover: "https://imgur.com/bTE9rIJ.jpg",
    badge: "Clássico da Psicologia",
    shortDescription: "Descubra como a mentalidade certa pode transformar sua vida.",
    worthIt: `Mindset é uma leitura transformadora que muda a forma como você enxerga desafios, fracassos e o próprio potencial. Carol Dweck, professora de Stanford e uma das maiores referências em psicologia motivacional, apresenta décadas de pesquisa de forma acessível e prática.

O conceito central — mentalidade fixa versus mentalidade de crescimento — é simples, mas profundamente impactante. Para pais, educadores, líderes e qualquer pessoa buscando desenvolvimento pessoal, este livro é um investimento que vale cada centavo.`,
    summary: `Em Mindset, Carol Dweck distingue dois tipos fundamentais de mentalidade: a fixa e a de crescimento. Pessoas com mentalidade fixa acreditam que suas qualidades são imutáveis, enquanto aquelas com mentalidade de crescimento entendem que podem desenvolver suas habilidades através de dedicação e esforço.

A autora demonstra como essas mentalidades afetam todas as áreas da vida — relacionamentos, carreira, esportes e educação. Através de estudos científicos e exemplos do mundo real, Dweck mostra como cultivar uma mentalidade de crescimento pode liberar nosso potencial e nos tornar mais resilientes diante das adversidades.`,
    quotes: [
      {
        text: "Na mentalidade de crescimento, o fracasso pode ser uma experiência dolorosa. Mas não o define. É um problema a ser enfrentado, confrontado e com o qual aprender.",
        author: "Carol S. Dweck",
        book: "Mindset",
      },
      {
        text: "O ponto de vista que você adota para si mesmo afeta profundamente a maneira como você leva sua vida.",
        author: "Carol S. Dweck",
        book: "Mindset",
      },
    ],
    amazonLink: "https://www.amazon.com.br/dp/8547000240?tag=samshinta-20",
  },
  {
    id: "comunicacao-nao-violenta",
    title: "Comunicação Não-Violenta",
    author: "Marshall B. Rosenberg",
    cover: "https://i.imgur.com/Ewdoy7l.jpg",
    badge: "Mais de 5 milhões de exemplares vendidos no mundo",
    shortDescription: "Um método prático para melhorar relacionamentos, resolver conflitos e se comunicar com empatia.",
    worthIt: `Comunicação Não-Violenta é um livro fundamental para quem deseja se expressar com clareza sem gerar conflitos desnecessários. Marshall Rosenberg apresenta um método simples e aplicável para melhorar conversas difíceis, fortalecer relações pessoais e profissionais e lidar melhor com emoções intensas.

O grande mérito da obra está na forma prática como o autor transforma conceitos de empatia e escuta ativa em ferramentas concretas. É uma leitura especialmente valiosa para líderes, educadores, pais, profissionais de saúde e qualquer pessoa que queira se comunicar de forma mais consciente e respeitosa.`,
    summary: `No livro Comunicação Não-Violenta, Marshall Rosenberg propõe um modelo baseado em quatro pilares: observação, sentimento, necessidade e pedido. A ideia central é separar fatos de julgamentos e aprender a expressar emoções e necessidades sem acusar ou atacar o outro.

Ao longo da obra, o autor utiliza exemplos do cotidiano, situações de conflito familiar, ambientes de trabalho e até contextos sociais mais amplos para mostrar como a comunicação pode se tornar uma ponte em vez de um obstáculo. O livro também aborda a importância da escuta empática como ferramenta para criar conexões genuínas e resolver impasses de forma construtiva.`,
    quotes: [
      {
        text: "As palavras podem ser janelas ou muros.",
        author: "Marshall B. Rosenberg",
        book: "Comunicação Não-Violenta",
      },
      {
        text: "O que os outros dizem e fazem pode ser o estímulo, mas nunca a causa de nossos sentimentos.",
        author: "Marshall B. Rosenberg",
        book: "Comunicação Não-Violenta",
      },
      {
        text: "Quando ouvimos com empatia, damos ao outro espaço para se transformar.",
        author: "Marshall B. Rosenberg",
        book: "Comunicação Não-Violenta",
      },
    ],
    amazonLink: "https://www.amazon.com.br/dp/8571838265?tag=samshinta-20",
  },
  {
    id: "cafe-com-deus-pai",
    title: "Café com Deus Pai Vol. 6 - 2026",
    author: "Júnior Rostirola",
    cover: "https://i.imgur.com/mh1bIQ4.jpg",
    shortDescription: `Resenha de "Café com Deus Pai Vol. 6 - 2026": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**Vale a pena comprar o *Café com Deus Pai Vol. 6 - 2026*?**

Sim, o *Café com Deus Pai Vol. 6 - 2026* de Júnior Rostirola vale cada centavo se você busca um devocional diário simples e transformador para fortalecer sua fé no dia a dia. Esse livro não é só mais um título espiritual; é um companheiro prático para 2026, com reflexões curtas que cabem na rotina corrida, ajudando a enfrentar desafios como trânsito, trabalho ou momentos de dúvida com uma dose diária de esperança e intimidade com Deus.[1][2][3]

Ele é ideal para cristãos evangélicos que querem renovar a mente, quem precisa de uma virada espiritual ou simplesmente um guia acessível para devocionais matinais com um café na mão. Os **principais benefícios práticos** incluem mensagens ancoradas em versículos bíblicos que promovem fé prática, coragem e transformação pessoal, tornando-o perfeito para famílias, iniciantes na fé ou quem busca consolo diário sem complicações.[2]

Invista no *Café com Deus Pai Vol. 6 - 2026* e transforme 2026 em um ano de encontros reais com Deus Pai – é acessível, inspirador e com design bonito para presentear ou usar todo dia.[1][2]`,
    summary: `**Resumo do *Café com Deus Pai Vol. 6 - 2026***

O livro apresenta devocionais diários para todo o ano de 2026, convidando o leitor a momentos íntimos com Deus Pai, como um café reconfortante que adoça a vida cotidiana. Júnior Rostirola explora temas centrais como fé prática, esperança, transformação pessoal e priorização da Palavra de Deus no coração, usando anedotas do dia a dia, exemplos cotidianos e versículos bíblicos para ilustrar princípios espirituais de forma acessível e motivadora.[1][2][3]

A estrutura é organizada em 365 reflexões curtas e intensas, com uma abordagem pedagógica e empática do autor, que se posiciona como um companheiro de jornada, compartilhando experiências reais para ancorar abstrações teológicas. O leitor aprenderá a cultivar intimidade com Deus, semear amor em meio a espinhos como o ódio, tornar-se 'boa terra' para a fé frutificar e viver uma renovação diária que impacta família, sociedade e reino de Deus.[1][2][3]`,
    quotes: [
      {
        text: `Confie em Deus até nas segundas-feiras.`,
        author: `Júnior Rostirola`,
        book: `Café com Deus Pai Vol. 6 - 2026`,
      },
      {
        text: `Não permita que o espinho do ódio sufoque a semente do amor.`,
        author: `Júnior Rostirola`,
        book: `Café com Deus Pai Vol. 6 - 2026`,
      },
    ],
    amazonLink: "https://amzn.to/49ccQDM",
  },
  {
    id: "a-psicologia-financeira",
    title: "A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade",
    author: "Morgan Housel",
    cover: "https://i.imgur.com/bC7VV6q.jpg",
    shortDescription: `Resenha de "A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**Sim, definitivamente vale a pena.** *A Psicologia Financeira* de Morgan Housel é um investimento inteligente se você quer transformar sua relação com dinheiro de forma prática e duradoura. O livro foi publicado em 2020 e se tornou um best-seller internacional, traduzido para diversos idiomas e amplamente recomendado por especialistas em finanças comportamentais[2]. Diferentemente de manuais técnicos recheados de fórmulas, a obra oferece algo muito mais valioso: uma mudança de mentalidade que impacta decisões reais do dia a dia.

O livro é indicado para qualquer pessoa que deseja tomar decisões financeiras mais conscientes e inteligentes, seja você iniciante ou experiente em finanças[2]. Especialmente se você já tentou seguir estratégias perfeitas "no papel" mas não conseguiu manter a disciplina, este livro é para você. Housel demonstra que **comportamento é mais importante que inteligência** quando o assunto é dinheiro[2] — um gênio que não controla emoções pode ser um desastre financeiro, enquanto pessoas comuns com habilidades comportamentais conquistam sucesso extraordinário.

Os principais benefícios práticos incluem: entender por que suas decisões financeiras nem sempre são lógicas (e está tudo bem); aprender que **guardar dinheiro é mais importante que quanto você ganha**[2]; reconhecer que riqueza real é o que você ainda tem, não o que você comprou; e desenvolver uma margem de segurança emocional e financeira que o protege de decisões impulsivas. A obra cumpre de forma eficaz sua função formativa ao provocar uma transformação silenciosa mas profunda em suas crenças e hábitos[1].`,
    summary: `*A Psicologia Financeira: Lições Atemporais sobre Fortuna, Ganância e Felicidade* apresenta 20 lições valiosas que mostram como nossas emoções, experiências e crenças moldam nossas decisões com dinheiro muito mais do que fórmulas matemáticas[2]. Morgan Housel evita deliberadamente tecnicismos, priorizando uma abordagem centrada no comportamento humano[1]. O autor explora como fatores psicológicos — medo, ganância, orgulho e comparação social — atuam como forças silenciosas porém influentes nas nossas escolhas financeiras. A obra destaca que ninguém é irracional: cada pessoa faz o melhor que consegue com base em sua história, experiências e modelo mental[2]. Housel também reconhece o papel crucial do acaso nas trajetórias financeiras, ilustrando como coincidências improváveis podem alterar vidas — como no caso de Bill Gates, que teve acesso raro a um computador na adolescência[1].

O livro está organizado em capítulos breves e independentes, facilitando a assimilação e estimulando a leitura contínua[1]. A estrutura fragmentada funciona como uma introdução eficaz ao universo das finanças pessoais, sem exigir conhecimento prévio[1]. Ao longo da obra, Housel desenvolve conceitos fundamentais como a importância da poupança, a verdadeira natureza da riqueza invisível, e como a flexibilidade para adaptar objetivos é um sinal de maturidade financeira[2]. O que se oferece não é técnica complexa, mas clareza de princípios: liberdade, responsabilidade, ética e respeito à propriedade privada são tratados como fundamentos naturais de uma vida financeira equilibrada[1].`,
    quotes: [
      {
        text: `Consumo mostra o que você comprou. Riqueza é o que você ainda tem.`,
        author: `Morgan Housel`,
        book: `A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade`,
      },
      {
        text: `Se o futuro for igual ao passado, ou até melhor, a margem de segurança vai te surpreender positivamente. Mas se for pior — e pode ser — ela vai te salvar.`,
        author: `Morgan Housel`,
        book: `A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade`,
      },
    ],
    amazonLink: "https://amzn.to/45uVilk",
  },
  {
    id: "coisa-de-rico",
    title: "Coisa de rico: A vida dos endinheirados brasileiros",
    author: "Michel Alcoforado",
    cover: "https://i.imgur.com/01tRp7d.jpg",
    shortDescription: `Resenha de "Coisa de rico: A vida dos endinheirados brasileiros": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**Sim, 'Coisa de Rico: A vida dos endinheirados brasileiros' vale cada centavo investido, especialmente se você quer entender as engrenagens sociais que movem o Brasil além do dinheiro no banco.**

Michel Alcoforado entrega uma análise afiada e divertida de como os ricos brasileiros constroem sua identidade, misturando antropologia acessível com histórias reais que grudam na mente. Não é um manual de enriquecimento rápido, mas um espelho crítico da elite que revela códigos sociais, hábitos de consumo e batalhas simbólicas – perfeito para empreendedores, profissionais de marketing ou qualquer um curioso sobre poder e distinção no país. Com cerca de 240 páginas que se leem como uma boa fofoca acadêmica, o livro oferece valor prático ao ajudar você a navegar redes de influência e evitar gafes que marcam os 'novos ricos'.[1][2][3]

**Indicado para quem busca insights sobre elites brasileiras, ele destaca benefícios como compreender a mentalidade dos endinheirados, identificar padrões de distinção social e refletir sobre desigualdades enraizadas.** Se você lida com clientes high-end, estuda sociedade ou simplesmente quer decifrar o 'jeito rico de ser', esse livro é um investimento inteligente que transforma curiosidade em vantagem competitiva.[2][3]`,
    summary: `**'Coisa de Rico: A vida dos endinheirados brasileiros' mergulha na tese central de Michel Alcoforado: no Brasil, ser rico não é só ter dinheiro, mas uma relação simbólica constante com os outros, especialmente em cidades como Rio e São Paulo.** O autor explora códigos sociais, modos de consumo, hábitos culturais e distinções entre 'ricos de berço' e 'novos ricos', usando narrativas vivas de mansões, restaurantes chiques e viagens aos Alpes. Ele revela como as elites travam uma 'guerra pela diferença', convencendo a si mesmas e aos de fora de sua superioridade, com toques de humor e crítica às raízes escravocratas da riqueza brasileira.[1][2][3][4]

**A estrutura mescla crônica literária, ensaio acadêmico e análise antropológica, baseada em quatro anos de pesquisa aprovada por banca doctoral, tornando uma tese densa em leitura leve e envolvente.** O leitor aprende as regras do jogo das elites – do casal da Barra da Tijuca comprando grifes em Miami à herdeira discreta na Suíça –, ganhando lições sobre instabilidade do status, invisibilidade racial na riqueza e como o 'padrão de vida' define posições hierárquicas na sociedade brasileira.[1][3][5]`,
    quotes: [
      {
        text: `No Brasil, ser rico não é uma condição, é uma relação.`,
        author: `Michel Alcoforado`,
        book: `Coisa de rico: A vida dos endinheirados brasileiros`,
      },
      {
        text: `Para se inventarem, os ricos precisam entrar armados numa dura batalha simbólica para convencer os outros e os seus de quem são.`,
        author: `Michel Alcoforado`,
        book: `Coisa de rico: A vida dos endinheirados brasileiros`,
      },
    ],
    amazonLink: "https://amzn.to/3Yc8M1w",
  },
  {
    id: "a-hora-da-estrela",
    title: "A hora da estrela: Edição comemorativa",
    author: "Clarice Lispector",
    cover: "https://i.imgur.com/BYFx8R7.jpg",
    shortDescription: `Resenha de "A hora da estrela: Edição comemorativa": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**A Hora da Estrela: Edição Comemorativa** vale muito a pena para quem busca uma leitura profunda e transformadora em pouco tempo. Com apenas 88 páginas[1], o livro oferece densidade existencial sem pesar na bagagem – perfeito para iniciantes em Clarice Lispector ou para quem quer presentear alguém com uma obra "curto e profundo"[1]. A obra final da autora consegue equilibrar simplicidade narrativa com simbolismo, poesia e reflexões existenciais que ecoam muito tempo depois do fim da leitura[1].

O livro é indicado especialmente para leitores que apreciam **crítica social engajada** e aprofundamento psicológico[4]. Se você busca compreender questões de marginalização, invisibilidade social e o valor da vida humana através de uma narrativa impactante, esta é uma escolha certeira[2]. Os benefícios práticos incluem: ampliar sua compreensão sobre literatura brasileira, adquirir novos repertórios filosóficos sobre existência, e vivenciar uma experiência de leitura que desafia convenções narrativas através da metalinguagem[1][2].

Apesar da linguagem densa e introspectiva[2], a edição comemorativa torna-se um investimento inteligente não apenas pela qualidade literária, mas pelo impacto emocional garantido – um final trágico que funciona como "um soco no estômago"[1] e deixa o leitor refletindo sobre justiça social e o destino dos invisíveis.`,
    summary: `**A Hora da Estrela** narra a história de Macabéa, uma jovem nordestina pobre e alienada que vive no Rio de Janeiro[2]. O narrador Rodrigo S.M., um escritor fictício que funciona como alter-ego de Clarice, conta sua história enquanto reflete constantemente sobre o ato de narrar, criando um jogo fascinante entre autor, narrador e leitor[1][3]. A obra explora temas de invisibilidade social, marginalização, solidão e a busca pelo significado da vida, usando linguagem densa repleta de simbolismo e poesia[2][5]. A estrutura emprega metalinguagem em destaque, quebrando a "quarta parede literária" e criando ambiguidade através da relação contraditória do narrador com sua personagem[3].

O que o leitor vai aprender é como Clarice projeta suas angústias filosóficas através de um aprofundamento psicológico único[4]. A narrativa segue Macabéa em suas dificuldades profissionais, amorosas e afetivas, culminando em um final irônico e trágico: ela é atropelada por um Mercedes Benz amarelo logo após consultar a cartomante Madame Carlota[4]. É justamente neste momento de morte que ocorre sua "hora da estrela", quando finalmente todos a enxergam e ela se sente importante[4] – uma crítica profunda sobre como o sistema nunca oferece finais felizes para pessoas como Macabéa[1].`,
    quotes: [
      {
        text: `Há os que têm. E há os que não têm. É muito simples: a moça não tinha.`,
        author: `Clarice Lispector`,
        book: `A hora da estrela: Edição comemorativa`,
      },
      {
        text: `Só eu a vejo encantadora. Só eu, seu autor, a amo. Sofro por ela.`,
        author: `Clarice Lispector`,
        book: `A hora da estrela: Edição comemorativa`,
      },
    ],
    amazonLink: "https://amzn.to/4qsowt4",
  },
  {
    id: "a-empregada",
    title: "A empregada (A empregada – Livro 1): Bem-vinda à família",
    author: "Freida McFadden",
    cover: "https://i.imgur.com/2PMtHUV.jpg",
    shortDescription: `Resenha de "A empregada (A empregada – Livro 1): Bem-vinda à família": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**"A Empregada: Bem-vinda à Família"** de Freida McFadden vale muito a pena para quem busca um thriller psicológico envolvente e difícil de largar[1]. O livro é indicado para leitores que gostam de narrativas com reviravoltas intensas, personagens complexos e aquela tensão que te faz questionar tudo ao seu redor[4]. Com 304 páginas e um ritmo viciante, é perfeito para quem quer se desconectar da rotina com uma história que prende do início ao fim[1].

O principal benefício prático do livro está em como ele explora dinâmicas humanas complexas — manipulação psicológica, relacionamentos tóxicos e segredos familiares[4]. Freida McFadden estrutura a narrativa de forma genial: a primeira parte mostra a perspectiva de Millie, a empregada, e a segunda revela a visão de Nina, a patroa, criando uma experiência de leitura onde você constantemente reconsidera tudo que pensava saber[2][3]. Para o preço, o investimento em um thriller de qualidade que oferece entretenimento genuíno e reflexão sobre relacionamentos humanos é altamente recomendado.`,
    summary: `"A Empregada: Bem-vinda à Família" acompanha Millie, uma mulher com um passado sombrio que acaba de sair da prisão e consegue um trabalho como empregada doméstica na mansão dos Winchester[1][3]. Seu trabalho é cuidar da casa, da filha Cecelia e viver em um minúsculo sótão, mas logo Millie percebe que a patroa, Nina, possui uma personalidade instável e manipuladora — sujando a casa de propósito, contando mentiras perturbadoras e exercendo tortura psicológica sobre o marido Andrew[1][2]. Conforme a trama avança, Millie desenvolve sentimentos pelos membros da família enquanto tenta esconder seu próprio passado, criando um ambiente sufocante repleto de paranoia e dinâmicas tóxicas[4].

A estrutura narrativa do livro é a grande força de Freida McFadden: a primeira metade é narrada por Millie, oferecendo sua perspectiva como empregada, e a segunda metade passa para a visão de Nina, revelando motivações e segredos que mudam completamente a forma como o leitor compreende os eventos anteriores[3]. O autor constrói uma tensão crescente através de pequenos gestos, regras bizarras e revelações estratégicas que mantêm o leitor em constante vigilância, questionando quem realmente é a vítima e quem é o vilão nesta história de ambição, manipulação e desejos reprimidos[4].`,
    quotes: [
      {
        text: `Às vezes parece que Nina tem dupla personalidade. Ela vai de oito a oitenta muito depressa.`,
        author: `Freida McFadden`,
        book: `A empregada (A empregada – Livro 1): Bem-vinda à família`,
      },
      {
        text: `Homens são um terreno em que ainda estou aprendendo a transitar na minha vida pós-cadeia. E, por "aprendendo", é claro que quero dizer que estou evitando o assunto por completo.`,
        author: `Freida McFadden`,
        book: `A empregada (A empregada – Livro 1): Bem-vinda à família`,
      },
    ],
    amazonLink: "https://amzn.to/44MrbFV",
  },
  {
    id: "o-homem-mais-rico-da-babilonia",
    title: "O Homem Mais Rico da Babilônia",
    author: "George S. Clason",
    cover: "https://i.imgur.com/SwVSeru.jpg",
    shortDescription: `Resenha de "O Homem Mais Rico da Babilônia": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**O Homem Mais Rico da Babilônia é um investimento que realmente compensa**, especialmente se você está começando sua jornada de educação financeira. Com mais de dois milhões de exemplares vendidos no mundo todo[2], o livro se tornou um clássico porque seus princípios funcionam na prática. O grande diferencial é que Clason não complica: ele usa parábolas simples ambientadas na Babilônia antiga para ensinar lições que continuam relevantes até hoje. Se você ganha um bom dinheiro mas nunca consegue acumular riqueza, este livro vai fazer você entender por quê.

O livro é especialmente indicado para quem quer sair do ciclo de ganhar e gastar sem deixar nada guardado[1]. Se você tem dívidas, quer aprender a investir, ou simplesmente deseja melhorar seu relacionamento com dinheiro, vai encontrar respostas práticas aqui. Os benefícios são concretos: você aprenderá como economizar de verdade, como evitar desperdiçar recursos, como buscar conhecimento financeiro ao invés de apenas perseguir lucro rápido, e como lidar com dívidas de forma inteligente[1].

O melhor é que não é um livro pesado ou teórico. A leitura é rápida, as histórias são envolventes, e você consegue aplicar os aprendizados imediatamente na sua vida[1]. Se você quer um guia prático e acessível para começar a construir riqueza de verdade, este é o livro certo.`,
    summary: `O Homem Mais Rico da Babilônia segue a história de Bansir, um construtor de carruagens que, apesar de ganhar bem, nunca consegue ficar realmente rico[3]. Inconformado, ele e seus amigos procuram Arkad, o homem mais rico da cidade e amigo de infância, para aprender seus segredos. Arkad se oferece para transmitir o conhecimento que recebeu de Algamish, conhecimentos estes que o transformaram no homem mais próspero da Babilônia[1]. O livro é estruturado em 29 parábolas curtas que apresentam diferentes personagens e situações financeiras[8], cada uma trazendo uma lição essencial sobre como acumular e preservar riqueza.

A abordagem de George S. Clason é baseada nas práticas de sucesso dos antigos babilônicos[2], mostrando que as leis que regiam o dinheiro há 6 mil anos seguem as mesmas atualmente. Através das histórias, o leitor aprende princípios fundamentais: como economizar uma parte do que ganha, como investir sabiamente, como evitar dívidas escravizadoras, a importância do trabalho e da educação contínua, e como construir uma mentalidade de abundância[1]. O livro reforça valores como disciplina, ação e respeito ao dinheiro, deixando claro que a riqueza não é sorte, mas resultado de decisões conscientes e consistentes ao longo do tempo.`,
    quotes: [
      {
        text: `Na força de seus próprios desejos acha-se um poder mágico. Guie esse poder com o seu conhecimento das cinco leis de ouro e assim poderão compartilhar os tesouros da Babilônia.`,
        author: `George S. Clason`,
        book: `O Homem Mais Rico da Babilônia`,
      },
      {
        text: `Os homens de ação são favorecidos pela deusa da boa sorte.`,
        author: `George S. Clason`,
        book: `O Homem Mais Rico da Babilônia`,
      },
    ],
    amazonLink: "https://amzn.to/45J5syS",
  },
  {
    id: "pai-rico-pai-pobre",
    title: "Pai Rico, Pai Pobre",
    author: "Robert T. Kiyosaki",
    cover: "https://imgur.com/SGsNa1o.jpg",
    shortDescription: `Resenha de "Pai Rico, Pai Pobre": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**Sim, 'Pai Rico, Pai Pobre' vale cada centavo investido!** É um clássico da educação financeira que transforma sua visão sobre dinheiro de forma simples e impactante, ajudando você a sair da 'Corrida dos Ratos' e construir riqueza real.[1][2]

Indicado para quem está cansado de viver de salário em salário, jovens profissionais, empreendedores iniciantes ou qualquer pessoa que quer aprender a fazer o dinheiro trabalhar por si. Não é para quem busca fórmulas mágicas de enriquecimento rápido, mas para quem está disposto a mudar o **mindset financeiro**.[1][5]

Os benefícios práticos são enormes: você aprende a diferença entre **ativos e passivos**, como investir inteligentemente, evitar dívidas ruins e focar no fluxo de caixa. Após ler, muitos leitores relatam tomar decisões mais assertivas nas finanças pessoais, aumentando patrimônio e reduzindo estresse com dinheiro.[2][4]`,
    summary: `**'Pai Rico, Pai Pobre' conta a história real de Robert T. Kiyosaki, que cresceu com dois pais influentes: o 'Pai Pobre', seu pai biológico, altamente educado mas sempre endividado, e o 'Pai Rico', pai de seu amigo Mike, um empreendedor que priorizava educação financeira e investimentos. O livro contrasta as mentalidades: o Pai Pobre defendia empregos estáveis e poupança, enquanto o Pai Rico ensinava a adquirir ativos que geram renda passiva, criticando a 'Corrida dos Ratos' onde renda trabalhada é gasta em passivos.[1][2][3]**

**A estrutura é narrativa e acessível, com lições práticas como 'o dinheiro trabalha para você', importância de alfabetização financeira ausente nas escolas, e conceitos como fluxo de caixa, impostos que punem a classe média, e mindset de abundância ('como posso comprar?' em vez de 'não dá'). O leitor aprende a diferenciar ativos (que colocam dinheiro no bolso) de passivos (que tiram), a persistir no aprendizado e a fugir da armadilha emocional de trabalhar pelo dinheiro.[4][6][7]**`,
    quotes: [
      {
        text: `A falta de dinheiro é a raiz de todo o mal.`,
        author: `Robert T. Kiyosaki (Pai Rico)`,
        book: `Pai Rico, Pai Pobre`,
      },
      {
        text: `Os ricos adquirem ativos primeiro. Os pobres e a classe média adquirem passivos que eles pensam serem ativos.`,
        author: `Robert T. Kiyosaki`,
        book: `Pai Rico, Pai Pobre`,
      },
    ],
    amazonLink: "https://amzn.to/3LoLp1V",
  },
  {
    id: "os-segredos-da-mente-milionaria",
    title: "Os Segredos da Mente Milionária",
    author: "T. Harv Eker",
    cover: "https://i.imgur.com/FATyYfN.jpg",
    shortDescription: `Resenha de "Os Segredos da Mente Milionária": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**Sim, 'Os Segredos da Mente Milionária' de T. Harv Eker vale cada centavo investido!** É um livro transformador que vai além de dicas financeiras superficiais, focando na **reprogramação da sua mente para atrair riqueza**. Com mais de 1,2 milhão de cópias vendidas no Brasil, ele entrega valor prático imediato, ajudando você a identificar crenças limitantes sobre dinheiro herdadas da infância e substituí-las por uma **mentalidade milionária**.[1][3]

Indicado para quem está cansado de viver no cheque a cheque, empreendedores iniciantes ou qualquer pessoa que quer **controlar suas finanças** em vez de ser controlada por elas. Não importa seu nível de educação ou renda atual – o autor prova que riqueza é questão de mindset, não de sorte ou inteligência.[4] Os benefícios incluem aprender a administrar dinheiro eficientemente, aumentar seu patrimônio líquido e evitar sabotagens emocionais, como gastos excessivos por insatisfação.[1][2]

Se você busca resultados reais, como Eker que saiu do fracasso para o sucesso após mudar seu 'modelo de dinheiro', esse é o investimento que paga dividendos vitalícios.[3]`,
    summary: `**'Os Segredos da Mente Milionária' revela que sua relação com o dinheiro é programada desde a infância por crenças limitantes, como 'dinheiro é sujo' ou 'ricos são gananciosos', que sabotam o sucesso financeiro.** T. Harv Eker compartilha sua jornada de fracassos empresariais até a virada ao adotar os 'arquivos de riqueza': 17 maneiras de pensar e agir como os ricos, como controlar o dinheiro em vez de ser controlado por ele, priorizar hábitos financeiros sobre a quantidade de renda e motivar-se por crescimento pessoal, não por medo.[1][4]

**O livro é estruturado em partes práticas: primeiro, testa seu 'modelo de dinheiro' com perguntas reveladoras; depois, apresenta os arquivos de riqueza com declarações para repetir diariamente, como 'Eu controlo meu dinheiro'.** A abordagem é direta e acionável, ensinando a multiplicar patrimônio, remunerar-se por resultados (não horas) e crescer além dos problemas. Você aprenderá a manifestar riqueza via pensamentos → sentimentos → ações → resultados, eliminando autossabotagem para uma vida próspera.[1][2][4]`,
    quotes: [
      {
        text: `Ou você controla o seu dinheiro ou ele controlará você.`,
        author: `T. Harv Eker`,
        book: `Os Segredos da Mente Milionária`,
      },
      {
        text: `A sua programação conduz aos seus pensamentos; os seus pensamentos conduzem aos seus sentimentos; os seus sentimentos conduzem às suas ações; as suas ações conduzem aos seus resultados.`,
        author: `T. Harv Eker`,
        book: `Os Segredos da Mente Milionária`,
      },
    ],
    amazonLink: "https://amzn.to/4pw6sh1",
  },
  {
    id: "mais-esperto-que-o-diabo",
    title: "Mais Esperto que o Diabo",
    author: "Napoleon Hill",
    cover: "https://i.imgur.com/4csvkhS.jpg",
    shortDescription: `Resenha de "Mais Esperto que o Diabo": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**Mais Esperto que o Diabo** vale muito a pena, especialmente se você busca desenvolvimento pessoal com uma abordagem prática e filosófica[1]. O livro é indicado para quem deseja compreender como o medo e os pensamentos negativos bloqueiam o sucesso, e quer aprender ferramentas concretas para superar esses obstáculos[2]. Os principais benefícios práticos incluem: compreensão profunda sobre controle mental, técnicas para vencer a procrastinação e o conformismo, e desenvolvimento de uma mentalidade forte capaz de resistir à alienação[1][4].

O investimento é justificado pela atemporalidade das lições de Hill[1][5]. Diferentemente de muitos livros de autoajuda, este oferece insights aplicáveis a múltiplas áreas da vida, desde relacionamentos até objetivos profissionais[1]. A estrutura em formato de entrevista torna a leitura fluida e envolvente, com letras grandes e excelente diagramação que facilitam o acompanhamento[2].

Recomendamos este livro para empreendedores, profissionais em transição de carreira e qualquer pessoa que sinta que o medo está impedindo seu progresso[1][2]. É uma leitura que funciona como manual prático para transformação pessoal, não apenas teoria abstrata.`,
    summary: `**Mais Esperto que o Diabo** é estruturado como uma entrevista fictícia entre Napoleon Hill e o Diabo[1][7], onde o autor questiona o personagem diabólico para desvendar os segredos de como ele mantém as pessoas na mediocridade[2]. Através dessa conversa metafórica, Hill revela que o medo é a principal ferramenta usada para nos manter prisioneiros, enquanto destaca o poder colossal dos nossos pensamentos na construção de nossa realidade[1][2]. O livro mostra que o sucesso vem da autodisciplina, educação contínua e, principalmente, do despertar da consciência para pensar por si próprio, libertando-se da influência negativa[2].

O leitor aprenderá como transformar o medo em aliado, desenvolvendo controle emocional e uma mentalidade forte capaz de resistir ao conformismo[1][4]. Hill também aborda a importância de ter um propósito bem definido e de evitar a alienação mental que nos impede de alcançar objetivos[4]. As lições práticas incluem técnicas para vencer a procrastinação, superar medos paralisantes (medo de tentar, de arriscar, do novo) e construir uma vida de sucesso baseada no autoconhecimento[1][2].`,
    quotes: [
      {
        text: `O medo é uma ferramenta usada pelo Diabo para manter as pessoas em uma vida de mediocridade, e quem mantém uma mente livre de dúvidas e medos não pode ser controlado`,
        author: `Napoleon Hill`,
        book: `Mais Esperto que o Diabo`,
      },
      {
        text: `Os nossos pensamentos têm um poder colossal, tanto para o negativo quanto para o positivo, e eles moldam completamente a nossa realidade`,
        author: `Napoleon Hill`,
        book: `Mais Esperto que o Diabo`,
      },
    ],
    amazonLink: "https://amzn.to/3NazBB2",
  },
  {
    id: "a-sutil-arte-de-ligar-o-foda-se",
    title: "A Sutil Arte de Ligar o F*da-se",
    author: "Mark Manson",
    cover: "https://i.imgur.com/XXRlgDQ.jpg",
    shortDescription: `Resenha de "A Sutil Arte de Ligar o F*da-se": descubra se vale a pena ler este livro e como ele pode impactar sua vida na prática.`,
    worthIt: `**A Sutil Arte de Ligar o F*da-se** vale muito a pena, especialmente se você está cansado dos clichês típicos de livros de autoajuda. Diferentemente de outras obras do gênero, Mark Manson não promete soluções mágicas ou fórmulas para transformar sua vida da noite para o dia[1][2]. Em vez disso, ele oferece uma abordagem franca e realista sobre como viver melhor aceitando seus limites e reconhecendo que você não precisa ser extraordinário para ter uma vida significativa[2]. O livro é indicado para qualquer pessoa que se sente sufocada pela obsessão com sucesso, comparação social ou pela pressão de ser "especial"[1].

Os principais benefícios práticos incluem uma mudança de perspectiva sobre o que realmente importa na vida[1], desenvolvimento de autoconhecimento através de reflexões provocadoras[2], e ferramentas para lidar melhor com fracassos e dificuldades cotidianas[3]. Manson usa uma linguagem jovial, repleta de piadas e exemplos reais que tornam o aprendizado leve e divertido, mesmo quando o assunto é sério[1]. Se você quer um livro que funcione como um "amigo sincero" oferecendo verdades sem filtro em vez de palavras reconfortantes vazias, este é exatamente o que você procura[2].`,
    summary: `Mark Manson começa questionando a própria ideia de autoajuda convencional, argumentando que o verdadeiro caminho para uma vida melhor começa com a aceitação de que você não é tão especial quanto gostaria de acreditar[1][2]. O livro propõe que em vez de tentar ser excepcional ou perseguir sucesso convencional (dinheiro, fama, reconhecimento social), devemos reorientar nossas expectativas e reconhecer nossos limites como seres humanos[1]. Manson defende que "ligar o foda-se" não significa não se importar com nada – isso seria psicopatia – mas sim demonstrar importância total àquilo que você genuinamente valoriza, deixando de lado a ansiedade sobre coisas fora do seu alcance[1][3].

A estrutura do livro combina histórias de personalidades conhecidas com reflexões profundas sobre felicidade, morte e significado na vida[2]. O autor usa uma abordagem extremamente informal e direta, sem hesitar em usar palavrões quando necessário, criando uma sensação de conversa honesta com um amigo de confiança[2]. Através de suas 224 páginas, Manson trabalha conceitos como a importância de escolher pelo que queremos sofrer, a revisão de nossos valores (distinguindo entre valores bons e ruins), e como a consciência de nossa mortalidade pode realmente guiar nossas decisões mais importantes[2][6].`,
    quotes: [
      {
        text: `A ideia de ligar o foda-se é um jeito simples de reorientar nossas expectativas e descobrir o que é ou não importante na vida.`,
        author: `Mark Manson`,
        book: `A Sutil Arte de Ligar o F*da-se`,
      },
      {
        text: `Pare de sofrer pelas coisas que não estão ao seu alcance, busque a simplicidade e valorize o que você tem e quem você é.`,
        author: `Mark Manson`,
        book: `A Sutil Arte de Ligar o F*da-se`,
      },
    ],
    amazonLink: "https://amzn.to/450EBy2",
  },
    {
    id: "mulheres-que-correm-com-os-lobos",
    title: "Mulheres que Correm com os Lobos",
    author: "Clarissa Pinkola Estés",
    cover: "https://i.imgur.com/AxlerOH.jpg",
    badge: "Clássico da psicologia feminina",
    shortDescription: "Um mergulho profundo na psique feminina por meio de mitos, contos e arquétipos.",
    worthIt: `Vale a pena ler Mulheres que Correm com os Lobos? Sim, especialmente se você busca autoconhecimento em um nível mais simbólico e psicológico. Clarissa Pinkola Estés propõe uma reconexão com a natureza instintiva da mulher, muitas vezes reprimida por padrões culturais e sociais ao longo dos séculos.

A leitura não é leve nem linear. É um livro denso, reflexivo e, em vários momentos, confrontador. Justamente por isso, gera impacto duradouro. Cada capítulo funciona como um convite à reflexão profunda sobre identidade, criatividade, limites e força interior.

É uma obra indicada para quem está disposto a ler sem pressa, absorvendo os significados por trás das histórias e permitindo que elas dialoguem com experiências pessoais.`,
    summary: `Em Mulheres que Correm com os Lobos, Clarissa Pinkola Estés utiliza contos de fadas, mitos e histórias ancestrais para explorar a psique feminina sob a ótica da psicologia analítica junguiana. A autora apresenta o arquétipo da Mulher Selvagem como a essência instintiva, criativa e intuitiva que habita todas as mulheres.

Ao longo do livro, cada narrativa é destrinchada em camadas simbólicas que abordam temas como perda da identidade, repressão emocional, ciclos de morte e renascimento, intuição e força interior. Estés argumenta que a desconexão dessa natureza instintiva gera sofrimento psíquico e sensação de vazio.

A obra funciona tanto como análise psicológica quanto como guia de reconexão interior, oferecendo uma leitura transformadora para quem busca compreender mais profundamente a própria essência.`,
    quotes: [
      {
        text: "Quando as mulheres recuperam sua natureza instintiva, tornam-se naturalmente criativas, generosas e protetoras.",
        author: "Clarissa Pinkola Estés",
        book: "Mulheres que Correm com os Lobos",
      },
      {
        text: "A Mulher Selvagem carrega os remédios para tudo o que foi perdido.",
        author: "Clarissa Pinkola Estés",
        book: "Mulheres que Correm com os Lobos",
      },
    ],
    amazonLink: "https://amzn.to/49o9DkH",
  },
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    cover: "https://i.imgur.com/YckUbHk.jpg",
    badge: "Clássico da literatura distópica",
    shortDescription: "Um retrato sombrio de um regime totalitário baseado em vigilância extrema, manipulação da verdade e controle social.",
    worthIt: `Vale a pena ler 1984? Sim, especialmente em um mundo cada vez mais digital e monitorado. George Orwell constrói uma narrativa impactante que vai além da ficção, funcionando como um alerta atemporal sobre os perigos do autoritarismo, da censura e da perda da liberdade individual.

O livro provoca desconforto justamente por sua lucidez. A ideia de vigilância constante, controle da informação e reescrita da história faz com que o leitor questione não apenas regimes políticos, mas também o papel da mídia, da tecnologia e do poder na sociedade moderna.

É uma leitura essencial para quem busca pensamento crítico, consciência política e compreensão profunda dos mecanismos de dominação.`,
    summary: `Em 1984, George Orwell apresenta um mundo governado pelo Partido, liderado pela figura onipresente do Grande Irmão. A sociedade é controlada por meio da vigilância constante, da manipulação da linguagem e da alteração contínua dos registros históricos, garantindo que a versão oficial da realidade nunca seja contestada.

O protagonista, Winston Smith, trabalha justamente alterando documentos do passado para alinhar a história às narrativas do Partido. Aos poucos, ele passa a questionar o sistema, buscando preservar sua individualidade e sua capacidade de pensar livremente — um ato considerado criminoso.

A obra explora temas como totalitarismo, vigilância em massa, controle ideológico, censura e a fragilidade da verdade. Mais do que uma distopia, 1984 é um alerta poderoso sobre até onde o poder pode ir quando não encontra limites.`,
    quotes: [
      {
        text: "O Grande Irmão está de olho em você.",
        author: "George Orwell",
        book: "1984",
      },
      {
        text: "Quem controla o passado controla o futuro. Quem controla o presente controla o passado.",
        author: "George Orwell",
        book: "1984",
      },
    ],
    amazonLink: "https://amzn.to/3N8jhkc",
  },
  {
    id: "a-revolucao-dos-bichos",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    cover: "https://i.imgur.com/BgKF1Eb.jpg",
    badge: "Clássico da sátira política",
    shortDescription: "Uma fábula poderosa que expõe como ideais revolucionários podem ser corrompidos pelo abuso de poder.",
    worthIt: `Vale a pena ler A Revolução dos Bichos? Sim, porque é uma leitura curta, direta e extremamente impactante. George Orwell utiliza uma linguagem simples e personagens animais para revelar mecanismos complexos de manipulação política, propaganda e autoritarismo.

O livro é didático sem ser raso. Em poucas páginas, o autor mostra como líderes podem distorcer ideais de igualdade para concentrar poder, explorando o medo, a ignorância e a repetição de discursos como ferramentas de controle.

É uma obra essencial para quem busca compreender política, história e comportamento humano, além de servir como alerta permanente sobre os riscos do poder sem limites.`,
    summary: `Em A Revolução dos Bichos, os animais de uma fazenda se rebelam contra seus donos humanos em busca de liberdade e igualdade. Inspirados por ideais revolucionários, eles constroem um novo sistema onde todos seriam iguais e trabalhariam para o bem comum.

Com o passar do tempo, porém, os porcos assumem o controle e passam a modificar as regras em benefício próprio. A promessa de igualdade é gradualmente substituída por um regime autoritário, sustentado por propaganda, medo e distorção da verdade.

A obra funciona como uma sátira direta à corrupção do poder e às traições ideológicas, mostrando como revoluções podem repetir os mesmos abusos que pretendiam eliminar.`,
    quotes: [
      {
        text: "Todos os animais são iguais, mas alguns animais são mais iguais que os outros.",
        author: "George Orwell",
        book: "A Revolução dos Bichos",
      },
      {
        text: "A verdadeira felicidade está em trabalhar duro e viver frugalmente.",
        author: "George Orwell",
        book: "A Revolução dos Bichos",
      },
    ],
    amazonLink: "https://amzn.to/4srM8Ad",
  },
  {
    id: "o-pequeno-principe",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    cover: "https://i.imgur.com/Y7Xv4j6.jpg",
    badge: "Clássico da literatura mundial",
    shortDescription: "Uma fábula poética sobre amizade, amor, responsabilidade e o essencial invisível aos olhos.",
    worthIt: `Vale a pena ler O Pequeno Príncipe? Sim, em qualquer idade. Antoine de Saint-Exupéry constrói uma narrativa simples na forma, mas profunda no conteúdo, capaz de tocar leitores jovens e adultos com reflexões atemporais sobre a vida.

A obra convida à desaceleração e ao olhar sensível. Por meio de diálogos simbólicos, o autor questiona valores como materialismo, poder e vaidade, contrapondo-os à pureza das relações humanas e à importância dos vínculos afetivos.

É um livro curto, mas de impacto duradouro, ideal para releituras ao longo da vida, pois seu significado amadurece junto com o leitor.`,
    summary: `Em O Pequeno Príncipe, um piloto perdido no deserto do Saara conhece um pequeno viajante vindo de outro planeta. Ao longo da convivência, o menino compartilha histórias de sua jornada por diferentes asteroides, cada um habitado por personagens que representam comportamentos e vícios do mundo adulto.

Por meio dessas visitas, o livro aborda temas como solidão, amizade, amor, responsabilidade e o sentido da existência. A relação do Pequeno Príncipe com a rosa revela a importância do cuidado e do compromisso emocional.

A narrativa combina fantasia e filosofia de forma delicada, transmitindo a mensagem de que o essencial não pode ser visto com os olhos, apenas sentido com o coração.`,
    quotes: [
      {
        text: "O essencial é invisível aos olhos.",
        author: "Antoine de Saint-Exupéry",
        book: "O Pequeno Príncipe",
      },
      {
        text: "Tu te tornas eternamente responsável por aquilo que cativas.",
        author: "Antoine de Saint-Exupéry",
        book: "O Pequeno Príncipe",
      },
    ],
    amazonLink: "https://amzn.to/3L97v8C",
  },

];

export const getBookById = (id: string): Book | undefined => {
  return books.find((book) => book.id === id);
};
