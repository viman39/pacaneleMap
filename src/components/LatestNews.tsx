import { Link } from "react-router-dom";
import { useGetCounty } from "../hooks/useGetCounty";
import { useEffect, useState } from "react";
import Badge from "./common/Badge";
import Loader from "./common/Loader";
import useArticles from "../hooks/useArticles";

export const LatestNews = () => {
  const { articles, loading, error, refetch } = useArticles();
  const judet = useGetCounty();

  const news = judet
    ? (articles || []).filter((d) => d?.locations && d?.locations?.includes(judet.id))
    : articles || [];

  // Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = news.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (page - 1) * itemsPerPage;
  const paginated = news.slice(startIndex, startIndex + itemsPerPage);

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
    return (
      <section className="px-6 md:px-12 py-10">
        <div className="text-sm text-on-surface-variant">Failed to load articles: {error}</div>
        <button
          className="mt-2 inline-flex items-center px-3 py-1 rounded-md bg-primary text-on-primary"
          onClick={refetch}
        >
          Retry
        </button>
      </section>
    );
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
        <div className="text-sm text-on-surface-variant">No articles found.</div>
      ) : (
        <>
          <div className="space-y-1">
            {paginated.map((d) => (
              <div
                key={d.link}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-surface-container-lowest transition-all duration-300"
              >
                <div className="w-full">
                  <h4 className="font-headline font-bold text-primary group-hover:text-secondary transition-colors">
                    <a href={d.link} target="_blank" rel="noopener noreferrer">
                      {d.title}
                    </a>
                  </h4>
                </div>
                <div className="w-full flex flex-col md:flex-row items-start md:items-center md:gap-6 gap-1">
                  <p className="text-xs text-on-surface-variant mt-1">Date: {d.date}</p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {d.sourceLink ? (
                      <a href={d.sourceLink} target="_blank" rel="noopener noreferrer">
                        {d.source}
                      </a>
                    ) : (
                      d.source
                    )}
                  </p>
                  {d?.locations && (
                    <p className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant mt-1">
                      Location: {" "}
                      {d.locations.map((loc, index) => (
                        <Link to={`/${loc}`} key={loc + index}>
                          <Badge className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-yellow-100 hover:text-black transition-colors duration-200">
                            {loc}
                          </Badge>
                        </Link>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-on-surface-variant">
              Showing {startIndex + 1} - {Math.min(startIndex + paginated.length, totalItems)} of {totalItems}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded-md bg-surface-container-lowest border border-outline-variant text-on-surface-variant disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Prev
              </button>

              <span className="text-sm text-on-surface-variant">Page {page} / {totalPages}</span>

              <button
                className="px-3 py-1 rounded-md bg-surface-container-lowest border border-outline-variant text-on-surface-variant disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
