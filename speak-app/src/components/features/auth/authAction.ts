import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IUserData } from './types/authType';
import { ILoginFormValues } from '../../login/Login';

export const loginUser = createAsyncThunk(
  'loginUser',
  async (data: ILoginFormValues, thunkAPI) => {
    try {
      const response:AxiosResponse<IUserData> = await axios.post('https://dummyjson.com/auth/login', data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
