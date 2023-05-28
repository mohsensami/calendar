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

export const createPost = createAsyncThunk('post/createPost', async ({ values }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: values.title,
            body: values.body,
        }),
    }).then((res) => res.json());
});

export const updatePost = createAsyncThunk('post/updatePost', async ({ id, body, title }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title,
            body,
        }),
    }).then((res) => res.json());
});

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post: [],
        loading: false,
        error: null,
        body: '',
        title: '',
        edit: false,
    },

    reducers: {
        setEdit: (state, action) => {
            state.edit = action.payload.edit;
            state.body = action.payload.body;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = [action.payload][0];
            })
            .addCase(getPost.rejected, (state, action) => {
                state.loading = false;
                state.erorr = action.payload;
            })

            .addCase(getPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = [action.payload][0];
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.erorr = action.payload;
            })

            .addCase(deletePost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                state.erorr = action.payload;
            })

            .addCase(createPost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = [action.payload];
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                state.erorr = action.payload;
            })

            .addCase(updatePost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = [action.payload];
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
                state.erorr = action.payload;
            });
    },
});

export const { setEdit } = postSlice.actions;

export default postSlice.reducer;
