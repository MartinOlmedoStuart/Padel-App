import "../styles/Home.css";
import Carousel from 'react-bootstrap/Carousel';

function Home(){
    return(
     <>
        <div className="carousel"> 
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i2.wp.com/royalpadel.com/wp-content/uploads/2020/12/Untitled-design69.png?fit=2240%2C950&ssl=1"
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i2.wp.com/royalpadel.com/wp-content/uploads/2020/12/20214.png?fit=2240%2C950&ssl=1"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i0.wp.com/royalpadel.com/wp-content/uploads/2020/12/Untitled-design70.png?fit=2240%2C950&ssl=1"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        
</>
    )
}

export default Home;