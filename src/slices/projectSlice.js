import { createSlice } from "@reduxjs/toolkit";
import {getDocs, query, collection} from "firebase/firestore"
import {db} from "../firebase-config"

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        data: [],
        loading: false,
        success: false,
        error: "",
    },
    reducers: {
        setProjects(state, action){
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

export const { setProjects, setLoading, setSuccess, setError } = projectSlice.actions;

export default projectSlice.reducer;


// thunks
export function fetchProjects(){
    return async function fetchProjectsThunk(dispatch, getState){
        dispatch(setLoading(true))
        try {
            let projectList = []
            const projects = await getDocs(
                query(collection(db, "projects"))
            );
            projects.docs.forEach((doc) => {
                projectList.push({ ...doc.data(), id: doc.id})
            });
            dispatch(setProjects(projectList))
            dispatch(setLoading(false))
            dispatch(setSuccess(true)) 
        } catch(err) {
            dispatch(setError('error'))
        }
    }
}