import { combineReducers } from 'redux'
import anuncios from './anunciosReducer';
import profilesReducer from './profilesReducer';

export default combineReducers({
    anuncios, profiles: profilesReducer,
})
