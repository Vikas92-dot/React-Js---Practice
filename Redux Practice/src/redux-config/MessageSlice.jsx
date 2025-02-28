import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"MessageSlice",
    initialState:{
        m1: "GM..",
        m2: "GE..",
        m3: "GN"
    }
})
export default slice.reducer;