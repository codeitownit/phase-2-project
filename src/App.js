import './App.css';
import React,{useState, useEffect} from 'react';
import ArtCollection from './components/ArtCollection';
import NavBar from './components/NavBar';

function App() {
  const[art, setArt]=useState([])
  const [search, setSearch] = useState("")
  useEffect(() =>{
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}&limit=60&fields=id,title,image_id`)
    .then(response =>response.json())
    .then(data=>{
        setArt(data.data)
    })
  },[search])


  return (
    <div className="App">
      <NavBar art={art} setSearch={setSearch}/>
      <ArtCollection art={art} />
    </div>
  );
}

export default App;
