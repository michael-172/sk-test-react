import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk(
  "Skapluie/getServices",
  async (_, thunkAPI) => {
    const response = await fetch(
      "http://freejob-001-site1.atempurl.com/api/services"
    );
    const res = await response.json();
    return res;
  }
);

export const getService = createAsyncThunk(
  "Skapluie/getService",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `http://freejob-001-site1.atempurl.com/api/services/${id}`
      );
      const res = await response.json();
      return res;
    } catch (error) {
      throw Error();
    }
  }
);

// create a slice
export const serviceSlice = createSlice({
  name: "services",
  initialState: { services: [], service: {} },
  extraReducers: {
    [getServices.pending]: (state, action) => {},
    [getServices.fulfilled]: (state, action) => {
      state.services = action.payload;
    },
    [getService.fulfilled]: (state, action) => {
      state.service = action.payload;
    },
    [getService.rejected]: (state, action) => {
      console.log("Error");
    },
  },
});

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: { scroll: false, scrollTo: 0 },
  reducers: {
    scrolled(state) {
      state.scroll = true;
    },
    notScrolled(state) {
      state.scroll = false;
    },
  },
});

/******************************************************* */
// config the store
const store = configureStore({
  reducer: {
    scrolling: scrollSlice.reducer,
    services: serviceSlice.reducer,
  },
});

// export the action
export const { scrolled, notScrolled, scrollToPoint } = scrollSlice.actions;
export const servicesActions = serviceSlice.actions;

// export default the store
export default store;
