import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../../../helper/RestClient";

const initialState = {
  loading: false,
  error: null,
  success: false,
  data: {},
};

export const login = createAsyncThunk(
  "login",
  async (values, { rejectWithValue }) => {
    try {
      const response = await api.login(values);
      if (response) {
        const data = response.data;

        return data;
      }
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error || "Something went wrong";
      });
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
