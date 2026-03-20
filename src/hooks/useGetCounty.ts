import { useNavigate, useParams } from "react-router-dom";
import { judete } from "../data/romania-counties";
import type { Judet } from "../data/types";
import { useEffect } from "react";

export const useGetCounty = (): Judet | undefined => {
  const { countyName } = useParams<{ countyName: string }>();
  const navigate = useNavigate();

  const findJudet = countyName
    ? judete.find((j) => j.id.toLowerCase() === countyName.toLowerCase())
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
