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
  totalUAT?: number;
  interziseUAT?: number;
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

  const date = useMemo(() => {
    const judete =
      data &&
      data.map((j) => {
        return {
          ...j,
          totalUATValide: j.UATs?.filter((u) => u?.date?.populatie > 15000)
            ?.length,
          totalUATInterzise: j.UATs?.filter((u) => u?.date?.status === 4)
            ?.length,
        };
      });

    const [totalUAT, interziseUAT] = judete
      ? judete.reduce(
          (prev, curr) => [
            prev[0] + (curr?.totalUATValide || 0),
            prev[1] + (curr?.totalUATInterzise || 0),
          ],
          [0, 0],
        )
      : [0, 0];

    return {
      judete,
      totalUAT,
      interziseUAT,
    };
  }, [data]);

  return <DataContext.Provider value={date}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};
