// ReservationFormModal.js
import React, { useState } from 'react';

export const ReservationFormModal = ({ reservation, onUpdate, onClose}) => {
    
    const [formData, setFormData] = useState({
        nom: reservation.nom,
        prenom: reservation.prenom,
        dateResa: reservation.dateResa,
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
        const dateResa = e.target.dateResa.value;
        const tickets = e.target.tickets.value;
        const mail = e.target.mail.value;
        const date = e.target.date.value;
        const horaire = e.target.horaire.value;

        // Construire l'objet updatedReservation avec les valeurs du formulaire
        const updatedReservation = { 
            id: reservation.id, // Assurez-vous d'avoir l'identifiant de la réservation
            nom,
            prenom,
            dateResa,
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
            
            <div className='backgroundPopup'></div>
            <div className="modal-content">              
                <div className="close-button" onClick={onClose}>X</div> 
                <h2 className="formTitle">Modifier la réservation</h2>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>Nom :</label>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Prénom :</label>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Date commande :</label>
                        <input type="date" name="dateResa" value={formData.dateResa} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Tickets :</label>
                        <input type="number" name="tickets" value={formData.tickets} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Mail :</label>
                        <input type="text" name="mail" value={formData.mail} onChange={handleChange} />
                    </p>
                    <p>
                        <label> Date visite :</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Créneau :</label>
                        <input
                            type="datetime"
                            name="horaire"
                            value={formData.horaire}
                            onChange={handleChange}
                            min={10}
                            max={18}
                            step={1}
                        />
                    </p>
                    
                    {/* Autres champs de formulaire pour les données de la réservation */}
                    <button type="submit" className="submit">Enregistrer les modifications</button>
                </form>
            </div>
        </div>
    );
};


