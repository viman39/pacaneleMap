import { Link } from "react-router-dom";
import { useMapContext } from "../context/MapContext";
import {
  LINK_LEGE_107_2024,
  MAIL_TO_BODY,
  MAIL_TO_SUBJECT,
} from "../data/constants";
import type { Judet, UAT } from "../data/types";
import { useGetCounty } from "../hooks/useGetCounty";

export default function InfoPanel() {
  const { hoveredUat, selectedUat, hoveredJudet, selectedJudet } =
    useMapContext();
  const judet = useGetCounty();

  const displayUat = hoveredUat ? hoveredUat : selectedUat;
  const displayJudet = judet || (hoveredJudet ? hoveredJudet : selectedJudet);

  return (
    <div style={{ height: "22vh" }}>
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="font-headline text-2xl font-extrabold tracking-tight text-primary">
              {displayJudet ? displayJudet.nume : "Selecteaza un judet"}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
              {displayUat && <UATInfoPanel uat={displayUat} />}
              {!displayUat && displayJudet && (
                <JudetInfoPanel judet={displayJudet} />
              )}
            </div>
          </div>
        </div>
        <HeaderButton />
      </div>
    </div>
  );
}

const HeaderButton = () => {
  const { setSelectedUat, selectedJudet } = useMapContext();
  const judet = useGetCounty();

  return (
    <>
      {judet && (
        <Link
          to="/"
          className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-6 py-2.5 rounded-full hover:bg-surface-container-low transition-colors shadow-sm"
          onClick={() => setSelectedUat(undefined)}
        >
          <span
            className="material-symbols-outlined text-secondary"
            data-icon="arrow_back"
          >
            arrow_back
          </span>
          <span className="font-label font-bold text-sm text-primary">
            Inapoi
          </span>
        </Link>
      )}
      {!judet && selectedJudet && (
        <Link
          to={selectedJudet?.id}
          className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 px-6 py-2.5 rounded-full hover:bg-surface-container-low transition-colors shadow-sm"
        >
          <span
            className="material-symbols-outlined text-secondary"
            data-icon="map"
          >
            map
          </span>
          <span className="font-label font-bold text-sm text-primary">
            Harta {selectedJudet.nume}
          </span>
        </Link>
      )}
    </>
  );
};

const JudetInfoPanel = ({ judet }: { judet: Judet }) => {
  return (
    <>
      <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
        UATs: {judet?.UATs.length}
      </span>
      {judet?.date?.linkPetitie && (
        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
          <a
            href={judet.date.linkPetitie}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Semneaza Petita
          </a>
        </span>
      )}
    </>
  );
};

const UATInfoPanel = ({ uat }: { uat: UAT }) => {
  return (
    <>
      <span className="text-xs font-label uppercase tracking-widest text-secondary font-bold">
        {uat?.nume}
      </span>
      {!uat?.date?.populatie || uat?.date?.populatie < 15000 ? (
        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
          Conform legii{" "}
          <a href={LINK_LEGE_107_2024} className="underline" target="_blank">
            107/2024 Articolul 1, alineatul (6)
          </a>{" "}
          acest UAT nu se incadreaza in criteriile de populatie pentru a fi
          vizibil pe harta.
        </span>
      ) : (
        <>
          {uat?.date?.populatie && (
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              Populatie: {uat.date.populatie}
            </span>
          )}
          {uat?.date?.status && (
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              Status: {uat.date.status}
            </span>
          )}
          {uat?.date?.mail && (
            <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
              <a
                href={`mailto:${uat.date.mail}?subject=${MAIL_TO_SUBJECT}&body=${MAIL_TO_BODY}`}
                className="underline"
                target="_blank"
              >
                Scrie primariei {uat.nume}
              </a>
            </span>
          )}
        </>
      )}
    </>
  );
};
