import { createSlice } from "@reduxjs/toolkit";
import {getDocs, query, collection} from "firebase/firestore"
import {db} from "../firebase-config"
import { combineReducers } from "@reduxjs/toolkit";

const getCarouselSlice = createSlice({
    name: 'getCarousel',
    initialState: {
        data: [],
        loading: false,
        success: false,
        error: "",
    },
    reducers: {
        getCarouselData(state, action){
            state.data = action.payload
        },
        getCarouselLoading(state, action){
            state.loading = action.payload
        },
        getCarouselSuccess(state, action){
            state.success = action.payload
        },
        getCarouselError(state, action){
            state.error = action.payload
        }
    }
})

const addCarouselSlice = createSlice({
    name: 'addCarousel',
    initialState: {
        loading: false,
        success: false,
        error: "",
    },
    reducers: {
        addCarouselLoading(state, action){
            state.loading = action.payload
        }
    }
})

export const {getCarouselData, getCarouselLoading, getCarouselSuccess, getCarouselError} = getCarouselSlice.actions;
export const {addCarouselLoading, } = addCarouselSlice.actions;

export const carouselReducer = combineReducers({
    getCarousel: getCarouselSlice.reducer,
    addCarousel: addCarouselSlice.reducer,
});

// thunks

export function fetchCarousel(){
    return async function fetchCarouselThunk(dispatch, getState){
        dispatch(getCarouselLoading(true))
        try {
            let carousel = []
            const slides = await getDocs(
                query(collection(db, "carousel"))
            );
            slides.docs.forEach((doc) => {
                carousel.push({ ...doc.data(), id: doc.id})
            });
            dispatch(getCarouselData(carousel))
            dispatch(getCarouselLoading(false))
            dispatch(getCarouselSuccess(true))
        } catch(error) {
            dispatch(getCarouselError(error.message))
        }
    }
}