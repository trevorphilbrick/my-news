export type Article = {
  content: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
};

export type Topic = {
  totalArticles: number;
  articles: Article[];
};
