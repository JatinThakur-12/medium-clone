import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import { login, logout } from './app/authSlice';
import authService from './appwriteServices/auth';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .catch((error)=>{
      console.log("Error in gettingCurrent user ", error);
    })
    .finally(()=>{
      setLoading(false);
    })
  }, [])
  
  return !loading ? (
    <div className='h-screen min-h-full flex flex-wrap content-between '>
      <div className="w-full block">
        <Header />
        <main>
          { <Outlet /> }
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : ""; 
}

export default App
