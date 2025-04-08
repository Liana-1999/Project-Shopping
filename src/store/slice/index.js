import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducers } from './productSlice';
import { usersReducers } from "./usersSlice";

export const store = configureStore({
    reducer: combineReducers({
        products: productsReducers,
        users: usersReducers
    })
});