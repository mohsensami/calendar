import { configureStore } from '@reduxjs/toolkit';
import { blogsApi } from './services/blogsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [blogsApi.reducerPath]: blogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(blogsApi.middleware),
});

setupListeners(store.dispatch);
