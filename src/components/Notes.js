
import React from  'react'
import Nav from './notes/Nav'
import Home from './notes/Home'
import CreateNote from './notes/CreateNote'
import EditNote from './notes/EditNote'
import { BrowserRouter , Routes, Route} from "react-router-dom"




export default function Notes({setIsLogin}){
    return(
        <BrowserRouter>
        <div className='notes-page'>
             <Nav setIsLogin={setIsLogin}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<CreateNote/>}/>
                <Route path="/edit/:id" element={<EditNote/>}/>
            </Routes>
            
           
        </div>
          </BrowserRouter>
       
    
    )
}