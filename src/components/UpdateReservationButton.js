import React from 'react';


export const UpdateReservationButton = ({ onEdit}) => {
    const handleClick = (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire
        onEdit(); // Appeler la fonction onEdit pour mettre à jour la réservation en cours de modification
        // onUpdate(event); // Appeler la fonction onUpdate pour traiter la mise à jour de la réservation
    };

    return (
        <button onClick={handleClick}>Modifier</button>
    );
};


