import { createSlice } from '@reduxjs/toolkit';
import { IUserData } from './types/authType';
import { loginUser } from './authAction';

interface IUserState{
    user:IUserData
    isLoading: boolean
    error: string
    
}

const initialUser: IUserData =  {
    id: 0,
    username: '',
    email: '',
    token: '',
    refreshToken: ''
}
const initialState: IUserState = {
  user: initialUser,
  isLoading: false,
  error: '',
};

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.user = initialUser
        state.error = action.payload as string
      })
  },
});

export default AuthSlice;
//export const { } = AuthSlice.actions