import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import database from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const fatchUserData = createAsyncThunk(
   'birthday/userData',
   async ({sLoading, usLoading}) => {
      try {
         sLoading()
         const snapshot = await database()
            .ref('/birthdayData').once('value')

         var birthData = []
         snapshot.forEach((item) => {
            birthData.push(item.val())
         })
      }
      catch (error) {
         Alert.alert(error.message)
         return;
      }finally {
         usLoading()
      }

      return birthData
   }
)
export const addUserData = createAsyncThunk(
   'birthday/addUserData',
   async ({data, sloading,unloading }) => {
       
      try {
  
         sloading()
         await database()
         .ref('/birthdayData/' + data.id)
         .update(data)
         Alert.alert('Birthday detail has been updated.')
      }
      catch (error) {
         Alert.alert(error.message)
         return;
      }
      finally {
         unloading()
      }

      return data
   }
)

const initialState = {
   birthdayUserData: {}
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
         let bData = {
            name: action.payload[0].name,
            id: action.payload[0].id,
            dob: action.payload[0].dob
         }
         state.birthdayUserData = bData;
      })
      builder.addCase(addUserData.fulfilled, (state, action) => {
         state.birthdayUserData = action.payload;
      })
   },
})

// Action creators are generated for each case reducer function
export const { } = BirthdaySlice.actions

export default BirthdaySlice.reducer