import React, { useState, useEffect } from 'react';
import './App.css';
import Login from '../login/login.component';
import Error404 from '../error404/error404.component';
import Error500 from '../error500/error500.component';
import Error403 from '../error403/error403.component';
import Container from 'react-bootstrap/Container'
import { Switch, Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import auth from '../../utils/auth'
import ProtectedRoute from '../protectedRoute/protectedRoute.component';
import Index from '../index/index.component'


const App = () => {  

  const history = useHistory();
  const location = useLocation()
  const [logged, setLogged] = useState(false)
  const [currentUser, setCurrentUser] = useState('') 
  
   useEffect(() => {
    console.log(location)
    console.log(history)
    if ((!auth.isAuthenticated) && (location.pathname !== '/login' )) {
      history.push('/login');
    }
  }
  ) 

  return (
    <div className="App">
      <Container className='border mt-3 w-md-50 w-sm-100'>
            <Switch>
              <Route exact path='/login'>
                <Login logged={logged} setLogged={setLogged} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              </Route>
              <Route exact path='/404'>
                <Error404 />
              </Route>
              <Route exact path='/500'>
                <Error500 />
              </Route>
              <Route exact path='/403'>
                <Error403 />
              </Route>
              <ProtectedRoute exact path='/index' component={Index}/>
            </Switch>
      </Container>    
    </div>
  )
}

export default App;
