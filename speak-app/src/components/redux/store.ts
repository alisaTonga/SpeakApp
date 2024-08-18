import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import AuthSlice from "../features/auth/AuthSlice";


export const store = configureStore({
  reducer: {
    // подключаем slice к store
    user: AuthSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
