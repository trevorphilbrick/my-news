import { create } from "zustand";
import { Article } from "../types/GNewsAPI";

export type UseArticleStore = {
  currentArticles: Article[] | null;
  currentTopic: string | null;
  recentlyRead: Article[];
  setCurrentArticles: (currentArticles: Article[]) => void;
  setCurrentTopic: (current: string) => void;
};

const useArticleStore = create<UseArticleStore>((set) => ({
  currentTopic: "general",
  currentArticles: [],
  recentlyRead: [],
  setCurrentArticles: (currentArticles: Article[]) =>
    set(() => ({ currentArticles })),
  setCurrentTopic: (current: string) => {
    set(() => ({ currentTopic: current }));
  },
  setRecentlyRead: (state: UseArticleStore, recent: Article[]) =>
    set(() => ({ recentlyRead: [...state.recentlyRead, ...recent] })),
}));

export default useArticleStore;
