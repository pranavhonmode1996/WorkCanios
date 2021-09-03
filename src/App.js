import React from "react";
import './styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRouters from "./routes/index";
import { history } from "./store";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route component={AppRouters} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
