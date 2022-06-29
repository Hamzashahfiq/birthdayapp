import { configureStore } from '@reduxjs/toolkit'
import BirthdaySlice from '../store/BirthdaySlice'

export const Store = configureStore({
  reducer: {
    BirthdaySlice
  },
})