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
                gjj
               </Card.Text>
             </Card.Body>
             {/* displays icons for health, damage and armor */}
             <Card.Footer className='card-footer'>
               <small className="text-muted"><i className="fa-solid fa-heart-pulse"></i></small>
               <small className="text-muted"><i className="fa-solid fa-bolt"></i></small>
               <small className="text-muted"><i className="fa-solid fa-shield-halved"></i></small>
             </Card.Footer>
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