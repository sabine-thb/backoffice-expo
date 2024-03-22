// ReservationList.js
'useClient';
import React, { useState, useEffect } from 'react';
import {DeleteReservationButton} from './DeleteReservationButton';
import {UpdateReservationButton} from './UpdateReservationButton'; 
import {ReservationFormModal} from './ReservationFormModal';


//Je récupère les réservations depuis l'API et je les affiche dans un tableau
export const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState(false); // État pour gérer l'affichage du message de suppression réussie
    const [updateSuccess, setUpdateSuccess] = useState(false); // État pour gérer l'affichage du message de modification réussie
    const [editReservation, setEditReservation] = useState(null); // État pour stocker les données de la réservation en cours de modification 


    const fetchReservations = async () => {
      try {
          const response = await fetch(
              'https://expo-vigee.thibout.butmmi.o2switch.site/api-expo/index.php/reservation',
          );
          if (!response.ok) {
              throw new Error('Erreur lors de la récupération des réservations');
          }
          const data = await response.json();
          setReservations(data);
      } catch (error) {
          console.error(error);
      }
  };
  
    useEffect(() => {
        fetchReservations();
    }, []);



// Je supprime une réservation

const handleDeleteReservation = async () => {
    try {
      await fetchReservations(); // Actualiser la liste des réservations
      // Peut-être une logique supplémentaire après la mise à jour

      // Afficher le message de suppression réussie
      setDeleteSuccess(true);

      // Masquer le message après 3 secondes (3000 millisecondes)
      setTimeout(() => {
          setDeleteSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de la mise à jour des réservations après suppression :', error);
    }
  };
   

//Je modifie une réservation
  const handleEditReservation = (reservation) => {
      setEditReservation(reservation);      // Mettre à jour l'état pour stocker les données de la réservation en cours de modification
  };

  const handleUpdateReservation = async (updatedReservation) => {
    console.log(updatedReservation);
    try {
        const response = await fetch(`https://expo-vigee.thibout.butmmi.o2switch.site/api-expo/index.php/reservation/${updatedReservation.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReservation)
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la modification de la réservation');
        }

        fetchReservations();

        setUpdateSuccess(true);
        setTimeout(() => {
            setUpdateSuccess(false);
        }, 3000);
        setEditReservation(null);
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de la mise à jour de la réservation.');
    }
};



const handleCloseModal = () => {
  setEditReservation(null); // Remettre editReservation à null
};

  

//Je retourne un tableau avec les réservations
    return (
        <div className='reservationList'> 
            <h2 className="resaTitle">Liste des réservations :</h2>
            {deleteSuccess && <div className="success-message">La réservation a été supprimée avec succès.</div>}
            {updateSuccess && <div className="success-message">La réservation a été modifiée avec succès.</div>}
            {editReservation && (
                <ReservationFormModal
                reservation={editReservation}
                onUpdate={handleUpdateReservation}
                onClose={handleCloseModal} 
                />
            
            )}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date commande</th>
                        <th>Tickets</th>
                        <th>Mail</th>
                        <th>Date visite</th>
                        <th>Créneau</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {reservations
                .sort((a, b) => new Date(b.dateResa) - new Date(a.dateResa))
                .map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.nom}</td>
                            <td>{reservation.prenom}</td>
                            <td>{new Date(reservation.dateResa).toLocaleDateString('fr-FR')}</td>
                            <td>{reservation.tickets}</td>
                            <td>{reservation.mail}</td>
                            <td>{new Date(reservation.date).toLocaleDateString('fr-FR')}</td>
                            <td>{reservation.horaire}</td>
                            <td>
                                <UpdateReservationButton
                                    reservation={reservation}
                                    onEdit={() => handleEditReservation(reservation)}
                                    onUpdate={(event) => handleUpdateReservation(event, reservation.id)}

                                />
                              
                                <DeleteReservationButton
                                    reservationId={reservation.id}
                                    onDelete={() => handleDeleteReservation(reservation.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReservationList;
