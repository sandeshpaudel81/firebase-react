import { createSlice } from "@reduxjs/toolkit";
import {getDocs, query, collection, addDoc, serverTimestamp} from "firebase/firestore"
import {db, storage} from "../firebase-config"
import { combineReducers } from "@reduxjs/toolkit";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";

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

const uploadCarouselImageSlice = createSlice({
    name: 'uploadCarouselImage',
    initialState: {
        carouselImage: {},
        progress: 0,
        loading: false,
        success: false,
        error: "",
    },
    reducers: {
        uploadCarouselImageData(state, action){
            state.carouselImage = action.payload
        },
        uploadCarouselImageProgress(state, action){
            state.progress = action.payload
        },
        uploadCarouselImageLoading(state, action){
            state.loading = action.payload
        },
        uploadCarouselImageSuccess(state, action){
            state.success = action.payload
        },
        uploadCarouselImageError(state, action){
            state.error = action.payload
        },
        uploadCarouselImageReset(state){
            state.carouselImage = {}
            state.success = false
            state.error = ""
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
        },
        addCarouselSuccess(state, action){
            state.success = action.payload
        },
        addCarouselError(state, action){
            state.error = action.payload
        },
        addCarouselReset(state){
            state.success = false
            state.error = ""
        }
    }
})

export const {getCarouselData, getCarouselLoading, getCarouselSuccess, getCarouselError} = getCarouselSlice.actions;
export const {addCarouselLoading, addCarouselSuccess, addCarouselError, addCarouselReset} = addCarouselSlice.actions;
export const {uploadCarouselImageData, uploadCarouselImageProgress, uploadCarouselImageLoading, uploadCarouselImageSuccess, uploadCarouselImageError, uploadCarouselImageReset} = uploadCarouselImageSlice.actions;

export const carouselReducer = combineReducers({
    getCarousel: getCarouselSlice.reducer,
    uploadCarouselImage: uploadCarouselImageSlice.reducer,
    addCarousel: addCarouselSlice.reducer,
});

// convert timestamp to date

export function timestampToDate(datetime){
    return String(moment(datetime.toDate()).format("dddd, MMMM Do YYYY"))
}

// thunks

export function fetchCarousel(){
    return async function fetchCarouselThunk(dispatch){
        dispatch(getCarouselLoading(true))
        try {
            let carousel = []
            const slides = await getDocs(
                query(collection(db, "carousel"))
            );
            slides.docs.forEach((doc) => {
                const datetime = timestampToDate(doc.data().datetime)
                carousel.push({ ...doc.data(), id: doc.id, datetime: datetime})
            });
            dispatch(getCarouselData(carousel))
            dispatch(getCarouselLoading(false))
            dispatch(getCarouselSuccess(true))
        } catch(err) {
            dispatch(getCarouselError(err.message))
        }
    }
}

export function uploadCarouselImage(image){
    return function uploadCarouselImageThunk(dispatch){
        dispatch(uploadCarouselImageLoading(true))
        try {
            // upload image on firebase
            const storageRef = ref(storage, `/carousel/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image)
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )
                    dispatch(uploadCarouselImageProgress(percent))
                },
                (err) => {
                    dispatch(uploadCarouselImageError(err.message))
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        dispatch(uploadCarouselImageData(url))
                    })
                }
            )
            dispatch(uploadCarouselImageData("url"))
            dispatch(uploadCarouselImageLoading(false))
            dispatch(uploadCarouselImageSuccess(true))
        } catch(err) {
            dispatch(uploadCarouselImageError(err.message))
        }
    }
}

export function addNewCarousel(data){
    return async function addNewCarouselThunk(dispatch){
        dispatch(addCarouselLoading(true))
        try {
            await addDoc(collection(db, "carousel"), {
                caption: data.caption,
                imageUrl: data.imageUrl,
                datetime: serverTimestamp(),
                is_active: data.is_active,
                linkTo: data.linkTo
            })
            dispatch(addCarouselLoading(false))
            dispatch(addCarouselSuccess(true))
        } catch(err) {
            dispatch(addCarouselError(err.message))
        }
    }
}