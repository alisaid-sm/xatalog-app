import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import ChangeTitle from '../component/ChangeTitle/ChangeTitle';
import axios from 'axios';
import config from '../config';

const Edit = ({match}) => {
    const [form, setForm] = useState({});
    const [alert, setAlert] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${config.api_url}/product/${match.params.id}`, form);
            setAlert({ message: 'Success', type: 'success' });
        } catch (error) {
            setAlert({ message: error.response.data.message, type: 'danger' });
        }
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    ChangeTitle({title:'Edit - Xatalog'})
    useEffect(() => {
        axios.get(`${config.api_url}/product/${match.params.id}`)
        .then((res) => {
            setForm(res.data.data)
        })
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
                defaultValue={form.name}
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
                defaultValue={form.description}
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

export default Edit