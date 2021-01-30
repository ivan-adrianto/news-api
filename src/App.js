import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchNews from './components/SearchNews'
import NewsCategorized from './components/NewsCategorized'
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchNews />
        </Route>
        <Route path='/category/:id'>
          <NewsCategorized/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
