import { useState, useEffect } from "react";
import useArticleStore from "../zustand/articleStore";

const useFetchTopStories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const currentTopic = useArticleStore((state) => state.currentTopic);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gnews.io/api/v4/search?q=${
        currentTopic as string
      }&lang=en&token=${import.meta.env.VITE_GNEWS_API_KEY as string}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          setError(data.errors);
        }
        setStories(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [currentTopic]);

  return { stories, isLoading, error };
};

export default useFetchTopStories;
