import type { County, UatDTO } from "../../app/types";

export type MapHeaderState =
  | { kind: "country" }
  | { kind: "county-preview"; county: County }
  | { kind: "county"; county: County }
  | { kind: "uat"; county: County; uat: UatDTO };

export type MapHeaderInput = {
  routeCounty?: County;
  counties: County[];
  uats: UatDTO[];
  hoveredCounty?: County;
  selectedCounty?: County;
  hoveredUat?: UatDTO;
  selectedUat?: UatDTO;
};
