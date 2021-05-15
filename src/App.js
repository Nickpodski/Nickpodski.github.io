import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./components/Background";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Background />
          <Switch>
            <>
            <Route exact path={["/", "/home", ""]}>
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            </>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
