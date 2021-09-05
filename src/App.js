import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/">
        <Cards />
      </Route>
      <Route exact path="/Favoritos">
        Favoritos
      </Route>
    </div>
  );
}

export default App;
