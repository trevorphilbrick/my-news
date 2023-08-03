import { useState, useEffect } from "react";

const useFetchTopStories = (topic: string) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://gnews.io/api/v4/search?q=${topic}&lang=en&token=${
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
  }, [topic]);

  return { stories, isLoading, error };
};

export default useFetchTopStories;
