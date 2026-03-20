import { useMapContext } from "../context/MapContext";
import { MAIL_TO_BODY, MAIL_TO_SUBJECT } from "../data/constants";
import type { Judet, UAT } from "../data/types";
import { useGetCounty } from "../hooks/useGetCounty";

export default function InfoPanel() {
  const { hoveredUat, selectedUat, hoveredJudet, selectedJudet } =
    useMapContext();

  const displayUat = hoveredUat ? hoveredUat : selectedUat;
  const displayJudet = !displayUat
    ? hoveredJudet
      ? hoveredJudet
      : selectedJudet
    : undefined;

  return (
    <div style={{ height: "22vh" }}>
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="font-headline text-2xl font-extrabold tracking-tight text-primary">
              Cluj County
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
              <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
                Seat: Cluj-Napoca
              </span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                81 Municipalities
              </span>
              <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                14 Active Projects
              </span>
            </div>
          </div>
        </div>
        <HeaderButton />
      </div>
      {!displayUat && !displayJudet ? (
        <InfoPanelHeader />
      ) : (
        <>
          {displayUat && <UATInfoPanel uat={displayUat} />}{" "}
          {displayJudet && <JudetInfoPanel judet={displayJudet} />}
        </>
      )}
    </div>
  );
}

const HeaderButton = () => {
  return (
    <button className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-6 py-2.5 rounded-full hover:bg-surface-container-low transition-colors shadow-sm">
      <span
        className="material-symbols-outlined text-secondary"
        data-icon="map"
      >
        map
      </span>
      <span className="font-label font-bold text-sm text-primary">
        Open County Map
      </span>
    </button>
  );
};

const JudetInfoPanel = ({ judet }: { judet: Judet }) => {
  return <>judet info panel {judet.nume}</>;
};

const UATInfoPanel = ({ uat }: { uat: UAT }) => {
  return (
    <>
      <p>{uat?.nume}</p>
      {uat?.date && (
        <>
          {uat.date.populatie && (
            <>
              <span>Populatie: {uat.date.populatie}</span> <br />
            </>
          )}
          {uat.date.status && (
            <>
              <span>Status: {uat.date.status}</span> <br />
            </>
          )}
          {uat.date.mail && (
            <a
              href={`mailto:${uat.date.mail}?subject=${MAIL_TO_SUBJECT}&body=${MAIL_TO_BODY}`}
              style={{
                display: "inline-block",
                color: "rgb(26,115,232)",
                fontFamily: "Arial,sans-serif",
                fontSize: "16px",
                borderRadius: "4px",
                textDecorationLine: "none",
              }}
              target="_blank"
            >
              Scrie primariei {uat.nume}
            </a>
          )}
        </>
      )}
    </>
  );
};

const InfoPanelHeader = () => {
  const judet = useGetCounty();

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Selecteaza un {judet ? "Judet" : "UAT"}</p>
        {judet && <button onClick={() => window.history.back()}>Inapoi</button>}
      </div>
    </>
  );
};
