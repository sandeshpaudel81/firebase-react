// import {useEffect } from 'react'
// import { collection, getDocs } from 'firebase/firestore'
// import {db} from './firebase-config'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import AlbumList from './pages/AlbumList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEditCarousel from './pages/admin/AddEditCarousel';
import ListAllCarousels from './pages/admin/ListAllCarousels';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/projects" element={<ProjectList/>} />
          <Route path="/albums" element={<AlbumList/>} />
          
          <Route path="/admin/carousels" element={<ListAllCarousels/>} />
          <Route path="/admin/carousels/add" element={<AddEditCarousel/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
