import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import offersSlice from './slices/offersSlice'

export const store = configureStore({
  reducer: {
    offers: offersSlice,
    auth: authSlice,
  },
})