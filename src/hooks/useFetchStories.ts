import { useState, useEffect } from "react";
import useArticleStore from "../zustand/articleStore";

const useFetchTopStories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const currentTopic = useArticleStore((state) => state.currentTopic);

  useEffect(() => {
    console.log(`Fetching stories for ${currentTopic}`);
    setIsLoading(true);
    fetch(
      `https://gnews.io/api/v4/search?q=${currentTopic}&lang=en&token=${
        import.meta.env.VITE_GNEWS_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
