import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Fragment, useEffect, useState } from 'react';
import ChangeTitle from '../component/ChangeTitle/ChangeTitle';
import axios from 'axios';
import config from '../config';

const Profile = () => {
    const [profile, setProfile] = useState({});
    ChangeTitle({title:'Profile - Xatalog'})
    useEffect(() => {
        axios.get(`${config.api_url}/user`)
        .then((res) => {
            setProfile(res.data.data)
        })
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
                type="email"
                defaultValue={profile.email || null}
                readOnly
                />
            </FormGroup>
            <FormGroup>
                <Label for="Username">
                Username
                </Label>
                <Input
                id="Username"
                name="username"
                type="text"
                defaultValue={profile.username || null}
                readOnly
                />
            </FormGroup>
            </Form>
            </div>
        </Fragment>
    )
}

export default Profile