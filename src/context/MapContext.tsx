import { createContext, useContext, useState, type ReactNode } from "react";
import type { County } from "../app/types";

interface MapContext {
  selectedUat: any;
  setSelectedUat: (uat: any) => void;
  hoveredUat: any;
  setHoveredUat: (uat: any) => void;
  hoveredJudet: any;
  setHoveredJudet: (judet: any) => void;
  selectedJudet: any;
  setSelectedJudet: (judet: any) => void;
  hoveredCounty: County | undefined;
  setHoveredCounty: (county: County | undefined) => void;
  selectedCounty: County | undefined;
  setSelectedCounty: (county: County | undefined) => void;
}

const MapContext = createContext<MapContext>({
  selectedUat: undefined,
  setSelectedUat: () => {},
  hoveredUat: undefined,
  setHoveredUat: () => {},
  hoveredJudet: undefined,
  setHoveredJudet: () => {},
  selectedJudet: undefined,
  setSelectedJudet: () => {},
  selectedCounty: undefined,
  setSelectedCounty: () => {},
  hoveredCounty: undefined,
  setHoveredCounty: () => {},
});

export const MapContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUat, setSelectedUat] = useState<any>(undefined);
  const [hoveredUat, setHoveredUat] = useState<any>(undefined);
  const [hoveredJudet, setHoveredJudet] = useState<any>(undefined);
  const [selectedJudet, setSelectedJudet] = useState<any>(undefined);
  const [selectedCounty, setSelectedCounty] = useState<County | undefined>(
    undefined,
  );
  const [hoveredCounty, setHoveredCounty] = useState<County | undefined>(
    undefined,
  );

  return (
    <MapContext.Provider
      value={{
        selectedUat,
        setSelectedUat,
        hoveredUat,
        setHoveredUat,
        hoveredJudet,
        setHoveredJudet,
        selectedJudet,
        setSelectedJudet,
        selectedCounty,
        setSelectedCounty,
        hoveredCounty,
        setHoveredCounty,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapContextProvider");
  }
  return context;
};
