import './App.css';
import './styles/styles.css'; // Importation de la feuille de style globale
import React, { useState } from 'react';
import './styles/styles.css'; // Importation de la feuille de style globale
import { Backoffice } from './components/Backoffice';
import { Login } from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';





function App() {

  return <div className="App">
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>

    </div>;
}





export default App;
