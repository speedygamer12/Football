import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your API endpoints here
export const footballApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://football-preview.onrender.com" }),
  endpoints: (builder) => ({
    // Define your endpoints here
    getLeagueTable: builder.query({
      query: (league) => `standings/${league}`,
    }),
    getLeagueFixtures: builder.query({
      query: (league, round) => `fixtures/${league?.toLowerCase()}/${round ? round : "current"}`,
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetLeagueTableQuery, useGetLeagueFixturesQuery } = footballApi;