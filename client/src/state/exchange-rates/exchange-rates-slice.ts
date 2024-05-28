import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExchangeRatesType from "../../types/exchange-rates-type";


const initialState: ExchangeRatesType = {
    date: new Date().toISOString().slice(0, 10),
    rates: []
};


export const fetchRates = createAsyncThunk(
    "exchangeRates/fetchRates", 
    async (date: string) => {
        const nbuUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=[date]&json";
        const url = nbuUrl.replace("[date]", date.split("-").join(""));
        const response = await fetch(url);
        return response.json();
    }
);


const exchangeRatesSlice = createSlice({
    name: "exchange-rates",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRates.fulfilled, (state, action) => {
            state.rates = action.payload;
        })
    },
});

export default exchangeRatesSlice.reducer;