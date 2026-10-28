import type { County, UatDTO } from "../../app/types";
import { useMapContext } from "../../context/MapContext";
import { FaChevronLeft, FaMap } from "react-icons/fa";
import { PageHeader } from "../PageHeader/PageHeader";
import { HeaderLink } from "../PageHeader/HeaderLink";
import { resolveMapHeaderState } from "./resolveMapHeaderState";
import { CountrySummary } from "./CountrySummary";
import { CountySummary } from "./CountySummary";
import { UatSummary } from "./UatSummary";

type Props = { routeCounty?: County; counties: County[]; uats?: UatDTO[] };

export function MapHeader({ routeCounty, counties, uats = [] }: Props) {
  const context = useMapContext();
  const state = resolveMapHeaderState({ ...context, routeCounty, counties, uats });
  const clearUat = () => {
    context.setSelectedUat(undefined);
    context.setHoveredUat(undefined);
    context.setHoveredCounty(undefined);
  };
  const preview = state.kind === "county-preview" ? state.county : undefined;
  const title = state.kind === "country" ? "Selectează un județ"
    : state.kind === "uat" ? `${state.uat.name} · ${state.county.name}` : state.county.name;

  return <PageHeader title={title} actions={
    routeCounty ? <HeaderLink to="/" label="Înapoi la hartă" icon={<FaChevronLeft />} onClick={clearUat} />
      : preview ? <HeaderLink to={`/${preview.slug}`} label={`Harta ${preview.name}`} icon={<FaMap />} onClick={clearUat} /> : undefined
  }>
    {state.kind === "country" ? <CountrySummary counties={counties} />
      : state.kind === "uat" ? <UatSummary uat={state.uat} />
      : <CountySummary county={state.county} />}
  </PageHeader>;
}
