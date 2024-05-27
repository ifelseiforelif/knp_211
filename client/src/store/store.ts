
import paginationSlice from "../slices/pagination/pagination-slice";
import { configureStore } from "@reduxjs/toolkit";
export const store=configureStore({
    reducer:{
        pagination:paginationSlice
    },
});