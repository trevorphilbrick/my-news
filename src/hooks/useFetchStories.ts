import { useState, useEffect } from "react";
import useArticleStore from "../zustand/articleStore";

const useFetchTopStories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { currentTopic, setCurrentArticles, currentArticles } = useArticleStore(
    (state) => state
  );

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gnews.io/api/v4/search?q=${
        currentTopic as string
      }&lang=en&token=${import.meta.env.VITE_GNEWS_API_KEY as string}`
    )
      .then((res) => res.json())
      .then(({ articles, error }) => {
        if (articles) {
          setStories(articles as []);
          setCurrentArticles(articles as []);
        }
        if (error) {
          setError(true);
          setErrorMessage(error as string);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err as string);
        setError(true);
      });
  }, [currentTopic]);

  return { currentArticles, isLoading, error, errorMessage };
};

export default useFetchTopStories;
