import { useEffect } from "react";
import type { County, UatDTO } from "../../app/types";
import { useMapContext } from "../../context/MapContext";
import { CountyPath } from "./CountyPath";
import { MapWrapper } from "./MapWrapper";
import { UatPath } from "./UatPath";

export const CountyMap = ({ county, uats }: { county: County; uats: UatDTO[] }) => {
  const { setSelectedUat, setHoveredUat, setHoveredCounty } = useMapContext();
  useEffect(() => () => {
    setSelectedUat(undefined);
    setHoveredUat(undefined);
    setHoveredCounty(undefined);
  }, [setSelectedUat, setHoveredUat, setHoveredCounty]);

  return <MapWrapper viewBox={county.viewBox}>
    <g id="county"><CountyPath county={county} interactive={false} /></g>
    <g id="uats">{uats.map((uat) => <UatPath key={uat.id} UAT={uat} />)}</g>
  </MapWrapper>;
};
