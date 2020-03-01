import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import firebase from '../../utils/firebase.utils';

const Login = (props) => { 

    //const { classes } = props

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
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button className='mb-3' variant="primary" onClick={login}>
                    Submit
                </Button>
            </Form>
        </Container>
    </div>
    );

    async function login() {
        try {
            console.log('email', email)
            console.log('password', password)
            await firebase.login(email, password)
            console.log('Logged in')
        } catch (error) {
            alert(error.message)
        }
    }
}

export default Login