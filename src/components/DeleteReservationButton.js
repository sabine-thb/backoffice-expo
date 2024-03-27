import React from 'react';

export const DeleteReservationButton = ({ reservationId, onDelete }) => {
  const handleDelete = async () => {
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer la réservation ?");
    if (isConfirmed) {
      try {
        await fetch(
          `https://api-expo.esprit-vigee.com/index.php/reservation/${reservationId}`,
          {
            method: 'DELETE',
          },
        );
        onDelete();
      } catch {
        console.error('Erreur lors de la suppression de la réservation');
      }
    }
  };

  return <button className="delete" onClick={handleDelete}>Supprimer</button>;
};
