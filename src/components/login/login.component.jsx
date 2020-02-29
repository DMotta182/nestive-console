import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Login = () => (
    <div>
        <Container className='mt-5 w-md-50 w-sm-100 border'>
            <h1 className='mt-4'>Console Login</h1>
            <Form ClassName='my-3'>
                <Form.Group className='mt-5' controlId="formBasicEmail">
                    <Form.Label ClassName='text-left'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button className='mb-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </div>
)

export default Login