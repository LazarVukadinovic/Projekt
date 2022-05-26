import {Container, Row, Col} from 'react-bootstrap'
import MyCarousel from '../CarouselComponent';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mt-3">Pocetna strana</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='mt-3 text-center'>Ovo je veb aplikacija na kojoj se nalaze ToDo app i Kalkulator</p>
                    </Col>
                </Row>
                <Row>
                    <MyCarousel />
                </Row>
            </Container>
        </>
    );
  };
  
  export default Home;