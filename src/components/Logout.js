import React, { useState } from 'react';

export function Logout({ login, mdp }) {
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    const isConfirmed = window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?");


    try {

      const response = await fetch('https://api-expo.esprit-vigee.com/index.php/deconnexion', {
        method: 'POST',
      });

      if (!response.ok) {
        // Si la réponse n'est pas réussie, afficher une erreur
        const data = await response.json();
        setError(data.error || 'Une erreur s\'est produite lors de la déconnexion.');
        return;
      }

      // Rediriger l'utilisateur vers la page de connexion après la déconnexion réussie
      window.location.href = '/login'; 
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      setError('Une erreur s\'est produite lors de la déconnexion.');
    }
  };

  const handleLogout = () => {
    handleSubmit();
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogout} className=' deco submit'>Déconnexion</button>
    </div>
  );
}
