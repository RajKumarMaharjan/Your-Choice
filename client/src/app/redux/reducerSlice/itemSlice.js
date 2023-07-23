import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentSelectedItem: {},
  isItemFromOpen:false
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, actions) => {
     return {
       ...state,
       currentSelectedItem: actions.payload
     }
    },
    setItemFormOpen: (state, actions) => {
      return {
        ...state,
        setItemFormOpen: !state.isItemFromOpen
      }
     },
  }
});



export const { setItem, setItemFormOpen } = itemSlice.actions;
export default itemSlice.reducer;