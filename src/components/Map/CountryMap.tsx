import { DEFAULT_VIEW_BOX } from "../../data/constants";
import { MapWrapper } from "./MapWrapper";
import { CountyPath } from "./CountyPath";
import { useGetCountiesQuery } from "../../app/apiSlice";
import { WidgetError } from "../common/WidgetError";
import Loader from "../common/Loader";

export const CountryMap = () => {
  const {
    data: counties,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCountiesQuery();

  if (isError || (!isLoading && !counties?.length)) {
    return (
      <WidgetError
        error={error?.toString() || ""}
        refetch={refetch}
        section="countryMap"
      />
    );
  }

  return (
    <>
      {isLoading ? (
        <Loader height="40vh" />
      ) : (
        <MapWrapper viewBox={DEFAULT_VIEW_BOX}>
          <g id="counties">
            {counties.map((county) => (
              <CountyPath key={county?.id} county={county} displayAuto={true} />
            ))}
          </g>
        </MapWrapper>
      )}
    </>
  );
};
