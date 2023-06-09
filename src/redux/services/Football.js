import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your API endpoints here
export const footballApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.football-data.org/v4/competitions", prepareHeaders: (headers, { getState }) => {
    headers.set("X-Auth-Token", "cec25609216f4f90acf135c97565d6af");
    // headers.set("Access-Control-Allow-Methods", "GET")
    // headers.set("Access-Control-Allow-Origin", "*")
    return headers;
} }),
  endpoints: (builder) => ({
    // Define your endpoints here
    getLeagueTable: builder.query({
      query: (league) => `${league}/standings`,
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetLeagueTableQuery } = footballApi;