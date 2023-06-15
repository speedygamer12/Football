import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define your API endpoints here
export const footballApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://football-preview.onrender.com", prepareHeaders: (headers, { getState }) => {
    headers.set("X-Auth-Token", "cec25609216f4f90acf135c97565d6af");
    return headers;
} }),
  endpoints: (builder) => ({
    // Define your endpoints here
    getLeagueTable: builder.query({
      query: (league) => `standings/${league}`,
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetLeagueTableQuery } = footballApi;