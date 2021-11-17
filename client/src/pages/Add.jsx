import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import ChangeTitle from '../component/ChangeTitle/ChangeTitle';
import axios from 'axios';
import config from '../config';

const Add = () => {
    const [form, setForm] = useState({name: null, description: null});
    const [alert, setAlert] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.api_url}/product`, form);
            setAlert({ message: 'Success', type: 'success' });
        } catch (error) {
            setAlert({ message: error.response.data.message, type: 'danger' });
        }
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    ChangeTitle({title:'Add - Xatalog'})
    useEffect(() => {
		// eslint-disable-next-line 
	}, [])
    return (
        <Fragment>
            <div style={{width: '50%', margin: '100px auto auto'}}>
            {!alert ? null :
                <Alert color={alert.type} toggle={() => setAlert(null)}>
                    {alert.message}
                </Alert>
            }
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="Name">
                Name
                </Label>
                <Input
                id="Name"
                name="name"
                placeholder="name"
                type="text"
                required
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Description">
                Description
                </Label>
                <Input
                id="Description"
                name="description"
                placeholder="description"
                type="text"
                onChange={handleChange}
                />
            </FormGroup>
            <Button>
                Submit
            </Button>
            </Form>
            </div>
        </Fragment>
    )
}

export default Add