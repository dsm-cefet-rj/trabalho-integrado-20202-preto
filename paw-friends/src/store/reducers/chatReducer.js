import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { httpGet, httpPost } from '../utils';

//entity adapter
const chatsAdapter = createEntityAdapter();

//url base
const baseUrl = '/chats';

//estado inicial
const initialState = chatsAdapter.getInitialState({
        status: 'not_loaded',
        error: null
});

//reducer do fetch
export const fetchChats = createAsyncThunk('chats/fetchChats', async (_, {getState}) => {
        return await httpGet(`${baseUrl}`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
    }
);

//reducer para adicionar um chat
export const addChatServer = createAsyncThunk('chats/addChatServer', async (chat, {getState}) => {
    return await httpPost(`${baseUrl}`, chat, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
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