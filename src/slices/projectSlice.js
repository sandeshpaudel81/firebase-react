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
        }
    }
})

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;


// thunks
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState){
        try {
            const projects = await getDocs(
                query(collection(db, "projects"))
            );
            return projects.docs.map((doc) => doc.data()); 
        } catch(err) {

        }
    }
}