import React from 'react';
import './App.css';
import "./assets/css/base/base.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./paginas/Home"
import Sobre from "./paginas/Sobre"
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';

function App() {

  return (
    <>
      <Router>
        <Cabecalho />
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/sobre" element =  {<Sobre />} />
            <Route default element = {<Pagina404 />} />
          </Routes>
      </Router>
    </>

  );
}

export default App;
