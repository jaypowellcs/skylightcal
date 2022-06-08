
import ListGroup  from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Acrylic from '../../app/assets/images/acrylic.jpg'
import Glass from '../../app/assets/images/glass.jpg'

const Comparsion = () => {
    return (
        <Container>
        <Row>
            <h3>Two main types of Skylights</h3>
        </Row>
        
        <Row>
            <Col md={8}>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Acrylic} />
                <Card.Body>
                    <Card.Title>Acrylic Skylights</Card.Title>
                    <ListGroup>
                <ListGroup.Item>Acrylic Skylights Advantages</ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Cost
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Bronze and white tints will reduce the amount of heat.
                </ListGroup.Item>
                
            </ListGroup>
            
            

                <ListGroup>
                <ListGroup.Item>Acrylic Skylights Disadvantages</ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Less effective thermal insulators than glass models
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Distort view 
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
            </ListGroup>
                </Card.Body>
                </Card>
            </Col>

            <Col>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={Glass} />
                <Card.Body>
                    <Card.Title>Glass Skylights</Card.Title>
                    <Col>

            <ListGroup>
                <ListGroup.Item>Glass Skylights Advantages</ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    More effective thermal insulators than acrylic models
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Better view 
                </ListGroup.Item>
            </ListGroup>

            </Col>

            <Col>

            <ListGroup>
                <ListGroup.Item>Glass SkylightsDisadvantages</ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Less effective thermal insulators than glass models
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
                
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
            </ListGroup>
            
            </Col>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default Comparsion; 