import React from 'react';

export const DeleteReservationButton = ({ reservationId, onDelete }) => {
    const handleClick = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")) {
            onDelete(reservationId);
        }
    };

    return (
        <button onClick={handleClick}>Supprimer Réservation</button>
    );
};