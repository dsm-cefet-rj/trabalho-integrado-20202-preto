import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { httpDelete, httpGet, httpPut, httpPost } from '../utils'
import {baseUrl} from './baseUrl'

//entity adapter
const anunciosAdapter = createEntityAdapter();

//estado inicial dos anuncios
const initialAnuncios = anunciosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

//funções crud para o entity adapter
export const fetchAnuncios = createAsyncThunk('anuncios/fetchAnuncios', async (_, {getState}) => {
    console.log(getState());
    return await httpGet(`${baseUrl}/anuncios`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteAnuncioServer = createAsyncThunk('anuncios/deleteAnuncioServer', async (id, {getState}) => {
    await httpDelete(`${baseUrl}/anuncios/${id}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return id;
});

export const addAnuncioServer = createAsyncThunk('anuncios/addAnuncioServer', async (anuncio, {getState}) => {
    return await httpPost(`${baseUrl}/anuncios`, anuncio, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateAnuncioServer = createAsyncThunk('anuncios/updateAnuncioServer', async (anuncio, {getState}) => {
    return await httpPut(`${baseUrl}/anuncios/${anuncio.id}`, anuncio, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});


export const anunciosSlice = createSlice({
    name: 'anuncios',
    initialState: initialAnuncios,
    reducers: {
        setKeyAnuncioAtual: (state, action) => ({ ...state, keyAnuncioAtual: action.payload }),
    },
    extraReducers: {
        [fetchAnuncios.pending]: (state) => {state.status = 'loading'},
        [fetchAnuncios.fulfilled]: (state, action) => {
            state.status = 'loaded';
            anunciosAdapter.setAll(state, action.payload);
        }, 
        [fetchAnuncios.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

        [deleteAnuncioServer.pending]: (state) => {state.status = 'loading'},
        [deleteAnuncioServer.fulfilled]: (state, action) => {state.status = 'deleted'; anunciosAdapter.removeOne(state, action.payload);},

        [addAnuncioServer.pending]: (state) => {state.status = 'loading'},
        [addAnuncioServer.fulfilled]: (state, action) => {state.status = 'saved'; anunciosAdapter.addOne(state, action.payload);},

        [updateAnuncioServer.pending]: (state) => {state.status = 'loading'},
        [updateAnuncioServer.fulfilled]: (state, action) => {state.status = 'saved'; anunciosAdapter.upsertOne(state, action.payload);},
        [updateAnuncioServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    }
})

export const { setKeyAnuncioAtual } = anunciosSlice.actions;

export const {
    selectAll: selectAllAnuncios,
    selectById: selectAnunciosById,
    selectIds: selectAnunciosIds
} = anunciosAdapter.getSelectors(state => state.anuncios);

export default anunciosSlice.reducer;