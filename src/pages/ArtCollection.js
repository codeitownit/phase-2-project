import React from 'react'
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function ArtCollection({art, iiif_url}) {
  const navigate = useNavigate();

  
  return (

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
  )
}

export default ArtCollection