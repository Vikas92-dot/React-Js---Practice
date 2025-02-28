import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"DataSlice",
    initialState:{
        counter:100,
        evenCounter:0
    },
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter = state.counter+1;
        },
        decrementCounter:(state,action)=>{
            state.counter = state.counter-1;
        },
        incrementEvenCounter:(state,action)=>{
            state.evenCounter = state.evenCounter+2;
        },
        decrementEvenCounter:(state,action)=>{
            state.evenCounter = state.evenCounter-2;
        },
        incrementPayload:(state,action)=>{
            state.counter = state.counter + action.payload;
        },
        decrementPayload:(state,action)=>{
            state.counter = state.counter - action.payload;
        }

    }
})
//In this slice.action it automatically create action for that function
//then we dispatch that in UI which is Third component
export const{incrementCounter,decrementCounter,incrementEvenCounter,decrementEvenCounter,incrementPayload,decrementPayload}=slice.actions;
console.log(slice.actions);

export default slice.reducer;