import logo from './logo.svg';
import './App.css';
import { Characters } from './Character';
import { useEffect, useState } from 'react';
//import { useState } from 'react';
function App() {

  const [characters, setCharacters] = useState([]);

  function getCharacters(pageNumber=1) {
    const res = fetch("https://rickandmortyapi.com/api/character/?page=19")
      .then(response => response.json())
      .then(({ results, info }) => { return { results } })
      .catch(() => { return [] })
    return res;
    //console.log(res);
  }

  async function consoleCharacters() {
    /*const resp = await getCharacters();
    //console.log(resp);
    setCharacters(resp);*/
    const resp = await getCharacters(); // Esperar a que se resuelva la promesa
  if (resp.results) {
    setCharacters(resp.results);
  } else {
    setCharacters([]);
  }
  }
  //consoleCharacters();
  //getCharacters();

  useEffect(() => {
    consoleCharacters();
  }, []);

  return (
    <div className="App">
      <header className='Header'>
        <img className='Logo' src="/logo.png" alt="" />
        <h1 className='Terms'>Terms + Conditions</h1>
      </header>
      <div className='Hero'>
        <h1>Rick and Morty</h1>
        <h2>See all the caracteres.
          And more.
        </h2>
        <Characters />
      </div>
      <main>
        <h1>Character List</h1>
        <hr />

        {
          characters && characters.map(character => (
          <Characters character={character}
          />))
        }
      </main>
      <footer>


      </footer>
    </div>
  );
}

export default App;
