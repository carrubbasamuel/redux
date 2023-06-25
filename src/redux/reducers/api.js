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
    toggleDesc: (state, action) => {
      const index = action.payload - 1;
      state.data[index].isDescrizioneAperta = !state.data[index].isDescrizioneAperta;
    },
    toggleImg: (state, action) => {
      const index = action.payload - 1;
      state.data[index].isImgAperta = !state.data[index].isImgAperta;
    },
  },
});

export const { setData, toggleDesc, toggleImg } = apiSlice.actions;
export default apiSlice.reducer;
