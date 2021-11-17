import {Row, Col, Card, CardTitle, CardText, Button} from "reactstrap";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Alert from "../component/Alert/Alert";
import axios from 'axios';
import config from '../config';
import moment from "moment";

const Home = () => {
    const [data, setData] = useState([]);
    const [isActiveAlert, setIsActiveAlert] = useState(false);
    const [id, setID] = useState('');
    const getData = () => {
        axios.get(`${config.api_url}/product`)
        .then((res) => {
            setData(res.data.data);
        })
    }
    const alertToggle = () => {
        setIsActiveAlert(!isActiveAlert);
    }
    const storeID = (id) => {
        setID(id);
        alertToggle();
    }
    const handleDelete = () => {
        axios.delete(`${config.api_url}/product/${id}`)
        .then((res) => {
            getData();
            alertToggle();
        })
    }
    useEffect(() => {
        getData();
		// eslint-disable-next-line 
	}, [])
    return (
        <div className="p-3">
            {isActiveAlert?<Alert close={alertToggle} onConfirm={handleDelete} />:null}
            <Row>
                {
                    data.map(obj => {
                        return (
                            <Col sm="3" className="mb-2">
                                <Card body>
                                <CardTitle tag="h5">
                                    {obj.name}
                                </CardTitle>
                                <CardText>
                                    {obj.description}
                                    <p>Last change: {moment(obj.updatedAt).format('LL')}</p>
                                </CardText>
                                <Button size="sm" color="warning" className="mb-2">
                                    <Link style={{textDecoration: 'none', color: 'unset'}} className="w-100 d-block" to={`/edit/${obj.id}`} >Edit</Link>
                                </Button>
                                <Button size="sm" color="danger" onClick={() => storeID(obj.id)} >
                                    Delete
                                </Button>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Home;