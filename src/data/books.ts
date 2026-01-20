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
    cover: "https://imgur.com/6R9wX1J.jpg",
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

];

export const getBookById = (id: string): Book | undefined => {
  return books.find((book) => book.id === id);
};
