import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function SingleArt({art, iiif_url}) {
  const {artId} = useParams();
  const[clickedArt, setClickedArt]=useState([]);
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();
// const explore = art.filter((item)=>(item.id!==artId))
// console.log(explore)
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
    <div className='clicked-details'>
    <div className="img-container">
    <img className='clicked-img' src={iiif_url + clickedArt.image_id + "/full/843,/0/default.jpg"} alt="art" />
    </div>
    <hr/>
    <h1 >{clickedArt.title}</h1>
    <br/>
    <small>{clickedArt.artist_display}</small>
    <br/>
    <div style={{padding:'0 20rem', marginTop:'20px'}}>{clickedArt.description}</div>
    <hr/>
    <div >
      <p className='specs'><b>Artist</b> &nbsp; {clickedArt.artist_title===null?"unknown":clickedArt.artist_title}</p>
      <hr/>
      <p className='specs'><b>Place</b>  &nbsp; {clickedArt.place_of_origin}</p>
      <hr/>
      <p className='specs'><b>Date </b> &nbsp;  {clickedArt.date_display}</p>
      <hr/>
      <p className='specs'><b>Medium </b> &nbsp;  {clickedArt.medium_display}</p>
      <hr/>
      <p className='specs'><b>Credit Line </b>&nbsp; {clickedArt.credit_line}</p>
      <hr/>
      <p className='specs'><b>Exhibition History </b>&nbsp; {clickedArt.exhibition_history}</p>

    </div>


    </div>
    <hr/>
    <div style={{textAlign:'left', padding:' 0.5rem 16rem '}}>
    <h4>Explore further</h4>
    </div>
    <hr />
    <div>
        <Container>
            <Row>
                <CardGroup>
        {art.map((singleArt) => (
           <Col onClick={()=>navigate(`/artworks/${singleArt.id}`)} key={singleArt.id} xs={6} md={3}>
           <Card className="bot-card"style={{ width: '15rem', margin:'0'}}>
             <Card.Img variant="top" src={iiif_url + singleArt.image_id + "/full/843,/0/default.jpg"} alt="image" />
             <Card.Body>
               <Card.Title>{singleArt.title}</Card.Title>
               <Card.Text>
                {singleArt.artist_display}
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
       ))}
        </CardGroup>
      </Row>
    </Container>
    </div>
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