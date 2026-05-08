import { useCallback, useEffect, useState } from "react";

export interface Article {
  title: string;
  link: string;
  source: string;
  date: string;
  sourceLink?: string;
  locations: string[];
}

export default function useArticles() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(() => {
    setLoading(true);
    setError(null);

    return fetch("http://localhost:3000/articles")
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
