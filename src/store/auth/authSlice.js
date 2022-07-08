import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'checking',
        user:{},
        errorMesage: undefined,
    },
    reducers: {
        onChecking:(state, /* action */ ) => {
            state.status='checking';
            state.user={};
            state.errorMesage=undefined;
        },
        onLogin:(state, {payload} ) => {
            state.status='authenticated';
            state.user=payload;
            state.errorMesage=undefined;
        },
        onLogout:(state, {payload} ) => {
            state.status='not-authenticated';
            state.user={};
            state.errorMesage=payload;
        },
        clearErrorMesage:(state, {payload} ) => {
            state.errorMesage=undefined;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onChecking, onLogin,onLogout,clearErrorMesage } = authSlice.actions;