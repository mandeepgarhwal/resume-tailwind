import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Projects from './projects';
import Technologies from './technologies';
import { Contacts } from './contacts';
import { ThemeProvider } from "@material-tailwind/react";
import Navbars from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider>
  <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/technologies" element={<Technologies />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>

    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


