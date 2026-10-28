import { Link } from "react-router-dom";
import { useGetCounty } from "../../hooks/useGetCounty";
import { useEffect, useState } from "react";
import Badge from "../common/Badge";
import Loader from "../common/Loader";
import useArticles from "./useArticles";
import { ArticleLink } from "./ArticleLink";
import { WidgetError } from "../common/WidgetError";

export const LatestNews = () => {
  const { articles, loading, error, refetch } = useArticles();
  const judet = useGetCounty();

  const news = judet
    ? (articles || []).filter(
        (d) => d?.locations && d?.locations?.includes(judet.id),
      )
    : articles || [];

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = news.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedArticles = news.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [page, totalPages]);

  if (loading) {
    return (
      <section className="px-6 md:px-12 py-10">
        <Loader />
      </section>
    );
  }

  if (error) {
    return <WidgetError refetch={refetch} error={error} section="articles" />;
  }

  return (
    <section className="px-6 md:px-12 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h3 className="font-headline text-2xl font-extrabold text-primary">
            Ultimele noutati despre Jocurile de Noroc din Romania
          </h3>
        </div>
      </div>

      {totalItems === 0 ? (
        <div className="text-sm text-on-surface-variant">
          No articles found.
        </div>
      ) : (
        <>
          <div className="space-y-1">
            {paginatedArticles.map((article) => (
              <ArticleLink article={article} />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-on-surface-variant">
              {startIndex + 1} -{" "}
              {Math.min(startIndex + paginatedArticles.length, totalItems)} din{" "}
              {totalItems}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded-md bg-surface-container-lowest border border-outline-variant text-on-surface-variant disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                {"<<"}
              </button>

              <span className="text-sm text-on-surface-variant">
                Pagina {page} / {totalPages}
              </span>

              <button
                className="px-3 py-1 rounded-md bg-surface-container-lowest border border-outline-variant text-on-surface-variant disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                {">>"}
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
