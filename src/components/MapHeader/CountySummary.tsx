import type { County } from "../../app/types";
import Badge from "../common/Badge";
import { getMapColor } from "../../utils/utils";

export function CountySummary({ county }: { county: County }) {
  const hasScore = county.uatsOver15000Count > 0 && Number.isFinite(county.countyScore);
  return <>
    <span>UAT-uri: {county.uatsCount}</span>
    <span>Peste 15.000 locuitori: {county.uatsOver15000Count}</span>
    <span>Aprobat în CL: {county.uatsStatus4Count}</span>
    {hasScore
      ? <Badge style={{ backgroundColor: getMapColor(county.countyScore) }}>Scor: {county.countyScore}%</Badge>
      : <span>Scor indisponibil</span>}
  </>;
}
