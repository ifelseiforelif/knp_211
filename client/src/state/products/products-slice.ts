import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductType from "../../types/product-type";
import ProductsType from "../../types/products-type";
import axios from "axios";


const initialState: ProductsType = {
    products: []
};


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(
                import.meta.env.VITE_PATH_TO_SERVER + "products"
            );
            console.log(res.data);
            return res.data as ProductType[];
        } 
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (newProduct: ProductType, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                import.meta.env.VITE_PATH_TO_SERVER + "products",
                newProduct
            );
            return res.data as ProductType[];
        } 
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const editProduct = createAsyncThunk(
    "products/editProduct",
    async (editedProduct: ProductType, { rejectWithValue }) => {
        try {
            const res = await axios.put(
                `${import.meta.env.VITE_PATH_TO_SERVER}products/${editedProduct.id}`, 
                editedProduct
            );
            return res.data as ProductType[];
        } 
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeProduct = createAsyncThunk(
    "products/removeProduct",
    async (productId: string, { rejectWithValue }) => {
        try {
            await axios.delete(`${import.meta.env.VITE_PATH_TO_SERVER}products/${productId}`);
            return productId; 
        } 
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                console.log("pending");
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                console.log("success");
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                console.log("rejected");
            })
    }
});

export default productsSlice.reducer;