import type { MapHeaderInput, MapHeaderState } from "./mapHeader.types";

export function resolveMapHeaderState(input: MapHeaderInput): MapHeaderState {
  const { routeCounty, counties, uats } = input;
  if (routeCounty) {
    // Resolve against current county data; never display a stale UAT from another county.
    const uat = uats.find((item) => item.id === input.hoveredUat?.id)
      ?? uats.find((item) => item.id === input.selectedUat?.id);
    return uat ? { kind: "uat", county: routeCounty, uat } : { kind: "county", county: routeCounty };
  }
  const county = counties.find((item) => item.id === input.hoveredCounty?.id)
    ?? counties.find((item) => item.id === input.selectedCounty?.id);
  return county ? { kind: "county-preview", county } : { kind: "country" };
}
