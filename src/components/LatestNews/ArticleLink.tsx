export const ArticleLink = ({ article }: { article: Article }) => (
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
          Location:{" "}
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
);
