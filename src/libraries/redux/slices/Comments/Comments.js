import { createSlice } from "@reduxjs/toolkit";
import CommentsData from "../../../../constant/Comments.json"
export const CommentsReducer = createSlice({
  name: "Comments",
  initialState: {
   data:CommentsData
  },
  reducers: {
    setNewComment: (state, action) => {
      state.data = [action.payload,...state.data];
    },
  },
});

export const { setNewComment } =
CommentsReducer.actions;

export default CommentsReducer.reducer;
