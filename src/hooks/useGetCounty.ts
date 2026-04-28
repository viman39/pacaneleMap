import { useNavigate, useParams } from "react-router-dom";
import type { Judet } from "../data/types";
import { useEffect } from "react";
import { useDataContext } from "../context/DataContext";

export const useGetCounty = (): Judet | undefined => {
  const { judete } = useDataContext();
  const { countyName } = useParams<{ countyName: string }>();
  const navigate = useNavigate();

  const findJudet = countyName
    ? judete?.find((j) => j.id.toLowerCase() === countyName.toLowerCase())
    : undefined;

  useEffect(() => {
    return () => {
      if (countyName && !findJudet) {
        navigate("/", { replace: true });
      }
    };
  }, [countyName]);

  return findJudet;
};
