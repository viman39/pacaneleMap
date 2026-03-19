import { useUatContext } from "../context/UatContext";
import { MAIL_TO_BODY, MAIL_TO_SUBJECT } from "../data/constants";

export default function InfoPanel() {
  const { hoveredUat, setSelectedUat, selectedUat } = useUatContext();
  console.log("Hovered UAT in InfoPanel:", hoveredUat);

  return (
    <div style={{ height: "22vh" }}>
      {!hoveredUat ? (
        <>
          <div style={{ display: "flex", gap: "10px" }}>
            <p>Selecteaza un UAT</p>
            {selectedUat && (
              <button
                onClick={() => {
                  setSelectedUat(undefined);
                }}
              >
                Anapoi
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <p>{hoveredUat?.nume}</p>
          {hoveredUat?.date && (
            <>
              {hoveredUat.date.populatie && (
                <>
                  <span>Populatie: {hoveredUat.date.populatie}</span> <br />
                </>
              )}
              {hoveredUat.date.status && (
                <>
                  <span>Status: {hoveredUat.date.status}</span> <br />
                </>
              )}
              {hoveredUat.date.mail && (
                <a
                  href={`mailto:${hoveredUat.date.mail}?subject=${MAIL_TO_SUBJECT}&body=${MAIL_TO_BODY}`}
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
                  Scrie primariei {hoveredUat.nume}
                </a>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
