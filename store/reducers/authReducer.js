import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInUser } from "@/services/auth.firebase";

const initialAuthState = {
  status: "IDLE",
  user: null,
  error: "",
};

export const signinUserRedux = createAsyncThunk("auth/signIn", async () => {
  const response = await signInUser();
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signinUserRedux.pending, (state, action) => {
      state.status = "LOADING";
    });

    builder.addCase(signinUserRedux.fulfilled, (state, action) => {
      state.status = "SUCCESS";
      state.user = { ...action.payload };
    });

    builder.addCase(signinUserRedux.rejected, (state, action) => {
      state.status = "ERROR";
      state.error = { ...action.payload };
    });
  },
});

export default authSlice.reducer;
