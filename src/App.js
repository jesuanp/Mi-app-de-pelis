import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Favoritos">
        Favoritos
      </Route>
    </div>
  );
}

export default App;
