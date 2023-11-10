import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

function SingleArt({art, iiif_url}) {
  const {artId} = useParams();
  const[clickedArt, setClickedArt]=useState([]);
  const[loading, setLoading] = useState(false);

 useEffect(()=>{
  setLoading(true)
  fetch( `https://api.artic.edu/api/v1/artworks/${artId}`)
  .then(response => response.json())
  .then(data=>{
    setClickedArt(data.data)
    setLoading(false)
  })
 }, [artId]);

 const Loading = () =>{
  return(
    <>
    ...Loading
    </>
  )

 }
 const ShowArt = () =>{
  return(
    <>
    <img src={iiif_url + clickedArt.image_id + "/full/843,/0/default.jpg"} alt="art" />
      <p>{clickedArt.title}</p>
    
    </>
  )

 }
  return (
    <div>
      {loading ? <Loading /> : <ShowArt />}
    </div>
  )
}


export default SingleArt