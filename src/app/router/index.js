import React from 'react'
import Home from '../../component/Home.'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../../component/user/Create';
import Update from '../../component/user/Update ';
import Nav from '../../component/user/nav';

function Index() {

    return (
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/create" element={<Create/>}/>          
            <Route path="/edit" element={<Update/>}/> 
          </Routes>
        </BrowserRouter>
      );
}

export default Index