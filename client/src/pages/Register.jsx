import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();

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
            <Form>
            <FormGroup>
                <Label for="Email">
                Email
                </Label>
                <Input
                id="Email"
                name="email"
                placeholder="test@gmail.com"
                type="email"
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