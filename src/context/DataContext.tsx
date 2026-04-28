import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Judet } from "../data/types";

interface DataContext {
  judete?: Judet[];
}

const defaultDataContext: DataContext = {};

const DataContext = createContext<DataContext>(defaultDataContext);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Judet[] | undefined>(undefined);

  useEffect(() => {
    fetch("/src/data/romania-counties.json")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => setData(res?.data));
  }, []);

  const processedJudete = useMemo(() => {
    console.log("calc judete", data);
    return data;
  }, [data]);

  return (
    <DataContext.Provider value={{ judete: processedJudete }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};
