//Importer React et Dom dans le projet + Fichier CSS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Import des pages et des composants utiles
import Main from './Main';
import Login from './login';
import Products from './Products';
import DetailProduct from './DetailProduct';
import Admin from './admin';
import Equipe from './Equipe'
//import du router pour faire le lien entre les pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//render pour afficher la page avec les routes des liens
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/detailProduct/:id" element={<DetailProduct />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/equipe" element={<Equipe />} />
    </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);