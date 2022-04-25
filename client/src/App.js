import React from 'react';

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import History from './components/History/History';
import Savenews from './components/Savenews/Savenews';
import NewsDetail from './components/NewsDetail/NewsDetail';



const App = () => (

  <BrowserRouter>   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/profile" element={<Profile/>} />            
        <Route path="/history" element={<History/>} />   
        <Route path="/savenews" element={<Savenews/>} />  
        <Route path="/newsdetail" element={<NewsDetail/>} />  
      </Routes>
  </BrowserRouter>

);

export default App;
