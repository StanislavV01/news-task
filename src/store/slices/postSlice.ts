import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Post } from "../../types/Post";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (limit: number) => {

        const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

        return response.data;

    }
);

interface PostState {
    loading: boolean;
    error: string | null;
    data: Post[] | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null,
} as PostState;

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});

export default postSlice.reducer;