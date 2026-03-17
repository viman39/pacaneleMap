import { createContext, useContext, useState, type ReactNode } from "react";

interface UATContext {
  selectedUat: any;
  setSelectedUat: (uat: any) => void;
  hoveredUat: any;
  setHoveredUat: (uat: any) => void;
}

const UatContext = createContext<UATContext>({
  selectedUat: undefined,
  setSelectedUat: () => {},
  hoveredUat: undefined,
  setHoveredUat: () => {},
});

export const UatContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUat, setSelectedUat] = useState<any>(undefined);
  const [hoveredUat, setHoveredUat] = useState<any>(undefined);

  return (
    <UatContext.Provider
      value={{ selectedUat, setSelectedUat, hoveredUat, setHoveredUat }}
    >
      {children}
    </UatContext.Provider>
  );
};

export const useUatContext = () => {
  const context = useContext(UatContext);
  if (!context) {
    throw new Error("useUatContext must be used within a UatProvider");
  }
  return context;
};
