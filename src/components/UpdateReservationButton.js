import React from 'react';

export const UpdateReservationButton = ({ onEdit}) => {
    const handleClick = (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        onEdit(); // Appeler la fonction onEdit pour mettre à jour la réservation en cours de modification
    };

    return (
        <button className="update"onClick={handleClick}>Modifier</button>
    );
};


