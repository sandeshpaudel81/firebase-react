import { createSlice } from "@reduxjs/toolkit";
import {getDocs, query, collection} from "firebase/firestore"
import {db} from "../firebase-config"

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        data: [],
        status: 'idle',
    },
    reducers: {
        setProjects(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;


// thunks
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        dispatch(setStatus('loading'))
        try {
            const projects = await getDocs(
                query(collection(db, "projects"))
            );
            const data = projects.docs.map((doc) => doc.data());
            dispatch(setProjects(data))
            dispatch(setStatus('idle')) 
        } catch(err) {
            dispatch(setStatus('error'))
        }
    }
}