import './App.css';
import {ReservationList} from './components/ReservationList';
import React, { useState } from 'react';

function App() {
  // const [reservation, setReservation] = useState(null);
  // Fonction pour mettre à jour les données de réservation
  
  // const updateReservationLocally = (updatedData) => {
  //   // Mettre à jour l'état de la réservation avec les nouvelles données
  //   setReservation(updatedData);

  // };

  return <div className="App"><ReservationList /></div>;
}





export default App;
