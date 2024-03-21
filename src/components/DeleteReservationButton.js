import React from 'react';

export const DeleteReservationButton = ({ reservationId, onDelete }) => {
    const handleClick = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")) {
            onDelete(reservationId);
        }
    };

    return (
        <button className="delete" onClick={handleClick}>Supprimer</button>
    );
};