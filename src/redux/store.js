import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/api';

const store = configureStore({
    reducer: {
        api: apiReducer,
    }
});

export default store;