import { configureStore } from "@reduxjs/toolkit";

// import slice
import HamburgerMenuReducer from "./slices/HamburgerMenu/HamburgerMenu";
import CommentsReducer from "./slices/Comments/Comments";


const Reducers={
  hamburgerMenu: HamburgerMenuReducer,
  comments: CommentsReducer,
}
export const store = configureStore({
  reducer: Reducers,
  
});
export type ReducersTypes = ReturnType<typeof store.getState>
