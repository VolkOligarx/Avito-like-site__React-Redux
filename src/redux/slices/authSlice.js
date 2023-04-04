import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saveLogin: {
        userEmail: '', 
        userPassword: '', 
        userToken: ''
    },
    personalInfo: {
        name: 'exampleName',
        surname: 'exampleSurname',
        city: 'exampleCity',
        phone: 'exampleCity'
    },
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveLogin: (state, action) => {
            state.saveLogin = action.payload
        },
        cabinetAnimation: (state, action) => {
            state.cabinetAnimation = action.payload
        },
        personalInfo: (state, action) => {
            state.personalInfo = action.payload
        }
    },
})

export const { saveLogin, cabinetAnimation, personalInfo } = auth.actions

export default auth.reducer