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
        setCarousel(state, action){
            state.data = action.payload
        },
        setLoading(state, action){
            state.loading = action.payload
        },
        setSuccess(state, action){
            state.success = action.payload
        },
        setError(state, action){
            state.error = action.payload
        }
    }
})

const addCarouselSlice = createSlice({
    name: 'addCarousel',
    initialState: {
        data: [],
        loading: false,
        success: false,
        error: "",
    },
    reducers: {
        setLoading(state, action){
            state.loading = action.payload
        }
    }
})

export const {setCarousel, setLoading, setError, setSuccess} = getCarouselSlice.actions;
export const {setLoading: setAddCarouselLoading} = addCarouselSlice.actions;

export const carouselReducer = combineReducers({
    getCarousel: getCarouselSlice.reducer,
    addCarousel: addCarouselSlice.reducer,
});

// thunks

export function fetchCarousel(){
    return async function fetchCarouselThunk(dispatch, getState){
        dispatch(setLoading(true))
        try {
            let carousel = []
            const slides = await getDocs(
                query(collection(db, "carousel"))
            );
            slides.docs.forEach((doc) => {
                carousel.push({ ...doc.data(), id: doc.id})
            });
            dispatch(setCarousel(carousel))
            dispatch(setLoading(false))
            dispatch(setSuccess(true))
        } catch(err) {
            dispatch(setError('error'))
        }
    }
}