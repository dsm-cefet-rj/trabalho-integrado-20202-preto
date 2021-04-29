import { combineReducers } from 'redux'
import anuncios from './anunciosReducer';
import profiles from './profilesReducer';
import chats from './chatReducer';
import logins from './loginReducer';

export default combineReducers({
    anuncios, profiles, chats, logins
})
