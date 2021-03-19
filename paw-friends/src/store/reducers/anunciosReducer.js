import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialAnuncios = {anunciosObjs:[]};

export const fetchAnuncios = createAsyncThunk('anuncios/fetchAnuncio',
    async () => {
        return await (await fetch('http://localhost:8000/anuncios')).json();
    });


function fullfillAnunciosReducer(initialState, anunciosFetched) {
    return anunciosFetched;
}

export const anunciosSlice = createSlice({
    name: 'anuncios',
    initialState: initialAnuncios,
    reducers: {
        setKeyAnuncioAtual: (state, action) => ({ ...state, keyAnuncioAtual: action.payload }),
    },
    extraReducers: {
        [fetchAnuncios.fulfilled]: (state, action) => fullfillAnunciosReducer(state, action.payload),
    }
})

export const { setKeyAnuncioAtual } = anunciosSlice.actions

export default anunciosSlice.reducer