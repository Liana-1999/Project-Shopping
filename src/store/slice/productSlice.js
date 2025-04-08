import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        addProducts(state, products) {
            state.products = products.payload;
        }
    },
});

export const productsReducers = productsSlice.reducer;
export const productsActions = productsSlice.actions;