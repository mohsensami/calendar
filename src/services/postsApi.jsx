import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Contact } from "../model/contact.model";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    posts: builder.query({
      query: () => "/posts",
      providesTags: ["Post"],
    }),
    post: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["Post"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useDeletePostMutation,
  useAddPostMutation,
  useUpdatePostMutation,
} = postsApi;
