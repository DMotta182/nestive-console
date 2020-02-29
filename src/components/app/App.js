import React from 'react';
import './App.css';
import Login from '../login/login.component';
import Error404 from '../error404/error404.component';
import Error500 from '../error500/error500.component';
import Container from 'react-bootstrap/Container'
//import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  render(){
    return (
      <div className="App">
        <Container className='border mt-3 w-md-50 w-sm-100'>
            {/*Function to display the Login, it checks if the currentUser is null*/}
            {
              () => {
                if (this.state.currentUser == null) {
                  return (
                    <Login />
                  )
                } else 
                  {
                    /* Here goes the main console component */            
                  }
              }
            }
            <Login />
            <Error404 />
            <Error500 />
        </Container>    
      </div>
    );
  }
}

export default App;
