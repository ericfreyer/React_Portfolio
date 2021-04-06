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
    
      <div style={{ backgroundImage: `url(${background}`, backgroundRepeat: 'repeat' }}>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavTabs />

          <Route exact path="" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />

        </div>
      
      <Footer />
      </Router>
    </div>
    
  );
}

export default App;
