import React from "react";

import { Route, Switch } from "react-router-dom";

import { Main, Characters, Planets } from "./pages";

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/characters" component={Characters} />
        <Route path="/planets" component={Planets} />
      </Switch>
    </main>
  );
};

export default App;
