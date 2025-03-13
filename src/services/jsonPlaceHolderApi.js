import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceHolderApi = createApi({
  reducerPath: "jsonPlaceHolderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["post"], //* define that tage
  //   keepUnusedDataFor:20, // after 20 seconds, data will be removed if not used by component
  refetchOnFocus: true, //after using other tabs, if this project tab is focused then it will refetch the data.
  endpoints: (builder) => ({
    // fetch post
    getPosts: builder.query({
      query: (id) => `posts`,
      providesTags: ["posts"], //* provide tag to cache
    }),
    createPosts: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["posts"], //* invalidate tag or trigger refetch;
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostsMutation } = jsonPlaceHolderApi;
