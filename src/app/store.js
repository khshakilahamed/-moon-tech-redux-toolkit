import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        filter: filterSlice,
    }
});

export default store;