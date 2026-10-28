import { useEffect } from "react";
import { useGetCountiesQuery } from "../app/apiSlice";
import { useDataContext } from "../context/DataContext";
import { DEFAULT_VIEW_BOX } from "../data/constants";
import { useGetCounty } from "../hooks/useGetCounty";
import { PathJudet } from "./PathJudet";
import { PathUAT } from "./PathUAT";
import Loader from "./common/Loader";
import { WidgetError } from "./common/WidgetError";

export default function RomaniaMap() {
  const {
    data: counties,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCountiesQuery();

  useEffect(() => {
    console.log("BEEE", counties);
  }, [isLoading]);
  const { judete } = useDataContext();
  const judet = useGetCounty();

  if (isError) {
    return (
      <WidgetError error={error?.toString()} refetch={refetch} section="map" />
    );
  }

  return (
    <section className="px-6 md:px-12 py-4 flex-1 bg-surface-container-low rounded-xl">
      {isLoading && <Loader height="40vh" />}
      {judete && (
        <div className="w-full overflow-hidden relative">
          <div className="inset-0 flex justify-center">
            <svg
              id="wrapper"
              viewBox={judet ? judet?.bBox : DEFAULT_VIEW_BOX}
              preserveAspectRatio="xMinYMin meet"
              className="lg:h-[100vh] md:h-[60vh] sm:h-[30vh]"
            >
              <g id="UATs">
                {judet &&
                  judet?.UATs.map((uat: any) => (
                    <PathUAT key={uat.id} uat={uat} />
                  ))}
              </g>
              <g id="counties">
                {judet ? (
                  <PathJudet judet={judet} displayAuto={false} />
                ) : (
                  judete.map((judet) => (
                    <PathJudet
                      key={judet.id}
                      judet={judet}
                      displayAuto={true}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
