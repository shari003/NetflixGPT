import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
        movieInfo: {
            movieDetails: null,
            castInfo: null,
            trailer: null
        },
    }, 
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMovieInfo: (state, action) => {
            state.movieInfo.movieDetails = action.payload;
        },
        addCastInfo: (state, action) => {
            state.movieInfo.castInfo = action.payload;
        },
        addMovieTrailers: (state, action) => {
            state.movieInfo.trailer = action.payload;
        },
        removeMovieInfo: (state) => {
            state.movieInfo.movieDetails = null;
            state.movieInfo.castInfo = null;
            state.movieInfo.trailer = null;
        }
    }
});

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addMovieInfo, removeMovieInfo, addMovieTrailers, addCastInfo, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;