import React, {useState, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Home() {
  const[exhibitions, setExibitions]=useState([])
  const[collection, setCollecion]=useState([])

  const iiif_url = "https://www.artic.edu/iiif/2/";


  const navigate = useNavigate();


  useEffect(() =>{
    fetch("https://api.artic.edu/api/v1/exhibitions?limit=2")
    .then(response=>response.json())
    .then(data=>setExibitions(data.data))
  })
  useEffect(() =>{
    fetch("https://api.artic.edu/api/v1/artworks?style_ids=Impressionism?limit=16")
    .then(response=>response.json())
    .then(data=>setCollecion(data.data))
  })
  return (
    <>
    <div className='first-section'>
        <HomeCarousel />
        <hr/>
        <p>Explore thousands of 
            artworks in the museum’s collection—<br/>
            from our renowned icons to lesser-known works from every 
            corner of the globe</p>

    </div>

    <div className='second-section'>
        <Container>
        <div style={{ padding:' 0.5rem 16rem '}}>
    <h1> Current Exhibitions</h1>
    </div>
    <hr />

        <Row>
            <CardGroup>
    {exhibitions.map((exhibition)=>(
       <Col xs={6} md={6}>
       <Card style={{ width: '40rem', marginBottom:'100px'}}>
         <Card.Img style={{width:'40rem'}}svariant="top" src={exhibition.image_url===null?"https://artic-web.imgix.net/66a14116-edb1-4785-a1fd-6ca11ec3f009/gm_390686EX1_Original_Image10_ClaudelImageBank-Press300ppi%2C3000px%2CsRGB%2CJPEG.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C279%2C1840%2C1033":exhibition.image_url} alt="image" />
         <h3>{exhibition.title}</h3>
         <small>{exhibition.timestamp}</small>
       </Card>
     </Col>
   ))}
    </CardGroup>
  </Row>
</Container>
     </div>
     <div>
     <Container>
        <div style={{ display:'flex', justifyContent:'space-between'}}>
    <h2>Artworks</h2>
    <Link to="/artworks">Explore the collection <span aria-hidden="true">&nbsp;&nbsp;›</span></Link>
    </div>
    <hr id='artworks' />
            <Row>
                <CardGroup>
        {collection.map((item) => (
           <Col onClick={()=>navigate(`/artworks/${item.id}`)} key={item.id} xs={6} md={3}>
           <Card className="bot-card"style={{ width: '15rem', margin:'0'}}>
             <Card.Img variant="top" src={iiif_url + item.image_id + "/full/843,/0/default.jpg"} alt="image" />
             <Card.Body>
               <Card.Title>{item.title}</Card.Title>
               <Card.Text>
                {item.artist_display}
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

export default Home
