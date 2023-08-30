/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieData: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state, action) => {
            const {movieNames, movieData} = action.payload;
            state.movieNames = movieNames;
            state.movieData = movieData;
        }
    }
});

export const {toggleGptSearchView, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;