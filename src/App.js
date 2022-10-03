import './App.css';
import {useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db} from './firebase-config'

function App() {
  const usersCollectionRef = collection(db, "users")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }
    getUsers()
  }, [])
  return (
    <div className="App">
      <h1>Sandesh Paudel</h1>
    </div>
  );
}

export default App;
