import { create } from "zustand";
import { Article } from "../types/GNewsAPI";

export type UseArticleStore = {
  currentArticles: Article[] | null;
  currentTopic: string | null;
  setCurrentArticles: (currentArticles: Article[]) => void;
  setCurrentTopic: (current: string) => void;
};

const useArticleStore = create<UseArticleStore>((set) => ({
  currentTopic: null,
  currentArticles: [],
  setCurrentArticles: (currentArticles: Article[]) =>
    set(() => ({ currentArticles })),
  setCurrentTopic: (current: string) => {
    set(() => ({ current }));
    console.log(current);
  },
}));

export default useArticleStore;
