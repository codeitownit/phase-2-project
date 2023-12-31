import './App.css';
import React,{useState, useEffect} from 'react';
import ArtCollection from './pageComponents/ArtCollection';
import NavBar from './components/NavBar';
import Home from './pageComponents/Home';
import SingleArt from './pageComponents/SingleArt';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';

function App() {
  const[art, setArt]=useState([])
  const [search, setSearch] = useState("")
  const iiif_url = "https://www.artic.edu/iiif/2/";

  useEffect(() =>{
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}&limit=60&fields=id,title,image_id,artist_display`)
    .then(response =>response.json())
    .then(data=>{
        setArt(data.data)
    })
  },[search])


  return (
    <div className="App">
      <Router>
      <NavBar art={art} setSearch={setSearch}/>
      <Routes>
        <Route path="/artworks" element={<ArtCollection art={art} iiif_url ={iiif_url} />} />
       <Route path="/artworks/:artId" element={<SingleArt art={art} iiif_url ={iiif_url}/>} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
