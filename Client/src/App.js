import './App.css';
//import {useState, useEffect} from "react";
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//import axios from "axios";
import Navbaar from './components/Navbaar';
import Adicionar from './components/Adicionar';
import Dados from './components/Dados';
import { Route, Routes, BrowserRouter } from "react-router-dom"


function App() {


  return (
    <>
      <Navbaar />
      <BrowserRouter>
        <Routes>
            <Route path="/cadastro" element={<Adicionar />} />
            <Route path="/dados" element={<Dados />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

