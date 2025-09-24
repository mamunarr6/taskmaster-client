import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "Mamun Ar Roshid",
    gmail: "mamun.roshid.dev@gmail.com"
};

const usersSlice =createSlice({
    name: "usersSlice",
    initialState,
    reducers:{},
})

export default usersSlice.reducer