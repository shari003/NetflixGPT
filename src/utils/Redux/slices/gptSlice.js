/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieData: null,
        gptLoading: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        disableGptSearchView: (state) => {
            state.showGptSearch = false;
        },
        addGptMovies: (state, action) => {
            const {movieNames, movieData} = action.payload;
            state.movieNames = movieNames;
            state.movieData = movieData;
        },
        removeGptMovies: (state) => {
            state.movieData = null;
            state.movieNames = null;
        },
        setGptLoading: (state, action) => {
            state.gptLoading = action.payload;
        }
    }
});

export const {toggleGptSearchView, addGptMovies, removeGptMovies, disableGptSearchView, setGptLoading} = gptSlice.actions;

export default gptSlice.reducer;