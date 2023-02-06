import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface AuthState {
  user?: string;
  token?: string;
  rt?: string;
}

const initialState = (): AuthState => {
  let user = localStorage.getItem("user")
  if(user) {
    const userInfo: AuthState = JSON.parse(user);
    return userInfo
  }
  return {
    user: undefined,
    token: undefined,
    rt: undefined,
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<{user: string; token: string; rt: string}>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.rt = action.payload.rt;
    },
    clearCredentials: (state: AuthState) => {
      state.user = undefined;
      state.token = undefined;
      state.rt = undefined;
      localStorage.removeItem("user");
    } 
  }
})

export const selectAuth = (state: RootState ) => state.auth;

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;