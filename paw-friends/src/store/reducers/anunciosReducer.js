import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'

//entity adapter
const anunciosAdapter = createEntityAdapter();

//estado inicial dos anuncios
const initialAnuncios = anunciosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

//pega dados com thunk
export const fetchAnuncios = createAsyncThunk('anuncios/fetchAnuncios', async () => {
    return await httpGet(`http://localhost:8000/anuncios`);
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
        [fetchAnuncios.pending]: (state, action) => {state.status = 'loading'},
        [fetchAnuncios.fulfilled]: (state, action) => {
            state.status = 'loaded';
            anunciosAdapter.setAll(state, action.payload);
        }, 
        [fetchAnuncios.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        
    }
})

export const { setKeyAnuncioAtual } = anunciosSlice.actions;

export const {
    selectAll: selectAllAnuncios,
    selectById: selectAnunciosById,
    selectIds: selectAnunciosIds
} = anunciosAdapter.getSelectors(state => state.anuncios);

export default anunciosSlice.reducer;