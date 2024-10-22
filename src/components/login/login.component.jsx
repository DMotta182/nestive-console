import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import firebase from '../../utils/firebase.utils';
import { useHistory } from 'react-router-dom';
import auth from '../../utils/auth'

const Login = (props) => { 
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div>
        <Container>
            <h1 className='mt-4'>Console Login</h1>
            <Form className='my-3'>
                <Form.Group className='mt-5' controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='mb-3' variant="primary" onClick={() => {auth.login( email, password, () => (history.push('/index')))}} >
                    Submit
                </Button>
            </Form>
        </Container>
    </div>
    );
}

export default Login