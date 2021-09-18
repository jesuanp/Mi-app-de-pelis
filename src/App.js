import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import Favoritos from './components/Favoritos'
import Detalles from './components/Detalles.jsx'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/app">
        <Cards />
      </Route>
      <Route exact path="/app/favoritos">
        <Favoritos />
      </Route>
      <Route exact path="/app/detalles/:id">
        <Detalles/>
      </Route>
    </div>
  );
}

export default App;
