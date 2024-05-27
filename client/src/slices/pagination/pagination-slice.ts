import {createSlice} from "@reduxjs/toolkit"
const initialState={
    currentPage:1
};

export const paginationSlice=createSlice({
    name:"pagination",
    initialState,
    reducers:{
        toPrev:(state,action)=>{
            state.currentPage-=action.payload;
        },
        toNext:(state,action)=>{
            state.currentPage+=action.payload;
        },
    }
});
export const{toPrev,toNext}=paginationSlice.actions;
export default paginationSlice.reducer;