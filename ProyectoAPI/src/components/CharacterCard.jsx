import './CharacterCard.css';

const CharacterCard = ({ character }) => {
return (
    <div className="card">
    <img src={character.image} alt={character.name} />
    <div className="card-content">
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
    </div>
    </div>
);
};

export default CharacterCard;
