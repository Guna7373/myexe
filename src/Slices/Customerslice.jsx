import { createSlice } from "@reduxjs/toolkit";


      const initialState = [];

      const  customerSlice=createSlice({
        name:'customer',
        initialState,
        reducer:{
            addcustomer(state,action){
                  state.push(action.payload)
            }
        }
      })
      export const {addcustomer}=customerSlice.actions;
      export default  customerSlice.reducer;