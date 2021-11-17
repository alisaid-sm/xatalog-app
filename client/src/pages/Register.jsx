import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import config from '../config';

const Register = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({email: null, password: null, username: null});
    const [alert, setAlert] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.api_url}/register`, form);
            setAlert({ message: 'Success', type: 'success' });
        } catch (error) {
            setAlert({ message: error.response.data.message, type: 'danger' });
        }
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    useEffect(() => {
		dispatch({ type: "TOGGLE_NAV" })
		return () => {
			dispatch({ type: "TOGGLE_NAV" })
		}
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
                <Label for="Email">
                Email
                </Label>
                <Input
                id="Email"
                name="email"
                placeholder="email"
                type="email"
                required
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Username">
                Username
                </Label>
                <Input
                id="Username"
                name="username"
                placeholder="username"
                type="text"
                required
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="assword">
                Password
                </Label>
                <Input
                id="assword"
                name="password"
                placeholder="password"
                type="password"
                required
                onChange={handleChange}
                />
            </FormGroup>
            <Button>
                Register
            </Button>
            </Form>
            <p className="text-center mt-4"> already have an account? <Link to="/login" >Login</Link></p>
            </div>
        </Fragment>
    )
}

export default Register