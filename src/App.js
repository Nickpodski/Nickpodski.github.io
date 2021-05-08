import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
// import NoMatch from "./pages/NoMatch";
import ParralaxContainer from "./components/ParralaxContainer";


function App() {
  return (
    <Router>
      <div>
        <div>
        <ParralaxContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
            </Switch>
        <ParralaxContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
