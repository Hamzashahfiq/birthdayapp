import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   birthdayUserData:{
      name:"abc",
      dob:"29-06-2022"
   }
}

export const BirthdaySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const {  } = BirthdaySlice.actions

export default BirthdaySlice.reducer