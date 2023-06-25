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
    getAllArticles: builder.query({
      query: () => `articles`,
    }),
    getArticlesByLeague: builder.query({
      query: (id) => `article/${id}`,
    }),
    getUser: builder.query({
      query: () => ({
        url: `auth/me`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }),
      cacheTime: 86400000,
    }),
    getLeagueFixtures: builder.query({
      query: (league, round) => `fixtures/${league?.toLowerCase()}/${round ? round : "current"}`,
    }),
    getFixturesById: builder.query({
      query: (id) => ({
        url: `fixture/${id}/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }),
    }),
    getRelatedArticles: builder.query({
      query: (id) => ({
        url: `articles/tag/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }),
    }),
    getArticleById: builder.query({
      query: (id) => ({
        url: `articles/fixture/${id}/`,
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`
        // }
      }),
      providesTags: ["Article"]
    }),
    login: builder.mutation({
        query: (body)=> ({
            method: "POST",
            body,
            url: "auth/login",
        })
    }),
    postArticle: builder.mutation({
      query: ({id, formdata})=> ({
          method: "POST",
          body: formdata,
          url: `articles/${id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
      })
    }),
    updateArticle: builder.mutation({
      query: ({id, formdata})=> ({
          method: "PUT",
          body: formdata,
          url: `articles/${id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
      }),
      invalidatesTags: ["Article"]
  })
  }),
});

// Export the generated hooks for each endpoint
export const { useGetArticlesByLeagueQuery, useGetRelatedArticlesQuery, useUpdateArticleMutation, useGetAllArticlesQuery, useGetArticleByIdQuery, useGetLeagueTableQuery, useGetLeagueFixturesQuery, useLoginMutation, useGetUserQuery, useGetFixturesByIdQuery, usePostArticleMutation } = footballApi;