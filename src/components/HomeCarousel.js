import Carousel from 'react-bootstrap/Carousel';

//returns carousel component and renders in Home
function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={500}>
        <img style={{width:'100%'}} src="https://www.artgalleryofhamilton.com/wp-content/uploads/2022/07/Morrisseau-Collection-Update-Magazine-Header.png" alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%'}} src="https://www.visitthunderbay.com/en/see-and-do/resources/Arts-History-and-Culture.JPG" alt="img"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;