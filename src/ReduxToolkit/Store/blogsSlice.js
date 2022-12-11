import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogs = createAsyncThunk(
  "Skapluie/getBlogs",
  async (_, thunkAPI) => {
    const response = await fetch(
      "http://abnuur-001-site1.btempurl.com/api/Blogs"
    );
    const res = await response.json();
    return res;
  }
);

export const blogsSlice = createSlice({
  name: "blogs",
  initialState: { blogs: [] },
  extraReducers: {
    [getBlogs.pending]: (state, action) => {},
    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
    },
  },
});
export default blogsSlice.reducer;
