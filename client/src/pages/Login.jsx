import { Form, FormGroup, Input, Label, Button, Alert } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginSuccess } from '../redux/actions/Auth';
import axios from 'axios';
import config from '../config';

const Login = (props) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({email: null, password: null});
    const [alert, setAlert] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${config.api_url}/login`, form)
        .then((res) => {
            dispatch(LoginSuccess(res.data.data.token));
            axios.defaults.headers.token = res.data.data.token;
            sessionStorage.setItem('token', res.data.data.token)
            props.history.push('/');
        })
        .catch((err) => {
            setAlert({ message: err.response.data.message, type: 'danger' });
        })
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
                Login
            </Button>
            </Form>
            <p className="text-center mt-4"> don't have an account yet? <Link to="/register" >Register</Link></p>
            </div>
        </Fragment>
    )
}

export default Login