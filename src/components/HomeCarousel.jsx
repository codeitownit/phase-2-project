import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src="/" alt="img"/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="/" alt="img"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/" alt="img"/>
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