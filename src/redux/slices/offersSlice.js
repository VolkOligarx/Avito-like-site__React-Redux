import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allOffers: [],
    currentOffers: [],
    findOffers: '',
    chosenOffer: {
        images:[{}],
        id:0, 
        created_on:'T',
        user_id:'1',
        user:{
            avatar:'', 
            name:'',
            phone:'',
            sells_from:'',
            city:'',
        }
    },
}

export const offers = createSlice({
    name: 'offers',
    initialState,
    reducers: {
        allOffers: (state, action) => {
            state.allOffers = action.payload
        },
        currentOffers: (state, action) => {
            state.currentOffers = action.payload
        },
        findOffers: (state, action) => {
            state.findOffers = action.payload
        },
        chosenOffer: (state,action) => {
            state.chosenOffer = action.payload
        }
    },
})

export const { allOffers, currentOffers, findOffers, chosenOffer } = offers.actions

export default offers.reducer