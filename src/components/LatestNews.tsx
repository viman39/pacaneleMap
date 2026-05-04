import { Link } from "react-router-dom";
import { useGetCounty } from "../hooks/useGetCounty";
import Badge from "./common/Badge";

const date = [
  {
    titlu: "Pacanele interzise in Bucuresti, Bacau, stop pacanele test",
    judete: ["Bacau", "Bucuresti"],
    approvalDate: "24 Oct 2023",
    source: "Digi24",
    link: "https://www.digi24.ro/stiri/actualitate/pacanele-interzise-in-bucuresti-bacau-stop-pacanele-test-2023-10-24",
  },
  {
    titlu: "Gata cu pacanelele in Floresit, stop pacanele test",
    judete: ["Ilfov"],
    approvalDate: "15 Sep 2023",
    source: "Euronews",
    link: "https://www.euronews.com/2023/09/15/gata-cu-pacanelele-in-floresit-stop-pacanele-test",
  },
  {
    titlu: "Cluj nu renunta inca la pacanele, ce faceti domnu Boc?",
    judete: ["Cluj"],
    approvalDate: "10 Aug 2023",
    source: "Digi24",
    link: "https://www.digi24.ro/stiri/actualitate/cluj-nu-renunta-inca-la-pacanele-ce-faceti-domnu-boc-2023-08-10",
  },
];

export const LatestNews = () => {
  const judet = useGetCounty();
  const news = judet ? date.filter((d) => d.judete.includes(judet?.id)) : date;

  return (
    news && (
      <section className="px-6 md:px-12 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="font-headline text-2xl font-extrabold text-primary">
              Ultimele noutati despre Jocurile de Noroc din Romania
            </h3>
          </div>
        </div>
        <div className="space-y-1">
          {news.map((d) => (
            <div
              key={d.link}
              className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-surface-container-lowest transition-all duration-300"
            >
              <div className="w-full">
                <h4 className="font-headline font-bold text-primary group-hover:text-secondary transition-colors">
                  {d.titlu}
                </h4>
              </div>
              <div className="w-full flex flex-col md:flex-row items-start md:items-center md:gap-6 gap-1">
                <p className="text-xs text-on-surface-variant mt-1">
                  Data: {d.approvalDate}
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Source: {d.source}
                </p>
                <p className="inline-flex items-center gap-1.5 text-xs text-on-surface-variant mt-1">
                  Location:{" "}
                  {d.judete.map((loc, index) => (
                    <Link to={`/${loc}`} key={loc + index}>
                      <Badge className="bg-tertiary-fixed text-on-tertiary-fixed hover:bg-yellow-100 hover:text-black transition-colors duration-200">
                        {loc}
                      </Badge>
                    </Link>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  );
};
