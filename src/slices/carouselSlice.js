import { createSlice } from "@reduxjs/toolkit";
import {getDocs, query, collection} from "firebase/firestore"
import {db} from "../firebase-config"

const carouselSlice = createSlice({
    name: 'carousel',
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

export const {setCarousel, setLoading, setError, setSuccess} = carouselSlice.actions;

export default carouselSlice.reducer;

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