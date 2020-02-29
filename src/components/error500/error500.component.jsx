import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Error500 = () => (
    <div>
        <Container>
            <h1>Server Error</h1>
            <h2>Error 500</h2>
            <Button>
                Go Back
            </Button>
        </Container>
    </div>
)

export default Error500;