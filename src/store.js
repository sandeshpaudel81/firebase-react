import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './slices/projectSlice'

export const store = configureStore({
    reducer: {
        project: projectReducer,
    },
})
