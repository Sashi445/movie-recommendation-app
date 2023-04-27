import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

export default configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer
  }
})
