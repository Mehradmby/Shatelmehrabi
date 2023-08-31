import { createSlice } from "@reduxjs/toolkit";

export const HamburgerMenuReducer = createSlice({
  name: "HamburgerMenu",
  initialState: {
   isOpen:false
  },
  reducers: {
    setToggleHamMenu: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setToggleHamMenu } =
HamburgerMenuReducer.actions;

export default HamburgerMenuReducer.reducer;
