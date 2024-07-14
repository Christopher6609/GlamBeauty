import React from 'react'
import ReactDOM from 'react-dom/client'
//import { RouterProvider } from "react-router-dom";
import App from './App';
import './index.css'
//import router from "./router";
import { UserProvider } from './components/context/UserContext';
import {ProductsProvider } from './components/context/ProductContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
  <ProductsProvider>
  <App />
  </ProductsProvider>
  </UserProvider>
  </React.StrictMode>,
)
