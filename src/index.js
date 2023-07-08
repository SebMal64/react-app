import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppC from './AppC';
//import AppFA from './AppFA';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import Curso from './comp/Curso';
import {BrowserRouter as Router} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from './comp-redux/features/contador';
import { Provider } from 'react-redux';

const store=configureStore ({
  reducer: {
    contador:contadorReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <AppC/>
      </Router>
    </Provider>
  </React.StrictMode>
);
