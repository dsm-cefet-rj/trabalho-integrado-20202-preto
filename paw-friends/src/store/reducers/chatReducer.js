import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { httpGet, httpPost } from '../utils';

const chatsAdapter = createEntityAdapter();

const baseUrl = '/chats';

const initialState = chatsAdapter.getInitialState({
        status: 'not_loaded',
        error: null
});

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
        return await httpGet(`${baseUrl}`);
    }
);

export const addChatServer = createAsyncThunk('chats/addChatServer', async (chat) => {
    return await httpPost(`${baseUrl}`, chat);
});

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: initialState,
    extraReducers: {
        [fetchChats.fulfilled]: (state, action) => {state.status = 'loaded'; chatsAdapter.setAll(state, action.payload);},
        [fetchChats.pending]: (state, action) => {state.status = 'loading'},
        [fetchChats.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message },
        [addChatServer.fulfilled]: (state,action) => {state.status='saved'},
        [addChatServer.pending]: (state,action) => {state.status='loading'},
    },

})

export const {selectAll: selectAllChats} = chatsAdapter.getSelectors(state => state.chats);
export default chatsSlice.reducer;