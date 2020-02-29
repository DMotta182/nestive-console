import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Error404 = () => (
    <div>
        <Container>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
            <Button>
                Go Back
            </Button>
        </Container>
    </div>
)

export default Error404;