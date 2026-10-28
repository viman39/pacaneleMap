import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { County, CountyDTO, UatDTO } from "./types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getCounties: builder.query<County[], void>({
      query: () => "/counties",
      transformResponse: (counties: CountyDTO[]): County[] =>
        counties.map((county) => ({
          ...county,
          countyScore: Math.ceil(
            (county?.slotsStatusSum / (county?.uatsOver15000Count * 4)) * 100,
          ),
        })),
    }),
    getUatsByCounty: builder.query<UatDTO[], { countyId: number }>({
      query: (params) => `/uats?countyId=${params?.countyId}`,
    }),
  }),
});

export const { useGetCountiesQuery, useGetUatsByCountyQuery } = apiSlice;
