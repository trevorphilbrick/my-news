import { create } from "zustand";

const apiKey = "0da7612e9e1a6f2ded0664ff4c950d54";

export type Article = {
  content: string;
  title: string;
  description: string;
  url: string;
  image: string |;
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

type UseFetchTopic = {
  initialState: [];
  fetchTopic: (topicId: string) => Promise<void>;
};

const useFetchTopic = create<UseFetchTopic>((set) => ({
  initialState: [],
  fetchTopic: async (topicId: string) => {
    const response = await fetch(
      ` https://gnews.io/api/v4/top-headlines?category=${
        topicId || "general"
      }&lang=en&apikey=${apiKey}`
    );
    const topic = response.json();
    set({ topic });
  },
}));

export default useFetchTopic;
