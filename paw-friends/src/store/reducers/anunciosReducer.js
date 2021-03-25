import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import {httpDelete, httpGet, httpPut, httpPost} from '../utils'

const baseUrl = 'http://localhost:8000/anuncios';

//entity adapter
const anunciosAdapter = createEntityAdapter();

//estado inicial dos anuncios
const initialAnuncios = anunciosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

//funções crud para o entity adapter
export const fetchAnuncios = createAsyncThunk('anuncios/fetchAnuncios', async () => {
    return await httpGet(`${baseUrl}`);
});

export const deleteAnunciosServer = createAsyncThunk('anuncios/deleteAnunciosServer', async (id) => {
    await httpDelete(`${baseUrl}/${id}`);
    return id;
});

export const addAnunciosServer = createAsyncThunk('anuncios/addAnunciosServer', async (anuncio) => {
    return await httpPost(`${baseUrl}/`, anuncio);
});

export const updateAnunciosServer = createAsyncThunk('anuncios/updateAnunciosServer', async (anuncio) => {
    return await httpPut(`${baseUrl}/${anuncio.id}`, anuncio);
});

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

        [deleteAnunciosServer.pending]: (state, action) => {state.status = 'loading'},
        [deleteAnunciosServer.fulfilled]: (state, action) => {state.status = 'deleted'; anunciosAdapter.removeOne(state, action.payload);},

        [addAnunciosServer.pending]: (state, action) => {state.status = 'loading'},
        [addAnunciosServer.fulfilled]: (state, action) => {state.status = 'saved'; anunciosAdapter.addOne(state, action.payload);},

        [updateAnunciosServer.pending]: (state, action) => {state.status = 'loading'},
        [updateAnunciosServer.fulfilled]: (state, action) => {state.status = 'saved'; anunciosAdapter.upsertOne(state, action.payload);},
        [updateAnunciosServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    }
})

export const { setKeyAnuncioAtual } = anunciosSlice.actions;

export const {
    selectAll: selectAllAnuncios,
    selectById: selectAnunciosById,
    selectIds: selectAnunciosIds
} = anunciosAdapter.getSelectors(state => state.anuncios);

export default anunciosSlice.reducer;