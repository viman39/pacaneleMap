import { useCallback, useEffect, useState } from "react";
import type { Article } from "./latestNews.types";

export default function useArticles() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(() => {
    setLoading(true);
    setError(null);

    return fetch("https://pacanele-scraper.onrender.com/articles")
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText || "Network error");
        return res.json();
      })
      .then((data: Article[]) => setArticles(data))
      .catch((err) => {
        console.error("Failed to load articles", err);
        setError(err?.message || "Failed to fetch articles");
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return { articles, loading, error, refetch: fetchArticles } as const;
}
