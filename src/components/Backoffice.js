import React, { useState } from 'react';
import { ReservationStats } from './ReservationStats';
import {ReservationList} from './ReservationList';
import logo from '../styles/images/logo.png';
import { TicketSales } from './TicketsStats';
import { Footer } from './Footer';
import { Logout } from './Logout';




export const Backoffice =()=> {

  return <div className="backoffice">
    <header>
      <Logout />
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
    <Footer/>
    
    </div>;
}


