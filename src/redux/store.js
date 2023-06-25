import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/api';
import openReducer from './reducers/open';



const store = configureStore({
    reducer: {
        api: apiReducer,
    }
});

export default store;