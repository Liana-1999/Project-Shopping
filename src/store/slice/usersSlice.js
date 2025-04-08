import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUsers(state, users) {
            state.users = users.payload;
        }
    },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;