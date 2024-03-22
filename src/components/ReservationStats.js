import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const ReservationStats = () => {
    const [reservationsData, setReservationsData] = useState([]);
    const chartRef = useRef(null); // Référence à l'instance du graphique

    useEffect(() => {
        fetchReservationsData();
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            updateChart(); // Actualiser le graphique avec les nouvelles données
        } else {
            createChart(); // Créer le graphique initial
        }
    }, [reservationsData]);

    const fetchReservationsData = async () => {
        try {
            const response = await fetch('https://expo-vigee.thibout.butmmi.o2switch.site/api-expo/index.php/reservation');
            if (!response.ok) {
                throw new Error('Failed to fetch reservations data');
            }
            const data = await response.json();
            setReservationsData(data);
        } catch (error) {
            console.error('Error fetching reservations data:', error);
        }
    };

    const getDayOfWeek = (dateString) => {
        const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const date = new Date(dateString);
        const localDayIndex = date.getDay(); // Obtenez l'indice du jour de la semaine en temps local
        return days[localDayIndex];
    };

    const getStartOfWeek = () => {
        const today = new Date();
        const dayIndex = today.getDay();
        const diff = today.getDate() - dayIndex + (dayIndex === 0 ? -6 : 1); // Déterminer le premier jour de la semaine (dimanche ou lundi)
        return new Date(today.getFullYear(), today.getMonth(), diff);
    };

    const getEndOfWeek = () => {
        const today = new Date();
        const dayIndex = today.getDay();
        const diff = today.getDate() + (dayIndex === 0 ? 0 : 7 - dayIndex); // Déterminer le dernier jour de la semaine (samedi ou dimanche)
        return new Date(today.getFullYear(), today.getMonth(), diff);
    };

    const startOfWeek = getStartOfWeek();
    const endOfWeek = getEndOfWeek();

    const filteredReservations = reservationsData.filter(reservation => {
        const reservationDate = new Date(reservation.dateResa);
        return reservationDate >= startOfWeek && reservationDate <= endOfWeek;
    });

    const reservationsByDay = filteredReservations.reduce((accumulator, reservation) => {
        const dayOfWeek = getDayOfWeek(reservation.dateResa);
        accumulator[dayOfWeek] = (accumulator[dayOfWeek] || 0) + 1;
        return accumulator;
    }, {});

    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

    const createChart = () => {
        const reservationsCount = daysOfWeek.map(day => reservationsByDay[day] || 0);
        const ctx = document.getElementById('myChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: daysOfWeek,
                datasets: [{
                    label: 'Réservations',
                    data: reservationsCount,
                    backgroundColor: 'rgba(219, 215, 196, 1)',
                    borderColor: 'rgba(100, 100, 100, 1)',
                    borderWidth: 3
                }]
            },
            options: {
                scales: {
                    y: {
                        grid: {
                            color: 'white' // Définir la couleur de la grille en blanc
                        },
                        beginAtZero: true,
                        ticks: {
                            color: 'white', // Définir la couleur des labels en blanc
                        },
                        stepSize: 1,
                        max: 20
                    },
                    x: {
                        grid: {
                            color: 'white' // Définir la couleur de la grille en blanc
                        },
                        type: 'category',
                        ticks: {
                            color: 'white', // Définir la couleur des labels en blanc
                        },
                        labels: daysOfWeek
                    }
                }
            }
        });
    };

    const updateChart = () => {
        const reservationsCount = daysOfWeek.map(day => reservationsByDay[day] || 0);
        chartRef.current.data.datasets[0].data = reservationsCount;
        chartRef.current.update();
    };

    return (
        <div className='statsResa'>
            <h2>Réservations effectuées cette semaine :</h2>
            <div className='chartContainer'>
                <canvas id="myChart" />
            </div>
        </div>
    );
};
