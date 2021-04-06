import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home/home";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact";
import "./styles.css";
import background from "./pages/Home/images/background.jpg";
import Footer from './components/footer'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div style={{ backgroundImage: `url(${background}`, backgroundRepeat: 'repeat' }}>
      
        <div>
          <NavTabs />

          <Route exact path="" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />

        </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
