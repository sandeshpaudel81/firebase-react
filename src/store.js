import { configureStore } from '@reduxjs/toolkit'
import projectListReducer from './features/projectListSlice'

export const store = configureStore({
    reducer: {
        projectList: projectListReducer,
    },
})