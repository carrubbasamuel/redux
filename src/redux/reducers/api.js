import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

export const fetchApi = createAsyncThunk('api/fetchApi', async () => {
  const response = await fetch('https://dummyjson.com/users');
  const json = await response.json();
  return json.users;
});



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
    toggleLoading: (state) => {
      state.loading = !state.loading;
    }
  },
});


export const { setData, toggleDesc, toggleImg, toggleLoading } = apiSlice.actions;
export default apiSlice.reducer;
