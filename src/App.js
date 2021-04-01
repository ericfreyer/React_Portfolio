import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home/home";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import './styles.css'

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
    
  );
}

export default App;
