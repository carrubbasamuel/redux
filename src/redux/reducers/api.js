import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = apiSlice.actions;
export default apiSlice.reducer;
