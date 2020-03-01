import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Error500 = () => (
    <div>
        <Container>
            <h2>Server Error</h2>
            <h3>Error 500</h3>
            <Button>
                Go Back
            </Button>
        </Container>
    </div>
)

export default Error500;