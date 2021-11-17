import React from "react";
import {Row, Col, Card, CardTitle, CardText, Button} from "reactstrap";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="p-3">
            <Row>
                <Col sm="3" className="mb-2">
                    <Card body>
                    <CardTitle tag="h5">
                        Name product
                    </CardTitle>
                    <CardText>
                        Description product
                    </CardText>
                    <Button size="sm" color="warning" className="mb-2">
                        <Link style={{textDecoration: 'none', color: 'unset'}} className="w-100 d-block" to="/edit/1" >Edit</Link>
                    </Button>
                    <Button size="sm" color="danger">
                        Delete
                    </Button>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card body>
                    <CardTitle tag="h5">
                        Name product
                    </CardTitle>
                    <CardText>
                        Description product
                    </CardText>
                    <Button size="sm" color="warning" className="mb-2">
                        <Link style={{textDecoration: 'none', color: 'unset'}} className="w-100 d-block" to="/edit/1" >Edit</Link>
                    </Button>
                    <Button size="sm" color="danger">
                        Delete
                    </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;