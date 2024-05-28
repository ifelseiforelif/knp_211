import { configureStore } from "@reduxjs/toolkit";
import exchangeRatesReducer from "./exchange-rates/exchange-rates-slice";
import productsSliceReducer from "./products/products-slice";


export const store = configureStore({
    reducer: {
        exchangeRates: exchangeRatesReducer,
        products: productsSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;