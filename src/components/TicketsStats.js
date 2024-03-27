import React, { useState, useEffect } from 'react';

export const TicketSales = () => {
    const [totalTickets, setTotalTickets] = useState(0);

    useEffect(() => {
        const fetchTotalTickets = async () => {
            try {
                const response = await fetch('https://api-expo.esprit-vigee.com/index.php/reservation');
                if (!response.ok) {
                    throw new Error('Failed to fetch reservations data');
                }
                const reservationsData = await response.json();

                // Obtenez la date de début de la semaine actuelle (lundi)
                const today = new Date();
                const startOfWeek = new Date(today);
                startOfWeek.setDate(today.getDate() - today.getDay());

                // Obtenez la date de fin de la semaine actuelle (dimanche)
                const endOfWeek = new Date(today);
                endOfWeek.setDate(today.getDate() + (6 - today.getDay()));

                // Filtrer les réservations pour obtenir celles de la semaine actuelle
                const reservationsOfWeek = reservationsData.filter(reservation => {
                    const reservationDate = new Date(reservation.dateResa);
                    return reservationDate >= startOfWeek && reservationDate <= endOfWeek;
                });

                // Calculer le total des tickets vendus cette semaine
                const total = reservationsOfWeek.reduce((accumulator, reservation) => {
                    return accumulator + parseInt(reservation.tickets);
                }, 0);

                // Mettre à jour le total des tickets vendus dans le state
                setTotalTickets(total);
            } catch (error) {
                console.error('Error fetching total tickets:', error);
            }
        };

        fetchTotalTickets();
        // Mettez à jour le total des tickets chaque semaine
        const interval = setInterval(fetchTotalTickets, 7 * 24 * 60 * 60 * 1000); // Mettre à jour toutes les semaines
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='tickets'>
            <h3 className='numberTickets'>{totalTickets}</h3>
            <p className='legendTickets'>Tickets achetés</p>
        </div>
    );
};

export default TicketSales;
