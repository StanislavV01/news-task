import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { News } from "../../types/News";


const _baseUrl = 'https://newsapi.org/v2';
const _apiKey = '432330848c6e437e98699fc44c656771';

export const getNews = createAsyncThunk(
    "news/getNews",
    async (size: number) => {

        const response = await axios.get(`${_baseUrl}/top-headlines?country=ua&apiKey=${_apiKey}&pagesize=${size}`)

        return response.data.articles as News[];

    }
);

interface PostState {
    loading: boolean;
    error: string | null;
    data: News[] | null;
}

const initialState = {
    loading: false,
    error: null,
    data: null,
} as PostState;

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNews.fulfilled, (state, action: PayloadAction<News[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getNews.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
            });
    },
});

export default newsSlice.reducer;

