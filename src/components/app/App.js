import React from 'react';
import './App.css';
import Login from '../login/login.component';
import Error404 from '../error404/error404.component';

function App() {
  return (
    <div className="App">
      <Login />
      <Error404 />
    </div>
  );
}

export default App;
