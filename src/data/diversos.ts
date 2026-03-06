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
];

export const getDiversoById = (id: string): DiversoItem | undefined => {
  return diversos.find((item) => item.id === id);
};
