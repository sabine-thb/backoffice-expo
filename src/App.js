import './App.css';

import React, { useState } from 'react';
import './styles/styles.css'; // Importation de la feuille de style globale
import { ReservationStats } from './components/ReservationStats';
import {ReservationList} from './components/ReservationList';
import logo from './styles/images/logo.png';
import { TicketSales } from './components/TicketsStats';




function App() {

  return <div className="App">
    <header>
      <div className='logoContainer'>
        <img src={logo}  className="logo" />
      </div>
      
      <h1 className='titlePage'>Backoffice <br />esprit vigée</h1>
    </header>
    <ReservationList />
    <div className='stats'>
      <ReservationStats />
      <TicketSales />
    </div>
    
    </div>;
}





export default App;
