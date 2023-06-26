import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers/api';
import rubricaReducer from './reducers/rubrica';


const store = configureStore({
    reducer: {
        api: apiReducer,
        rubrica: rubricaReducer,
    }
});

export default store;