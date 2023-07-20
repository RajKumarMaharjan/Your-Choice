import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  Address: {  
    lat: 27.685222,
    lng: 85.345017
  }
};

const locationSlice = createSlice({
  name: "location",
  initialState,
});



export const {Address} = locationSlice.actions;
export default locationSlice.reducer;
