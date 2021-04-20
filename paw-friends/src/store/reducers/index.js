import { combineReducers } from 'redux'
import anuncios from './anunciosReducer';
import profilesReducer from './profilesReducer';
import chatReducer from './chatReducer';

export default combineReducers({
    anuncios, profiles: profilesReducer, chats: chatReducer,
})
