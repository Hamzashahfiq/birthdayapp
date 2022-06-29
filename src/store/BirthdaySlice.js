import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import database from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const fatchUserData = createAsyncThunk(
   'birthday/userData',
   async () => {
      try {
         const snapshot = await database().ref('https://birthdayapp-a3688-default-rtdb.firebaseio.com') 
         .child('birthdayData').once('value')
           

         console.log('data', snapshot)
      }
      catch (error) {
         Alert.alert(error.message)
      }
   }
)

const initialState = {
   birthdayUserData: {
      name: "abc",
      dob: "29-06-2022"
   }
}



export const BirthdaySlice = createSlice({
   name: 'birthday',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fatchUserData.fulfilled, (state, action) => {
         //   // Add user to the state array
         //   state.birthdayUserData = action.payload;
      })
   },
})

// Action creators are generated for each case reducer function
export const { } = BirthdaySlice.actions

export default BirthdaySlice.reducer