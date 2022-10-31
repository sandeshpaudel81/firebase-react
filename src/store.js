import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './slices/projectSlice'
import carouselReducer from './slices/carouselSlice'

export const store = configureStore({
    reducer: {
        project: projectReducer,
        carousel: carouselReducer,
    },
})
