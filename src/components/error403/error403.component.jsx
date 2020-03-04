import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom';

const Error403 = () => {
    const history = useHistory();
    return (
    <div>
        <Container>
            <h2>You are not authorized to enter this page</h2>
            <h3>Please Login to continue</h3>
            <h3>Error 403</h3>
            <Button onClick={ () => history.push('/login') }>
                Login
            </Button>
        </Container>
    </div>
    )
}

export default Error403;