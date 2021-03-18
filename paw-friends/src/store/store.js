/* import { createStore } from 'redux';



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store; */

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/index';

export default configureStore({
    reducer: reducer,
  })