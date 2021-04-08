import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost } from '../utils'

const profilesAdapter = createEntityAdapter();

const baseUrl = 'http://localhost:8000/profiles';

const initialState = profilesAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchProfiles = createAsyncThunk('projetos/fetchProfiles', async () => {
    return await httpGet(`${baseUrl}`);
});

export const deleteProfileServer = createAsyncThunk('projetos/deleteProfileServer', async (id) => {
    await httpDelete(`${baseUrl}/${id}`);
    return id;
});

export const addProfileServer = createAsyncThunk('projetos/addProfileServer', async (profile) => {
    return await httpPost(`${baseUrl}`, profile);
});

export const updateProfileServer = createAsyncThunk('projetos/updateProfileServer', async (profile) => {
    return await httpPut(`${baseUrl}/${profile.id}`, profile);
});


function fullfillProfilesReducer(profilesState, profilesFetched){
    profilesState.status = 'loaded';
    profilesState.profiles = profilesFetched;
}


export const profilesSlice = createSlice({
    name: 'profiles',
    initialState: initialState,
    extraReducers: {
        [fetchProfiles.pending]: (state) => {state.status = 'loading'},
        [fetchProfiles.fulfilled]: (state, action) => {
            state.status = 'loaded';
            profilesAdapter.setAll(state, action.payload);
        }, 
        [fetchProfiles.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
        
        [deleteProfileServer.pending]: (state) => {state.status = 'loading'},
        [deleteProfileServer.fulfilled]: (state, action) => {state.status = 'deleted'; profilesAdapter.removeOne(state, action.payload);},

        [addProfileServer.pending]: (state) => {state.status = 'loading'},
        [addProfileServer.fulfilled]: (state, action) => {state.status = 'saved'; profilesAdapter.addOne(state, action.payload);},

        [updateProfileServer.pending]: (state) => {state.status = 'loading'},
        [updateProfileServer.fulfilled]: (state, action) => {state.status = 'saved'; profilesAdapter.upsertOne(state, action.payload);},
        [updateProfileServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    }

})

export default profilesSlice.reducer


export const {
    selectAll: selectAllProfiles,
    selectById: selectProfilesById,
    selectIds: selectProfilesIds
} = profilesAdapter.getSelectors(state => state.profiles);