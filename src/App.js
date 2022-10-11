// import {useEffect } from 'react'
// import { collection, getDocs } from 'firebase/firestore'
// import {db} from './firebase-config'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import AlbumList from './pages/AlbumList';

function App() {
  // const usersCollectionRef = collection(db, "admins")
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef)
  //     console.log(data)
  //   }
  //   getUsers()
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/projects" element={<ProjectList/>} />
        <Route path="/albums" element={<AlbumList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
