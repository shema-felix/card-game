import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Pokes from './components/Pokes';

function App() {

  const [pokeList, setPokeList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(()=> {
    (async function fetchApi() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const { results } = await response.json();
      setPokeList(results)
    })()
  }, [])



  return (
    <div className="App">
     <Pokes pokeList={pokeList} />
    </div>
  );
}

export default App;
