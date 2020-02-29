import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Error404 = () => (
    <div>
        <Container>
            <h2>Page Not Found</h2>
            <h3>Error 404</h3>
            <Button>
                Go Back
            </Button>
        </Container>
    </div>
)

export default Error404;