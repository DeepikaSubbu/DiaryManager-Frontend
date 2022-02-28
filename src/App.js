
import axios from "axios";
import React from "react";
import {useState, useEffect} from "react"
import Login from "./components/Login";
import Notes from "./components/Notes";

function App() {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const checkLogin = async () =>{
      const token = localStorage.getItem('tokenStore')
      if(token){
        const verified = await axios.get('https://dairymanager-backend.herokuapp.com/users/verify',{
          headers:{Authorization:token}
        })
        console.log(verified)
        setIsLogin(verified.data)
        if(verified.data ===false) return localStorage.clear()

      }else{
        setIsLogin(false)
      }
    }
    checkLogin()

  },[])
  return (
    <div className="App">
      {
        isLogin 
        ? <Notes setIsLogin={setIsLogin}/> 
        : <Login setIsLogin={setIsLogin}/>
      }
     
    </div>
  );
}

export default App;
