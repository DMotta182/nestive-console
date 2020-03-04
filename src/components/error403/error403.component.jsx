import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Error403 = () => (
    <div>
        <Container>
            <h2>You are not authorized to enter this page</h2>
            <h3>Please Login to continue</h3>
            <h3>Error 403</h3>
            <Button>
                Login
            </Button>
        </Container>
    </div>
)

export default Error403;