import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../../helper/RestClient";

const initialState = {
  loading: false,
  error: null,
  success: false,
  data: {},
};

export const signUp = createAsyncThunk(
  "signUp",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const response = await api.signUp(values);
      if (response) {
        const data = response.data;

        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setSignUp: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error || "Something went wrong";
      });
  },
});

export const { setSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
