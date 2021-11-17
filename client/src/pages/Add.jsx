import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Fragment, useEffect } from 'react';
import ChangeTitle from '../component/ChangeTitle/ChangeTitle';

const Add = () => {

    ChangeTitle({title:'Add - Xatalog'})
    useEffect(() => {
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
            <Button>
                Submit
            </Button>
            </Form>
            </div>
        </Fragment>
    )
}

export default Add