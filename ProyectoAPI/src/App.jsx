import { useEffect, useState } from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching characters:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rick and Morty Characters</h1>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <div className="character-grid">
          {characters.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
