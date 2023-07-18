import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getBlogs: builder.query({
            queryFn() {
                return { data: 'Ok' };
            },
        }),
    }),
});

export const { useGetBlogsQuery } = blogsApi;
