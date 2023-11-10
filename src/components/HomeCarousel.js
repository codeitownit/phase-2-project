import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img style={{width:'100%'}} src="https://www.artgalleryofhamilton.com/wp-content/uploads/2022/07/Morrisseau-Collection-Update-Magazine-Header.png" alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%'}} src="https://www.visitthunderbay.com/en/see-and-do/resources/Arts-History-and-Culture.JPG" alt="img"/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;