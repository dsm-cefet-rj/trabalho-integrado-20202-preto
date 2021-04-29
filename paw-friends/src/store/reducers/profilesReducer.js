import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import { httpDelete, httpGet, httpPut, httpPost } from '../utils'
import {baseUrl} from './baseUrl';

const profilesAdapter = createEntityAdapter();

const initialState = profilesAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

export const fetchProfiles = createAsyncThunk('profiles/fetchProfiles', async (_,{getState}) => {
    return await httpGet(`${baseUrl}/profiles`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const deleteProfileServer = createAsyncThunk('profiles/deleteProfileServer', async (id, {getState}) => {
    await httpDelete(`${baseUrl}/profiles/${id}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    return id;
});

export const addProfileServer = createAsyncThunk('profiles/addProfileServer', async (profile, {getState}) => {
    return await httpPost(`${baseUrl}/profiles`, profile, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const updateProfileServer = createAsyncThunk('profiles/updateProfileServer', async (profile, {getState}) => {
    return await httpPut(`${baseUrl}/profiles/${profile.id}`, profile, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

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