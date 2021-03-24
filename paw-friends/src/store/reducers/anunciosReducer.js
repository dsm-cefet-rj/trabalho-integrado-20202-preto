import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialAnuncios = {
    status: 'not_loaded',
    anunciosObjs:[],
    error: null
};

export const fetchAnuncios = createAsyncThunk('anuncios/fetchAnuncio',
    async () => {
        return await (await fetch('http://localhost:8000/anuncios')).json();
    });


function fullfillAnunciosReducer(anunciosState, anunciosFetched) {
    anunciosFetched.status = 'loaded';
    return anunciosFetched;
};

export const anunciosSlice = createSlice({
    name: 'anuncios',
    initialState: initialAnuncios,
    reducers: {
        setKeyAnuncioAtual: (state, action) => ({ ...state, keyAnuncioAtual: action.payload }),
    },
    extraReducers: {
        [fetchAnuncios.fulfilled]: (state, action) => fullfillAnunciosReducer(state, action.payload),
        [fetchAnuncios.pending]: (state, action) => {state.status = 'loading'},
        [fetchAnuncios.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        
    }
})

export const { setKeyAnuncioAtual } = anunciosSlice.actions

export default anunciosSlice.reducer