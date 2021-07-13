import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './pages/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './pages/ItemDetailContainer/ItemDetailContainer'

export const App = ()=> {
  return (
    <Router>
      <main>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer/>
        </Route>
        <Route exact path='/category/:id'>
          <ItemListContainer/>
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
      </main>
    </Router>
  );
}

