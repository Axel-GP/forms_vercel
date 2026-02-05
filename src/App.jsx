import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Form from './components/form';
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form/>} />
    
    </Routes>
    </BrowserRouter>
);
}