import React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
      <Router basename={`/${process.env.PUBLIC_URL}`}>
        <div>
          <NavTabs />

          <Link to="" component={Home} />
          <Link to="/portfolio" component={Portfolio} />
          <Link to="/contact" component={Contact} />

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
