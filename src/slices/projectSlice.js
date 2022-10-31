import { createSlice } from "@reduxjs/toolkit";
import {getDocs, query, collection} from "firebase/firestore"
import {db} from "../firebase-config"

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        data: [],
        status: 'idle',
        success: false,
    },
    reducers: {
        setProjects(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        },
        setSuccess(state, action){
            state.success = action.payload
        }
    }
})

export const { setProjects, setStatus, setSuccess } = projectSlice.actions;

export default projectSlice.reducer;


// thunks
export function fetchProjects(){
    return async function fetchProjectsThunk(dispatch, getState){
        dispatch(setStatus('loading'))
        try {
            let projectList = []
            const projects = await getDocs(
                query(collection(db, "projects"))
            );
            projects.docs.forEach((doc) => {
                projectList.push({ ...doc.data(), id: doc.id})
            });
            dispatch(setProjects(projectList))
            dispatch(setStatus('idle'))
            dispatch(setSuccess(true)) 
        } catch(err) {
            dispatch(setStatus('error'))
        }
    }
}