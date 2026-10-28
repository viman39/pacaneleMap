import type { CountyDTO } from "../app/types";
import { useGetCountiesQuery } from "../app/apiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useGetCounty = (countySlug?: string): CountyDTO | undefined => {
  const {
    data: counties,
    isLoading,
    isError,
    isSuccess,
  } = useGetCountiesQuery();
  const navigate = useNavigate();

  const countyFound =
    (!isLoading &&
      !isError &&
      counties?.find((county) => county?.slug === countySlug?.toLowerCase())) ||
    undefined;

  useEffect(() => {
    if (countySlug && isSuccess && !countyFound) {
      navigate("/", { replace: true });
    }
  }, [countySlug, isSuccess, countyFound]);

  return countyFound;
};
