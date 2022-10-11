import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Project!', content: 'Hello!' },
  { id: '2', title: 'Second Project', content: 'More text' }
]

const projectListSlice = createSlice({
  name: 'projectList',
  initialState,
  reducers: {}
})

export default projectListSlice.reducer

