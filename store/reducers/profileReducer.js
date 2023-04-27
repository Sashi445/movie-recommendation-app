import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userApi from './../../services/user.firebase';

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (uid) => await userApi.getUser(uid)
);

export const followUser = createAsyncThunk(
  "profile/followUser", async (targetId) => await userApi.followUser(targetId) 
)

export const unfollowUser = createAsyncThunk(
  "profile/unfollowUser", async (targetId) => await userApi.unfollowUser(targetId)
)

const initialState = {
  status: "IDLE",
  profile: null,
  error: "",
};

const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.status = "LOADING";
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.status = "SUCCESS";
      state.profile = { ...action.payload };
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.status = "ERROR";
      state.error = { ...action.payload };
    });
  },
});

export default profileSlice.reducer;
