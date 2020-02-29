import React from 'react';
import './App.css';
import Login from '../login/login.component';
import Error404 from '../error404/error404.component';
import Error500 from '../error500/error500.component';

function App() {
  return (
    <div className="App">
      <Login />
      <Error404 />
      <Error500 />
    </div>
  );
}

export default App;
