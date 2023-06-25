import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    open: false,
};

const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.open = !state.open;
        }
    }
});

export const { toggleOpen } = openSlice.actions;
export default openSlice.reducer;
