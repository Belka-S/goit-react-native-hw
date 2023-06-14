import { createSlice } from '@reduxjs/toolkit';

const initialState = { userId: null, userName: null, stateChange: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, action) => ({
      ...state,
      userId: action.payload.userId,
      userName: action.payload.userName,
    }),
    authStateChange: (state, action) => ({
      ...state,
      stateChange: action.payload.stateChange,
    }),
    authSignOut: (state, action) => initialState,
  },
});
