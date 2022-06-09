import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'



const CurbMounted = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>Curb-Mounted Skylight Calculator</Card.Title>
                        </Card.Header>
                        <Card.Body>
                       
                            <Card.Subtitle>Curb-Mounted Replacement using outside curb dimensions</Card.Subtitle>
                            <Card.Text>
                                <div>
                                    To use this calculator, measure the outside curb, including flashing of the skylight curb on the roof as shown below. 
                                </div>
                            <div>
                                Width in Inches
                            </div>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>

                            <div>
                                Width in Inches 
                            </div>
                            <DropdownButton
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </DropdownButton>

                                <Button as="input" type="submit" value="Submit" />{' '}

                                <div>
                                    Velux Model: 
                                </div>
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Img variant="bottom" src="holder.js/100px180" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CurbMounted; 