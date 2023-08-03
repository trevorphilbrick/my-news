import { create } from "zustand";
import { Article } from "../types/GNewsAPI";

export type UseArticleStore = {
  currentArticles: Article[] | null;
  currentTopic: string | null;
  setCurrentArticles: (currentArticles: Article[]) => void;
  setCurrentTopic: (currentTopic: string) => void;
};

const useArticleStore = create<UseArticleStore>((set) => ({
  currentTopic: null,
  currentArticles: [],
  setCurrentArticles: (currentArticles: Article[]) =>
    set(() => ({ currentArticles })),
  setCurrentTopic: (currentTopic: string) => set(() => ({ currentTopic })),
}));

export default useArticleStore;
