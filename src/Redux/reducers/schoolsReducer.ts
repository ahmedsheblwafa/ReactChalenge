import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {School} from "../../interfaces/school"
import type { PayloadAction } from '@reduxjs/toolkit'




// Define the initial state using that type
const initialState: {
    allSchools:School[],
    loading:boolean,
    error:boolean,
    errorMsg:string
} = {allSchools:[],loading:true,error:false,errorMsg:""}

const allSchoolsSlice = createSlice({
  name: 'allSchools',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    getAllSchools: (state, action: PayloadAction<School[]>) => {
      state.allSchools = action.payload
    },
    setLoading:((state)=>{
        state.loading = true
    }),
    removeLoading:((state)=>{
        state.loading = false
    }),
    setError:((state)=>{
        state.error = true
    }),
    removeError:((state)=>{
        state.error = false
    }),
    setErrorMsg:((state, action: PayloadAction<string>)=>{
        state.errorMsg = action.payload
    })
  },
})



// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.allSchoolsReducer

export default allSchoolsSlice.reducer;
export const { getAllSchools,setLoading,removeLoading,setError,removeError,setErrorMsg } = allSchoolsSlice.actions

