import './App.css';
import React,{useState, useEffect} from 'react';
import ArtCollection from './components/ArtCollection';

function App() {
  const[art, setArt]=useState([])

  useEffect(() =>{
    fetch("https://api.artic.edu/api/v1/artworks?limit=60")
    .then(response =>response.json())
    .then(data=>setArt(data.data))
  })
  return (
    <div className="App">
      <ArtCollection art={art} />
    </div>
  );
}

export default App;
