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
