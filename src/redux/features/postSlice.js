import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPost = createAsyncThunk('post/getPost', async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
});

export const getPosts = createAsyncThunk('post/getPosts', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
});

export const deletePost = createAsyncThunk('post/deletePost', async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' }).then((res) => res.json());
});

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getPost.pending]: (state, action) => {
            state.loading = true;
        },
        [getPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload][0];
        },
        [getPost.rejected]: (state, action) => {
            state.loading = false;
            state.erorr = action.payload;
        },

        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = [action.payload][0];
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
            state.erorr = action.payload;
        },

        [deletePost.pending]: (state, action) => {
            state.loading = true;
        },
        [deletePost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [deletePost.rejected]: (state, action) => {
            state.loading = false;
            state.erorr = action.payload;
        },
    },
});

export default postSlice.reducer;
