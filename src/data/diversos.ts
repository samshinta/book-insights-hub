export interface DiversoItem {
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

export const diversos: DiversoItem[] = [
  {
    id: "kindle-16-gb-geracao-mais-recente-leve-e-compacto-com-tela-antirreflexo-trocas-de-pagina-mais-rapidas-luz-frontal-ajustavel-e-bateria-de-longa-duracao-cor-preta",
    title: "Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta",
    author: "",
    cover: "https://i.imgur.com/f7DQAX1.png",
    shortDescription: "Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta",
    worthIt: `Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta`,
    summary: `Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta`,
    quotes: [],
    amazonLink: "https://amzn.to/4aV9TKc",
  },
  {
    id: "pilha-elgin-aa-2700mah",
    title: "Pilha Recarregável AA 2700mAh Elgin",
    author: "Elgin",
    cover: "https://i.imgur.com/loMTZju.jpg",
    shortDescription: "Pilha recarregável AA 2700mAh Elgin com 4 unidades. Comum.",
    worthIt: `Pilha recarregável AA 2700mAh Elgin com 4 unidades. Comum.`,
    summary: `Pilha recarregável AA 2700mAh Elgin com 4 unidades. Comum.`,
    quotes: [],
    amazonLink: "https://amzn.to/4d3pbOe",
  },
  {
    id: "kindle-16-gb-geracao-mais-recente-leve-e-compacto-com-tela-antirreflexo-trocas-de-pagina-mais-rapidas-luz-frontal-ajustavel-e-bateria-de-longa-duracao-cor-preta",
    title: "Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta",
    author: "",
    cover: "https://i.imgur.com/f7DQAX1.png",
    shortDescription: "Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta",
    worthIt: `Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta`,
    summary: `Kindle 16 GB (Geração mais recente) - Leve e compacto, com tela antirreflexo, trocas de página mais rápidas, luz frontal ajustável e bateria de longa duração - Cor Preta`,
    quotes: [],
    amazonLink: "https://amzn.to/4aV9TKc",
  },
];

export const getDiversoById = (id: string): DiversoItem | undefined => {
  return diversos.find((item) => item.id === id);
};
