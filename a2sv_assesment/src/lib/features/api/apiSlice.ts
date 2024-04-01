import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HospitalType } from "../hospital/type";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hakimhub-api-dev-wtupbmwpnq-uc.a.run.app/api/",
  }),
  endpoints: (builder) => ({
    getHospitalData: builder.query<any, void>({
      query: () => ({
        url: "v1/search?institutions=true&articles=false&doctors=false",
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const { useGetHospitalDataQuery } = apiSlice;
