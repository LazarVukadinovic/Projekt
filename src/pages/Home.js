import {Container, Row, Col} from 'react-bootstrap'
import MyCarousel from '../components/CarouselComponent';
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
                    <MyCarousel 
                        img1="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" 
                        img2="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" 
                        img3="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" 
                    />
                </Row>
            </Container>
        </>
    );
  };
  
  export default Home;