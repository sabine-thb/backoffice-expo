import React, { useState } from 'react';


export function Login() {
  const [login, setLogin] = useState('');
  const [mdp, setMdp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('login', login);
      formData.append('mdp', mdp);
  
      const response = await fetch('https://api-expo.esprit-vigee.com/index.php/connexion', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        // Si la réponse n'est pas réussie, afficher une erreur
        const data = await response.json();
        setError(data.error || 'Une erreur s\'est produite lors de la connexion.');
        return;
      }
  
      // Si la réponse est réussie, rediriger l'utilisateur ou effectuer d'autres actions
      window.location.href = '/Backoffice'; // Rediriger l'utilisateur vers le backoffice
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Une erreur s\'est produite lors de la connexion.');
    }
  };
  
  return (
    <div className='connexion'>
      <h2>Connexion :</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="login">Login :</label>
          <input id="login" type="text" value={login} onChange={(e) => setLogin(e.target.value)} required />
        </p>
        <p>
          <label htmlFor="mdp">Mot de passe :</label>
          <input id="mdp" type="password" value={mdp} onChange={(e) => setMdp(e.target.value)} required />
        </p>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className='submit'>Se connecter</button>
      </form>
    </div>
  );
}

