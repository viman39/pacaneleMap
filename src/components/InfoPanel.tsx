import { useUatContext } from "../context/UatContext";

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
                <span>Populatie: {hoveredUat.date.populatie}</span>
              )}
              {hoveredUat.date.status && (
                <span>Status: {hoveredUat.date.status}</span>
              )}
              {hoveredUat.date.mail && (
                <a
                  href="mailto:primariaiasi@gmail.com?subject=Jos%20Pacanele!%20&amp;body=Lorem%20ipsum%20dolor%20sit%20amet%20consectetur%20adipiscing%20elit%20quisque%20faucibus%20ex%20sapien%20vitae%20pellentesque%20sem%20placerat%20in%20id%20cursus%20mi%20pretium%20tellus%20duis%20convallis%20tempus%20leo%20eu%20aenean%20sed%20diam%20urna%20tempor%20pulvinar%20vivamus%20fringilla%20lacus%20nec%20metus%20bibendum%20egestas%20iaculis%20massa%20nisl%20malesuada%20lacinia%20integer%20nunc%20posuere%20ut%20hendrerit%20semper%20vel%20class%20aptent%20taciti%20sociosqu%20ad%20litora%20torquent%20per%20conubia%20nostra%20inceptos%20himenaeos%20orci%20varius%20natoque%20penatibus%20et%20magnis%20dis%20parturient%20montes%20nascetur%20ridiculus%20mus%20donec%20rhoncus%20eros%20lobortis%20nulla%20molestie%20mattis%20scelerisque%20maximus%20eget%20fermentum%20odio%20phasellus%20non%20purus%20est%20efficitur%20laoreet%20mauris%20pharetra%20vestibulum%20fusce%20dictum%20risus%20blandit%20quis%20suspendisse%20aliquet%20nisi%20sodales%20consequat%20magna%20ante%20condimentum%20neque%20at%20luctus%20nibh%20finibus%20facilisis%20dapibus%20etiam%20interdum%20tortor%20ligula%20congue%20sollicitudin%20erat%20viverra%20ac%20tincidunt%20nam%20porta%20elementum%20a%20enim%20euismod%20quam%20justo%20lectus%20commodo%20augue%20arcu%20dignissim%20velit%20aliquam%20imperdiet%20mollis%20nullam%20volutpat%20porttitor%20ullamcorper%20rutrum%20gravida."
                  style={{
                    display: "inline-block",
                    color: "rgb(26,115,232)",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "16px",
                    padding: "6px 12px",
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
