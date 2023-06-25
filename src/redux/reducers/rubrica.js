import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rubrica: [],
};

const rubricaSlice = createSlice({
  name: 'rubrica',
  initialState,
  reducers: {
    setRubrica: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.rubrica.find(item => item.id === id);
      if (existingItem) {
        console.log("Esisto già");
        return;
      } else {
        state.rubrica.push(action.payload);
      }
    },
  },
});

export const { setRubrica } = rubricaSlice.actions;
export default rubricaSlice.reducer;
