import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const initialState = {
  param: "",
  data2: "",
  isLoading2: false,
};

export const fetchdatainput = createAsyncThunk(
  'fetchdatainput',
  async (param) => {
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${param}`);
    return res.json();
  }
);

export const randominputslice = createSlice({
  name: 'randominput',
  initialState,
  reducers: {
    setparam: (state, action) => {
      state.param = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdatainput.fulfilled, (state, action) => {
        state.isLoading2 = false;
        state.data2 = action.payload; // Note this should match your selector in the component
      })
      .addCase(fetchdatainput.pending, (state) => {
        state.isLoading2 = true;
      })
      .addCase(fetchdatainput.rejected, (state) => {
        state.isLoading2 = false;
      });
  }
});

export const { setparam } = randominputslice.actions;

export default randominputslice.reducer;
