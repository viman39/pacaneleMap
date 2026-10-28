import { Navigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetCountiesQuery, useGetUatsByCountyQuery } from "../app/apiSlice";
import { CountryMap } from "../components/Map/CountryMap";
import { CountyMap } from "../components/Map/CountyMap";
import { MapHeader } from "../components/MapHeader/MapHeader";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { HeaderLink } from "../components/PageHeader/HeaderLink";
import Loader from "../components/common/Loader";

export const Homepage = () => {
  const { countySlug } = useParams<{ countySlug: string }>();
  const { data: counties, isLoading, isError, refetch } = useGetCountiesQuery();
  const county = counties?.find((item) => item.slug === countySlug?.toLowerCase());
  const uatsQuery = useGetUatsByCountyQuery(county ? { countyId: county.id } : skipToken);

  if (isLoading) return <><PageHeader title="Se încarcă harta…" /><Loader height="40vh" /></>;
  if (isError || !counties) return <PageHeader title="Datele hărții nu au putut fi încărcate" actions={
    <button type="button" onClick={() => void refetch()} className="underline">Reîncearcă</button>
  } />;
  if (countySlug && !county) return <Navigate to="/" replace />;

  return <>
    <MapHeader routeCounty={county} counties={counties} uats={uatsQuery.currentData} />
    {county ? <>
      {uatsQuery.isError ? <div role="alert" className="p-6">
        UAT-urile nu au putut fi încărcate. <button type="button" className="underline" onClick={() => void uatsQuery.refetch()}>Reîncearcă</button>
      </div> : !uatsQuery.currentData ? <Loader height="40vh" />
        : <CountyMap key={county.id} county={county} uats={uatsQuery.currentData} />}
    </> : counties.length ? <CountryMap /> : <div className="p-6">Nu există județe disponibile. <HeaderLink to="/despre-campanie" label="Despre campanie" /></div>}
  </>;
};
