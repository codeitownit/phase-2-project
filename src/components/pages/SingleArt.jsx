import React from 'react'
import {useParams} from 'react-router-dom';

function SingleArt({art, iiif_url}) {
  const {artId} = useParams();
  
  const clickedArt = art.find((item)=>item.id === artId);

  console.log(typeof artId);
 
  return (
    <div>
      <img src={iiif_url + clickedArt.image_id + "/full/843,/0/default.jpg"} alt="art" />
      <p>{clickedArt.title}</p>
    </div>
  )
}


export default SingleArt