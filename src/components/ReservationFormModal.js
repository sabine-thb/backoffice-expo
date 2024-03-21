// ReservationFormModal.js
import React, { useState } from 'react';

export const ReservationFormModal = ({ reservation, onUpdate, onClose}) => {
    
    const [formData, setFormData] = useState({
        nom: reservation.nom,
        prenom: reservation.prenom,
        tickets: reservation.tickets,
        mail: reservation.mail,
        date: reservation.date,
        horaire: reservation.horaire
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez l'identifiant de la réservation à l'objet formData
         // Récupérer les valeurs du formulaire
        const nom = e.target.nom.value;
        const prenom = e.target.prenom.value;
        const tickets = e.target.tickets.value;
        const mail = e.target.mail.value;
        const date = e.target.date.value;
        const horaire = e.target.horaire.value;

        // Construire l'objet updatedReservation avec les valeurs du formulaire
        const updatedReservation = { 
            id: reservation.id, // Assurez-vous d'avoir l'identifiant de la réservation
            nom,
            prenom,
            tickets,
            mail,
            date,
            horaire
        };
        // Envoyer les nouvelles données à l'API pour mettre à jour la réservation
        onUpdate(updatedReservation);
        
    };

    
    return (
        <div className="modal">
            <button className="close-button" onClick={onClose}>X</button> 

            <div className="modal-content">
                <h2>Modifier la réservation</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom:
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                    </label>
                    <label>
                        Prénom:
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                    </label>
                    <label>
                        Nombre de tickets :
                        <input type="number" name="tickets" value={formData.tickets} onChange={handleChange} />
                    </label>
                    <label>
                        Mail:
                        <input type="text" name="mail" value={formData.mail} onChange={handleChange} />
                    </label>
                    <label>
                        Date:
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    </label>
                    <label>
                        Créneau:
                        <input
                            type="datetime"
                            name="horaire"
                            value={formData.horaire}
                            onChange={handleChange}
                            min={10}
                            max={18}
                            step={1}
                        />
                    </label>
                    {/* Autres champs de formulaire pour les données de la réservation */}
                    <button type="submit">Enregistrer les modifications</button>
                </form>
            </div>
        </div>
    );
};


