export function Characters({ character }) {
    //console.log(character);
    if (!character || !character.location) {
        // Manejar el caso cuando `character` o `character.location` sean `undefined`
        return null;
      }
    return (
        <div className='card'>
            <h1>{character.name}</h1>
            <img src={character.image} alt="" />
            <div className="card-description">
                <p><strong>Location:</strong> {character.location.name}</p>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Species:</strong> {character.species}</p>
            </div>
            <button className="card-button">More</button>
        </div>
    );
}