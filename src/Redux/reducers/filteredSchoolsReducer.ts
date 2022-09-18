import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {School} from "../../interfaces/school"
import type { PayloadAction } from '@reduxjs/toolkit'
import {getFilter,sortDataForSchool,colors} from "../../helperFuns/myFuns"
import {filteredSchoolsReducerType} from "../../interfaces/school"





// Define the initial state using that type
const initialState: filteredSchoolsReducerType = {
    countryFilteredScools:[],
    campFilteredScools:[],
    schoolFilteredScools:[],
    nestedFilterInsideAllSchools:[],
    nestedSchools:[],
    country:[],
    camp:[],
    school:[],
    datasets:[]
}

const filteredSchoolsSlice = createSlice({
  name: 'filteredSchools',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    getCountryFilter: (state,action:PayloadAction<School[]>) => {
      state.country = getFilter(action.payload,"country")
      state.camp = []
      state.school = []
    },
    getCampFilter: (state) => {
        state.camp = getFilter(state.countryFilteredScools,"camp")
        state.school = []
    },
    getSchoolFilter: (state) => {
        state.school = getFilter(state.campFilteredScools,"school")
    },
    filterByCountry: (state, action: PayloadAction<{all:School[],country:string}>) => {
        state.countryFilteredScools =action.payload.all.filter(el=>el.country==action.payload.country)
    },
    filterByCamp: (state, action: PayloadAction<string>) => {
        state.campFilteredScools =state.countryFilteredScools.filter(el=>el.camp==action.payload)  
    },
    filterBySchool: (state, action: PayloadAction<string>) => {
        if(action.payload == "all schools"){
            state.schoolFilteredScools = state.school.map((school,i)=>({arr:state.campFilteredScools.filter(el=>el.school==school.name),color:colors[i]}))
            state.nestedSchools = state.school.map(el=>el.name)
        }else{            
            state.schoolFilteredScools =[{arr:state.campFilteredScools.filter((el)=>el.school==action.payload),color:colors[0]}]
            state.nestedSchools = [state.schoolFilteredScools[0].arr[0].school]
        }
        state.nestedFilterInsideAllSchools = state.schoolFilteredScools
    
    }, 
    toggleNestedFilter: (state, action: PayloadAction<string>) => {
        let found = false
        for(let i=0;i<state.nestedSchools.length ;i++){
            if(state.nestedSchools[i]===action.payload){
                found = true
                break;
            }
        }
        if(found){
            state.nestedSchools = state.nestedSchools.filter(el=>el != action.payload )
        }else{
            state.nestedSchools = [...state.nestedSchools,action.payload]
        }
        state.nestedFilterInsideAllSchools = state.schoolFilteredScools.filter(
            schoolArrData=>schoolArrData.arr.some(
                dataObj=>state.nestedSchools.some(
                    school=>school==dataObj.school
                    )
                )
        )
        
    } ,
    setDataSets:(state)=>{
        state.datasets = state.nestedFilterInsideAllSchools.map(
            (el)=>({...sortDataForSchool(el.arr),borderColor:el.color})
        )
    }
    
  },
})





// Other code such as selectors can use the imported `RootState` type
export const selectFilteredSchools = (state: RootState) => state.filteredSchoolsReducer

export default filteredSchoolsSlice.reducer;
export const {getCountryFilter,getCampFilter,getSchoolFilter,filterByCountry,filterByCamp,filterBySchool,toggleNestedFilter,setDataSets} = filteredSchoolsSlice.actions

