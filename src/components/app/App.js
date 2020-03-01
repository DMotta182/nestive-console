import React from 'react';
import './App.css';
import Login from '../login/login.component';
import Error404 from '../error404/error404.component';
import Error500 from '../error500/error500.component';
import Container from 'react-bootstrap/Container'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
            {/* This is for accesing the components for testing purposes*/}
            <BrowserRouter>
              <Switch>
                <Route exact path='/login'>
                  <Login />
                </Route>
                <Route exact path='/404'>
                  <Error404 />
                </Route>
                <Route exact path='/500'>
                  <Error500 />
                </Route>
                <Route exact path='/main'>
                  <div>
                    Logged In and ready
                  </div>
                </Route>
              </Switch>
            </BrowserRouter>
            
        </Container>    
      </div>
    );
  }
}

export default App;
